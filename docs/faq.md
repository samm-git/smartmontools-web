# Smartmontools Frequently Asked Questions (FAQ) <a id="SmartmontoolsFrequentlyAskedQuestionsFAQ"></a>


---

## Attributes <a id="Attributes"></a>

---

### How can I get the attribute information in human readable format? <a id="HowcanIgettheattributeinformationinhumanreadableformat"></a>

`smartctl` provides human readable format as far as possible.
If the exact meaning of the RAW value is not known, there is nothing we can do.

---

### Why is the attributes number and meaning different on the disks? <a id="Whyistheattributesnumberandmeaningdifferentonthedisks"></a>

Unlike other parts of SMART (logs, self-tests), the attributes are not 
(and never were) part of the ATA standards. Even the general attribute 
format (ID, VALUE, WORST, RAW) is removed from the standard since ATA-4 (1998).

Attribute assignment and interpretation are vendor/device specific and 
undocumented in many cases.

---

### What details can be interpreted from `Raw read error rate`? <a id="WhatdetailscanbeinterpretedfromRawreaderrorrate"></a>

If no documentation is available, the RAW value of attribute 1 is typically useless. 
The 48-bit field might encode several values, try `-v 1,hex48` to check.

---

### Why is my disk temperature reported by `smartd` as 150 Celsius? <a id="Whyismydisktemperaturereportedbysmartdas150Celsius"></a>

It's not.
For example, in the message:  

```
Device: /dev/sda, SMART Usage Attribute: 194 Temperature_Celsius changed from 78 to 77
```
the value given is the *Normalized* not the *Raw* Attribute value (the
disk temperature in this case is about 22 Celsius).  The
`'-R'` and `'-r'` Directives modify this behavior, so that
the information is printed with the *Raw* values as well, for example:
```
Device: /dev/sda, SMART Usage Attribute: 194 Temperature_Celsius changed from 78 [Raw 22] to 77 [Raw 23]
```
Here the Raw values are the actual disk temperatures in Celsius.
Please see the `smartctl` manual page for further explanation of the differences between *Normalized* and *Raw* Attribute values.

Alternatively suppress these messages with `-I` and enable temperature reports and/or warnings with `-W` directive.
For example this `smartd.conf` setting:
```
/dev/sda -a -I 190 -I 194 -W 1,45,50 -m ADDRESS
```
would result in messages like:
```
Device: /dev/sda, Temperature changed +1 Celsius to 23 Celsius (Min/Max 20/38)
Device: /dev/sda, Temperature 48 Celsius reached limit of 45 Celsius (Min/Max 20/48!)
Device: /dev/sda, Temperature 52 Celsius reached critical limit of 50 Celsius (Min/Max 20/52!)
```
The last message would also be sent as a warning email to ADDRESS.

---

### The SSD_Life_Left Attribute of my new SandForce based SSD reports zero <a id="TheSSD_Life_LeftAttributeofmynewSandForcebasedSSDreportszero"></a>

It doesn't. The RAW value of this attribute is always 0 and has no meaning. Check the normalized VALUE instead. It starts at 100 and indicates the approximate percentage of SDD life left. It typically decreases when Flash blocks are marked as bad, see the RAW value of Retired_Block_Count:
```
ID# ATTRIBUTE_NAME          FLAGS    VALUE WORST THRESH FAIL RAW_VALUE
...
  5 Retired_Block_Count     PO--CK   098   098   003    -    416
...
231 SSD_Life_Left           PO--C-   097   097   010    -    0
```

---

### The Power_On_Hours Attribute of my new Intel SSD reports ~890000 hours <a id="ThePower_On_HoursAttributeofmynewIntelSSDreports890000hours"></a>

