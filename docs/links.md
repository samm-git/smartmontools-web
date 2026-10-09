# Recommended Links <a id="RecommendedLinks"></a>


---

#### Graphical and web user interfaces for smartctl <a id="Graphicalandwebuserinterfacesforsmartctl"></a>
[GSmartControl](https://gsmartcontrol.shaduri.dev) (C++, Linux, FreeBSD, MacOS X, Windows)  

[QDiskInfo](https://github.com/edisionnano/QDiskInfo) (C++, Linux)  

HDD Guardian (VB.NET, Windows, retired).
Due to [CodePlex shutdown](https://devblogs.microsoft.com/bharry/shutting-down-codeplex/), see [GitHub](https://github.com/native-api/hddguardian) for source code, and [Softpedia](https://www.softpedia.com/get/System/Hard-Disk-Utils/HDD-Guardian.shtml) or [SnapFiles](https://www.snapfiles.com/get/hddguardian.html) for binaries.  

[DriveDx](https://binaryfruit.com/drivedx) (OS X, Proprietary Software)  

[SMART Utility](https://www.volitans-software.com/apps/smart-utility/) (OS X, Proprietary Software)  

[scrutiny](https://github.com/AnalogJ/scrutiny) WebUI for smartd S.M.A.R.T monitoring  

---

#### Monitoring tools working with smartmontools <a id="Monitoringtoolsworkingwithsmartmontools"></a>
[Munin](https://munin-monitoring.org/)  

[Nagios plugins](https://exchange.nagios.org/index.php?option=com_mtree&task=search&searchword=smartmontools)  

[SMART Attributes Monitoring Plugin](https://www.thomas-krenn.com/en/wiki/SMART_Attributes_Monitoring_Plugin)  

[SMART by Zabbix agent 2](https://www.zabbix.com/integrations/smart)  

[NetData SMART Attributes Monitoring Plugin](https://learn.netdata.cloud/docs/data-collection/hardware-devices-and-sensors/s.m.a.r.t.)  

[S.M.A.R.T. Input Plugin for the Telegraf - plugin-driven server agent for collecting & reporting metricsc](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/smart)  

[smartctl_exporter](https://github.com/prometheus-community/smartctl_exporter/tree/master) Export smartctl statistics to prometheus  

---

#### Mirrors and Forks of smartmontools <a id="MirrorsandForksofsmartmontools"></a>
[libsmartctl](https://github.com/allanliu/smartmontools) - Provides smartctl functionality as a static library.  

[Smartmontools with security](https://sourceforge.net/p/xboxhdm2/smartmontools-sec/ci/master/tree/) - a fork of
[smartmontools 6.2](https://www.smartmontools.org/browser/smartmontools@RELEASE_6_2) which adds
[ATA Security commands](https://www.xbmc4xbox.org.uk/forum/viewtopic.php?f=13&t=4125) to smartctl.  


---

#### Other projects using smartmontools <a id="Otherprojectsusingsmartmontools"></a>
[Linux Desktop HDD/SSD Reliability Test](https://github.com/linuxhw/SMART) - [Enterprise HDD/SSD Reliability Test](https://github.com/linuxhw/EnterpriseDrive) - a large collection of smartctl outputs collected by Linux users at [linux-hardware.org](https://linux-hardware.org).  

[BSD HDD/SSD Reliability Test](https://github.com/bsdhw/SMART) - a large collection of smartctl outputs collected by BSD users at [bsd-hardware.info](https://bsd-hardware.info).  

[Farm Check](https://github.com/gamestailer94/farm-check) - script and Docker image to detect potentially fraudulent Seagate hard drives.  

[Pure Go SMART library](https://github.com/dswarbrick/smart) (Go, GPLv3) - includes [mkdrivedb](https://github.com/dswarbrick/smart/tree/master/cmd/mkdrivedb) tool to download smartmontools [drivedb.h](https://www.smartmontools.org/browser/trunk/smartmontools/drivedb.h) file and convert it to YAML.  

[pySMART](https://pypi.org/project/pySMART/) - a simple Python wrapper for the smartctl component of smartmontools.  

[Smartmontools for Windows Package](https://github.com/deajan/smartmontools-win) - alternative smartmontools installation package for Windows.  

[Supermicro SuperDoctor](https://www.supermicro.com/en/solutions/management-software/superdoctor)  


---

#### Other HDD/SSD related open source projects <a id="OtherHDDSSDrelatedopensourceprojects"></a>
[CrystalDiskInfo](https://crystalmark.info/en/software/crystaldiskinfo/) (C++, MIT, Windows)  

[libatasmart, skdump, sktest](http://0pointer.de/blog/projects/being-smart.html) (C, LGPLv2.1, Linux)  

[hdck](https://hdck.sourceforge.net/) (C, GPLv3, Linux)  

[hdparm](https://sourceforge.net/projects/hdparm/) (C, BSD, Linux)  

[MBRFilter](https://github.com/Cisco-Talos/MBRFilter) (C, GPLv2, Windows) - Disk filter driver that prevents writing to sector 0  

[Naraeon NVMe Tools](https://www.naraeon.net/en/latest-nvme-tools/) (Delphi, GPLv3, Windows)  

[Naraeon SSD Tools](https://www.naraeon.net/en/latest-naraeon-ssd-tools/) (Delphi, MIT, Windows)  

[nvme-cli](https://github.com/linux-nvme/nvme-cli) (C, GPLv2, Linux/FreeBSD)  

[openSeaChest (Seagate)](https://github.com/Seagate/openSeaChest) (C, MPLv2, Cross platform)  

[trimcheck](https://github.com/CyberShadow/trimcheck) (D, MPLv2, Windows)  

[OS X SAT SMART Driver](https://github.com/kasbert/OS-X-SAT-SMART-Driver) (C++, APSL, Mac OS) - kernel driver for providing access to external (USB or FireWire) drive SMART data

---

#### HDD/SSD References <a id="HDDSSDReferences"></a>
[Johnny Lucky Solid State Drive Database](http://www.johnnylucky.org/data-storage/ssd-database.html)  

[Vendor specific SMART attributes for SSDs by Apple, Dell, HP and Lenovo](http://www.hddoracle.com/viewtopic.php?f=59&t=2034)  


---

#### Studies / Background info <a id="StudiesBackgroundinfo"></a>
[Hard disk fraud: used Seagate drives sold as new](https://www.heise.de/en/news/Hard-disk-fraud-Increasing-evidence-of-origin-in-China-10269059.html) (SMART values reset, FARM values left intact), *heise.de*, February 2025 (see also [Tom's Hardware](https://www.tomshardware.com/pc-components/hdds/german-seagate-customers-say-their-new-hard-drives-were-actually-used-resold-hdds-reportedly-used-for-tens-of-thousands-of-hours)).  

[Hard Drive Data and Stats](https://www.backblaze.com/cloud-storage/resources/hard-drive-test-data), Brian Beach, Andy Klein in *Backblaze Blog*, since November 2013.  

[Discovering Hard Disk Physical Geometry through Microbenchmarking](http://blog.stuffedcow.net/2019/09/hard-disk-geometry-microbenchmarking/), Henry Wong, September 2019 (includes source code of [hdubench](https://blog.stuffedcow.net/wp-content/uploads/2019/02/hdubench.cc)).  

[Self-encrypting deception: weaknesses in the encryption of solid state drives](https://ieeexplore.ieee.org/document/8835339), Carlo Meijer, Bernard van Gastel, November 2018 (see also [Schneier on Security](https://www.schneier.com/blog/archives/2018/11/security_of_sol.html)).  

[The Helium Factor and Hard Drive Failure Rates](https://www.backblaze.com/blog/helium-filled-hard-drive-failure-rates/), Andy Klein in *Backblaze Blog*, May 2018.  

[What SMART Stats Tell Us About Hard Drives](https://www.backblaze.com/blog/what-smart-stats-indicate-hard-drive-failures/), Andy Klein in *Backblaze Blog*, October 2016.  

[got HW crypto? On the (in)security of a Self-Encrypting Drive series](https://eprint.iacr.org/2015/1002), Gunnar Alendal, Christian Kison, modg, September 2015.  

[The SSD Endurance Experiment](https://web.archive.org/web/20241111125612/https://techreport.com/review/introducing-the-ssd-endurance-experiment/):
[1.5PB](https://web.archive.org/web/20250913082250/https://techreport.com/review/the-ssd-endurance-experiment-only-two-remain-after-1-5pb/),
[2PB](https://web.archive.org/web/20251111213352/https://techreport.com/review/the-ssd-endurance-experiment-two-freaking-petabytes/),
[They're all dead](https://web.archive.org/web/20260315055002/https://techreport.com/review/the-ssd-endurance-experiment-theyre-all-dead/),
Geoff Gasior in *The Tech Report*, August 2013 - March 2015 ([Video](https://www.youtube.com/watch?v=zYUi29UePoA)).  

[SSD Benchmarking at CERN](https://indico.cern.ch/event/320819/contributions/742938/attachments/618990/851639/SSD_Benchmarking_at_CERN__HEPiX_Fall_2014.pdf)
([Results](https://lvalsan.web.cern.ch/lvalsan/ssd_benchmarking/)), Liviu Vâlsan in *HEPiX Fall 2014 Workshop*, October 2014.  

[Anatomy of a Solid-state Drive](https://queue.acm.org/detail.cfm?id=2385276),
Michael Cornwell (Pure Storage) in *ACM Queue vol 10, no 10*, October 2012.  

[Vendor disk failure rates: Myth or metric?](https://www.computerworld.com/article/2536400/vendor-disk-failure-rates--myth-or-metric-.html), 
Mary Brandel in *Computerworld*, April 2008.  

[Are Disks the Dominant Contributor for Storage Failures? A Comprehensive Study of Storage Subsystem Failure Characteristics](https://www.usenix.org/legacy/events/fast08/tech/full_papers/jiang/jiang_html/index.html),
Weihang Jiang, Chongfeng Hu, Yuanyuan Zhou, Arkady Kanevsky in *6th USENIX Conference on File and Storage Technologies (FAST '08)*, pg 111-125, February 2008.  

[Hard Disk Drives: The Good, The Bad and The Ugly](https://queue.acm.org/detail.cfm?id=1317403), 
Jon Elerath (Network Appliance) in *ACM Queue vol 5, no 6*, pg 28-37, September 2007.  

[Disk Failures in the Real World: What does an MTTF of 1,000,000 hours mean to you?](https://www.usenix.org/legacy/events/fast07/tech/schroeder/schroeder_html/index.html),
Bianca Schroeder, Garth A. Gibson (Carnegie Mellon University) in *5th USENIX Conference on File and Storage Technologies (FAST '07)*, pg 1-16, February 2007.  

[Failure Trends in a Large Disk Drive Population](https://www.usenix.org/legacy/events/fast07/tech/full_papers/pinheiro/pinheiro_html/index.html),
Eduardo Pinheiro, Wolf-Dietrich Weber, Luiz André Barroso (Google Inc.) in *5th USENIX Conference on File and Storage Technologies (FAST '07)*, pg 17-28, February 2007.  

[Specifying Reliability in the Disk Drive Industry: No More MTBF's](https://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&tp=&arnumber=816306),
Jon G. Elerath (IBM Storage Systems Division) in *Proceedings of the IEEE 2000 Annual Reliability and Maintainability Symposium*, pg 194, January 2000.

---

#### Useful references on SMART <a id="UsefulreferencesonSMART"></a>

[Wikipedia](https://www.wikipedia.org/) articles about SMART:
  [English](https://en.wikipedia.org/wiki/S.M.A.R.T.),
  [Deutsch](https://de.wikipedia.org/wiki/Self-Monitoring%2C_Analysis_and_Reporting_Technology),
  [Español](https://es.wikipedia.org/wiki/S.M.A.R.T.),
  [Français](https://fr.wikipedia.org/wiki/Self-Monitoring%2C_Analysis_and_Reporting_Technology),  

  [Italiano](https://it.wikipedia.org/wiki/Self-Monitoring%2C_Analysis_and_Reporting_Technology),
  [Japanese](https://ja.wikipedia.org/wiki/Self-Monitoring%2C_Analysis_and_Reporting_Technology),
  [Nederlands](https://nl.wikipedia.org/wiki/S.M.A.R.T.),
  [Polski](https://pl.wikipedia.org/wiki/S.M.A.R.T._%28informatyka%29),  

  [Português](https://pt.wikipedia.org/wiki/S.M.A.R.T.),
  [Russian](https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_SMART),
  [Slovenčina](https://sk.wikipedia.org/wiki/S.M.A.R.T),
  [Svenska](https://sv.wikipedia.org/wiki/S.M.A.R.T.)

[Zbigniew Chlondowski's SMART Information Site](https://smartlinux.sourceforge.net/smart/) (no longer maintained)

---

#### ATA/ATAPI References <a id="ATAATAPIReferences"></a>

The [homepage of the T13 project](https://www.t13.org).  

Access to documents requires a T13 account.  


---

#### SCSI References <a id="SCSIReferences"></a>
The [homepage of the T10 project](https://www.t10.org).  

Public documents are available under the conditions of the [T10 public-access model](https://www.t10.org/t10_access.htm).  


---

#### NVMe References <a id="NVMeReferences"></a>
See [NVMe wiki page](nvme-support.md#AboutNVMe).


---

#### The original SMART specification <a id="TheoriginalSMARTspecification"></a>

The original SMART specification was SFF-8035i from the
[Small Form Factors (SFF) Committee](https://web.archive.org/web/20130411205003/http://www.sffcommittee.org/ns/)
(later [transitioned](https://web.archive.org/web/20190408092657/http://www.sffcommittee.org/) to the
[SNIA SFF Technology Affiliate TWG](https://www.snia.org/sff)).  

The documents are still available here:  

[SFF-8035i "Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.)" version 1.0](https://web.archive.org/web/20190128051622/https://www.linux-mips.org/pub/linux/mips/people/macro/S.M.A.R.T./SFF-8035i.pdf), May 1995.  

[SFF-8035i "Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.)" revision 2.0](https://web.archive.org/web/20240206013128/https://www.linux-mips.org/pub/linux/mips/people/macro/S.M.A.R.T./8035R2_0.PDF), April 1996.  

[SFF-8055i "S.M.A.R.T. Applications Guide for the ATA and SCSI Interfaces" revision 1.4](https://web.archive.org/web/20200926215348/https://www.linux-mips.org/pub/linux/mips/people/macro/S.M.A.R.T./8055.PDF), June 1996.
