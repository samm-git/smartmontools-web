# SAT with UAS under Linux <a id="SATwithUASunderLinux"></a>


## Overview <a id="Overview"></a>

As mentioned on the [USB devices and smartmontools](usb.md) page, in certain situations the Linux "uas" driver disables SAT transfers, which prevents `smartmontools` (and other tools, e.g. `hdparm`) from communicating properly with the attached SATA device.  See related tickets for examples.

This is because the Linux kernel rejects SAT ATA pass-through commands for certain devices with broken pass-through support.  This list of devices affected depends on the kernel version, and may include
[all Seagate enclosures](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit?id=7fee72d5e8f1e7b8d8212e28291b1a0243ecf2f1),
[Initio INIC-3069](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit?id=bda13e35d584dabf52c9f77e0fe62683ac4d9f86) and
[VIA VL711](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit?id=673029fe9c16c95600bdaca4760673527af32edf).

## Technical Details <a id="TechnicalDetails"></a>

The problem is that certain USB-SATA-bridge chipsets do not properly pass SAT commands on to the SATA device when running in UAS mode, and to work around this problem Linux automatically enables the NO_ATA_1X flag for those chipsets.  This turns off SAT passthrough... which in turn means that smartmontools is prevented from communicating with the device.

For many of these chipsets, SAT passthrough works correctly in the old [BOT](https://en.wikipedia.org/wiki/USB_mass_storage_device_class) (`usb-storage` driver) mode, and so smartmontools may suddenly stop working when the kernel is upgraded to a version which supports UAS, or from one which did did not apply the flag for that device to a newer kernel which does (see [NO_ATA_1X kernel versions](#NO_ATA_1X-kernel-versions)).

For more information on the usb-storage flags, search for the 'usb-storage.quirks' entry in the [Kernel Parameters Documentation](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html).

You can easily check to see whether the kernel using uas or usb-storage for a particular device using the `lsusb -t` command:

```
# lsusb -t <a id="lsusb-t"></a>
/:  Bus 04.Port 1: Dev 1, Class=root_hub, Driver=xhci_hcd/2p, 10000M
/:  Bus 03.Port 1: Dev 1, Class=root_hub, Driver=xhci_hcd/2p, 480M
/:  Bus 02.Port 1: Dev 1, Class=root_hub, Driver=xhci_hcd/4p, 5000M
    |__ Port 1: Dev 11, If 0, Class=Mass Storage, Driver=usb-storage, 5000M
[...]
```
or
```
# lsusb -t <a id="lsusb-t-1"></a>
/:  Bus 04.Port 1: Dev 1, Class=root_hub, Driver=xhci_hcd/2p, 10000M
/:  Bus 03.Port 1: Dev 1, Class=root_hub, Driver=xhci_hcd/2p, 480M
/:  Bus 02.Port 1: Dev 1, Class=root_hub, Driver=xhci_hcd/4p, 5000M
    |__ Port 1: Dev 8, If 0, Class=Mass Storage, Driver=uas, 5000M
[...]
```

Alternatively you can check the messages that appear in kern.log when the device is first connected and look for the driver name mentioned at the end of the "scsi hostN" line:
`#!text/plain lineno marks=5
usb 2-1: new SuperSpeed USB device number 8 using xhci_hcd
usb 2-1: New USB device found, idVendor=NNNN, idProduct=NNN
usb 2-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[...]
scsi host4: uas
scsi 4:0:0:0: Direct-Access     VENDOR-NAME               0204 PQ: 0 ANSI: 6
sd 4:0:0:0: Attached scsi generic sg2 type 0
sd 4:0:0:0: [sdc] 1953525168 512-byte logical blocks: (1.00 TB/932 GiB)
sd 4:0:0:0: [sdc] 4096-byte physical blocks
sd 4:0:0:0: [sdc] Write Protect is off
sd 4:0:0:0: [sdc] Mode Sense: 53 00 00 08
sd 4:0:0:0: [sdc] Write cache: enabled, read cache: enabled, doesn't support DPO or FUA
 sdc: sdc1 sdc2
sd 4:0:0:0: [sdc] Attached SCSI disk
`

or

`#!text/plain lineno marks=6
usb 2-1: new SuperSpeed USB device number 9 using xhci_hcd
usb 2-1: New USB device found, idVendor=NNNN, idProduct=NNNN
usb 2-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[...]
usb-storage 2-1:1.0: USB Mass Storage device detected
scsi host4: usb-storage 2-1:1.0
scsi 4:0:0:0: Direct-Access     VENDOR-NAME                   0204 PQ: 0 ANSI: 6
sd 4:0:0:0: Attached scsi generic sg2 type 0
sd 4:0:0:0: 1953525168 512-byte logical blocks: (1.00 TB/932 GiB)
sd 4:0:0:0: [sdc] Write Protect is off
sd 4:0:0:0: [sdc] Mode Sense: 47 00 00 08
sd 4:0:0:0: [sdc] Write cache: enabled, read cache: enabled, doesn't support DPO or FUA
 sdc: sdc1 sdc2
sd 4:0:0:0: [sdc] Attached
`

The detailed selection logic used by the kernel to decide which devices get this flag can be found in the `uas_use_uas_driver()` function in the [drivers/usb/storage/uas-detect.h](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/usb/storage/uas-detect.h)  combined with the list of entries found in the [drivers/usb/storage/unusual_uas.h](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/usb/storage/unusual_uas.h)
file.  (As far as smartmontools/SAT passthrough is concerned, only the NO_ATA_1X flag is significant.)

For the uas driver, there doesn't seem to be a definitive way to confirm that the NO_ATA_1X flag is in fact in effect for a particular device (see [note on /proc/scsi/usb-storage](#proc_scsi_usb-storage)), but if it is the symptom will be that commands which rely on SAT show invalid data, e.g.

```
# smartctl -d sat -a /dev/sdb <a id="smartctl-dsat-adevsdb"></a>
smartctl 6.6 2016-05-31 r4324 [x86_64-linux-4.15.0-33-generic] (local build)
Copyright (C) 2002-16, Bruce Allen, Christian Franke, www.smartmontools.org

Read Device Identity failed: scsi error unsupported field in scsi command

A mandatory SMART command failed: exiting. To continue, add one or more '-T permissive' options.


# smartctl -d sat -T permissive -a /dev/sdb <a id="smartctl-dsat-Tpermissive-adevsdb"></a>
smartctl 6.6 2016-05-31 r4324 [x86_64-linux-4.15.0-33-generic] (local build)
Copyright (C) 2002-16, Bruce Allen, Christian Franke, www.smartmontools.org

Read Device Identity failed: scsi error unsupported field in scsi command

=== START OF INFORMATION SECTION ===
Device Model:     [No Information Found]
Serial Number:    [No Information Found]
Firmware Version: [No Information Found]
Device is:        Not in smartctl database [for details use: -P showall]
ATA Version is:   [No Information Found]
Local Time is:    Mon Aug 27 20:44:01 2018 CEST
SMART support is: Ambiguous - ATA IDENTIFY DEVICE words 82-83 don't show if SMART supported.
SMART support is: Ambiguous - ATA IDENTIFY DEVICE words 85-87 don't show if SMART is enabled.
A mandatory SMART command failed: exiting. To continue, add one or more '-T permissive
```

or

```
# hdparm -I /dev/sdc <a id="hdparm-Idevsdc"></a>

/dev/sdc:
SG_IO: bad/missing sense data, sb[]:  70 00 05 00 00 00 00 0a 00 00 00 00 24 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00

ATA device, with non-removable media
Standards:
        Likely used: 1
Configuration:
        Logical         max     current
        cylinders       0       0
        heads           0       0
        sectors/track   0       0
        --
        Logical/Physical Sector size:           512 bytes
        device size with M = 1024*1024:           0 MBytes
        device size with M = 1000*1000:           0 MBytes 
        cache/buffer size  = unknown
Capabilities:
        IORDY not likely
        Cannot perform double-word IO
        R/W multiple sector transfer: not supported
        DMA: not supported
        PIO: pio0
```


## Workarounds <a id="Workarounds"></a>

There are two approaches to getting smartmontools to work with one of these devices, both involving setting a "quirks" flag for the device in question.

A. <a id="workaround-set-u"></a> If you just want to get smartmontools working again and don't care about the performance improvements the come from using UAS mode, you can simply use the IGNORE_UAS flag to tell Linux to stick with the usb-storage mode instead, by using the "u" flag on the `usb-storage.quirks` setting.  
  

A. <a id="workaround-unset-t"></a> If you want to continue using UAS mode and are sure your particular device does properly support SAT mode even though the kernel detects it as a device that does not (e.g. as described in ticket:971#comment:12) , you can override that default configuration and suppress the NO_ATA_1X/":t" flag by passing an empty flag list in the `usb-storage.quirks` setting.

Note that in either case, you will need to find the idVendor and idProduct fields for your device, in 4-digit hex format.  This information is found in the `New USB device found, idVendor=NNNN, idProduct=NNNN`
kern.log line, or in the output from "lsusb".  (In the option strings below, the 4-digit numbers can optionally be preceded a "0x" prefix.) 


## Permanent Flag Settings <a id="PermanentFlagSettings"></a>

The `usb-storage.quirks` option is part of the more general mechanism for setting kernel/module options, and the exact mechanisms available for setting it will vary depending on your distribution.  In brief:

- if your system has the "usb-storage" driver compiled as a loadable kernel module, you can set it by creating a file (e.g. `disable_uas.conf`) under `/etc/modprobe.d/` containing the line (with the proper id numbers substituted)
```
options usb-storage quirks=0bc2:231a:u
```
   to disable UAS for that device (or 
```
options usb-storage quirks=0bc2:231a:
```
   to try overriding the default NO_ATA_1X flag). 

   You will then probably need to follow your distribution's instructions for rebuilding your initramdisk in order to make the change apply when usb-storage drives are detected upon initial bootup.

- If the "usb-storage" driver is built in to the kernel, or if you simply prefer to make this change at the boot level rather than under /etc/modproble.d/, you can pass the option to the kernel as part of your boot configuration.  For example, if your system uses grub2, you can edit `/boot/grub/default` so that in includes a line similar to
```
GRUB_CMDLINE_LINUX="usb_storage.quirks=0bc2:231a:u"
```
   and then run `update-grub`, and then reboot.

(Note that while the basic information used in these two approaches in the same, the punctuation used is different.)

In either case, you can then try plugging your USB device in again, and confirm using one of the methods above that the change had taken effect.  (Note that if you use the `:u` flag, the kern.log messages generated when the device is detected should now include 
`#!text/plain lineno marks=1,3-4
usb 2-1: UAS is blacklisted for this device, using usb-storage instead
usb-storage 2-1:1.0: USB Mass Storage device detected
usb-storage 2-1:1.0: Quirks match for vid 0bc2 pid ab38: 800000
scsi host4: usb-storage 2-1:1.0
`

For more information, see the introduction to the [Kernel Parameters](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html) document, as well as documentation for your specific Linux distribution.

## Temporary Settings <a id="TemporarySettings"></a>

If you would like to temporarily set the quirks flag rather than making a permanent change (e.g. in order to run smartctl manually at some point but continuing to use UAS mode normally when using the drive for data transfers), you can do so by dynamically updating the module configuration (also described in the introductory paragraphs of the Kernel Parameters document).

First, unmount/unplug the USB device, then run the following commands (as root):

```
# cat /sys/module/usb_storage/parameters/quirks <a id="catsysmoduleusb_storageparametersquirks"></a>

# echo "0x0bc2:0x231a:u" > /sys/module/usb_storage/parameters/quirks <a id="echo0x0bc2:0x231a:usysmoduleusb_storageparametersquirks"></a>
# cat /sys/module/usb_storage/parameters/quirks <a id="catsysmoduleusb_storageparametersquirks-1"></a>
0x0bc2:0x231a:u

```

(Note that the "echo" command completely replaces the current setting, so the first "cat" command makes sure that no quirks have been previously configured; it should just show a blank line.)

At this point you can plug the device's USB cable back in, and (after confirming via lsusb/kern.log that the device is connected to the usb-storage driver) you can then proceed to access the device using SAT.

A quirk set in this manner will automatically get cleared the next time the system is rebooted, but if you want to clear it more quickly you can simply execute:
```
# echo "" > /sys/module/usb_storage/parameters/quirks <a id="echosysmoduleusb_storageparametersquirks"></a>
```
to clear the configuration (i.e. use the kernel's compiled-in defaults) for the next time the device is plugged in.

## Additional Information <a id="AdditionalInformation"></a>

"Quirks match" kern.log lines:

- The final number on the  `Quirks match for vid 0bc2 pid ab38: 800000` kern.log line represents the set of flag bits that have been enabled (by the "quirks" option processing) for this particular USB device.  (Note that the USB id numbers as well as the flag value are shown in hexadecimal.)
- For SAT pass-through issues, the important flags are 
| IGNORE_UAS | 0x00800000 | :u |
| --- | --- | --- |
| NO_ATA_1X | 0x02000000 | :t |
- The full list of flag bits is defined in the [include/linux/usb_usual.h](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/include/linux/usb_usual.h) file in the kernel source (while the quirks-option flag letters and fuller explanations of each flag's meaning are found in the `usb-storage.quirks=` section of the [Kernel Parameters](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html) documentation).
- The "Quirks match" line will be output if quirks are found in either the compiled-in quirks list or a list is specified using one of the kernel-module override methods, and thus can be used to check which set of flags is actually getting applied.  However, the blanket application of the NO_ATA_1X flag for all Seagate devices (USB vendor ID of 0x0bc2) is coded separately and does not generate any kern.log output indicating it has been applied. Also, if you specify an empty flag list (e.g. "`0bc2:231a:`") in an override and thus have no flag bits being set, no "Quirks match" log line will be generated.

<a id="proc_scsi_usb-storage"></a> Using /proc/scsi/usb-storage/[HOSTNUMBER} to display active flag bits:

- If a device is attached to the usb-storage driver, there will be an associated file under `/proc/scsi/usb-storage` which will display information related to that particular device driver instance's internal state... and in particular the Quirks: line displays a list of the active flag bits for this device -- whether set by a manual override, an entry in the  unusual_devs.h or unusual_uas.h files, or by dynamically by logic coded within the driver.

   For example, after setting the quirks string for this particular USB ID to ":u" and pugging in the device, the kernel detected it with a `scsi host4: usb-storage 2-1:1.0` message, and the /proc info file showed:
```
============
# cat /proc/scsi/usb-storage/4 <a id="catprocscsiusb-storage4"></a>
   Host scsi4: usb-storage
       Vendor: Seagate
      Product: Backup+ RD
Serial Number: NA5CGDGD
     Protocol: Transparent SCSI
    Transport: Bulk
       Quirks: IGNORE_UAS
============
```
   (thus confirming the quirks string had taken effect).

- Unfortunately the uas driver does not create an equivalent `/proc/scsi/uas/*` file, so this method doesn't help when you are attempting to determine (for example) whether or not the NO_ATA_1X flag is set on a uas device....

<a id="NO_ATA_1X-kernel-versions"></a> NO_ATA_1X Kernel Versions

- Because SAT pass-through behavior will change suddenly depending on the NO_ATA_1X flag, it can important to determine whether SAT issues are an (unexpected) side-effect of a kernel upgrade:

- For most devices this setting will be turned on by a change to the unusual_uas.h file... in which case the "Quirks mode" line in kern.log should show that the 0x02000000 bit is indeed getting set as part of the device initialization.  This doesn't differentiate between entries from the unusual_uas.h file and manual settings from the quirks option string, but if a kernel upgrade (with no change to the quirk options in use) suddenly causes that message to appear, it's very likely a patch was made to unusal_uas.h between the old and new kernel versions.

- However, for the patch setting this flag for all Seagate devices there is no specific kern.log message to look for, so one may have to guess the patch status based on the kernel version number.  The patch was created in November 2017 and applied to various kernel.org branches in December of 2017 and early 2018: here is a list some kernel branches with the first release within that branch to include the patch:
   - <https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/log/drivers/usb/storage/uas-detect.h?h=v4.15-rc3> (Nov 2017)
   - [4.14.5](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/log/drivers/usb/storage/uas-detect.h?h=v4.14.5) (Dec 2017)
   - 4.10.x, 4.11.x, 4.12.x, 4.13.x: not included
   - [4.9.68](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/log/drivers/usb/storage/uas-detect.h?h=v4.9.68) (Dec 2017)
   - [4.4.105](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/log/drivers/usb/storage/uas-detect.h/?h=v4.4.105) (Dec 2017)
   - [3.16.55](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/log/drivers/usb/storage/uas-detect.h/?h=v3.16.55) (Mar 2018)
   - All kernel.org versions 4.15 (released) and later already include the patch.

- Linux distributions may backport patches to their own kernel branches (and those may use somewhat different version numbering schemes), but certainly kernel packages released up through Nov 2017 will not have the patch, and mostly like ones based on the upstream 4.15-or-later branches will include it.
   - Ubuntu
      - 14.04 Trusty: Linux 3.13.x, never backported 
      - 16.04 Xenial: backported in Linux [4.4.0-117.141](https://launchpad.net/ubuntu/+source/linux/4.4.0-117.141) [tracking bug 1745046](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1745046) (Mar 2018)  
      - 18.04 Bionic: Linux 4.15.x, included from initial release

Web links:

Linux SAT-with-UAS bug reports for other projects:
- [Ubuntu bug 1810215](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1810215)

General info:
- [StackExchange: How can I check whether USB3.0 UASP (USB Attached SCSI Protocol) mode is enabled in Linux?](https://superuser.com/questions/928741/how-can-i-check-whether-usb3-0-uasp-usb-attached-scsi-protocol-mode-is-enabled)
- [3.0 Hard Drive troubleshooting](https://www.smartmontools.org/suze/USB)(https://en.opensuse.org/SDB:USB_3.0_Hard_Drive_troubleshooting)

Examples of the problems that originally triggered the current kernel behavior: 
- [Ubuntu Bug: Seagate external drive causes SCSI bus resets when UAS enabled](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1584557)
- [StackExchange: Debian + USB3 HDD + UAS: I/O errors](https://unix.stackexchange.com/questions/441668/debian-usb3-hdd-uas-i-o-errors)
- [StackExchange: How do I make my Seagate 2Tb usb hdd work in Linux?](https://unix.stackexchange.com/questions/418326/how-do-i-make-my-seagate-2tb-usb-hdd-work-in-linux)