This is a bug in Intel 330 Firmware 300i and Intel 520 Firmware 400i.
The offset is [894794 hours](https://forums.intel.com/s/question/0D50P0000490BxaSAE/why-my-new-ssd-drive-intel-520-120gb-shows-that-already-worked-power-on-time894813-).
See also ticket [#289](https://github.com/smartmontools/trac-tickets-archive/issues/289) and [Intel SSD Toolbox SMART Attributes FAQ](https://www.intel.com/content/www/us/en/support/articles/000006400/memory-and-storage/ssd-software.html).
The hours counter from Device Statistics is not affected:
```
# smartctl -x /dev/ice <a id="smartctl-xdevice"></a>
...
ID# ATTRIBUTE_NAME          FLAGS    VALUE WORST THRESH FAIL RAW_VALUE
...
  9 Power_On_Hours_and_Msec -O--CK   000   000   000    -    894808h+48m+52.360s
...
Device Statistics (GP Log 0x04)
Page Offset Size         Value  Description
...
  1  0x010  4               14  Power-on Hours
```


---

## Protocols, Devices and Controllers <a id="ProtocolsDevicesandControllers"></a>

---

### Can I monitor disks behind RAID controllers? <a id="CanImonitordisksbehindRAIDcontrollers"></a>

Support for disks behind RAID controllers is highly dependent on both platform
and controller type. See our page about [smartmontools RAID controller support](supported-raid-controllers.md)
for the details.

---
### What is error recovery control (ERC) and why it is important to enable it for the (S)ATA disks in RAID? <a id="WhatiserrorrecoverycontrolERCandwhyitisimportanttoenableitfortheSATAdisksinRAID"></a>


In computing, error recovery control (ERC) is a feature of hard disks which allow a system administrator to configure the amount of time a drive's firmware is allowed to spend recovering from a read or write error. Limiting the recovery time allows for improved error handling in hardware or software RAID environments. In some cases, there is a conflict as to whether error handling should be undertaken by the hard drive or by the RAID implementation, which leads to drives being marked as unusable and significant performance degradation, when this could otherwise have been avoided. 

It is best for ERC to be "enabled" when in a RAID array to prevent the recovery time from a disk read or write error from exceeding the RAID implementation's timeout threshold. If a drive times out, the hard disk will need to be manually re-added to the array, requiring a re-build and re-synchronization of the hard disk. Limiting the drives recovery timeout helps for improved error handling in the hardware or software RAID environments. 

On disks that fully implement the ATA-8 standard, the smartctl utility  can be used to control the ERC behavior of many drives by setting the SCT Error Recovery Control (scterc) parameter:

- Reading current settings:
```
smartctl -l scterc /dev/sda
     SCT Error Recovery Control:
           Read: Disabled
          Write: Disabled
```
-  Changing the setting:
```
smartctl -l scterc,150,150 /dev/sda
    SCT Error Recovery Control:
               Read:    150 (15.0 seconds)
              Write:    150 (15.0 seconds)
```

ERC control needs to be set on the boot time and if hot-replacement been made.  You may find sample Linux scripts and related discussion in the ticket [#658](https://github.com/smartmontools/trac-tickets-archive/issues/441). 

---

### Smartmontools for FireWire, USB, and SATA disks/systems <a id="SmartmontoolsforFireWireUSBandSATAdiskssystems"></a>

As for USB and FireWire (IEEE 1394) disks and tape drives, the news
is not good. They appear to the operating system as SCSI devices but their
implementations do not usually support those SCSI commands needed by
smartmontools. A consortium associated with IEEE 1394 certified *some* 
external enclosures (containing a ATA disk and a protocol bridge) 
as being compliant to the relevant standards. Even still, that 
compliance means that they tend to only support the bare minimum of 
commands needed for device operation (i.e. SMART support is an unsupported
extra). Hopefully external USB and Firewire devices will support SAT in
the future, see below. Some USB device based on cypress chips support a
proprietary protocol (ATACB) that allow to send raw ATA commands (i.e.
SMART support).

Smartmontools should work correctly with SATA drives under both
Linux 2.4 and 2.6 kernels. Depending on which subsystem the SATA
controller is in (i.e. `drivers/ide`, `drivers/ata` 
or libata (under `drivers/scsi`) a SATA drive will 
appear as `/dev/hd*` or `/dev/sd*`. Either way,
smartmontools should be able to figure out what is going on and act
accordingly. In some cases smartmontools may need a hint in the form of
a '`-d sat`' or '`-d ata`' option on the `smartctl` command 
line or in the `/etc/smartd.conf` file.
There may be a hint to add one of those options in the log file 
when `smartd` is run as a daemon or on the command line with `smartctl`.
The '`-d ata`' option means that even though 
the drive has a SCSI device name, treat it as an ATA
disk. Unfortunately such an approach doesn't often work. The next
paragraph has more information about '`-d sat`'.

The SCSI to ATA Translation (SAT) standard (ANSI INCITS 431-2007)
may solve many problems in this area. It defines how SCSI commands will
be translated to the corresponding ATA commands and defines a
pass-through mechanism. ATA commands are conveyed natively by two
transports: parallel and serial ATA. SCSI commands can be
conveyed by many transports: the veteran SCSI Parallel Interface
(SPI), Fibre Channel (FC), Infiniband (SRP), Serial
Attached SCSI (SAS), IP (iSCSI and iSER), USB (mass storage), and IEEE
1394 (SBP) to name some. Due to their cost and storage capacity, more
and more ATA disks (especially SATA disks) are appearing "behind" a
SCSI transport. This is especially true of the SAS transport which can
painlessly accomodate both SAS and SATA disks. Enter another acronym:
SATL which stands for SCSI to ATA Translation Layer. In Linux libata
has a SATL in it. Some SAS host bus adapters have a SATL in their
firmware. FC might have a SATL in a switch. Perhaps in the future USB
and IEEE 1394 enclosures will have a SATL in them. Starting from
smartmontools versions 5.36 and 5.37, no matter where a SATL is,
irrespective of the operating system in use, the user should have less
problems with ATA disks, no matter which transport is involved. As
always, it helps to know a little of what is happening under the
covers. The '`-d sat`' option instructs `smartctl`
and `smartd` to assume a SATL is in place and act accordingly. 
The `smartctl` command can often detect a SATL and autoconfigure 
while in smartmontools version 5.37 `smartd` often needs a hint.

The current USB mass storage specification is based on a version of SCSI
(SPC-2) that can't support SAT. But some chips manufacturers implement
proprietary SCSI commands that allow ATA pass through (similiar like for SAT).
Well known is the cypress chipset, that contains an ATACB proprietary pass through
(for ATA commands passed through SCSI commands) for which
some information is publicly available (see cy7c68300c_8.pdf).
Smartmontools 5.39 supports these cypress chips via 
the '`-d usbcypress`' option on the smartctl command line. 
A lot of devices can be autodetected already. Have a look on the 
wiki page about [supported USB-Devices](supported-usb-devices.md), 
wether your device is on the list. Check your device usb id (most
cypress usb ata bridge got `vid=0x04b4`, `pid=0x6830`) 
or to try to call `smartctl` with option 
'`-d usbcypress`'. If the usb device doesn't support 
ATACB, smartmontools will abort.

---

### Smartmontools for SCSI disks and tapes (TapeAlert) <a id="SmartmontoolsforSCSIdisksandtapesTapeAlert"></a>

Smartmontools for SCSI disks and tapes (including medium changers) is
discussed on a separate [page](https://www.smartmontools.org/browser/trunk/www/smartmontools_scsi.xml).
---

### Smartmontools for the NVMe devices <a id="SmartmontoolsfortheNVMedevices"></a>

Smartmontools supports NVMe interface starting from version 6.5. NVMe related functionality and supported configurations are discussed on the NVMe wiki page.

---

## Smartmontools Database <a id="SmartmontoolsDatabase"></a>

---

### My ATA/SATA drive is not in the `smartctl`/`smartd` database <a id="MyATASATAdriveisnotinthesmartctlsmartddatabase"></a>

Does this break anything? How do I get it added? 

If your drive is not in the database, then the *names* of the Attributes 
(displayed in the `ATTRIBUTE_NAME` column of `smartctl -A /dev/sdX`) 
and the *format* of the the raw Attribute values shown in the 
`RAW_VALUE` column may be incorrect.  This is mostly cosmetic: 
the essential drive health monitoring/testing functionality of 
`smartmontools` does *not* depend upon the database.

'''If your drive is not in the database, please make sure to
[update the drive database](download.md#Updatethedrivedatabase) first.
Please do not submit a new drive for the database without checking to see if it
is already in the current drive database
([drivedb.h](https://www.smartmontools.org/browser/trunk/smartmontools/drivedb.h))
file.'''

**If your drive is not in the current database,**
to have it added to the database, first use the command:
```
smartctl -t short /dev/sdX
```
to run a short self-test on the drive, and wait a 
few minutes for the test to complete.
Then create a full smartmontools report and redirect it to a text file:
```
smartctl -x -a /dev/sdX > smartctl-VENDOR-MODEL.txt
```
**Note:** Replace `VENDOR-MODEL` in the above file name with some actual identify information for the drive.

The timestamp in the self-test log will help us to determine whether Attribute 9 is
being used to store the lifetime in hours, minutes, or seconds.

Alternatively you could use:
```
smartctl -q noserial -x -a /dev/sdX > smartctl-VENDOR-MODEL.txt
```
This report does not contain the "`Serial Number`" and "`LU WWN Device Id`" output lines.

**Please always use `-x -a` instead of `-a`.** The latter only prints legacy SMART information and in
particular lacks `Device Statistics`.

Please also add `-l farm` if the output for a Seagate HDD suggests this:
```
Seagate FARM log (GP Log 0xa6) supported [try: -l farm]
```
**Note:** The `-l farm` output contains additional "`Serial Number`" and "`World Wide Name`" lines.
The `-q noserial` option does not suppress these lines unless smartctl 7.5 or later is used.

Do not provide JSON (`-j`, `--json`) outputs unless the original plaintext output is also included (`--json=o`).

If possible, please provide a [pull requests](https://github.com/smartmontools/smartmontools/pulls) for an
addition to `drivedb.h` file at GitHub.
Make sure to fork the `main` branch as the `master` branch from former R/O mirroring has been retired.

Otherwise [create an issue](https://github.com/smartmontools/smartmontools/issues) at GitHub or
create a ticket here in trac.

In each case, provide the sample output described above.
Add the file as a plain-text ASCII attachment to avoid reformatting or use proper markup for preformatted comments.

Include the drive model name in the title or summary.
To submit info about different drive models, please use separate issues or tickets.

Further information about the drive is welcome
(link to device specification, output from a vendor specific SMART tool,
name of the SSD controller, an already tested drivedb.h entry, ...).

**Please note that the use of the *smartmontools-database* mailing list to request new entries is now discouraged.**
---

### My SCSI/SAS drive is not in the `smartctl`/`smartd` database <a id="MySCSISASdriveisnotinthesmartctlsmartddatabase"></a>
### My NVMe drive is not in the `smartctl`/`smartd` database <a id="MyNVMedriveisnotinthesmartctlsmartddatabase"></a>

SCSI/SAS and NVMe drives do not provide ATA/SATA-like SMART Attributes.
Therefore the drive database does not contain any entries for these drives.
This may change in the future as some drives provide similar info via vendor specific commands (see ticket [#870](https://github.com/smartmontools/trac-tickets-archive/issues/647)).

---

### Could missing drive database entries be added locally? <a id="Couldmissingdrivedatabaseentriesbeaddedlocally"></a>

Yes.
Create a separate local drive database file with the desired entries.
The entries in this file prepend and may override the entries in the installed or builtin database.
The default path of the local drive database is usually `/etc/smart_drivedb.h`.
On Windows, it is `drivedb-add.h` in the directory where `smartctl.exe` is installed.
See `-B [+]FILE, --drivedb=[+]FILE` section on smartctl man page for the configured default path and further info.
The default path is also included in the `smartctl -h` output.

---

### Why is my drive still missing in the drive database? <a id="Whyismydrivestillmissinginthedrivedatabase"></a>

Unfortunately we lack helping hands in the maintenance of the drivedb.
Therefore it may take a long time until somebody has time to analyse and investigate upon 
user contributions for missing devices and finally add an entry to the drive database..
When you send us patches for the missing entry in drivedb.h additional to the smartctl report 
and/or also links to vendor docs about the meaning of SMART attributes in this very case,
the chances get better that the entry will be added more quickly ;-)

And if you have more time to spend on smartmontools drivedb take a look at this job offer ;-)

---

## Self-tests <a id="Self-tests"></a>

---

### ATA drive is failing self-tests, but SMART health status is 'PASSED'. What's going on? <a id="ATAdriveisfailingself-testsbutSMARThealthstatusisPASSED.Whatsgoingon"></a>

If your ATA drive supports self-tests, you should run them on a regular basis, for example one per week:
```
 smartctl -t long /dev/hd?
```

After the test has completed, you should examine the results with:
```
 smartctl -l selftest /dev/hd?
```

If the drive fails a self-test, but still has '`PASSED`' SMART health status, this usually means that there is a corrupted (uncorrectable=UNC) sector on the disk. This means that the ECC data stored at that sector is not consistent with the user data stored at that sector, and an attempt to read the sector fails with a UNC error. This can be a one-time transient effect: a sudden power failure while the disk was writing to the sector corrupted the ECC code or data, but the sector <em>could</em> correctly store new data. Or it can be a permanent effect: the magnetic media has been damaged by a bit of dust, and the sector could *not* correctly store new data.

If the disk can read the sector of data a single time, and the damage is permanent, not transient, then the disk firmware will mark the sector as 'bad' and allocate a spare sector to replace it.  But if the disk can't read the sector even once, then it won't reallocate the sector, in hopes of being able, at some time in the future, to read the data from it.  **A write to an unreadable (corrupted) sector will fix the problem.** If the damage is transient, then new consistent data will be written to the sector.
If the damange is permanent, then the write will force sector reallocation. Please see [Bad block HOWTO](badblockhowto.md) for instructions about how to force this sector to reallocate (Linux only).

The disk still has passing health status because the firmware has not found other signs of trouble, such as a failing servo.

Such disks can often be repaired by using the disk manufaturer's 'disk evaluation and repair' utility.  Beware: this may force reallocation of the lost sector and thus corrupt or destroy any file system on the disk. See [Bad block HOWTO](badblockhowto.md) for generic Linux instructions.

---

### `Unreadable, uncorrectable, pending` sectors or `Medium error` on disk. What's going on? <a id="UnreadableuncorrectablependingsectorsorMediumerrorondisk.Whatsgoingon"></a>

SCSI and ATA disk drives store data in blocks (sectors) of 512<sup>[(1)](#blocksize)</sup> bytes. Each 512 bytes of user data is stored on the media plus 40 or more bytes of ECC data included in it. These - so called *ECC Bytes* - are used internally by the disk firmware for error checking/detection and correction.

Sometimes the data in a sector gets corrupted.  This can happen because a speck of dust scratched the disk, or because the disk was powered down while writing data to that sector, or for other reasons. Usually the ECC bytes can be used to correct the corrupted data. However if the ECC bytes are inconsistent or can't be used to correct the bad data, then the 512 bytes of data are lost.  Such a sector is called unreadable or uncorrectable.

If your disk has an unreadable sector, this means that some of your data can't be retrieved.  You can force the disk to replace the unreadable sector with a spare good sector, but only at the price of losing the 512 bytes of data forever.

Disks with uncorrectable sectors can often be repaired by using the disk manufaturer's 'disk evaluation and repair' utility (see previous FAQ entry).  Beware: this may force reallocation of the lost sector and thus corrupt or destroy any file system on the disk. See [Bad block HOWTO](badblockhowto.md) for generic Linux instructions.

Normally when an uncorrectable sector is found, the disk puts this onto a 'pending sector list' to indicate that it should be replaced with a spare good sector.  However this replacement won't take place until either the disk can read the data on the bad sector, or is instructed to write new data to that bad sector.
<a name="blocksize">(1)</a> In the future the block size for disks (especially in the terabyte range) will increase from 512 bytes to 4096 bytes.
---

### Why do self-tests take very long? <a id="Whydoself-teststakeverylong"></a>
### Why is the system very slow during a self-test? <a id="Whyisthesystemveryslowduringaself-test"></a>

The `smartctl -t TEST` command (or `smartd.conf -s` directive) issues a command to start a test
(ATA: *SMART EXECUTE OFF-LINE IMMEDIATE*, SCSI: *SEND DIAGNOSTIC*).
The self-tests are controlled by drive firmware.
There is no related data transfer between host and drive during a test.
The interleaving of regular I/O and read tests depends on the specific implementation in the firmware.

Many implementations work reasonably.
Some slow down the self-test even on average system load such that the test virtually never ends.
Others slow down regular I/O such that the system is unusable during a test.

---

### Why do self-tests take much longer than predicted? <a id="Whydoself-teststakemuchlongerthanpredicted"></a>

The predicted completion time printed by `smartctl -t TEST` is based on values returned by drive firmware
(ATA: *SELF-TEST ROUTINE RECOMMENDED POLLING TIME* from *SMART DATA STRUCTURE*,
SCSI: *EXTENDED SELF-TEST COMPLETION TIME* from *CONTROL MODE PAGE*). 
The prediction assumes that no regular I/O is done during the test.

---

### Why are long self-tests keep getting interrupted? <a id="Whyarelongself-testskeepgettinginterrupted"></a>

The host may send a standby command to the drive after some time of I/O inactivity.
This also aborts any running self-test.
The self-test log then reports `Aborted by host` or `Interrupted (host reset)` as status.
This is typical for drives behind USB bridges.

As a workaround, run some tool or script which perform periodic low volume read accesses.
See [this thread](https://sourceforge.net/p/smartmontools/mailman/message/32461042/)
on smartmontools-support mailing list for an example.

---

### Where can I find manufacturer-specific disk-testing utilities? <a id="WherecanIfindmanufacturer-specificdisk-testingutilities"></a>

The [UBCD (Ultimate Boot CD)](https://www.ultimatebootcd.com/)
includes some manufacturer-specific disk-testing utilities and many other useful
diagnostic tools ready to boot from CD or USB memory stick.

Note: if you do run one of these utilities, and it identifies the
meanings of any SMART Attributes that are not known to smartmontools,
please report them to the
[smartmontools-support mailing list](https://listi.jpberlin.de/mailman/listinfo/smartmontools-support)
or add the info to [our info pages on vendor specific SMART Attributes](tocdoc.md#OurCollectionOnVendorSpecificIssues).

These utilities have an important role to fill.  If your disk has
bad sectors (for example, as revealed by running self-tests with
smartmontools) and the disk is not able to recover the data from those
sectors, then the disk will *not* automatically reallocate those
damaged sectors from its set of spare sectors, because
forcing the reallocation to take place may entail some loss of data.
Because the commands that force such reallocation are
*Vendor Specific*, most manufacturers provide a utility for this
purpose. It may cause data loss but can repair damaged sectors (at
least, until it runs out of replacement sectors).

---

## Operating System <a id="OperatingSystem"></a>

---

### What are the operating system requirements? <a id="Whataretheoperatingsystemrequirements"></a>

Please see the first section of the
[INSTALL](https://github.com/smartmontools/smartmontools/blob/main/smartmontools/INSTALL) file.

---

### BIOS has a SMART enable/disable setting.  What does it do, and how should I set it? <a id="BIOShasaSMARTenabledisablesetting.WhatdoesitdoandhowshouldIsetit"></a>

Some type of BIOS can check the SMART health status of a disk at bootup: the equivalent of '`smartctl [-s on] -H /dev/sd?`'.
This one-time check on bootup is done if the BIOS SMART setting is set to `ENABLE`, and is not done if the setting is set to `DISABLE`.

If this one-time check is done, and the disk's health status is found to be `FAILED`, then typically the BIOS will display an error message and refuse to boot the machine.

For the proper functioning of smartmontools, either BIOS setting may be used.

A BIOS may perform the SMART health check even if it does not provide a corresponding setting.
The check cannot be disabled in this case.

---

### Why does SAT pass-through fail under Linux if UAS is enabled <a id="WhydoesSATpass-throughfailunderLinuxifUASisenabled"></a>

The Linux kernel rejects SAT ATA pass-through commands to certain devices if UAS is enabled.
See the  [SAT with UAS under Linux](sat-with-uas-linux.md) page for details.

---

### Do smartctl and smartd run on a virtual machine guest OS? <a id="DosmartctlandsmartdrunonavirtualmachineguestOS"></a>

Yes and no. Smartctl and smartd run on a virtual machine guest OS without problems. But this isn't very useful because the virtual disks do not support SMART. If a guest OS disk is configured as a raw disk, this only means that its sectors are mapped transparently to the underlying physical disk. This does not imply the ATA or SCSI pass-through access required to access the SMART info of the physical disk. Even the disk's identity is typically not exposed to the guest OS.

---

### Is smartctl available for VMware ESXi? <a id="IssmartctlavailableforVMwareESXi"></a>

No. See the [ESXi related tickets](https://github.com/smartmontools/smartmontools/issues) and [this](https://listi.jpberlin.de/pipermail/smartmontools-support/2021-March/000659.html) [thread](https://listi.jpberlin.de/pipermail/smartmontools-support/2021-April/000663.html) on smartmontools-support mailing list.

---

### What is the purpose of the command `smartctl-nc` on Windows? <a id="Whatisthepurposeofthecommandsmartctl-nconWindows"></a>

The file `smartctl-nc.exe` (**n**o **c**onsole) from the smartmontools Windows package is a copy of `smartctl.exe` with the SUBSYSTEM type in the EXE header changed from CONSOLE to GUI. This prevents that an empty console window is opened when the command is run in background with output redirected. GSmartControl uses this command for this purpose. When `smartctl-nc` is run without redirection from a console window, its output is not visible because Windows detaches the program from the console.

---

### `smartctl` aborts with the message "...SMART_GET_VERSION failed" on Windows. What is going wrong? <a id="smartctlabortswiththemessage...SMART_GET_VERSIONfailedonWindows.Whatisgoingwrong"></a>

A failing [SMART_GET_VERSION](https://docs.microsoft.com/en-us/previous-versions/windows/hardware/drivers/ff566202%28v%3dvs.85%29) call means that the device driver does not implement the I/O controls (see [below](faq.md#OnWindowssmartctlprintsthemessage:...LogReadfailed:Functionnotimplemented)) to access ATA SMART functionality.

Some Windows drivers for (S)ATA controllers are implemented as SCSI class drivers. This is usually the case for drivers which support RAID. Unfortunately, such drivers do not support the ATA specific SMART I/O controls.

---

### On Windows `smartctl` prints the message: "...Log Read failed: Function not implemented" <a id="OnWindowssmartctlprintsthemessage:...LogReadfailed:Functionnotimplemented"></a>

What is going wrong?

This means that the device driver does not support the command SMART READ LOG.
*The message does not indicate a hard disk problem!*
It does also not mean that the disk itself does not support SMART logs.
It may still be possible to read the logs with a Linux version of smartmontools run from
some [Live CD/DVD](livecds.md).

To access ATA SMART functionality on Windows, smartmontools uses the
I/O control calls
[SMART_RCV_DRIVE_DATA](https://docs.microsoft.com/en-us/previous-versions/windows/hardware/device-stage/drivers/ff566204%28v%3dvs.85%29) and
[SMART_SEND_DRIVE_CMD](https://docs.microsoft.com/en-us/previous-versions/windows/hardware/device-stage/drivers/ff566206%28v%3dvs.85%29).
These calls were available since Win95 OSR2.
An example program from Microsoft can be found
(SmartApp.exe, no longer available, the related KB article 208048 is also no longer available).

Starting with NT4, these calls do more restrictive parameter checks.
In particular, the command codes for SMART READ LOG and ABORT SELF-TEST
are not accepted. To perform these functions, smartmontools uses the
undocumented functions SCSIOP_ATA_PASSTHROUGH (NT4) or
IOCTL_IDE_PASS_THROUGH (2000/XP) instead.
An example program using these calls can be found
[here](https://www.smartmontools.org/ftp///ftp.heise.de/pub/ct/listings/0207-218.zip),
a related newsgroup thread is
[here](https://groups.google.com/forum/#!topic/microsoft.public.development.device.drivers/6XYyYoI-EdE).

Unfortunately, these undocumented functions are not implemented in
most vendor specific ATA device drivers. `smartctl` prints a
"Function not implemented" message in this case.

A new I/O control call
[IOCTL_ATA_PASS_THROUGH](https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/ntddscsi/ni-ntddscsi-ioctl_ata_pass_through)
is available since Win2003 and XP SP2.
It should be supported by most new drivers. Experimental code using
this call was added 2006-04-27 and is included in smartmontools
release 5.37.

---

### I found in syslog: 'Can't locate module block-major-65' <a id="Ifoundinsyslog:Cantlocatemoduleblock-major-65"></a>

When I run `smartd`, the SYSLOG `/var/log/messages`
contains messages like this:
```
smartd: Reading Device /dev/sdv 
modprobe: modprobe: Can't locate module block-major-65
```

This is because when `smartd` starts, if there is no
configuration file, it looks for all ATA and SCSI devices to monitor
(matching the pattern `/dev/hd[a-t]` or
`/dev/sd[a-z]`). The log messages appear because your
system doesn't have most of these devices.

The solution is simple: use the `smartd` configuration file
`/etc/smartd.conf` to specify which devices to monitor.

---
### On OSX smartctl prints `ATA_READ_LOG_EXT (addr=0x11:0x00, page=0, n=1) failed: 48-bit ATA commands not implemented` <a id="OnOSXsmartctlprintsATA_READ_LOG_EXTaddr0x11:0x00page0n1failed:48-bitATAcommandsnotimplemented"></a>

When I run `smartctl -x` output contains lines that:

```
ATA_READ_LOG_EXT (addr=0x11:0x00, page=0, n=1) failed: 48-bit ATA commands not implemented
Read SATA Phy Event Counters failed
```

This is because OSX provides very limited SMART API and direct disk access is not allowed. It is possible to use Linux LiveCD to get full information about the drive. 

---
### OSX - External USB / FireWire drive diagnostics support <a id="OSX-ExternalUSBFireWiredrivediagnosticssupport"></a>

Mac OS X does not support diagnosing external drives using S.M.A.R.T. technology “out of the box” . In order to allow your Mac to diagnose external drives, you will need to install a special third party driver. Please note that this is a requirement of Mac OS X, and not smartmontools. Links:

- [Binary Fruit page about USB/OSX](https://binaryfruit.com/drivedx/usb-drive-support) with instructions for the different versions
- [OSX Smart driver GitHub page](https://github.com/kasbert/OS-X-SAT-SMART-Driver) original source code of the driver


---

## Firmware Issues <a id="FirmwareIssues"></a>

---

### 'Error SMART Status command failed' What's the meaning of this `smartctl` message? <a id="ErrorSMARTStatuscommandfailedWhatsthemeaningofthissmartctlmessage"></a>

The SMART status command (health monitoring) is not working properly. This is found on USB 3.0 enclosures based on LucidPORT USB300 bridge with firmware 2447 or earlier. Firmware 2580 may fix this error. Contact both your enclosure manufacturer and LucidPORT to obtain a working firmware.

---

### 'Warning: ATA error count 9 inconsistent with error log pointer 5' What's the meaning of this `smartctl` message? <a id="Warning:ATAerrorcount9inconsistentwitherrorlogpointer5Whatsthemeaningofthissmartctlmessage"></a>

The ATA error log is stored in a circular buffer, and the ATA specifications are unambiguous about how the entries should be ordered. This warning message means that the disk's firmware does not strictly obey the ATA specification regarding the ordering of the error log entries in the circular buffer.  Smartmontools will correct for this oversight, so this warning message can be safely ignored by users. (On the other hand, firmware engineers: please read the ATA specs more closely then fix your code!).

---

## Distribution <a id="Distribution"></a>

---

### Is there a bootable standalone CD/DVD that contains smartmontools? <a id="IsthereabootablestandaloneCDDVDthatcontainssmartmontools"></a>

Yes there are. See the list of [Live CDs/DVDs containing smartmontools](livecds.md).

---

<a id="check-signature"></a>
### How can I check that the package hasn't been tampered with? <a id="HowcanIcheckthatthepackagehasntbeentamperedwith"></a>

Since the `smartmontools` utilities run as root, you might
be concerned about something harmful being embedded within
them. Starting with release 5.19 of `smartmontools`, the released
files have been GPG signed (except releases 5.37 to 5.39.1).
The fingerprint are given in a file on the release page with a name
like `smartmontools-7.3.tar.gz.asc`.

Please verify these using the
 - [Smartmontools GPG Signing Key (2021-2025)](https://sourceforge.net/p/smartmontools/code/HEAD/tree/trunk/www/SmartmontoolsSigningKey_2021.txt)
 - [Smartmontools GPG Signing Key (2019-2020)](https://sourceforge.net/p/smartmontools/code/HEAD/tree/trunk/www/SmartmontoolsSigningKey_2019.txt)
 - [Smartmontools GPG Signing Key (2017-2018)](https://sourceforge.net/p/smartmontools/code/HEAD/tree/trunk/www/SmartmontoolsSigningKey_2017.txt)
 - [Smartmontools GPG Signing Key (2015-2016)](https://sourceforge.net/p/smartmontools/code/HEAD/tree/trunk/www/SmartmontoolsSigningKey_2015.txt)
 - [Smartmontools GPG Signing Key (2013-2014)](https://sourceforge.net/p/smartmontools/code/HEAD/tree/trunk/www/SmartmontoolsSigningKey_2012.txt)
 - [Smartmontools GPG Signing Key (2010-2012)](https://sourceforge.net/p/smartmontools/code/HEAD/tree/trunk/www/SmartmontoolsSigningKey_2010.txt)
 - [Smartmontools GPG Signing Key (2005-2006)](https://sourceforge.net/p/smartmontools/code/HEAD/tree/trunk/www/SmartmontoolsSigningKey_2005.txt)
 - [Smartmontools GPG Signing Key (2003-2004)](https://sourceforge.net/p/smartmontools/code/HEAD/tree/trunk/www/SmartmontoolsSigningKey.txt)

---

## Historic <a id="Historic"></a>

The FAQ entries below are probably outdated.

---

### What Attributes does smartmontools not yet recognize? <a id="WhatAttributesdoessmartmontoolsnotyetrecognize"></a>

From Maxtor disks (99), (100), and (101).  These are not used by
Maxtor in SMART revision 5.  They will be used in SMART revision 6,
but the engineering group has not yet decided what to monitor with these Attributes.

---

### I see some strange output from `smartctl`.  What does it mean? <a id="Iseesomestrangeoutputfromsmartctl.Whatdoesitmean"></a>

The raw SMART attributes (temperature, power-on lifetime, and so
on) are stored in vendor-specific structures. Sometime these are
strange. Hitachi disks (at least some of them) store power-on
lifetime in minutes, rather than hours (see next question below). 
IBM disks (at least some of them) have three temperatures stored 
in the raw structure, not just one. And so on.

If you find strange output, or unknown attributes, have a look 
at our wiki pages, were we collect vendor specific info:

 - [Fujitsu](attributesfujitsu.md)
 - [IBM (Hitachi)](attributesibm.md)
 - [Maxtor](attributesmaxtor.md)
 - [Seagate](attributesseagate.md)
 - [Western Digital](attributeswestern-digital.md)

---

### Attribute 194 (Temperature Celsius) behaves strangely on my Seagate disk <a id="Attribute194TemperatureCelsiusbehavesstrangelyonmySeagatedisk"></a>

Some Seagate disks store the current temperature Celsius in both the RAW and NORMALIZED Attribute 194 values, and the maximum lifetime temperature in Celsius in the WORST value. Since cooler is better, this means that in this case, *lower* NORMALIZED Attribute values are farther from failure, and that over time the WORST Attribute values get *larger*, not *smaller* (as with other Attributes).

---

### `smartctl` reports the age as thousands of hours for my !Maxtor/Hitachi/Fujitsu disk, yet it is only a few days old <a id="smartctlreportstheageasthousandsofhoursformyMaxtorHitachiFujitsudiskyetitisonlyafewdaysold"></a>

On recent disks, Maxtor has started to use Attribute 9 to
store the power-on disk lifetime in minutes rather than hours. 
In this case, use the: `'-v 9,minutes'` option to correctly 
display hours and minutes.

Some models of Fujitsu disks use Attribute 9 to store
the power-on disk lifetime in seconds. In that case, use the:
`'-v 9,seconds'` option to correctly display hours, minutes and seconds.

---

### The power-on timer (Attribute 9 raw value) on my Maxtor disk acts strange. <a id="Thepower-ontimerAttribute9rawvalueonmyMaxtordiskactsstrange."></a>

There are three related problems with Maxtor's SMART firmware:

 1. On some Maxtor disks, the raw value of Attribute 9 (Power On Time) is *supposed* to be minutes. But it advances at an unpredictable rate, always more slowly than one count per minute. This is because when the disk is in idle mode, the counter stops advancing. This is only supposed to happen in standby mode. This will be corrected in Maxtor product lines released after October 2004.  
  

 1. In Maxtor disks that use the raw value of Attribute 9 as a minutes counter, only two bytes (of the six available) are used to store the raw value.  So it resets to zero once every 65536=2^16^ minutes, or about once every 1092 hours. This is fixed in all Maxtor disks manufactured after July 2003, where the raw value was extended to four bytes.  
  

 1. In Maxtor disks that use the raw value of Attribute 9 as a minutes counter, the hour time-stamps in the self-test and ATA error logs are calculated by right shifting 6 bits.  This is equivalent to dividing by 64 rather than by 60.  As a result, the hour time stamps in these logs advance 7% more slowly than they should.  Thus, if you do self-tests once per week at the same time, instead of the time-stamps being 168 hours apart, they are 157 hours apart.  This is also fixed in all Maxtor disks manufactured after July 2003.

---

### The time stamps in the self-test log don't correspond to the power-on time, when test was run on my Western Digital (WD) disk <a id="Thetimestampsintheself-testlogdontcorrespondtothepower-ontimewhentestwasrunonmyWesternDigitalWDdisk"></a>

The self-test log timestamps in many WD disks roll back to zero every
1092 hours (65536 minutes).  This problem is due to a WD firmware bug.
The power-on lifetime in hours is correctly stored in Attribute 9.
However when the power-on lifetime is calculated for self-test log
entries, the lifetime in minutes is put into a 16-bit register then
divided by 60.  The 16-bit register overflows and wraps around every 1092 hours.

For WD drives that exhibit this firmware bug, the relationship between
Attribute 9's raw value (H) and the time-stamps in the self-test log (h) are given by:
```
 Let H = power on hours as shown by Attribute 9 (correct)
 Let M = 60*H (power on minutes, correct)
 Let m = M mod 65536 (incorrect value of power on minutes)
 Let h = m/60 (incorrect value of power on hours, shown in self-test log)
```

---

### The (normalized) WORST Attribute values of my Western Digital (WD) disk are larger than the (normalized) CURRENT Attribute values <a id="ThenormalizedWORSTAttributevaluesofmyWesternDigitalWDdiskarelargerthanthenormalizedCURRENTAttributevalues"></a>

Western Digital firmware initializes SMART Attributes 10, 11, and
199 after either 120 spin-ups or 8 power-on hours.  Until that time,
they have the uninitialized value 253.

---

### Startup message: `smartd [FAILED]` on Fedora Core Linux system <a id="Startupmessage:smartdFAILEDonFedoraCoreLinuxsystem"></a>

Fedora Core is distributed with a `smartd` configuration file
`/etc/smartd.conf` that monitors the first IDE disk /dev/hda.  If this
device does not exist (or lacks SMART capability) you will get the
error message above.  Look in SYSLOG (/var/log/messages) for
additional details about what is going wrong.

The solution: If your system has only SCSI disks, or has IDE disk(s)
on a non-primary controller, just edit `/etc/smartd.conf` to reflect the
correct location of the drive(s).  Please also read the `smartd.conf`
man page for additional information.

---

### What's the story on IBM SMART disks? <a id="WhatsthestoryonIBMSMARTdisks"></a>

Apparently some of the older SMART firmware on IBM disks can
interfere with the regular operation of the disk. If you have this
problem, here is a link to an
[IBM DeskStar hard disk drive firmware update](http://haque.net/dtla_update/).

---

### Does it work on Windows? <a id="DoesitworkonWindows"></a>

Yes, finally it does. A windows port of `smartctl` 5.26 by [Christian Franke](http://sourceforge.net/users/chrfranke/) was first checked in 2004/02/23 on CVS branch
[RELEASE_5_26_WIN32_BRANCH](https://github.com/smartmontools/smartmontools/blob/main/branches/RELEASE_5_26_WIN32_BRANCH/sm5) and has been merged to the CVS trunk later.

The [Cygwin](https://www.cygwin.com/) or [MSYS](https://www.mingw.org/wiki/MSYS) environment can be used to build Windows (using [MinGW](http://www.mingw.org/)) versions of `smartctl` and `smartd`.
Installation instructions for binary distributions can be found [here](download.md#InstalltheWindowspackage).

---

### Why did the release version scheme change? <a id="Whydidthereleaseversionschemechange"></a>

It was non-standard.  So with the move to GNU Autoconf and GNU Automake it changed from 5.X-Y (where X and Y are one or more digits) to 5.Y. Starting with the first release, and moving forward in time, the releases are numbered as follows:

```
 5.0-1,
 5.0-2,
 ...,
 5.0-45,
 5.1-1,
 ...,
 5.1-18,
 5.19,
 5.20,
 ...
```

---

## Other <a id="Other"></a>

### How to create a bug report <a id="Howtocreateabugreport"></a>

See [wiki start page](about.md).

---
