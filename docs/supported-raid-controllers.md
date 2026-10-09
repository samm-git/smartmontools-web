# Checking disks behind RAID controllers <a id="CheckingdisksbehindRAIDcontrollers"></a>

RAID controllers typically simulate a (logical) disk for each array of (physical) 
disks to the OS. Access to SMART functionality relies on ATA or SCSI pass through 
I/O controls providing direct access to each physical disk. 
But the standard I/O controls available are usually not designed to make 
this distinction between logical and physical disks. Therefore, smartmontools 
has to use vendor specific I/O controls. Support for disks behind RAID 
controllers is highly dependent on both platform and controller type.

| **RAID-Controller** | **Linux** | **FreeBSD** | **NetBSD** | **OpenBSD** | **MacOS** | **Solaris** | **Windows** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| LSI 3ware SATA RAID controller | `-d 3ware,N /dev/twX` <sup>[1.](#1)</sup> | `-d 3ware,N /dev/twX` <sup>[2.](#2)</sup> | - | - | - | - | `/dev/sdX,N`  <sup>[3.](#3)</sup> |
| Areca SATA![/SAS] RAID controller | `-d areca,N[/E] /dev/sgX` <sup>[4.](#4)</sup> | `-d areca,N[/E] /dev/arcmsrX` <sup>[11.](#11)</sup> | - | - | - | - | `-d areca,N[/E] /dev/arcmsrX` <sup>[12.](#12)</sup> |
| HighPoint RocketRAID SATA RAID controller | `-d hpt,L/M/N /dev/sdX` <sup>[5.](#5)</sup> | `-d hpt,L/M/N /dev/hptX` <sup>[6.](#6)</sup> | - | - | - | - | - |
| CCISS (HP/Compaq Smart Array Controller) | `-d cciss,N /dev/sgX` <sup>[7.](#7)</sup> | `-d cciss,N /dev/cissX` | - | - | - | - | - |
| LSI MegaRAID SAS RAID controller   
 Dell PERC 5/i,6/i controller | `-d megaraid,N /dev/sdX` <sup>[8.](#8)</sup> | `/dev/passX`, `-d megaraid,N /dev/mrsasX` <sup>[9.](#9)</sup> | - | - | - | - | `/dev/csmiX,N` <sup>[13.](#13)</sup> |
| Intel ICHxR RAID   
 (Intel !Rapid/Matrix Storage) | `/dev/sdX` | `/dev/adX` | ? | ? | ? | ? | `/dev/csmiX,N` <sup>[10.](#10)</sup> |
| Adaptec SAS RAID controller  
(devices supported by [aacraid](https://www.kernel.org/doc/Documentation/scsi/aacraid.txt) driver) | `-d aacraid,H,L,ID /dev/sdX`<sup>[14.](#14)</sup> | - | - | - | - | - | `-d aacraid,H,L,ID /dev/sdX`^[15.](#15) |

See the notes below and the [INSTALL](https://www.smartmontools.org/browser/trunk/smartmontools/INSTALL)
file for information about kernel and driver requirements on your platform. Also consult 
the [man pages](tocdoc.md#man-pages) for controller specific smartmontools options or
directives.

### Notes: <a id="Notes:"></a>

**<a id="1"></a>1.** 3ware RAID controllers are supported on Linux 
since smartmontools release 5.1-18. Support for char devices `/dev/twX` was added in release 5.33.

**<a id="2"></a>2.** 3ware support on FreeBSD is available since release 5.33, 
multiple controller and char device support was added in release 5.36.

**<a id="3"></a>3.** 3ware 9000 series only (added in release 5.37), 
requires Windows driver 9.4.0 or later. For older controllers, smartctl and smartd
provide limited SMART support through `tw_cli` tool, see man page.
Initially the SMART support was added only to the 32-bit Windows driver. With recent driver versions SMART access works on 64-bit Windows 7 (see [mailing list](http://sourceforge.net/mailarchive/forum.php?thread_name=20110420135554.701c2163%40linux.localdomain&forum_name=smartmontools-support)) but not on 64-bit XP/2003 (see ticket [#172](https://github.com/smartmontools/trac-tickets-archive/issues/172)).

**<a id="4"></a>4.** Areca SATA controller support for Linux was added in release 5.39. 
Areca SAS controller support (SATA drives only) was added in release 5.43.
SAS drive support was added in release 6.1.

**<a id="5"></a>5.** HighPoint RocketRAID support for Linux was added in release 5.37.

**<a id="6"></a>6.** HighPoint RocketRAID support for FreeBSD was added in release 5.39.

**<a id="7"></a>7.** CCISS (Compaq Smart Array Controller) support for Linux was added in release 5.37.
SATA auto-detection was added in release 5.43.

**<a id="8"></a>8.** Support for LSI MegaRAID controller on Linux was added in release 5.39. Please note that on some controllers device enumeration starts from 8 (use `-d megaraid,8` in such cases). In release 6.1 autoscan functionality implemented for the Linux version. 

**<a id="9"></a>9.** Support of LSI MegaRAID on FreeBSD is implemented with `mfip.ko` module and `/dev/passX` devices. Direct access support `-d megaraid` and device scanning was added in release 7.3.

**<a id="10"></a>10.** Intel ICHxR RAID (CSMI) support for Windows was added in release 5.41.
May also work with other controllers if the driver implements CSMI.

**<a id="11"></a>11.** Areca SATA controller support for FreeBSD was added in release 5.42.
Areca SAS controller support (SATA drives only) was added in release 5.43.
SAS drive support was added in release 6.1.

**<a id="12"></a>12.** Areca SATA/SAS controller support (SATA drives only) for Windows was added in release 5.43.
SAS drive support was added in release 6.0.

**<a id="13"></a>13.** According to user reports, some Windows drivers for LSI MegaRAID and Dell PERC 6 implement CMSI (see [ticket #243](https://github.com/smartmontools/trac-tickets-archive/issues/243#comment:7) and [drive-database mailing list](http://sourceforge.net/p/smartmontools/mailman/message/30879378/)), other drivers don't (see [support mailing list](http://sourceforge.net/p/smartmontools/mailman/message/31525054/)).

**<a id="14"></a>14.** Aacraid support for Linux was added in release 6.3. 

**<a id="15"></a>15.** Adaptec support for Windows was added in release 6.4. It is currently disabled on Windows due to unresolved bugs. Use `-d accraid,...,force` flag to try anyway. Details could be found in [#1515](https://github.com/smartmontools/trac-tickets-archive/issues/1292). Please submit patches if you aware how to fix this issue or open ticket to the vendor.
