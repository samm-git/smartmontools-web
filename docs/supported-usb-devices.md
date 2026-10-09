# Smartmontools USB Device Support <a id="SmartmontoolsUSBDeviceSupport"></a>

For a general overview of smartmontools's USB support, see [USB devices and smartmontools](usb.md).

The following tables list USB devices that have been successfully or unsuccessfully (below) tested with smartmontools. The entries are **sorted by USB ID**. If you have a device not on this list, **please tell us the test result**, by editing the tables below, and/or by sending an email to the smartmontools-database mailinglist. While you are at it: If your device is not listed [here](http://www.linux-usb.org/usb.ids), please report it to Mr. Gowdy.


### Supported Devices <a id="SupportedDevices"></a>

#### 0x0000 ≤ idVendor ≤ 0x0500 <a id="0x0000idVendor0x0500"></a>

| **Description** | **USB bridge** | **[idProduct](https://www.smartmontools.org/idvendor/idProduct)(http://www.linux-usb.org/usb.ids) (bcdDevice)** | **iManufacturer / iProduct** | **Option(s)** | **Tested on** | **Author / Reference** | **Comment** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ViPowER VPA7-25038 | ? | 0x0350:0x0038 (19.05) | ViPowER / ViPowER USB3.0 Storage | -d sat,12 | Linux | [ML-Archive](https://sourceforge.net/mailarchive/forum.php?thread_name=CABqXoScANdn84VR3QWi1wzB%3D_URL0VvzOx2pnhT-kL3wuF%3DXBw%40mail.gmail.com&forum_name=smartmontools-database) |  |
|  | **Hewlett-Packard** |  |  |  |  |  | **0x03f0** |
| HP Personal Media Drive | Sunplus | 0x03f0:0x070c (ec.02) | Hewlett-Packard / hd1600s | -d usbsunplus | Linux | darklite79 | Chip is SPIF215A |
| HP Desktop HD BD07 | ? | 0x03f0:0xbd07 | Hewlett-Packard WDBW2A0020HBK-EESN 2 TB HDD | -d sat | Linux | [Piotr 'pecet' Czarny](http://paste2.org/p/1974145) |  |
|  | **Buffalo** |  |  |  |  |  | **0x0411** |
| Buffalo JustStore Portable HD-PVU2 | ? | 0x0411:0x0181 | (empty) / (empty) | -d sat | ? | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=loom.20100719T192921-767%40post.gmane.org&forum_name=smartmontools-database) |  |
| Buffalo DriveStation External USB3.0 Hard Drive HD-LBU3 | ? | 0x0411:0x01f0 | BUFFALO / HD-LBU3 | -d sat | Linux | hokra001 | `SMART Status not supported: Incomplete response, ATA output registers missing` |
| Philips SDE5170SC SATA | ? | 0x0471:0x201f | Philips / SDE5170SC SATA | -d sat | Linux | favonia |  |
|  | **Texas Instruments** |  |  |  |  |  | **0x0451** |
| TUSB9261 | Texas Instruments | 0x0451:0x9261 | TUSB9261 USB3.0-to-Serial-ATA-Bridge | -d sat | Linux | Thore Mehr |  |
|  | **Toshiba** |  |  |  |  |  | **0x0480** |
| Toshiba Canvio 500GB | ? | 0x0480:0xa004 | ? | -d usbsunplus | ? | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=AANLkTinGzXNuMABAfDbojnNH7F-%3DPaxJhuvd-qDHGYzj%40mail.gmail.com&forum_name=smartmontools-database) |  |
| Toshiba Canvio Basics 3.0 1TB | (ASMedia ASM1351 ?) | 0x0480:0xa006 (0x001) | Toshiba / MQ01ABD100 | -d sat | Linux | Phil Rosati |  |
| [Sharkoon SATA QuickPort USB 3.1 Type C](https://sharkoon.com/product/1175/17652) | ASMedia ASM1351 | 0x0480:0xa006 (0x100) | SHARKOON / QuickPort USB 3.1 | -d sat | Windows 10 1803 | Christian Franke |  |
| Toshiba Canvio 3.0 1TB | ? | 0x0480:0xa007 (0x100) | Toshiba / HDTC610XK3B1 | -d sat | Linux | [ML-Archive](https://sourceforge.net/mailarchive/message.php?msg_id=31111404) |  |
| Toshiba Canvio Basics 3.0 1TB | ? | 0x0480:0xa00d (0x407) | Toshiba /  HDTB210XK3BA | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/message.php?msg_id=31776617) |  |
| Toshiba 2.5" 1.0TB | ? | 0x0480:0xa00c (0x107) | Toshiba / HDTP110HK3AA | -d sat | Linux | [ML Archive](http://sourceforge.net/p/smartmontools/mailman/message/33049264/) |  |
| Toshiba Stor.E Basics 1.0TB | ? | 0x0480:0xa00e (0x000) | TOSHIBA MQ01UBD100 | -d sat | Linux | [@pfoo07](https://twitter.com/pfoo07) |  |
| Toshiba Canvio Basics HDD - 500GB | ? | 0x0480:0xa202 | TOSHIBA MQ01UBD050 | -d sat | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2017-September/000016.html) | `SMART Status not supported: Incomplete response, ATA output registers missing` |
| Toshiba Canvio Ready 1TB 2.5" USB3.0 | ? | 0x0480:0xb206 (0x000) | Toshiba / HDTP210EW3AA | -d sat | Linux | Oleg |  |
|  | **Cypress** |  |  |  |  |  | **0x04b4** |
| Cooler Master X Craft 350 Lite | Cypress | 0x04b4:0x6830 (2.40) | Cypress AT2LP/ (empty) | -d usbcypress | Linux | Matthieu CASTET |  |
| Medion Drive-n-go (160GB 2.5") | Cypress | 0x04b4:0x6830 | ? | -d usbcypress | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4B5A484F.1080900%40ahsoftware.de&forum_name=smartmontools-database) |  |
| Xirex X-320 | Cypress | 0x04b4:0x6830 | ? | -d usbcypress | Windows XP | EMail from Stefan Novak |  |
| MadDog/3.5 ATA ext USB (silver, flat one side) | Cypress | 0x04b4:0x6830 | ? | -d usbcypress | WinXP | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4AEF2976.16272.44C2E0E%40Webbed.Pete.gmail.com&forum_name=smartmontools-support) | See also newer model below. |
|  | **Samsung** |  |  |  |  |  | **0x04e8** |
| Samsung S2 Portable | JMicron | 0x04e8:0x1f06 | ? | -d sat | ? | Ticket [#136](https://github.com/smartmontools/trac-tickets-archive/issues/136) |  |
| Samsung S2 Portable | JMicron | 0x04e8:0x1f08 | ? | -d usbjmicron | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4CDEDA5F.6010604%40gmx.de&forum_name=smartmontools-database) |  |
| Samsung S2 Portable | ? | 0x04e8:0x1f0a (0x000) | SAMSUNG S2 Portable 1TB; 2.5"; P/N: HX-MUD10EA/G2 | -d usbjmicron or -d sat | Linux | [ML-Archive](http://sourceforge.net/p/smartmontools/mailman/message/33049329/) |  |
| Samsung S1 Portable | ? | 0x04e8:0x2f03 | ? | -d usbjmicron | Linux | jal2 |  |
| Samsung Story Station | ? | 0x04e8:0x5f06 | ? | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=201001132101.40266.jos%40vandenoever.info&forum_name=smartmontools-support) |  |
| Samsung G2 Portable | JMicron | 0x04e8:0x6032 | ? | -d usbjmicron | Linux | Ticket [#132](https://github.com/smartmontools/trac-tickets-archive/issues/132) |  |
| Samsung Story Station 3.0 | ? | 0x04e8:0x6054 | ? | -d sat | Linux | Ticket [#130](https://github.com/smartmontools/trac-tickets-archive/issues/130) |  |
| Samsung M2 Portable 3 | ? | 0x04e8:0x60c5 | ? | -d sat | Linux | [Piotr Szymaniak](http://grubelek.pl) |  |
| Samsung D3 Station | JMicron | 0x04e8:0x6123 (0x202) | Samsung D3 Station Desktop USB 3.0 Hard Drive (2TB) | -d sat | Linux | Gareth Halfacree |  |
| Samsung M3 Portable 500GB | ? | 0x04e8:0x61b3 | ? | -d sat | Linux | Fabien Micaelli |  |
| Samsung M3 Portable 1TB | ? | 0x04e8:0x61b6 | ? | -d sat | Linux | Chris Dennis |  |
| [Samsung Portable SSD T5](https://www.samsung.com/semiconductor/minisite/ssd/product/portable/t5/) | ? | 0x04e8:0x61f5 (0x100) | Samsung / Portable SSD T5 with USB 3.1 Gen 2 interface, | -d sat | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2018-March/000168.html) |  |
| Samsung starter kit | ? | 0x04e8:0x8001 | Samsung / SATA to USB 3.0 connector | -d sat | Linux | DaveS |  |
| Samsung SSD EVO 850 Starter-Kit UAS USB3<->SATA bridge | ? | 0x04e8:0x8003 (0x100) |  | -d sat | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2019-October/000440.html) | Oct 2019 |
|  | **Sunplus** |  |  |  |  |  | **0x04fc** |
| Advance external box | Sunplus | 0x04fc:0x0c05 | Advance external box usb2.0 hi speed 3,5" / USB to PATA | -d usbsunplus | WinXP | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=687023.37243.qm%40web28405.mail.ukl.yahoo.com&forum_name=smartmontools-database) |  |
| Fujitsu Siemens Storagebird Solo 20-U (250GB 2.5") | Sunplus SPIF215 | 0x04fc:0x0c15 | ? | -d usbsunplus | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4B5A484F.1080900%40ahsoftware.de&forum_name=smartmontools-database) |  |
| RaidSonic ICY BOX IB-351StUS2-B | Sunplus SPIF215 | 0x04fc:0x0c15 (0xf615) | Sunplus Technology Co., Ltd. / USB to Serial-ATA bridge | (none) | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=66135290906110515w6dfce13ere9cff8b13e5397bc%40mail.gmail.com&forum_name=smartmontools-support) |  |
| Coolmax 2.5 ext USB/eSATA | Sunplus SPIF225 | 0x04fc:0x0c25 | ? | (none) | WinXP | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4AEF2976.16272.44C2E0E%40Webbed.Pete.gmail.com&forum_name=smartmontools-support) |  |
| D-Sparrow EE2501 eS | Sunplus SPIF225 | 0x04fc:0x0c25 (1.03) | ? | -d usbsunplus | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090508130107.GA4709%40blackice.local&forum_name=smartmontools-support) |  |
| RaidSonic ICY BOX IB-250StU-B | Sunplus SPIF225(?) | 0x04fc:0x0c25 (1.03) | ? | (none) | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090531231511.BBD.0%40paddy.troja.mff.cuni.cz&forum_name=smartmontools-support) |  |
| RaidSonic ICY BOX IB-390StUS-B | Sunplus SPIF225 | 0x04fc:0x0c25 (1.03) | Sunplus Technology Inc. / USB to Serial-ATA bridge | -d usbsunplus | Windows XP | Christian Franke |  |
| Spire GigaPod VIII | Sunplus SPIF225 | 0x04fc:0x0c25 (1.03) | Sunplus Technology Inc. / USB to Serial-ATA bridge | -d usbsunplus | Linux, Windows XP, FreeBSD, NetBSD, OpenBSD, Solaris | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090605221824.251112d8%40linux.localdomain&forum_name=smartmontools-support) | Option '-d usbsunplus' not required on Linux, FreeBSD and Windows. |

