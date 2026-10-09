# USB devices and smartmontools <a id="USBdevicesandsmartmontools"></a>

To access USB storage devices, the operating system sends SCSI commands through the USB transport to the device. If the USB device is actually a (S)ATA or NVMe drive in an USB enclosure, the firmware of its USB bridge chip translates these commands into the corresponding ATA or NVMe commands. This works straightforward for read and write commands, but not for SMART commands.

To access SMART functionality, smartmontools must be able to send native ATA or NVMe commands directly to the drive. For USB devices, at least the following conditions must be met:
 - The USB bridge provides an ATA or NVMe pass-through command.
 - This command is supported by smartmontools.
 - The operating system provides a SCSI pass-through I/O-control which works through its USB-layer.
 - SCSI support is implemented in the operating system interface of smartmontools.

Many recent USB to SATA bridges support the pass-through commands from the SAT (*SCSI/ATA Translation*, ANSI INCITS 431-2007) standard. Other USB bridges provide vendor specific pass-through commands. The NVMe *SCSI Translation Reference* does not yet specify a pass-through command for NVMe.

The current version of smartmontools supports the following pass-through commands and USB bridges:
| **Command** | **USB bridges** | **smartctl option** | **48-bit ATA support** | **Comment** |
| --- | --- | --- | --- | --- |
| SAT ATA pass-through 12 and 16 | various (ASMedia, Initio, Oxford, newer JMicron, ...) | -d sat[,16]; -d sat,12 | requires '-d sat[,16]' | Older Linux kernels may require '-d sat,12' |
| Cypress ATACB | Cypress CY7C68300B/C (AT2LP), CY7C68310 (ISD-300LP) | -d usbcypress[,CMD] | No | CY7C68300A (AT2) may not work. |
| JMicron ATA pass-through | JMicron JM20329, JM20335-39, Prolific PL2507/3507 | -d usbjmicron[,p][,x][,PORT] | Yes (SATA only) | '-d usbjmicron,x' enables 48-bit support |
| Prolific ATA pass-through | Prolific PL2571/2771/2773/2775 | -d usbprolific | Yes | SMART access via eSATA may not work (ticket [#719](https://github.com/smartmontools/trac-tickets-archive/issues/498)) |
| Sunplus ATA pass-through | Sunplus SPIF215/6, SPIF225/6 | -d usbsunplus | Yes |  |
| ASMedia NVMe pass-through | ASMedia ASM2362 | -d sntasmedia | n/a | Supported since smartmontools 7.3 |
| JMicron NVMe pass-through | JMicron JMS583 | -d sntjmicron | n/a | Supported since smartmontools 7.0 |
| Realtek NVMe pass-through | Realtek RTL9210/1 | -d sntrealtek | n/a | Supported since smartmontools 7.2 |

Smartmontools was successfully tested with [many USB devices](supported-usb-devices.md) on several Platforms. If the USB ID can be obtained from the operating system, smartmontools also supports auto-detection of (the already tested) USB devices. Then it is not necessary to specify the '-d' option. See the following table for details:
| **Platform** | **...has SCSI pass-through** | **smartmontools supports SCSI** | **... supports USB** | **... auto-detection** | **... in smartd DEVICESCAN** | **Comment** |
| --- | --- | --- | --- | --- | --- | --- |
| Linux | Yes | Yes | YES | YES | YES | May not work with UAS, see below |
| Mac OS X | No | No | (Yes) | (Yes) | (Yes) | via OS-X-SAT-SMART-Driver, see below |
| FreeBSD | Yes | Yes | YES | YES | YES |  |
| NetBSD | Yes | Yes | YES | No | No |  |
| OpenBSD | Yes | Yes | YES | No | No |  |
| Solaris | Yes | Yes | YES | No | No |  |
| QNX | ? | No | No | No | No |  |
| OS/2 | No | No | No | No | No |  |
| Windows | Yes | Yes | YES | YES | YES |  |

If [UAS](https://en.wikipedia.org/wiki/USB_Attached_SCSI) transfer mode is enabled under Linux, `-d sat[,12]` may fail with error message `scsi error: unsupported field in scsi command` (see related tickets).
This is because the Linux kernel rejects SAT ATA pass-through commands for certain devices with broken pass-through support.
For more information see the [SAT with UAS under Linux](sat-with-uas-linux.md) page.

The [OS X SAT SMART Driver](https://github.com/kasbert/OS-X-SAT-SMART-Driver) provides access to SMART data for SAT, JMicron and Sunplus capable USB and Firewire devices on Mac OS X. On OSX El Capitan (10.11+) you may need a signed driver, which can be downloaded from the [DriveDx website](http://binaryfruit.com/drivedx/usb-drive-support/).
Note that this does not support 48-bit ATA commands (`-l xerror`) or non-SMART ATA commands (`-s apm,N`). Full USB support would require SCSI pass-through support which does not yet exist on Mac OS X.
