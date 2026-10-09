# Smartmontools NVMe support <a id="SmartmontoolsNVMesupport"></a>

## About NVMe <a id="AboutNVMe"></a>
VM Express, NVMe, or Non-Volatile Memory Host Controller Interface Specification (NVMHCI), is a logical device interface specification for accessing non-volatile storage media attached via PCI Express (PCIe) bus. Some links related to the standard and vendor-specific implementations provided below:
- [Official specifications](http://nvmexpress.org/specifications/)
- [An NVM Express Tutorial](http://www.flashmemorysummit.com/English/Collaterals/Proceedings/2013/20130812_PreConfD_Marks.pdf), Kevin Marks (Dell) in *[Flash Memory Summit](http://www.flashmemorysummit.com/) 2013*.
- [Intel DC PC3608 specification](http://www.intel.com/content/dam/www/public/us/en/documents/product-specifications/ssd-dc-p3608-spec.pdf) with  Intel-specific log pages (CAh, C5h, DDh, C1h/C2h).
## Smartmontools NVMe support <a id="SmartmontoolsNVMesupport-1"></a>
Smartmontools supports NVMe starting from version 6.5. Please note, that currently NVMe support is considered as experimental. Currently implemented features:
- Basic information about controller name, firmware, capacity (`smartctl -i`)
- Controller and namespace capabilities (`smartctl -c`)
- SMART overall-health self-assessment test result and warnings (`smartctl -H`)
- NVMe SMART attributes (`smartctl -A`)
- NVMe error log (`smartctl -l error[,NUM]`)
- Ability to fetch any nvme log (`smartctl -l nvmelog,N,SIZE`)
- The `smartd` daemon tracks health (`-H`), error count (`-l error`) and temperature (`-W DIFF,INFO,CRIT`)

Currently NVMe support is implemented on Linux, FreeBSD, NetBSD, OpenBSD, Windows and OSX. Details about supported version/driver combinations are provided in the next section.
## NVMe support in the different OS <a id="NVMesupportinthedifferentOS"></a>
| OS and driver | Supported by OS | Supported by Smartmontools | Native management tools | Notes |
| --- | --- | --- | --- | --- |
| Linux 3.3 or later | ✓ | ✓ | [nvme-cli](https://github.com/linux-nvme/nvme-cli), [nvme-user](https://github.com/xnox/nvme-user) |  |
| FreeBSD 9.2 or later | ✓ | ✓ | [nvmecontrol](https://www.freebsd.org/cgi/man.cgi?query=nvmecontrol) |  |
| NetBSD 8.0 or later | ✓ | ✓ | [nvmectl](https://man.netbsd.org/nvmectl.8) | Smartmontools supports this since 6.6 ([r4343](https://github.com/smartmontools/smartmontools/commit/a272583c9227aeb7cb336f6663a609d8fc95dc77)). |
| OpenBSD 7.6 or later | ✓ | ✓ | - | Smartmontools supports this since [r5637](https://github.com/smartmontools/smartmontools/commit/678e6f58ca5268f9df272a6e41790fe0c1d35a45) (pre-7.5) |
| MacOS 10.10.3+ native NVMe support | ✓ | ✓ |  | Before release 10.13 only Apple-branded NVMe devices were supported, monitoring API is implemented ([NVMeSMARTClient](https://gist.github.com/samm-git/d4d7ba9929ff7d2c134251481505f544)) but not documented. Limited NVMe support added in the [DriveDx](https://binaryfruit.com/drivedx) app (commercial, closed source) and in the smartmontools since 6.6 ([r4438](https://github.com/smartmontools/smartmontools/commit/d90e4c6531b6f1dce8182b6f8cd3674325972c0d)). |
| Oracle Solaris 11.2+ | ✓ | - | [nvmeadm](https://docs.oracle.com/cd/E36784_01/html/E36871/nvmeadm-1m.html) | Interface is not documented |
| IllumOS [NVMe driver](https://github.com/illumos/illumos-gate/commit/3c9168fa8e9c30d55b3aa2fde74bd7da46df53f5) | ✓ | - | [nvmeadm](https://illumos.org/man/1m/nvmeadm) | [NVME_IOC ioctl](https://github.com/illumos/illumos-gate/blob/master/usr/src/uts/common/sys/nvme.h) |
| Windows with driver supporting `NVME_PASS_THROUGH` compatible with OpenFabrics *nvmewin* driver (the source code is no longer available) | ✓ | ✓ | Various vendor specific tools | Successfully tested with NVMe drivers from Intel, OCZ/Toshiba and Samsung. Does not work with Intel RST drivers or Microsoft NVMe drivers. |
| Windows with Intel RST driver | ✓ | - |  | See ticket [#1223](https://github.com/smartmontools/trac-tickets-archive/issues/1000). |
| Windows 7 to 2012.R2 with [Microsoft NVMe driver](https://support.microsoft.com/en-us/kb/2990941) | (✓) | - | ?? | Older Microsoft NVMe drivers do not provide a NVMe pass-through I/O-control. |
| Windows 10 with Microsoft NVMe driver (stornvme.sys) | ✓ | ✓ | ?? | Access via [enhanced version of IOCTL_STORAGE_QUERY_PROPERTY](https://learn.microsoft.com/en-us/windows/win32/fileio/working-with-nvme-devices) is supported since smartmontools 6.6 ([r4348](https://github.com/smartmontools/smartmontools/commit/72bf6b7379e128c24e54963baa56aef2aaa4b07d)). |
## NVMe pass-through support of USB to NVMe bridges <a id="NVMepass-throughsupportofUSBtoNVMebridges"></a>
See [USB wiki page](usb.md).

## Sample smartctl output <a id="Samplesmartctloutput"></a>
Sample `smartctl -x` output:
```
smartctl 6.5 2016-04-27 r4312 [x86_64-w64-mingw32-win10] (daily-20160427)
Copyright (C) 2002-16, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Number:                       Samsung SSD 950 PRO 256GB
Serial Number:                      ...
Firmware Version:                   1B0QBXX7
PCI Vendor/Subsystem ID:            0x144d
IEEE OUI Identifier:                0x002538
Controller ID:                      1
Number of Namespaces:               1
Namespace 1 Size/Capacity:          256,060,514,304 [256 GB]
Namespace 1 Utilization:            117,410,267,136 [117 GB]
Namespace 1 Formatted LBA Size:     512
Local Time is:                      Thu Apr 28 19:32:07 2016 CEST
Firmware Updates (0x06):            3 Slots
Optional Admin Commands (0x0007):   Security Format Frmw_DL
Optional NVM Commands (0x001f):     Comp Wr_Unc DS_Mngmt Wr_Zero Sav/Sel_Feat
Maximum Data Transfer Size:         32 Pages

Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +     6.50W       -        -    0  0  0  0        5       5
 1 +     5.80W       -        -    1  1  1  1       30      30
 2 +     3.60W       -        -    2  2  2  2      100     100
 3 -   0.0700W       -        -    3  3  3  3      500    5000
 4 -   0.0050W       -        -    4  4  4  4     2000   22000

Supported LBA Sizes (NSID 0x1)
Id Fmt  Data  Metadt  Rel_Perf
 0 +     512       0         0

=== START OF SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

SMART/Health Information (NVMe Log 0x02, NSID 0xffffffff)
Critical Warning:                   0x00
Temperature:                        40 Celsius
Available Spare:                    100%
Available Spare Threshold:          10%
Percentage Used:                    0%
Data Units Read:                    1,769,281 [905 GB]
Data Units Written:                 1,384,224 [708 GB]
Host Read Commands:                 24,646,213
Host Write Commands:                19,105,374
Controller Busy Time:               38
Power Cycles:                       32
Power On Hours:                     129
Unsafe Shutdowns:                   6
Media and Data Integrity Errors:    0
Error Information Log Entries:      44

Error Information (NVMe Log 0x01, max 64 entries)
Num   ErrCount  SQId   CmdId  Status  PELoc          LBA  NSID    VS
  0         44     0  0x002a  0x4016  0x000            0   255     -
  1         43     0  0x0029  0x4016  0x000            0   255     -
  2         42     0  0x0049  0x4016  0x000            0   255     -
  3         41     0  0x0048  0x4016  0x000            0   255     -
  4         40     0  0x001f  0x4004  0x000            0     0     -
  5         39     0  0x001e  0x4004  0x000            0     0     -
  6         38     0  0x001f  0x4004  0x000            0     0     -
  7         37     0  0x001e  0x4004  0x000            0     0     -
  8         36     0  0x001f  0x4004  0x000            0     0     -
  9         35     0  0x001e  0x4004  0x000            0     0     -
 10         34     0  0x001d  0x4004  0x000            0     0     -
 11         33     0  0x001c  0x4004  0x000            0     0     -
 12         32     0  0x001d  0x4004  0x000            0     0     -
 13         31     0  0x001c  0x4004  0x000            0     0     -
 14         30     0  0x001d  0x4004  0x000            0     0     -
 15         29     0  0x001c  0x4004  0x000            0     0     -
... (28 entries not shown)
```

## Development notes <a id="Developmentnotes"></a>
Development and debugging could be performed using [QEMU fork](https://github.com/OpenChannelSSD/qemu-nvme/) which can emulates NVMe device with most of the features supported, including SMART log pages, namespaces, etc. Tested with Linux and FreeBSD, full list of the options could be found in the [source code](https://github.com/OpenChannelSSD/qemu-nvme/blob/master/hw/block/nvme/nvme.c#L31). The NVMe emulation in the [upstream version of QEMU](http://wiki.qemu.org/Main_Page) (2.7.0) is still more limited (single namespace, no log pages).

[VirtualBox](https://www.virtualbox.org/) 5.1.0 or later also provides basic NVMe emulation.

See list of the [NVMe related tickets](https://github.com/smartmontools/smartmontools/issues) if you want to improve smartmontools NVMe support. 
