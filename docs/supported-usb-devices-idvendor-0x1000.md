# Smartmontools USB Device Support (idVendor > 0x1000) <a id="SmartmontoolsUSBDeviceSupportidVendor0x1000"></a>

For a general overview of smartmontools's USB support, see [USB devices and smartmontools](usb.md).

The following tables list USB devices that have been successfully or unsuccessfully (below) tested with smartmontools. The entries are **sorted by USB ID**. If you have a device not on this list, **please tell us the test result**, by editing the tables below, and/or by sending an email to the smartmontools-database mailinglist. While you are at it: If your device is not listed [here](http://www.linux-usb.org/usb.ids), please report it to Mr. Gowdy.


### Supported Devices <a id="SupportedDevices"></a>

#### 0x0000 ≤ idVendor ≤ 0x0500 <a id="0x0000idVendor0x0500"></a>

This table is on a [separate page](supported-usb-devices.md#idVendor0x0000).

#### 0x0500 < idVendor ≤ 0x0a00 <a id="0x0500idVendor0x0a00"></a>

This table is on a [separate page](supported-usb-devices.md#idVendor0x0500).

#### 0x0a00 < idVendor ≤ 0x1000 <a id="0x0a00idVendor0x1000"></a>

This table is on a [separate page](supported-usb-devices.md#idVendor0x0a00).


#### 0x1000 < idVendor ≤ 0x1500 <a id="0x1000idVendor0x1500"></a>

| **Description** | **USB bridge** | **[idProduct](https://www.smartmontools.org/idvendor/idProduct)(http://www.linux-usb.org/usb.ids) (bcdDevice)** | **iManufacturer / iProduct** | **Option(s)** | **Tested on** | **Author / Reference** | **Comment** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| iRiver iHP-120/140 MP3 Player | Cypress | 0x1006:0x3002 | ? | -d usbcypress | ? | Ticket [#119](https://github.com/smartmontools/trac-tickets-archive/issues/119) |  |
|  | **Western Digital** |  |  |  |  |  | **0x1058** |
| WD My Passport | ? | 0x1058:0x0701 (2.40) | Western Digital / External HDD | -d usbcypress | Linux | [USB_0x1058:0701](usb-0x1058-0701.md) |  |
| WD My Passport | ? | 0x1058:0x0702 (1.02) | Western Digital / External HDD | -T permissive | Linux | [USB_0x1058:0702](usb-0x1058-0702.md) |  |
| WD My Passport 0702 | ? | 0x1058:0x0702 (1.04) | Western Digital / My Passport 0702 | -d sat | Linux | Alex Samorukov |  |
| WD My Passport Essential | ? | 0x1058:0x0704 | ? | -d sat | Windows XP | gurkenpapst; see also [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=2a6e8c0d0806251234r2da89d99u5ccd3b24beb78aeb%40mail.gmail.com&forum_name=smartmontools-support) |  |
| WD My Passport Elite WDML3200TE | ? | 0x1058:0x0705 (1.75) | ? | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=200907051824.58081.danny.kukawka%40web.de&forum_name=smartmontools-support) |  |
| WD My Passport 070A | ? | 0x1058:0x070a (10.28) | Western Digital / My Passport 070A | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4AFD3B59.3030103%40mal.sh&forum_name=smartmontools-database) |  |
| WD My Passport 0730 | ? | 0x1058:0x0730 | ? | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=1291863848.8781.41.camel%40norman-laptop&forum_name=smartmontools-database) |  |
| WD My Passport Essential SE (USB 3.0) 500GB | ? | 0x1058:0x0740 | Western Digital / External HDD | -d sat | Linux | alan-jenkins |  |
| WD My Passport Essential SE (USB 3.0) | ? | 0x1058:0x0742 | Western Digital / External HDD | -d sat | Linux | dess |  |
| WD My Passport (USB 3.0) 1TB | ? | 0x1058:0x0748 | Western Digital / External HDD | -d sat | Linux | Flameeyes |  |
| WD My Passport Ultra (USB 3.0) 1TB | ? | 0x1058:0x0820 | Western Digital / External HDD | -d sat | Linux | rata |  |
| WD My Passport Ultra (USB 3.0) 2TB | ? | 0x1058:0x0837 (0x1072) | ? | -d sat | Linux |  |  |
| WD My Passport 083a 1TB | ? | 0x1058:0x083a | Western Digital / External HDD | -d sat | Linux | Per Baekgaard (pnoman) |  |
| WD My Book ES 320GB | ? | 0x1058:0x0900 | ? | -d sat | Linux | firefishy |  |
| WD My Book Essential Edition 250GB | ? | 0x1058:0x0901 | ? | -d sat | Linux | sur5r |  |
| WD My Book Pro Edition 250GB | ? | 0x1058:0x0902 | Western Digital / External HDD | -d sat | Linux | Cmdr_Zod |  |
| WD My Book ES 500GB | ? | 0x1058:0x0906 (0.12) | ? | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=200907051824.58081.danny.kukawka%40web.de&forum_name=smartmontools-support) |  |
| WD Essential 500GB WD5000AAK | ? | 0x1058:0x0910 (1.06) | Western Digital / External HDD | -d sat | Linux | Per Baekgard (pnoman) |  |
| WD Elements Desktop WD5000E035 | Oxford ? | 0x1058:0x1001 (1.04) | ? | -d sat | Windows XP | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=1ad3f0230902211730q231fe697obfd2ae178220baaa%40mail.gmail.com&forum_name=smartmontools-database) |  |
| WD Elements Desktop | ? | 0x1058:0x1003 (1.75) | Western Digital / External HDD | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4A2A61DD.6050302%40xs4all.nl&forum_name=smartmontools-support) |  |
| WD Elements 500GB | ? | 0x1058:0x1010 (1.05) | Western Digital / External HDD | -d sat,12 | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=200903232022.48052.linuxuser330250%40gmx.net&forum_name=smartmontools-support) |  |
| WD Elements Desktop 2TB | ? | 0x1058:0x1021 (20.02) | Western Digital / Ext HDD 1021 | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20100711143529.GB11506%40wrars-comp.wrarsdomain&forum_name=smartmontools-database) |  |
| WD Elements Portable 1TB | ? | 0x1058:0x1042 (10.07) | Western Digital / Ext HDD 1042 | -d sat | Linux | Jens Erat |  |
| WD Elements 500GB WDBPCK5000ABK | ? | 0x1058:0x10a2 (10.42) | Western Digital / Elements 10A2 | -d sat | Linux | [ML-Archive](https://sourceforge.net/mailarchive/forum.php?thread_name=CABqXoSd%3D3SwK5ZXH2o3XP%2B5Fop%2B%3DO_AG93td%3Dcuz-FTghy7G%3DQ%40mail.gmail.com&forum_name=smartmontools-database) |  |
| WD Elements 1TB WDBUZG0010BBK-NESN | ? | 0x1058:0x10a8 (10.42) | Western Digital / Elements 10A8 | -d sat | debian wheezy amd64 | Andrew E |  |
| WD Elements 1TB | ? | 0x1058:0x1078 (0x1065) | Western Digital Elements / My Passport (USB, AF) | -d sat | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2018-February/000116.html) |  |
| WD Elements 5TB | ? | 0x1058:0x107c (0x1065) | Western Digital / Elements 107C | -d sat | kubuntu 15.10 amd64 | Iain |  |
| WD My Book Essential 500GB | ? | 0x1058:0x1100 (1.65) | Western Digital / My Book | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=79C831090F224544B9055DD0CE9C1A434A5679BC42%40SEXCVIVV02.vimar.net&forum_name=smartmontools-support) |  |
| WD My Book Office Edition 1TB | ? | 0x1058:0x1101 (1.65) | Western Digital / My Book | -d sat | ? | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20110324120013.0b2890c0%40skunkworks.local&forum_name=smartmontools-support) |  |
| WD My Book | ? | 0x1058:0x1102 (10.28) | Western Digital / My Book | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090503214242.169990%40gmx.net&forum_name=smartmontools-support) |  |
| WD My Book 111D | ? | 0x1058:0x111d (10.20) | Western Digital / My Book 111D | -d sat | Linux, Debian Stretch amd64, smartctl 6.5 2016-01-24 [r4214](https://github.com/smartmontools/smartmontools/commit/4c7ca20f10c01feb89494f8220254d7c118f0de4) | aboehm | WD Green 3TB (WD30EZRX-00MMMB0) |
| WD My Book Mirror Edition (2x500MB) | ? | 0x1058:0x1104 (10.11) | Western Digital / My Book Mirror Edition External HDD | -d sat | Linux (Ubuntu 12.10) | Willy RAMBAUD |  |
| WD My Book Studio II 2x1TB | ? | 0x1058:0x1105 | Western Digital / My Book | -d sat | Linux | [kochin](http://forums.openmediavault.org/viewtopic.php?f=10&t=599) |  |
| WD My Book Essential 1.5TB | ? | 0x1058:0x1110 (10.30) | Western Digital / My Book 1110 | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4B7EB8E3.3020001%40hennr.name&forum_name=smartmontools-database) |  |
| WD My Book Essential 3TB USB 3.0 | ? | 0x1058:0x1130 | Western Digital / My Book 1130 | -d sat | Linux 2.6.37-020637rc2-generic | Josh-D. S. Davis (xaminmo) | WD30EZRS. SMART enabled.  No SCT-TLER. |
| WD My Book Essential 4TB USB 3.0 | ? | 0x1058:0x1130 | Western Digital / My Book 1230 | -d sat | Centos 7.1 | Antus | WDBFJK0030HBK, Internal drive WDC WD40EZRX-00SPEB0 |
| WD My Book Essential 3000GB, USB 3.0 (WDBACW0030HBK) | ? | 0x1058:0x1140 (0x1003) | Western Digital / My Book 1140 | -d sat | Linux 3.2.0 x86_64 |  |  |
| WD My Book 4TB USB 3.0 | ? | 0x1058:0x1230 | Western Digital / My Book 1230 | -d sat | Windows 2012 R2 | jd322 | Internal drive WDC WD40EZRX-00SPEB0 |
| WD My Book 3TB USB 3.0 | ? | 0x1058:0x1235 | Western Digital / My Book 1235 | -d sat | Windows 2012 R2 | jd322 | Internal drive WDC WD30EZRZ-00Z5HB0 |
| [WD My Passport Ultra 3TB USB 3.0 (WDBBKD0030BBK-NESN)](http://support.wdc.com/product.aspx?ID=232) | ? | 0x1058:0x259f | Western Digital / Portable Hard Drive | -d sat | Linux 4.7.4-200.fc24.x86_64 | ag | SATA 3.1, 6.0 Gb/s, Model: WDC WD30NMRW-11YL9S4, Firmware Version: 01.01A01 |
| WD My Passport 2TB USB 3.0 | ? | 0x1058:0x259f | Western Digital / My Passport 259F | -d sat | Windows 2012 R2 | jd322 | Internal drive WDC WD20NMVW-11EDZS6 |
| WD Pi Drive 1TB | ? | 0x1058:0x25a0 (0x1005) | Western Digital Pi Drive | -d sat | Linux 4.14.30 | Gareth Halfacree |  |
| WD Elements / My Passport (USB, AF) | ? | 0x1058:0x25a1 (0x1005) | Western Digital / Elements My Passport (USB, AF) | -d sat | Linux 4.8.0-1-amd64 Debian 4.8.5-1 | chris_se | SATA 3.0, 3.0 Gb/s, Model: WDC WD20NMVW-11EDZS7, Firmware Version: 01.01A01 |
| WD Elements 4TB USB 3.0 | ? | 0x1058:0x25a3 | Western Digital / Elements 25A3 | -d sat | Linux | Jack Wilsdon | Newer model of WD Elements with different ID? |
| WD My Passport (USB 3.0) 4TB | ? | 0x1058:0x25e2 (0x4005) | Western Digital Elements / My Passport (USB, AF) | -d sat | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2018-April/000171.html) |  |
| WD My Passport (USB 3.0) 1TB | ? | 0x1058:0x25e3 (0x1019) | Western Digital Elements / My Passport (USB, AF) | -d sat | FreeBSD | sevan |  |
| [WD My Passport SSD 512GB](https://support.wdc.com/product.aspx?ID=239&lang=en) | ? | 0x1058:0x25f3 | Western Digital / My Passport SSD | -d sat | Linux 4.9.0-6-amd64 Debian 9 | Kevin Rolfes | WDBK3E5120PSL-WESN, internal drive SanDisk SD8TN8U512G2000 |
| WD Elements 4TB | ? | 0x1058:0x2620 | Western Digital Elements 2620 (WD40NDZW) | -d sat | Raspberry Pi OS 10, Linux 5.10.63-v7l+, smartmontools 6.6-1 | Silejonu |  |
| [WEme HDD Enclosure USB 3.0 to 2.5"](http://www.amazon.com/gp/product/B00QLDITJY) | ADplus SuperVer USB Device |  | WEme / HDD Enclosure | (none) or -d sat | Windows 7 64 | lost |  |
| [WEme USB 3.0 to SATA Adapter Converter for 2.5 / 3.5 ](http://www.amazon.com/gp/product/B00MVRS38G) | ASMedia AS2115 | 0x174c:0x1153 | WEme / SATA Adapter | (none) or -d sat | Windows 7 64 | lost |  |
| Kingston SNA-DC/U | ? | 0x11b0:0x6298 | ? | -d sat | Linux | [Piotr Szymaniak](http://grubelek.pl) | lsusb: ATECH FLASH TECHNOLOGY |
| Spyker USB3 Adapter | ? | 0x1234:0x5678 (0x005) | Spyker USB3 !Adapter/Docking Station "SPY-DOCK2NFREE" | -d sat,12 | Linux | [@xhark](https://twitter.com/xhark) |  |
| [RaidSonic ICY BOX IB-183WP-C31](https://www.raidsonic.de/products/external_cases/external_cases_m2_m_sata/index_en.php?we_objectID=5685) | JMicron | 0x125d:0x0580 (31.03) | JMicron / JM580 | -d sat | Linux | Gabor Gombas |  |
| A-DATA SH14 | ? | 0x125f:0xa14a | ? | -d sat | Linux |  |  |
| A-DATA SV620 | ? | 0x125f:0xa65a | USB 3.0 External Solid State Drive | -d sat | Linux | [Claudio Kuenzler](https://www.claudiokuenzler.com) |  |
| A-DATA SD600Q | ? | 0x125f:0xa88a | USB-SSD SD600Q (SU630) | -d sat | Linux 5.4.83, smartmontools 7.2 | Hardy |  |
| A-DATA SH93 | Cypress | 0x125f:0xa93a (1.50) | ? | -d usbcypress | ? | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20100326164007.GA25263%40x61s.reliablesolutions.de&forum_name=smartmontools-support) | Important: First enable SMART via "-s on", then continue with other commands. Any other order will fail. Details, see: [A-DATA_SH93](a-data-sh93.md) |
| A-DATA DashDrive | Cypress | 0x125f:0xa94a | ? | -d usbcypress | Linux |  | Important: First enable SMART via "-s on", then continue with other commands. Any other order will fail. Details, see: [A-DATA_SH93](a-data-sh93.md) |
|  | **Initio** |  |  |  |  |  | **0x13fd** |
| CROSU2 SATA Docking Station | Initio | 0x13fd:0x1240 (1.04) | Generic / External | -d sat,12 | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=7B0B9EE2DF47A34EA03D3440336664296BBF0E97C3%40KRONOS.grz.icomedias.com) | Looks similar to [Sharkoon SATA QuickPort](http://www.sharkoon.de/html/produkte/externe_gehaeuse/sata_quickport/index_en.html) |
| Cavalry CAXM | Initio | 0x13fd:0x1340 (1.04) | Generic / External | -d sat,12 | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=BAY131-W314092362A64F6343EF9B1FF710%40phx.gbl&forum_name=smartmontools-support) |  |
| Sharkoon SATA QuickPort PRO | Initio | 0x13fd:0x1340 (2.08) | Generic / External | -d sat,12 | Linux, Windows XP | Christian Franke | Windows XP: works also with '-d sat,16' |
| RaidSonic ICY BOX IB-110StUS2-B [K&M 20120820] | same as below? | 0x13fd:0x1340 (2.10) | Generic / External | none (-d sat) | Linux 3.6rc3 x86_32 | Andreas Mohr |  |
| RaidSonic ICY BOX IB-110StUS2-B | Initio Inic-1611 | 0x13fd:0x1340 (2.12) | Generic / External | -d sat | Windows XP | Christian Franke |  |
| Intenso Memory Station 2.5" | Initio | 0x13fd:0x1840 | PI-239 / USB 2.0 Drive | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4D223A5D.1060401%40gmx-topmail.de&forum_name=smartmontools-database) |  |
| Vantec NexStar CX - NST-300SU-BK | Initio | 0x13fd:0x1e40 | Vantec NexStar CX - NST-300SU-BK - 3.5" SATA to USB 2.0 & eSATA External Hard Drive Enclosure | -d sat | Linux | Tyler Guthrie |  |
| Seagate Expansion Portable Drive (2.5") | ? | 0x13fd:0x3910 (1.00) | Seagate / Expansion Portable Drive; Model: SRD00F1 | -d sat | Debian Linux 6.3+svn3990-1 | [ML-Archive](http://sourceforge.net/p/smartmontools/mailman/message/33000269/) |  |
| MS-TECH LU-275S | Initio  INIC3609 | 0x13fd:0x3940 (0x306) | ? | -d sat | Linux |  |  |
| [ZALMAN ZM-VE350](http://www.zalman.co.kr/contents/products/view.html?no=20) | Initio | 0x13fd:0x3e40 | ZALMAN / USB 2.0/3.0 external case ZM-VE350 | -d sat | Linux |  |  |
| Super Top generic enclosure | ~~Cypress~~ Moai M6116A | 0x14cd:0x6116 | Super Top / USB 2.0  SATA BRIDGE | ~~-d usbcypress~~ -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=691559.50383.qm%40web112119.mail.gq1.yahoo.com&forum_name=smartmontools-database) |  |
|  | **StarTech** |  |  |  |  |  | **0x14b0** |
| StarTech USB31C2SAT3 | ASMedia - ASM235CM | 0x14b0:0x0200 (lsusb reports ASM135x) | USB 3.1 (10Gbps) Adapter Cable for 2.5”/3.5” SATA Drives - USB-C | --xall -d sat OR -a -d sat | Ubuntu 22.04 LTS | Sinister Pisces | --xall is able to fetch a lot more attributes; Device uses UAS driver but seems to work without issue for basic data and at least some extended attributes. |

#### 0x1500 < idVendor ≤ 0x1700 <a id="0x1500idVendor0x1700"></a>

| **Description** | **USB bridge** | **[idProduct](https://www.smartmontools.org/idvendor/idProduct)(http://www.linux-usb.org/usb.ids) (bcdDevice)** | **iManufacturer / iProduct** | **Option(s)** | **Tested on** | **Author / Reference** | **Comment** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| No-name, USB3.0 | Skymedi SK7301 | 0x1516:0x7301 | ??? / model WAS250-U3 | -d usbsunplus | Linux | Volker Kuhlmann | Very fragile, many commands don't finish correctly and/or give errors. smartctl -a, -son work, -oon, -Son, -t don't (and -a runs for a long time), so perhaps it should be "unsupported" instead. smartmontools 6.0 |
|  | **JMicron** |  |  |  |  |  | **0x152d** |
| JMicron controller | JMicron | 0x152d:0x0539 | JMicron / USB3.0 to SATA Bridge | -d usbjmicron | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=AANLkTi%3DJcKeUmd6WMLx2J4X80RP5qDLOSk7cU-U1gzTe%40mail.gmail.com&forum_name=smartmontools-support) | Used in [Sharkoon 5-Bay RAID Box, JMS539](http://www.sharkoon.com/?q=en/node/1809) - '-d usbjmicron' often causes the disks to reset here, '-d sat' works more reliably but I have still had disk resets (OmegaPhil). Also used in [Sharkoon 5-Bay RAID Station](http://www.sharkoon.com/?q=en/content/5-bay-raid-station), doesn't work at all here (OmegaPhil)  Also used in [SSI-1359RUS3 boxes](http://www.ssi.com.tw/en/goods.php?act=view&no=33), which can be updated with the firmware in Ticket [#552](https://github.com/smartmontools/trac-tickets-archive/issues/391) which turns it into 0x152d:0x0551 and disables its annoying automatic sleep mode. |
| Mediasonic Pro Box 4 Bay Enclosure USB 3.0 & eSATA [HF2-SU3S2] | JMicron | 0x152d:0x0551 | ? | -d usbjmicron,x | Linux | Ticket [#95](https://github.com/smartmontools/trac-tickets-archive/issues/95) | port multiplier |
| LOGILINK UA0291 USB3.0 Raid Bay | JMicron | 0x152d:0x0561 | ? | -d sat | Linux | dplasa | Tested with smartctl 7.0 2018-12-30 [r4883](https://github.com/smartmontools/smartmontools/commit/8fdfaa8297880516f9bb25a79c4671786be6c30a): not able to perform any smart test since "Offline data collection capabilities: (0x00) Offline data collection not supported. /SMART capabilities: (0x0000) Automatic saving of SMART data is not implemented./ Error logging capability: (0x00) Error logging NOT supported. / No General Purpose Logging support." |
| LC-POWER LC-225U3-RAID | JMicron | 0x152d:0x0561 | ? | -d auto | Linux | dplasa | Tested with smartctl 7.1 2019-10-18 [r4973](https://github.com/smartmontools/smartmontools/commit/db043a6dba69ed0705f55b52a0b00e82a7ee18b2): not able to perform extended smart functionality **ON THE FIRST of TWO DISKS** since "Offline data collection capabilities: (0x00) Offline data collection not supported. /SMART capabilities: (0x0000) Automatic saving of SMART data is not implemented./ Error logging capability: (0x00) Error logging NOT supported. / No General Purpose Logging support." Weirdly enough, the second disk seems just fine. |
| [ICY DOCK MB662U3-2S R1](https://www.icydock.com/goods.php?id=189) | JMicron | 0x152d:0x0562 | JMicron Technology Corp. / JMicron USA Technology Corp. JMS567 SATA 6Gb/s bridge | -d auto | Linux 5.14 | steap | When only one drive is installed in the enclosure, the SMART data section cannot be read ("SMART Status not supported: Incomplete response, ATA output registers missing") and the Error Log and Self-test Log are not supported. When two drives are installed in the enclosure, only the first one can be accessed by smartctl. When using a USB3 port and the uas driver, Linux has trouble seeing both disks, which in turn is an issue for smartctl; disabling uas and using usb-storage instead is a workaround. |
| Orico 6228US3 dual-HDD dock | JMicron | 0x152d:0x0565 | none needed | ? | Devuan 6 Linux w/ kernel 6.12.95 | Durval Menezes | Tested w/ the distro's smartmontools 7.4 package; works perfectly both directly connected to a USB3 port on my Thinkpad, and through a USB3 hub. `smartctl` does not need any options; Tested under heavy load and UAS did not need to be blacklisted using USB Quirks. Beware QC issues: bought 2 of these docks, one works perfectly and the other randomly disconnects even after forcing usb_storage mode. |
| Mediasonic Pro Box 4 Bay Enclosure USB 3.0 & eSATA | JMicron | 0x152d:0x0567 | ? | -d sat | Linux | harendra | -d usbjmicron (tried all combination of options) does not work with this bridge |
| RaidSonic ICY BOX IB-373U3 Enclosure USB 3.0 UAS | JMicron JMS567 | 0x152d:0x0578 | JMicron SATA 6Gb/s bridge | -d sat | Linux 4.8 | Noctiflore | -d usbjmicron does not work with this bridge |
| SSK SHE-C320 External Type-C® aluminium enclosure for M.2 NGFF SSD USB 3.2 (Gen 2) | JMicron JMS583 | 0x152d:0x0580 | JMicron SATA 6Gb/s bridge | -d sat | Linux 4.14.23 | René Bertin | S.M.A.R.T. shows with "-d sat" option; "-d sntjmicron" will cause a timeout with a NVMe failure message. |
| RaidSonic ICY BOX IB-1817M-C31 External Type-C® aluminium enclosure for M.2 NVMe SSD USB 3.1 (Gen 2) UAS | JMicron JMS583 | 0x152d:0x0580 | JMicron NVMe bridge | -d sntjmicron | Linux 5.10.1 | reagentoo | Works in UAS mode. S.M.A.R.T. shows with "-d sntjmicron" option. |
| Frisby FHC-M2305 Type-C™ USB 3.1 - M.2 PCIe NVMe SSD Alüminyum Disk Kutusu | JMicron JMS581DL | 0x152d:0x0581 | JMicron NVMe bridge | -d sntjmicron | Ubuntu 24.04 LTS | dk | S.M.A.R.T. shows with "-d sntjmicron" option. |
| Sabrent USB 3.0 to SATA Dual Bay External Hard Drive Docking Station Station [4TB Support] (EC-HDD2) | JMicron JMS561U | 0x152d:0x1561 | JMicron SATA 6Gb/s bridge | -d sat | Linux | [ML-Archive](https://sourceforge.net/p/smartmontools/mailman/message/34625159/) | Nov 2015 |
| [Sabrent 2.5" SATA to USB 3.0 Tool-Free External Hard Drive Enclosure (EC-UASP)](https://www.sabrent.com/product/EC-UASP/) | JMicron | 0x152d:0x1561 | JMicron SATA 6Gb/s bridge | -d sat (autodetected) | Linux |  | Aug 2019 \\ SAT pass-through works with Linux UAS driver.  \\ (This enclosure has the same USB ID as the EC-HDD2 docking station, but only has a single SATA port.  Earlier devices with this model name [seem to have used different USB ids/bridge chips](http://www.overclockers.com/forums/archive/index.php/t-767787.html).) |
| Eagle Consus 2.5 ext USB/eSATA | JMicron JM20329(?) | 0x152d:0x2329 | ? | (none) | WinXP | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4AEF2976.16272.44C2E0E%40Webbed.Pete.gmail.com&forum_name=smartmontools-support) |  |
| RaidSonic ICY BOX IB-221StU | JMicron JM20329(?) | 0x152d:0x2329 | ? | -d usbjmicron | Windows XP | EMail from Stefan Novak |  |
| RaidSonic ICY BOX IB-290StUS | JMicron JM20329 | 0x152d:0x2329 | JMicron / JM20329 SATA, USB Combo | (none) | Linux (Debian Lenny) - armel | axk |  |
| RaidSonic ICY BOX IB-318StUS2 | JMicron JM20329 | 0x152d:0x2329 (1.00) | JMicron / USB to ATA/ATAPI bridge | -d usbjmicron[,x] | Linux, Windows XP | Christian Franke |  |
| Transcend StoreJet 25M | JMicron ? | 0x152d:0x2329 | StoreJet Transcend / StoreJet Transcend | -d usbjmicron | Linux |  |  |
| RaidSonic ICY BOX IB-3218StU-B | JMicron JM20336 | 0x152d:0x2336 | JMicron / JM20336 SATA, USB Combo | -d usbjmicron,PORT | Windows XP | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4A57BB20.5060407%40gmx.de&forum_name=smartmontools-support) |  |
| [AixCase AIX-ESU35CD](http://www.aixcase.de/produktinfo_html/aix-esu35cd.html) | JMicron JM20336 | 0x152d:0x2336 (1.00) | JMicron / JM20336 SATA, USB Combo | -d usbjmicron[,x] | Linux, Windows XP | Christian Franke |  |
| Connectland BE-COMBO-HD343-SSC | JMicron JM20336 | 0x152d:0x2336 (1.00) | JMicron / JM20336 SATA, USB Combo | (none) | Linux (Debian Squeeze) | freebooter |  |
| Generic JMicron adapter | JMicron ? | 0x152d:0x2337 | JMicron / USB to ATA/ATAPI/SATA Bridge | -d usbjmicron | Linux | reikred |  |
| Conceptronic CHD3UL | JMicron JM20337 | 0x152d:0x2338 | JMicron / USB to ATA/ATAPI Bridge | -d usbjmicron | Linux | EMail from Marcelo |  |
| Digitus DA-70148-1 | JMicron JM20337 | 0x152d:0x2338 | ? | -d usbjmicron | Linux, Windows XP (native and Parallels on OS X) | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=49AEFF7A.9010609%40web.de&forum_name=smartmontools-support), EMail from Stefan Novak |  |
| Fibrionic PE-3264 | JMicron JM20337 | 0x152d:0x2338 | ? | -d usbjmicron | Windows XP | EMail from Burkhard Müller | Port 0: SATA, Port 1: PATA(IDE) |
| Vantec USB->ATA/SATA Adapter | JMicron JM20337 | 0x152d:0x2338 | ? | (none) | WinXP | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4AEF2976.16272.44C2E0E%40Webbed.Pete.gmail.com&forum_name=smartmontools-support) | Tested ATA 3.5, ATA 2.5, SATA |
| [AixCase AIX-USB2SI-PS](http://www.aixcase.de/produktinfo_html/aix-usb2si.html) | JMicron JM20337 | 0x152d:0x2338 (1.00) | JMicron / USB to ATA/ATAPI Bridge | -d usbjmicron | Linux | Christian Franke | '-d usbjmicron,x' does not work |
| Delock Converter USB2.0 to SATA/IDE 61391 | JMicron JM20337 | 0x152d:0x2338 (1.00) | JMicron / USB to ATA/ATAPI Bridge | (none) | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090531231511.BBD.0%40paddy.troja.mff.cuni.cz&forum_name=smartmontools-support) |  |
| [Gembird AUSI01 USB to IDE & SATA adaptor](http://www.gmb.nl/item_view.aspx?id=4178) | JMicron JM20337 | 0x152d:0x2338 (1.00) | JMicron / USB to ATA/ATAPI Bridge | -d usbjmicron | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090625151537.77c5d56f%40linux.localdomain&forum_name=smartmontools-support) | '-d usbjmicron,x' does not work |
| Inki1-837 | JMicron JM20337 | 0x152d:0x2338 (1.00) | JMicron / USB to ATA/ATAPI Bridge | -d usbjmicron | Windows 98SE | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=1236798148_46904%40mail.internode.on.net&forum_name=smartmontools-support) | Required registry edit, see reference |
| PremiumCord USB2.0 to IDE & SATA Cable ku2ides | JMicron JM20337 | 0x152d:0x2338 (1.00) | JMicron / USB to ATA/ATAPI Bridge | (none) | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090531231511.BBD.0%40paddy.troja.mff.cuni.cz&forum_name=smartmontools-support) |  |
| SOHOUSB MagicBridge II | JMicron JM20337 | 0x152d:0x2338 (1.00) | JMicron / USB to ATA/ATAPI Bridge | (none) | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=20090531231511.BBD.0%40paddy.troja.mff.cuni.cz&forum_name=smartmontools-support) |  |
| [Manhattan USB2.0 to SATA/IDE Adapter](http://www.manhattan-products.com/hi-speed-usb-to-sata-ide-adapter) | JMicron JM20337 | 0x152d:0x2338 | JMicron / USB to ATA/ATAPI Bridge | (none) | Linux | jenste |  |
| Hitachi Travelstar 7K100 | JMicron | 0x152d:0x2338 | Device Model HTS721010G9SA00 | none (-d usbjmicron) | Linux | tverrbjelke |  |
| TrekStor DataStation maxi t.u | JMicron JM20339 | 0x152d:0x2338 (1.00) | JMicron / USB to ATA/ATAPI Bridge | -d usbjmicron | Linux, Windows XP | Christian Franke |  |
| [Freecom Hard Drive Dock Pro](http://www.freecom.com/product/hard-drive-dock-pro-3.5-2.5-usb/pata/sata-33708/) | JMicron JM20337 | 0x152d:0x2338 | ? | -d usbjmicron | Linux | Francesco Turco |  |
| [AixCase AIX-SUB3A1](http://aixcase.de/produktinfo_html/aix-sub3a1.html) | JMicron JM20339 | 0x152d:0x2339 (1.00) | JMicron / USB to ATA/ATAPI Bridge | -d usbjmicron[,x] | Linux | Christian Franke |  |
| Tevion HDDrive2GO | JMicron | 0x152d:0x2351 | ? | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=201101082314.12125.danny.kukawka%40web.de&forum_name=smartmontools-support) |  |
| Thermaltake BlacX Duet ST0014U | JMicron | 0x152d:0x2352 | ? | -d usbjmicron,x | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4BBA9D37.9010807%40compusmiths.com&forum_name=smartmontools-database) |  |
| Deltaco USB3 dual drive dock | JMicron JMS539 | 0x152d:0x2509 | USB3 to SATA II Bridge | -d usbjmicron,x | Linux | Sami Kankaristo |  |
| USB3 2.5" external enclosure | JMicron JMS539 | 0x152d:0x2509 | USB3 to SATA II Bridge | -d sat[,x] | Windows | Konstantin Gusenko | Conflicts with previous entry in table whose have the same VID and PID. Error `failed: No device connected` is produced. With `-d sat` it generally works, except: `SMART STATUS RETURN: incomplete response, ATA output registers missing`` |
| Conrad USB 3.0 IDE & SATA cable | JMicron | 0x152d:0x2551 | ? | -d usbjmicron | Linux | Robert Heel |  |
| Thermaltake BlacX5G ST0019 USB 3.0 2.5/3.5" SATA dock | JMicron | 0x152d:0x2567 | Thermaltake / BlacX 5G ST0019 | -d sat | GNU/Linux (Ubuntu 14.04 LTS) | Chris Hiestand | I had no luck with `-d usbjmicron`, but `-d sat` seems to work just fine |
| Inateck FE2006BU USB 3.0 2.5" HDD Enclosure | JMicron JMS567 | 0x152d:0x3562 (63.02) | JMicron JMS567 SATA, USB Combo | -d sat | GNU/Linux (Ubuntu 14.04 LTS) | Meekreau | `SMART STATUS RETURN: incomplete response, ATA output registers missing` |
| ADplus SuperVer | JMicron | 0x152d:0x3569 | USB3 to ATA/ATAPI bridge | -d sat | Linux | runejuhl |  |
| Intenso Memory Center USB 3.0 | JMicron | 0x152d:0x578e (0x1402) | JMicron SATA 6Gb/s bridge | -d sat | Linux | [ML-Archive](https://listi.jpberlin.de/pipermail/smartmontools-database/2018-January/000097.html) | `SMART Status not supported: Incomplete response, ATA output registers missing` |
| [RaidSonic ICY BOX IB-253U3](http://www.raidsonic.de/products/external_cases/external_cases_25/index_en.php?we_objectID=475) | JMicron | 0x0152d:0x9561 (2.04) | JMicron SATA 6Gb/s bridge | -d sat | Linux, OpenWRT/LEDE 17.01.4 | Robert Rottscholl | -d usbjmicron does not work with this bridge |
| USB3.1 2.5" external transparent enclosure | JMicron JMS576 | 0x152d:0x0576 (0x1507) | JMicron SATA 6Gb/s bridge | -d sat | Debian 11 | vherrlein | `-d usbjmicron` not working only `-d sat` |

#### 0x1700 < idVendor <a id="0x1700idVendor"></a>

| **Description** | **USB bridge** | **[idProduct](https://www.smartmontools.org/idvendor/idProduct)(http://www.linux-usb.org/usb.ids) (bcdDevice)** | **iManufacturer / iProduct** | **Option(s)** | **Tested on** | **Author / Reference** | **Comment** |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | **ASMedia** |  |  |  |  |  | **0x174c** |
| Transcend ESD400 Portable SSD | ASMedia | 0x174c:0x07d1 | Transcend Information, Inc. / ESD400 Portable SSD (USB 3.0) | -d sat | Linux (Kernel 3.19.8-100) | Henk de Bruyn | no attrib. 249 (Total NAND Writes) |
| [Revoltec Alu-Line III EX307](http://www.revoltec.com/volumes/PDM/_products/rs081/rs081_db_en.pdf) | ASMedia 1053E(?) | 0x174c:0x1053 | ? | -d sat | Linux |  |  |
| [Sabrent EC-DFLT (USB 3.0)](http://www.sabrent.com/category/hard-drive-enclosures/EC-DFLT/) | ASMedia AS2115 | 0x174c:0x1153 | ASMedia / AS2115 | -d sat | Linux | dabigjhall |  |
| [Sabrent EC-DFLT (USB 3.0)](http://www.sabrent.com/category/hard-drive-enclosures/EC-DFLT/) | ASMedia AS2115 | 0x174c:0x1153 | ASMedia / AS2115 | -d sat | Linux | dabigjhall |  |
| Manhattan SUPERSPEED USB TO SATA ADAPTER (PN150705 rev. 3.04) | ASMedia ASM2105 (physically ASM1051 A1) | 0x174c:0x5106 (0.01) | [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_show_products.php?item=90) / USB to Serial-ATA bridge | -d sat | Linux | Martin Mokrejs | works perfect (sold around 2013-2014 with FW091029000000, with "SS" (for SuperSpeed) engraved in the USB plugs plastic) against Texas Instruments host chipset at 148MB/s burst read (non-degrading over time, unlike ASM1051 A0 chip-based in SilverStone RVS02) |
| DeLock SUPERSPEED USB TO SATA ADAPTER ([DeLock 61757](http://www.delock.de/produkte/G_61757/merkmale.html?setLanguage=en)) | ASMedia ASM2105 | 0x174c:0x5106 (0.01) | [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_show_products.php?item=90) / USB to Serial-ATA bridge | -d sat | Linux | Martin Mokrejs | Has FW 091029000000 and does not fall asleep (sold about 2013-2014); is just a re-branded original MANHATTAN SUPERSPEED USB TO SATA ADAPTER (PN150705 rev. 3.04) |
| LogiLink AU0009 - USB 3.0 to SATA Adapter with OTB | ASMedia ASM1051 | 0x174c:0x5106(0x55AA after update) | [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_show_products.php?item=90) / [LogiLink](http://www.logilink.eu/showproduct/AU0009.htm?seticlanguage=en) | -d sat | Win7 | ede | works after update of firmware to version 110311_01_00_00. german howto and files here http://www.computerbase.de/forum/showthread.php?t=934271 |
| [LogiLink UA0107A - Super Speed USB3.0 HDD Enclosure for 3.5" (8.89 cm) SATA HDD](http://www.logilink.org/showproduct/UA0107A.htm?seticlanguage=en) | ASMedia ASM1051 | 0x174c:0x5106 (0.01) | [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_show_products.php?item=90) / AS2105 | -d sat | Win7 | Gurken Papst |  |
| RaidSonic ICY BOX IB-250StU3-BH | ASMedia ASM1051 | 0x174c:0x5106 | [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_show_products.php?item=90) / USB to Serial-ATA bridge | -d sat | Linux | Conrad Kostecki |  |
| SilverStone TS04B | ASMedia ASM2105 | 0x174c:0x5106 (0.01) | [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_show_products.php?item=90) / USB to Serial-ATA bridge | -d sat | Linux | Martin Mokrejs | runs only at high-speed against both Texas Instruments and NEC uPD720200 (3.0.2.5 and 3.0.2.8 firmware) chipsets, in super-speed via VIA Labs. USB3.0 HUB (DeLock 61762) |
| Transcend StoreJet 25M3 | ? | 0x174c:0x5106 | Transcend Information. Inc. / External HDD | -d sat | Linux | dess |  |
| [Icy Box IB-AC603A-U3](http://www.amazon.co.uk/Icy-Box-IB-AC603A-U3-Adaptor-Inches/dp/B008S8PP6K) | ASMedia AS2105 | 0x174c:0x5136 | ASMedia Technology Inc. | -d sat or -d sat,16 | Linux Ubuntu 12.04 | [Unix StackExchange](http://unix.stackexchange.com/questions/109691/which-smartctl-d-option-should-i-use-on-this-hard-disk-scsi-or-ata) |  |
| DeLock SUPERSPEED USB TO SATA ADAPTER ([DeLock 61757](http://www.delock.de/produkte/G_61757/merkmale.html?setLanguage=en)) | ASMedia ASM1051 | 0x174c:0x55aa | [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_show_products.php?item=90) / USB to Serial-ATA bridge | -d sat | Linux | Martin Mokrejs | In Jun 2015 it has FW 120919110000 and does fall asleep after 1 second of inactivity (flashing with firmware 13040911da01 helps); DeLock recycled the part number 61757 several times, ASM1051 should be SATAII capable whereas ASM1053 should be SATAIII capable? See [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_products_list.php?item=83&cate_index=0) |
| DeLock SUPERSPEED USB TO SATA ADAPTER ([DeLock 61757](http://www.delock.de/produkte/G_61757/merkmale.html?setLanguage=en)) | ASMedia ASM1053e | 0x174c:0x55aa | [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_show_products.php?item=90) / USB to Serial-ATA bridge | -d sat | Linux | Martin Mokrejs | In Oct 2015 DeLock sells this with FW14070321ab00, Linux reports ASM1053e (Win reports ASMT2115); DeLock recycled the part number 61757 several times, ASM1051 should be SATAII capable whereas ASM1053 should be SATAIII capable? See [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_products_list.php?item=83&cate_index=0) |
| Fantec ER-35U3-6G | ASMedia ASMT1051 | 0x174c:0x55aa |  | -d sat | Linux | [pastebin](http://pastebin.com/KbrZWdjj) |  |
| CnMemory USB3.0 - 2.5" | PLX TECHNOLOGY OXU3101; label: PLX TECHNOLOGY, OXU3101-AANC G, 1133, PAV397.01A, TAIWAN; PCB: EAN-X311-10, 94V-0 1140; (lsusb: "ASMedia 2105") | 0x174c:0x55aa (0.00) | CnMemory USB3.0 - 2.5" Vario Colour (pollin.de no. 723 111, or possibly Chips and More GmbH Freiburg) | none (-d sat) | 6.3+svn3990-1 Linux Debian | Andreas Mohr | Product NOT fully recommended - more expensive than better alu-based models, and seemingly almost non-reopenable plastic clips rather than screws. Case rather solid and good cable, though. |
| MEDION HDDrive-n-GO | ASMedia | 0x174c:0x55aa (1.00) | MEDION / MEDION HDDrive-n-GO | -d sat | 5.39.1+svn3124-2 Linux Debian Squeeze | Andreas Mohr | ALDI Tevion P82731 640GB SAMSUNG   HM641JI  2AJ1; START STOP UNIT problematic (FAIL: sg_start / sdparm; only hdparm -Y idle success) |
| Sharkoon RapidCase 3,5" SATA USB3.0 | ASMedia | 0x174c:0x55aa (1.00) | Sharkoon / RapidCase 3,5" SATA USB3.0 | -d sat | Linux | Jochen Pawletta |  |
| [Sharkoon Quickport XT USB 3.0](https://en.sharkoon.com/product/14057/) | ASMedia ASM1051 | 0x174c:0x55aa | ASMedia ASM1051 | none (-d sat) | Linux | Claudio Kuenzler |  |
| Data-Tec SAS-250 | ASMedia Technology | 0x174c:5106 | Transcend StoreJet 25M3 |  | Linux 3.10 | peschmae |  |
| SilverStone RVS02 | ASMedia ASM1051 (supposedly rev. A0) | 0x174c:0x55aa (1.00) | [ASMedia Technology Inc.](http://www.asmedia.com.tw/eng/e_show_products.php?item=90) / USB to Serial-ATA bridge | -- | Linux | Martin Mokrejs | no S.M.A.R.T. |
| Kingwin Dockmaster DM-2535U3 USB 3.0 Docking Station | ASMedia AS2105 (from lsusb -v) | 0x174c:0x55aa (0x100) | Kingwin External USB 3.0 docking station | -d sat | smartctl 5.41 2011-06-09 [r3365](https://github.com/smartmontools/smartmontools/commit/519166374f280a32586b114dc10b8ddb7f7139a2) [x86_64-linux-2.6.38-15-generic] Linux Ubuntu 12.04 | Tyler Guthrie | could not get a response, tried "sat", "sat,12", "sat,16", usbjmicron, usbsunplus, usbcypress, scsi, auto and test show: Unsupported USB bridge [0x174c:0x55aa (0x100)] |
| Inatek USB3.0 to SATA III Docking Station FD1006 | ASMedia ASM1051E SATA 6Gb/s, ASM1053E SATA 6Gb/s and ASM1153 SATA 3Gb/s bridges | 0x174c:0x55aa (@ USB 2.0 host) | ASMedia Technology Inc. / ASMT1053 | -d sat | Arch Linux | [Da truche](https://twitter.com/lliseil) |  |
| [Inatek Dual Bay Docking Station FD2005](https://www.inateck.com/fd2005-dual-bay-hard-drive-docking-station-in-gamer-style.html) | ASMedia ASM1156-PM | 0x174c:0x55aa | ? | -d sat | Windows | Christian Franke |  |
| [Sharkooon Swift Case Pro USB 3.0](http://en.sharkoon.com/product/1685/16310) | ASMedia ASM1153E | 0x174c:0x55aa | Sharkooon Swift Case Pro USB 3.0 | -d sat | Debian GNU/Linux 9 (stretch) | Christoph Kalchreuter |  |
| [RaidSonic ICY BOX IB-366-C31](https://www.raidsonic.de/products/external_cases/external_cases_35/index_en.php?we_objectID=4664) | ASMedia ASM1051E SATA 6Gb/s, ASM1053E SATA 6Gb/s, ASM1153 SATA 3Gb/s bridges | 0x174c:0x55aa (1.00) | ICY BOX / IB-366-C31 | - | Linux | DaveS |  |
|  | **LucidPort** |  |  |  |  |  | **0x1759** |
| RaidSonic ICY BOX IB-110StU3-B | LucidPORT USB300 | 0x1759:0x5000 (21.49) @ USB 2.0 host  
0x1759:0x5002 (21.49) @ USB 3.0 host | ? | -d sat | Linux (Debian Squeeze) | freebooter | Also look this [issue](http://sourceforge.net/wiki/FAQ#ErrorSMARTStatuscommandfailedWhatsthemeaningofthissmartctlmessage) |
| TIVECO MS35 U3 | LucidPORT USB300 | 0x1759:0x5000 (22.73) @ USB 2.0 host  
0x1759:0x5002 (22.73) @ USB 3.0 host | ? | -d sat | Linux (Debian Squeeze) | freebooter | Also look this [issue](https://sourceforge.net/wiki/FAQ#ErrorSMARTStatuscommandfailedWhatsthemeaningofthissmartctlmessage) |
| Sharkoon SATA QuickPort H3 USB3.0 | LucidPORT USB300 | 0x1759:0x5000/5002 (23.03) | USB 3.0 / MassStorage Device | -d sat | Linux, Windows 7 | Christian Franke | SMART Status fails, SAT Return Descriptor missing |
| Sharkoon SATA QuickPort USB3.0 | LucidPORT USB300 | 0x1759:0x5000/5002 Rev.2580 | [LucidPort](http://www.lucidport.com/usb300.html) / [Sharkoon](http://www.sharkoon.com/?q=en/node/1277) | -d sat | Windows 7 | ede | works with firmware 2580 ([Changes](http://www.lucidport.com/pdf/AN8_Firmware_Change_History.pdf)). used update for [Plugable USB3-SATA-U3 Hard Drive Docking Station](http://plugable.com/category/product/usb3-sata-u3/plugable.com/products/USB3-SATA-U3/) available on [mirror1](http://www.multiupload.nl/ABMYS1JFWY),[mirror2](http://uploadmirrors.com/download/SCXOD4MS/plugable-usb3-sata-u3-2580.zip) |
|  | **Verbatim** |  |  |  |  |  | **0x18a5** |
| Verbatim FW/USB 160 | Oxford OXUF934SSA-LQAG | 0x18a5:0x0215 (0.01) | Verbatim / Portable Combo Drive | -d sat | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4A805CFD.80106%40buttersideup.com&forum_name=smartmontools-support) | for FW see reference. |
| Verbatim External Hard Drive 640GB | Sunplus | 0x18a5:0x0216 | ? | -d usbsunplus | Linux | [ML-Archive](http://sourceforge.net/mailarchive/forum.php?thread_name=4BE1248F.7040605%40gmx.net&forum_name=smartmontools-support) |  |
| Verbatim Pocket Hard Drive | ? | 0x18a5:0x0227 (0.00) | Verbatim / Verbatim Pocket Drive | -d usbjmicron | Linux | Ticket [#159](https://github.com/smartmontools/trac-tickets-archive/issues/159) |  |
| Verbatim External Hard Drive 2TB | ? | 0x18a5:0x022a | ? | -d usbjmicron | Linux | DavidTalbot |  |
| Verbatim External Hard Drive 3TB (USB 3.0) | ? | 0x18a5:0x0400 | Verbatim / Verbatim Store'n'Save | -d sat | Linux | alexvaq |  |
| Verbatim External Hard Drive 1TB (USB 3.0) | ? | 0x18a5:0x0408 | Verbatim / Verbatim Store'n'Go | -d sat | Linux | Cmdr_Zod |  |
| USB 3.0 Enclosure Kit for 2.5" SATA HDD | ? | 0x18a5:0x0411 | Verbatim  / Store 'n' Go Enclosure Kit USB 3.0 | -d sat | FreeBSD | sevan |  |
| Verbatim 2.5" Enclosure Kit USB 3.2 Gen 1 | ? | 0x18a5:0x0446 | ? | -d sat | Linux |  |  |
| Verbatim Pocket Hard Drive 1TB (USB 3.0) | ? | 0x18a5:0x0237 | Verbatim / Portable USB 3.0 Drive | -d sat,12 | Linux | Ondrej Zary |  |
| ADTEC STD UFD 1GB SLC | ? | 0x1951:0x1000 (1.00) | ? / STD UFD 1GB | -d sat | Linux | kanru | Hyperstone USB 3.1 Controller U9 |
| Corsair Voyager GTX | ? | 0x1b1c:0x1a0e (0x100) | Corsair / Flash drive | -d sat | Linux | Cmdr_Zod |  |
| ? | SunplusIT | 0x1bcf:0x0c31 | ? | -d usbsunplus | ? | ? |  |
| WD My Book Essential 2TB USB 3.0 | ? | 0x1ca1:0x18ae | ? | ? | ? | Linux | Plugged into an USB2 port |
| TrekStor DataStation maxi light | ? | 0x1e68:0x0050 | Trekstor / DataStation maxi light | -d sat | Linux |  | USB 3.0 |
|  | **Other World Computing** |  |  |  |  |  | **0x1e91** |
| OWC Envoy | ASMedia 1053e | 0x1e91:0xa1a2 (0x100) | OWC / Envoy | -d sat | smartctl 7.5 2025-04-30 [r5714](https://github.com/smartmontools/smartmontools/commit/22539e09791ca3bc4a6947952d876cee79d454e4) [x86_64-linux-6.18.5-100.fc42.x86_64] Fedora Linux 42 (Workstation Edition) | Mike Mallin | -d auto does not work, must use -d sat; -a, -x, -t short, -t long work; tested with Apple SSD SM256E; USB 3.2 Gen 1 |
| OWC Mercury Elite Pro Quad | VIA Labs VL820 | 0x1e91:0xa4a7 (1.00) | OWC / Mercury Elite Pro Quad | -d sat | smartctl 7.1 2019-12-30 [r5022](https://github.com/smartmontools/smartmontools/commit/a66f439c83f7110d31c624a682c8bd941a8fe77c) [x86_64-linux-5.8.0-55-generic] Linux Ubuntu 20.04 | zamnuts | -d auto does not work, must use -d sat; -a, -x, -t short, -t long work; tested with ST8000NM0055-1RM112 and CT2000MX500SSD1; bcdDevice is b.63 on hub; USB-C USB 3.1 Gen 2 |
|  | **Innostor** |  |  |  |  |  | **0x1f75** |
| (No Name) | Innostor IS611 | 0x1f75:0x0611 (0.06) | Innostor Technology Corporation / IS611 SATA/PATA Bridge Controller | -d sat,12 | Arch Linux, Windows 10 21H1 | zacchi4k | If IDE/PATA drives don't work (unsupported scsi opcode), try updating the firmware and running the command with the *-d sat,12* argument (a Google search for "IS611 firmware" will bring you a Windows utility to upgrade the firmware to version 0937) |
| (No Name) | Innostor IS621 | 0x1f75:0x0621 (0.36) | Innostor Technology Corporation / IS621 USB 3.0 to SATA Storage Controller | -d sat | Gentoo Linux | oskar456 | Found in [OEM boxes on E-bay](http://www.ebay.com/itm/USB-3-0-2-5-SATA-HDD-Hard-Disk-Drive-External-Enclosure-Case-Box-Support-2TB-/251422436045?pt=US_Drive_Enclosures_Docks&hash=item3a89f1eacd) |
| Intenso 3,5" Portable Hard Drive | VIA Labs VL701 | 0x2109:0x0701 | Intenso / External USB 3.0 | -d sat,12 | Linux | dgloeckner | -i, -c, and -A work, most other commands rejected with sense key 4 |
| Yottamaster Type C to SATA III External Hard Drive Enclosure USB 3.1 | VIA Labs VL817 | 0x2109:0x0715 | VIA Labs, Inc / VL817 SATA Adaptor | -d sat | Linux 4.1.51 aarch64 ASUSWRT-Merlin | rdotts | Tested with Lexar NS100 120GB SSD using smartmontools 7.4, most (all?) commands seem to work |
| ORICO USB3.0 to SATA Hard Drive Adapter (35UTS) | Norelsys NS1066 | 0x2537:0x1066 | Orico 35UTS | -d sat | Linux | Exitsec | `SMART Status not supported: Incomplete response, ATA output registers missing` ] |
| Fantec ER-35U3 |  | 0x2537:0x1068 (0x100) |  | -d sat | Synology DSM (Linux) |  | auto does not work \| -d sat works fine |
| Sharkoon QuickPort XT USB3.0 | ? | 0x357d:0x7788 (0x8104) | ? | -d sat | Linux 3.13.0-36-generic (Ubuntu) | vh106 |  |
| Orico 6629 USB3.0 Dual Bay HDD Dock | JMicron | 0x357d:0x7788 | Orico 6629 | -d usbjmicron,x | Linux | PunchinMahPekaah |  |
| Hitachi Touro Desk 3TB | JMicron ? | 0x4971:0x1011 | ? | -d usbjmicron | Linux | panticz |  |
| Hitachi Touro Desk 3.0 2TB (USB 3.0) | JMicron JMS539 ? | 0x4971:0x1015 (0.00) @ USB 2.0 host | HitachiGST / Touro Desk 3.0 | -d sat | Linux | [ML-Archive](https://sourceforge.net/mailarchive/forum.php?thread_name=alpine.LFD.2.02.1204091006080.4226%40obsidian.localdomain&forum_name=smartmontools-database) | "ATA output registers missing" prevents some commands from working properly |
| Hitachi/SimpleTech 1TB | JMicron ? | 0x4971:0xce17 | ? | -d usbjmicron | Linux | [ML-Archive](https://sourceforge.net/mailarchive/forum.php?thread_name=1269716274.4767.19.camel%40localhost.localdomain&forum_name=smartmontools-devel) (restricted) |  |
| Sharkoon 2-Bay RAID Box (USB 3.0) | Prolific Technology Inc USB-SATA Bridge? | 0x6795:0x2756 (0x100) | Sharkoon 2-Bay RAID Box (USB 3.0) | -d sat | Ubuntu 13.04 (GNU/Linux) | OmegaPhil |  |
| Sharkoon QP XT Duo Clone | ? | 0x8882:0x009d | [Sharkoon SATA QuickPort Duo USB 3.0](http://en.sharkoon.com/product/1686/10066) | -d sat,12 | Linux (kernel 2.6) | lth | `SMART Status not supported: Incomplete response, ATA output registers missing` |
| PLATINUM MyDrive HP | VIA Labs VL701 | 0x9849:0x0701 | Bestmedia CD Recordable GmbH & Co. KG / PLATINUM MyDrive HP | -d sat,12 | Windows 7 | Gurken Papst |  |
| LogiLink QP0017 Docking Station | ? | 0xabcd:0x6104 | LogiLink / PCCloneEX Lite+ | -d sat | Linux | Giovanni Biscuolo |  |
|  | **JMicron** |  |  |  |  |  | **0xab12** |
| SATA 5 Gbps to USB 3.0 enclosure with cable | JMICRON JMS578 SATA 6Gb/s bridge | 0xab12:0x34cd (4.05) | [Sveon STG064](https://sveon.com/productos/sstorage-almacenamiento-usb/caja-plastico-usb30-instalacion-sin-tornillos-disco-duro-sata-portatil-sveon-stg064/) | -d sat | Linux | lemonuk |  |

  

---

### Unsupported Devices <a id="UnsupportedDevices"></a>

This table is on a [separate page](unsupported-usb-devices.md).

---

### Notes <a id="Notes"></a>

**Firmware updates**

While several chipsets are listed in unsupported category above (e.g. ASMedia - the USB ID of which may or may not actually indicate an ASMedia chip), there might actually be "better" firmware available. Given sufficient(!) Internet research one might be able to find a **compatible** improved firmware which given some luck smartmontools then will be able to support. Do exercise lots of caution,though (an improper/incompatible firmware update may easily render such USB adapters unusable/bricks).