#### 0x0500 < idVendor ≤ 0x0a00 <a id="0x0500idVendor0x0a00"></a>

| **Description** | **USB bridge** | **[idProduct](https://www.smartmontools.org/idvendor/idProduct)(http://www.linux-usb.org/usb.ids) (bcdDevice)** | **iManufacturer / iProduct** | **Option(s)** | **Tested on** | **Author / Reference** | **Comment** |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | **Intrinsix Corp** |  |  |  |  |  | **0x0578** |
| Insignia Dual Drive Docking Station | ? | 0x0578:0x0578 (71.01) | MAYA / NS-PCHDEDS19 Series DISK1 \\ MAYA / NS-PCHDEDS19 Series DISK2 | -d sat | Ubuntu Jammy | Same bridge chip in different enclosure:\\ [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-support/2020-March/000447.html) | Mar 2020 \\ `SMART Status not supported: Incomplete response, ATA output registers missing` |
|  | **Iomega** |  |  |  |  |  | **0x059b** |
| Iomega LPHD080-0 | Cypress | 0x059b:0x0272 | ? | -d usbcypress | WinXP | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4AEF2976.16272.44C2E0E%40Webbed.Pete.gmail.com&forum_name=smartmontools-support) |  |
| Iomega Desktop Hard Drive, USB 2.0, 500 GB | ? | 0x059b:0x0274 (0x000) | ? | -d usbjmicron,x | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2017-December/000086.html) | `SMART Status not supported: Incomplete response, status byte missing [JMicron]` |
| Iomega MDHD-UE | ? | 0x059b:0x0277 | ? | -d usbjmicron | ? | ? |  |
| Iomega LDHD-UP | Sunplus ? | 0x059b:0x0370 | ? | -d usbsunplus | Linux | bikepunk2; Ticket [#83](https://github.com/smartmontools/trac-tickets-archive/issues/83) |  |
| Iomega | ? | 0x059b:0x0475 | ? | -d usbjmicron | Tomato USB |  |  |
| Iomega LDHD-UP | ? | 0x059b:0x0575 | ? | -d usbjmicron | Ubuntu 14.04 |  |  |
| Iomega LDHD-UP2 | Sunplus SPIF301-HL237 | 0x059b:0x0577 | Iomega Prestige USB 2.0 | -d usbsunplus | Ubuntu 25.10 | miscextra |  |
|  | **LaCie** |  |  |  |  |  | **0x059f** |
| LaCie d2 Quadra | Oxford Semiconductors OXUF924DSB-FBAG | 0x059f:0x0828 | LaCie / External HDD | -d sat | Linux | Cmdr_Zod |  |
| LaCie Hard Disk (Neil Poulton design) | ? | 0x059f:0x0951 | ? | -d usbjmicron | Linux | Nicolas GagniÃ¨re; Ticket [#69](https://github.com/smartmontools/trac-tickets-archive/issues/69) | Older model than model below (750GB) |
| LaCie Rugged Triple Interface (USB 2.0/FW 400/FW 800) | ? | 0x059f:0x100c | ? | -d sat | Linux | [ML-Archive](https://sourceforge.net/mailarchive/forum.php?thread_name=20130629014934.GA32256%40shire.ontko.com&forum_name=smartmontools-database) | (using the USB interface) |
| LaCie Hard Disk | ? | 0x059f:0x1010 | ? | -d usbsunplus | Linux | [Piotr Szymaniak](http://grubelek.pl) |  |
| LaCie Hard Disk (Neil Poulton design) | ? | 0x059f:0x1018 | ? | -d sat | Windows XP (via VMWare on OS X) | EMail from Marc | Older 'FA Porsche design' model is not supported, see below. |
| LaCie Hard Disk | JMicron | 0x059f:0x1019 | ? | -d usbjmicron | ? | Ticket [#65](https://github.com/smartmontools/trac-tickets-archive/issues/65) |  |
| LaCie Rugged USB | JMicron | 0x059f:0x101d | LaCie / Rugged USB | -d usbjmicron,x | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=AANLkTimbxxwQ-i56hZjxHIHy_Z09fdSMrebIdB9NZTwJ%40mail.gmail.com&forum_name=smartmontools-support) |  |
| LaCie Little Disk | JMicron | 0x059f:0x1021 | LaCie / Little Disk | -d usbjmicron | WinXP | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=C6D47B82-6A36-4896-8563-C17E11E3FA6A@gmx.at&forum_name=smartmontools-support) |  |
| LaCie hard disk | ? | 0x059f:0x1029 | ? | -d sat | Linux | Ticket [#153](https://github.com/smartmontools/trac-tickets-archive/issues/153) |  |
| LaCie rikiki | JMicron | 0x059f:0x102a | ? | -d usbjmicron,x | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4C33B003.5040304%40gmx.net&forum_name=smartmontools-support) |  |
| LaCie D2 USB3 | LucidPort USB300 | 0x059f:0x103d | LaCie / External HDD | -d sat | Linux | Cmdr_Zod |  |
| LaCie rikiki USB 3.0 | ? | 0x059f:0x1049 | ? | -d sat | Linux | Lars Tewes |  |
| LaCie minimus USB 3.0 | ? | 0x059f:0x104a | ? | -d sat | Linux | dforsi |  |
| LaCie Porsche design Desktop drive P'9230 | ? | 0x059f:0x1053 | Lacie USB 3.0 4TB external drive | -d sat | Linux (Fedora 13) | gilles-b |  |
| LaCie Porsche Design Mobile Drive | ? | 0x059f:0x106d | Lacie USB 3.0 external drive | -d sat | Linux | stvbrk |  |
| LaCie Rugged USB-C | ? | 0x059f:0x1093 | 4 TB STFR4000800 w/ ST4000LM024 | -d sat | Linux 5.10.0 | mist |  |
| Archos Jukebox Recorder v2 | Cypress ISD300A1 | 0x05ab:0x0060 (11.01) | Archos / MP3 player and recorder | -d usbcypress | Windows Vista SP2 | Boris Gjenero |  |
| Apple iPod Mini 1st/2nd generation | ? | 0x05ac:0x1205 (0.01) | Apple iPod Mini | -d scsi | Linux | Jens Erat | No health data and scans |
| (No Name) | Genesys Logic | 0x05e3:0x0718 (0.41) | (empty) / USB Storage | -d sat -T permissive | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4A8062D7.2010900%40buttersideup.com&forum_name=smartmontools-support) | SMART status command fails, see reference. |
| Chieftec USB 3.0 2.5" case | Genesys Logic GL3310 | 0x05e3:0x0731 | Chieftec / EEB-125S-U3 | -d sat | Linux | chrisheitkamp |  |
|  | **Prolific** |  |  |  |  |  | **0x067b** |
| (No Name) | Prolific PL2507 | 0x067b:0x2507 | ? | -d usbjmicron,x | Linux | Ondrej Zary, also [ML-Archive](https://sourceforge.net/mailarchive/forum.php?thread_name=1779131327.21974.1335487159222.JavaMail.mail%40webmail15&forum_name=smartmontools-support) |  |
| Vantec NexStar HX 3.5-Inch SATA to USB 3.0/eSATA HDD Enclosure with Fan NST-330SU3-BK | Prolific PL2773 | 0x067b:0x2773 | External HD enclosure | [OSX SAT-SMART driver](https://github.com/kasbert/OS-X-SAT-SMART-Driver) | OS X Yosemite w/ smartmontools 6.3 from homebrew | Andrew Berry |  |
| RaidSonic ICY BOX IB-120StU3 | Prolific PL2773 | 0x067b:0x2773 | Generic / External | -d usbprolific | Linux 3.16 (Ubuntu 14.10) | Tommy Vestermark |  |
| Sharkoon Quickport Combo U3 | Prolific PL2773 | 0x067b:0x2773 | Sharkoon Quickport Combo U3 | none (-d sat) | Linux 5.11 (Linux Mint 20.2) | Claudio Kuenzler |  |
| RaidSonic ICY BOX IB-360UE-BL | Prolific PL3507 | 0x067b:0x3507 (0.01) | Prolific Technology Inc. / ATAPI-6 Bridge Controller | -d usbjmicron,p | Linux (Debian squeeze) | freebooter | latest f/w used |
| Safecom 3.5" External Box | Prolific PL-3507 (LF05524C) | 0x067b:0x3507 (0.01) | Prolific Technology Inc. / Mass Storage Device | -d usbjmicron,p | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=alpine.LFD.2.03.1301022150240.32325%40obsidian.localdomain&forum_name=smartmontools-support) |  |
| Packard Bell Go | Micron Go | 0x0766:0x001b (0.00) |  | -d usbjmicron | Linux | Rafal Rzepecki | 2.5" SATA enclosure |
|  | **Freecom** |  |  |  |  |  | **0x07ab** |
| Essentielb 2,5'', 1.5 TB, USB 3.0 | ? | 0x07ab:0xfc17 (0x100) | Freecom Technologies / Essentiel B | -d sat | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2018-April/000173.html) |  |
| Freecom Quattro 3.0 | ? | 0x07ab:0xfc77 | Freecom Technologies / External HDD | -d sat | Linux | Cmdr_Zod |  |
| Freecom Hard Drive XS | Sunplus SPIF215(?) | 0x07ab:0xfc8e (1.0f) | Freecom / Freecom Hard Drive XS | -d usbsunplus | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20091016113813.GA81761738%40CIS.FU-Berlin.DE&forum_name=smartmontools-support) |  |
| Freecom HD 500GB | JMicron USB/ATA | 0x07ab:0xfcda | Freecom Technologies / SSPACC USB External HDD (SAMSUNG HD502IJ) | -d usbjmicron | Linux | Glen Pike |  |
| Freecom HD Classic 500GB | JMicron USB/ATA | 0x07ab:0xfcd6 | Freecom Technologies (SAMSUNG HM500JI) | -d usbjmicron | Linux | Rudolf Kleijwegt |  |
| Freecom ToughDrive 750GB | JMicron USB/ATA | 0x07ab:0xfc9b | Freecom Technologies | -d usbjmicron | Linux | Julien Gaulmin |  |
| Freecom ToughDrive 1TB | ? | 0x07ab:0xfc95 | Freecom Technologies | -d sat | Linux | Julien Gaulmin |  |
| SanDisk Extreme USB 3.0 | [Fujitsu MB86C311B](https://edevice.fujitsu.com/fj/catalog/en-pdf/AD04-00055-1E.pdf) | 0x0781:0x5580 (0.10) | SanDisk / Extreme | -d sat | Linux | Gurken Papst | USB flash drive, inside is a SanDisk U100 series SSD |
|  | **SupTronics** |  |  |  |  |  | **0x0850** |
| SupTronics X850 v3.1 | ? | 0x0850:0x0031 (0x100) | ? | -d sat | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2019-October/000437.html) | Oct 2019 \\ (Possibly unstable with Raspberry; see post.) |
|  | **Zalman** |  |  |  |  |  | **0x0928** |
| [Zalman ZM-VE200](http://www.zalman.com/eng/product/Product_Read.asp?idx=431) | ? | 0x0928:0x0010 (0x304) | ? | -d sat | Linux | Starodumoff Ilya | lsusb: ID 0928:0010 Oxford Semiconductor, Ltd |
|  | **Toshiba** |  |  |  |  |  | **0x0930** |
| Toshiba PX1270E-1G16 | Sunplus SPIF215(?) | 0x0930:0x0b03 | ? | -d usbsunplus | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=200912201112.09964.jos%40vandenoever.info&forum_name=smartmontools-support) |  |
| Toshiba PX1396E-3T01 | Sunplus SPIF215(?) | 0x0930:0x0b09 | ? | -d usbsunplus | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=200905122323.09557.hanno%40hboeck.de&forum_name=smartmontools-support) | Looks similar to [Dura Micro 501](http://www.duramicro.com/501.html). |
| Toshiba Stor.E Steel series | Sunplus | 0x0930:0x0b11 | ? | -d usbsunplus | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=Pine.LNX.4.64.1101041942540.6871%40pluto.tugraz.at&forum_name=smartmontools-support) |  |
|  | **!Toshiba/Lumberg** |  |  |  |  |  | **0x0939** |
| Toshiba Stor.E D10 | [Initio INIC-1610PL](http://www.initio.com/Html/inic-1610.html) | 0x0939:0x0b13 | Lumberg, Inc. | -d sat,12 | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2019-September/000429.html) | Sep 2019 |
|  | **Apricorn** |  |  |  |  |  | **0x0984** |
| Apricorn SATA Wire (2.5") | ? | 0x0984:0x0040 | Apricorn SATA Wire (2.5") | -d sat | Linux | fytodent | That's an adapter cable bundled with some crucial SSDs. |

#### 0x0a00 < idVendor ≤ 0x1000 <a id="0x0a00idVendor0x1000"></a>

| **Description** | **USB bridge** | **[idProduct](https://www.smartmontools.org/idvendor/idProduct)(http://www.linux-usb.org/usb.ids) (bcdDevice)** | **iManufacturer / iProduct** | **Option(s)** | **Tested on** | **Author / Reference** | **Comment** |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | **Seagate** | **0x0bc2** |  |  |  |  | [Note: When using Seagate enclosures with Linux, see special discussion on SAT-with-UAS-Linux page.](sat-with-uas-linux.md) |
| Seagate Barracuda 7200.9 | Cypress | 0x0bc2:0x0503 (0x240) | Seagate ST3250824A External Drive | -d usbcypress | Linux | Michael R. Crusoe |  |
| Seagate FreeAgent Go | Oxford 931 | 0x0bc2:0x2000 | ? | (none) | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=55a4f86e0908041301i20fbab74y5a638f9d49e66843%40mail.gmail.com&forum_name=smartmontools-support) |  |
| Seagate FreeAgent Go | Oxford 931 | 0x0bc2:0x2100 | ? | -d sat,12 | Linux | [NG-Thread (German)](http://groups.google.de/group/de.comp.hardware.laufwerke.festplatten/browse_thread/thread/61a320ac37d772ea) |  |
| Seagate FreeAgent Go | Oxford 931 | 0x0bc2:0x2101 | ? | -d sat,12 | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4B5A484F.1080900%40ahsoftware.de&forum_name=smartmontools-database) |  |
| Seagate FreeAgent Go FW | ? | 0x0bc2:0x2200 | ? | -d sat | ? | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=55a4f86e1003072054h4055bcb1v97832231ba07fb14%40mail.gmail.com&forum_name=smartmontools-support) |  |
| [Seagate Expansion Portable](http://www.seagate.com/www/en-gb/products/external/expansion/expansion_portable/) | ? | 0x0bc2:0x2300 | ? | -d sat,12 | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20100119133739.08b92da0%40farnsworth&forum_name=smartmontools-support) |  |
| Seagate Expansion Portable STBX1000301 | ? | 0x0bc2:0x2312 (0x219) | ? | -d sat | Linux | Phil Rosati |  |
| Seagate Expansion Portable 1 TB, 2015 Edition | ? | 0x0bc2:0x231a (7.06) | Seagate / Expansion | -d sat | Linux | Gurken Papst | USB 3.0, model number is STEA1000400, drive inside is a ST1000LM024 |
| Seagate Expansion Portable 2 TB | ? | 0x0bc2:0x231a (0x710) |  | -d sat | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-support/2019-October/000361.html) | Oct 2019 \\ Works in UAS mode (including SAT pass-through) with the [Linux UAS "suppress NO-ATA-1X flag" workaround](sat-with-uas-linux.md#workaround-unset-t) |
| Seagate Expansion Portable 3 TB STEA3000400 | ? | 0x0bc2:0x231a (7.08) | Seagate RSS LLC / Expansion Portable | -d sat | Linux | Ticket [#971](https://github.com/smartmontools/trac-tickets-archive/issues/748) | Jan 2018  \\ Works in UAS mode (including SAT pass-through) with the [Linux UAS "suppress NO-ATA-1X flag" workaround](sat-with-uas-linux.md#workaround-unset-t) \\ USB 3.0, drive inside is a ST3000LM024 |
| [Seagate Expansion Portable 2 TB](http://web.archive.org/web/20150424052258/http://www.seagate.com/external-hard-drives/portable-hard-drives/standard/expansion-portable/?) | ? | 0x0bc2:0x2321 | Seagate / Expansion | -d sat | Linux | Gurken Papst | USB 3.0, model number is STBX2000401, drive inside is a ST2000LM003 |
| Seagate Expansion Portable 1 TB | ? | 0x0bc2:0x2322 | Seagate / Expansion | -d sat | Linux | Scrool | Drive inside is a ST2000LM007-1R8174 (?). Works in UAS mode with the [Linux UAS "suppress NO-ATA-1X flag" workaround. |
| Seagate STGX1000400 Portable 1TB | ? | 0x0bc2:0x2343 | ? | -d sat | Linux | [Dan Martin](sat-with-uas-linux.md#workaround-unset-t)(https://listi.jpberlin.de/pipermail/smartmontools-support/2019-November/000375.html) | Nov 2019 \\ Works in UAS mode (including SAT pass-through) with the [Linux UAS "suppress NO-ATA-1X flag" workaround](sat-with-uas-linux.md#workaround-unset-t) |
| Seagate STGX2000400 Portable 2TB | ? | 0x0bc2:0x2344 | ? | -d sat | Linux | [nagimov / Ticket-1478](https://github.com/smartmontools/trac-tickets-archive/issues/1255#ticket) | Apr 2021 \\ Works in UAS mode (including SAT pass-through) with the [Linux UAS "suppress NO-ATA-1X flag" workaround](sat-with-uas-linux.md#workaround-unset-t) |
| Seagate Portable Drive 5TB | ? | 0x0bc2:0x2344 | ? | -d sat | Proxmox (Kernel 6.8.12-8-pve) | jonmchan | Failed to show any info with -d sat (likely because UAS mode is used) |
| Seagate FreeAgent Desktop | Oxford 931SF | 0x0bc2:0x3000 | ? | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4B46067F.80301%40tangram.nildram.co.uk&forum_name=smartmontools-database) |  |
| Seagate FreeAgent Desk | ? | 0x0bc2:0x3001 | ? | -d sat | Windows XP (via VMWare on OS X) | EMail from Marc |  |
| Seagate FreeAgent XTreme | ? | 0x0bc2:0x3101 | [Seagate FreeAgent XTreme 640GB](http://www.seagate.com/files/docs/pdf/datasheet/disc/ds_fa_xtreme_us.pdf) | -d sat | Ubuntu 12.04.4 LTS (GNU/Linux 3.2.0-59-generic i686) | submitted by DIG (mbl) |  |
| Seagate Expansion Desk | ? | 0x0bc2:0x3300 | ? | -d sat | Linux | [Debian bug 621411](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=621411) |  |
| Seagate Expansion External | ? | 0x0bc2:0x3320 | Seagate® Expansion™ Desktop External 4 TB STBV4000100 | -d sat | Linux |  |  |
| Seagate Expansion External | ? | 0x0bc2:0x3332 | ? | -d sat | Linux | Ticket [#223](https://github.com/smartmontools/trac-tickets-archive/issues/223) |  |
| Seagate Expansion External | ? | 0x0bc2:0x3343 | Seagate 8TB external | -d sat | Linux | eberhab, [#1312](https://github.com/smartmontools/trac-tickets-archive/issues/1089) |  |
| Seagate FreeAgent GoFlex USB 2.0 | ? | 0x0bc2:0x5021 (1.48) | Seagate / FreeAgent GoFlex | -d sat | Linux | Ticket [#131](https://github.com/smartmontools/trac-tickets-archive/issues/131) |  |
| Seagate FreeAgent GoFlex USB 3.0 | ? | 0x0bc2:0x5030 (1.00) | Seagate / FreeAgent GoFlex | -d sat,12 and -d sat,16 | Linux | Sergii Solianyk | Ubuntu 16.04 under VMware Fusion |
| Seagate FreeAgent GoFlex USB 3.0 | ? | 0x0bc2:0x5031 (1.00) | Seagate / FreeAgent GoFlex | -d sat,12 | Linux |  |  |
| Seagate FreeAgent GoFlex Desk | ? | 0x0bc2:0x5070 | Seagate / FreeAgent GoFlex base | -d sat | Linux | pessimus |  |
| Seagate FreeAgent GoFlex Desk USB 3.0 | ? | 0x0bc2:0x50a1 | ? | -d sat,12 | Win7 | Ticket [#151](https://github.com/smartmontools/trac-tickets-archive/issues/151) | -d sat,16 does not work |
| Seagate FreeAgent GoFlex Desk USB 3.0 4TB | GoFlex Desk | 0x0bc2:0x50a5 | Seagate FreeAgent GoFlex Desk USB 3.0 4TB | -d sat | Linux Ubuntu 12.04 | Tyler Guthrie |  |
| Maxtor M3 Portable 4TB | ? | 0x0bc2:0x61b7 | Maxtor / Seagate (or possibly a re-branded Samsung) M3 portable drive | -d sat | Linux, Ubuntu 14.04 x86_64, kernel 3.16 | Lucas Hadjilucas |  |
| Seagate Backup Plus 3 TB Desktop | ? | 0x0bc2:0xa0a4 | Seagate 1DXAP3-500 3 TB / STCA3000101 | -d sat | Linux | thetrivialstuff |  |
| Seagate Slim Portable Drive 500GB | ? | 0x0bc2:0xab05 | Seagate RSS LLC | -d sat | Octopi 5.4.72-v7+ arm7l | Erik Zachrisson | smartctl 6.6 2017-11-04 [r4594](https://github.com/smartmontools/smartmontools/commit/97da4d33ce37da9627178d8e9db8c5415aa4e6de) |
| Seagate Backup Plus Portable Drive USB 3.0 2TB | ? | 0x0bc2:0xab24 | Seagate / SRD00F1 | -d sat,12 | Linux Ubuntu 14.04 (3.19.0-30-generic) x86_64 | remerson | smartctl 6.2 2013-07-26 [r3841](https://github.com/smartmontools/smartmontools/commit/d6bf7b1390a1256b27941f79cda4c840a20b0e11) sudo smartctl -d sat,12 -a /dev/sdb or -d sat,16 also works |
| [Seagate Backup Plus Slim 1TB (Silver) for Mac STDS1000100](https://www.seagate.com/support/external-hard-drives/portable-hard-drives/backup-plus-mac/) | ? | 0x0bc2:0xab25 | Seagate BUP Slim Mac SL | -d sat | Linux |  | Aug 2018 \\ [SAT pass-through requires Linux UAS blacklisting.](sat-with-uas-linux.md#workaround-set-u) \\ Drive inside is a ST1000LM035-1RK172. |
| Seagate Backup Plus Ultra Slim USB 3.0 2TB | ? | 0x0bc2:0xab2d (0x100) | Seagate / SRD00F1 | -d scsi | Ubuntu 18.04.2 LTS (odroid 4.14.127-164) armv7l | slamb | I get device info, but it says "SMART support is: Disabled" |
| Seagate Backup Plus 5 TB Desktop | ? | 0x0bc2:0xab31 (0x342) | Seagate ST5000DM000-1FK178 | -d sat | Linux | Ackis |  |
| Seagate Archive HDD 8TB USB 3.0 | ? | 0x0bc2:0xab34 | Seagate / ST8000AS0002-1NA17Z | -d sat | Linux | lowlow |  |
| Seagate Backup Plus Hub 6 TB | ? | 0x0bc2:0xab38 (1.00) | Seagate / Backup+ Hub BK | -d sat | Ubuntu 16.04 LTS (Xenial); Debian 10 (Buster) | Alexander | Nov 2019 \\ [SAT pass-through requires Linux UAS blacklisting.](sat-with-uas-linux.md#workaround-set-u) \\ HDD inside is ST6000DM003-2CY186 |
| Seagate Backup Plus 4TB | ? | 0x0bc2:0xab43 | Seagate / ST4000DM004-2CV104 | -d sat | ? | [ML Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2017-October/000043.html) |  |
| Seagate Backup Plus 6TB USB 3 Hub | ? | 0x0bc2:0xab44 | Seagate / ST6000DM003-2CY186 | -d sat | Linux (Fedora 26 4.13.13-200.fc26.x86_64) | [JetStream](https://jetstreamvelocity.github.io/articles/2017/12/02/seagate-backup-plus-hub-6tb.html) | This Product ID (0xab44) is just a USB-3.0 HUB, which is part of the drive enclosure. It has nothing to do with SMART. The ID of the HDD in the enclosure is 0xab38 |
| Seagate Backup Plus Portable 5TB | ? | 0x0bc2:0xac26 | ? | -d sat | Linux (Kernel 5.10.17) | iLennart21 | Tested with usb-storage driver; -d scsi reports some Drive info but no SMART data. Todo: Test UAS NO-ATA-1x flag workaround |
|  | **Dura Micro** |  |  |  |  |  | **0x0c0b** |
| TrekStor DataStation maxi m.u | Sunplus SPIF215(?) | 0x0c0b:0xb159 (1.03) | Trekstor / DataStation maxi m.u | -d usbsunplus | Linux, Windows XP | Christian Franke | According to USD ID likely identical to [Dura Micro 509](http://www.duramicro.com/509.html) |
| AcomData pureDrive PDHD1000USE-72 | Sunplus SPIF215(?) | 0x0c0b:0xb159 (1.12) | DMI / External HDD | -d usbsunplus | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=h9ejdm%248ih%241%40ger.gmane.org&forum_name=smartmontools-support) |  |
|  | **Maxtor** |  |  |  |  |  | **0x0d49** |
| Maxtor Personal Storage 3200 | ? | 0x0d49:0x3200 | ? | -d scsi | Linux | Daniël van Eeden | Device does not support SMART |
| Maxtor OneTouch | ? | 0x0d49:0x7300 | Maxtor / OneTouch | -d sat,12 | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20100626113138.GA1806%40alea.gnuu.de&forum_name=smartmontools-database) |  |
| Maxtor OneTouch 4 | ? | 0x0d49:0x7310 (1.25) | Maxtor / OneTouch | -d sat,12 | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090107180853.GA8869%40adsl-181.cshore.com&forum_name=smartmontools-support) |  |
| Maxtor OneTouch 4 Mini | ? | 0x0d49:0x7350 (1.25) | Maxtor / OneTouch | -d sat,12 | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090531231511.BBD.0%40paddy.troja.mff.cuni.cz&forum_name=smartmontools-support) |  |
| Maxtor Basics Desktop | ? | 0x0d49:0x7410 (1.22) | Maxtor / Basics Desktop | -d sat,12 | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=1253187820.27335.3.camel%40chianamo&forum_name=smartmontools-support) [Heise forum (German)](http://www.heise.de/resale/o/foren/S-Re-externe-HD-Maxtor-Basics-Desktop-1TB-betroffen-flashen-per-USB-moeglich/forum-150608/msg-16158401/read/) |  |
| Maxtor Basics Portable | ? | 0x0d49:0x7450 (1.22) | Maxtor / Basics Portable | -d sat,12 | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090531231511.BBD.0%40paddy.troja.mff.cuni.cz&forum_name=smartmontools-support) |  |
| Maxtor BlackArmor Portable | ? | 0x0d49:0x7550 (101J) | Maxtor / BlackArmor Portable | -d sat,12 | Linux | Tyler Guthrie | Works using 5.41svn3368(June 09, 2011), not sure what older smartmontools versions may work |
| Oyen Digital MiniPro USB 3.0 | ? | 0x0dc4:0x020a | ? | -d sat | Linux | Ticket [#193](https://github.com/smartmontools/trac-tickets-archive/issues/193) |  |
| SK-3500 SUPER-S3 | ? (Macpower Peripherals, Ltd) | 0x0dc4:0x0210 (0.00) | inXtron, Inc. SK3500 Super-S3 | -d sat | Linux (Debian Squeeze), v5.42+svn3561-3 | Andreas Mohr, [ML-Archive](https://sourceforge.net/mailarchive/message.php?msg_id=31410643) | Works on USB via -d sat, **dito on Firewire**!! (with full -x details) |
| [Akitio NT2 U3.1 2-Bay USB 3.1 Enclosure](https://www.akitio.com/desktop-storage/nt2-u31) | Macpower Peripherals, Ltd | 0x0dc4:0x0290 (1.00) | inXtron, Inc. / AKiTiO-PM | -d sat | Linux (Debian Squeeze), 3.16.7-ckt25-2 | jpap | Tested in "JBOD" RAID mode, using smartctl 6.4 2014-10-07 [r4002](https://github.com/smartmontools/smartmontools/commit/d2a1865ec1010e40245ad729a62f522c7b479ab0) [x86_64-linux-3.16.0-4-amd64] (local build) |
| USB IDE/SATA adapter | JMicron | 0x0df6:0x214a | Sitecom / USB 2.0 IDE/SATA Combo Adapter | -d usbjmicron | Linux | tom welter |  |
| Cowon iAudio X5 | ? | 0x0e21:0x0510 (1.00) | Cowon Systems, Inc. / iAUDIO X5 | -d usbcypress | Linux |  |  |

#### 0x1000 < idVendor ≤ 0x1500 <a id="0x1000idVendor0x1500"></a>

This table is on a [separate page](supported-usb-devices-idvendor-0x1000.md#idVendor0x1000).

#### 0x1500 < idVendor ≤ 0x1700 <a id="0x1500idVendor0x1700"></a>

This table is on a [separate page](supported-usb-devices-idvendor-0x1000.md#idVendor0x1500).

#### 0x1700 < idVendor <a id="0x1700idVendor"></a>

This table is on a [separate page](supported-usb-devices-idvendor-0x1000.md#idVendor0x1700).

---

### Unsupported Devices <a id="UnsupportedDevices"></a>

This table is now on a [separate page](unsupported-usb-devices.md).

---

### Notes <a id="Notes"></a>

**Firmware updates**

While several chipsets are listed in unsupported category above (e.g. ASMedia - the USB ID of which may or may not actually indicate an ASMedia chip), there might actually be "better" firmware available. Given sufficient(!) Internet research one might be able to find a **compatible** improved firmware which given some luck smartmontools then will be able to support. Do exercise lots of caution,though (an improper/incompatible firmware update may easily render such USB adapters unusable/bricks).
