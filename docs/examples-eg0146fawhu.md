## smartctl report for EG0146FAWHU <a id="smartctlreportforEG0146FAWHU"></a>

### Command <a id="Command"></a>

Access via HP Smart Array controller: `smartctl -d cciss,3 -q noserial -x /dev/sda`


### Output <a id="Output"></a>

```
smartctl 5.43 2012-06-30 r3573 [x86_64-linux-2.6.32-642.13.1.el6.centos.plus.x86_64] (local build)
Copyright (C) 2002-12 by Bruce Allen, http://smartmontools.sourceforge.net

/dev/sda [cciss_disk_03] [SCSI]: Device open changed type from 'sat,auto' to 'cciss'
Vendor:               HP      
Product:              EG0146FAWHU     
Revision:             HPDF
User Capacity:        146,815,737,856 bytes [146 GB]
Logical block size:   512 bytes
Device type:          disk
Transport protocol:   SAS
Local Time is:        Sun Mar 19 13:23:31 2017 CET
Device supports SMART and is Enabled
Temperature Warning Enabled
SMART Health Status: OK

Current Drive Temperature:     39 C
Drive Trip Temperature:        65 C
Elements in grown defect list: 2
Vendor (Seagate) cache information
  Blocks sent to initiator = 1616406451
  Blocks received from initiator = 2528545986
  Blocks read from cache and sent to initiator = 4134560162
  Number of read and write commands whose size <= segment size = 1108615172
  Number of read and write commands whose size > segment size = 0
Vendor (Seagate/Hitachi) factory information
  number of hours powered up = 55491.72
  number of minutes until next internal SMART test = 8

Error counter log:
           Errors Corrected by           Total   Correction     Gigabytes    Total
               ECC          rereads/    errors   algorithm      processed    uncorrected
           fast | delayed   rewrites  corrected  invocations   [10^9 bytes]  errors
read:          0        9         0  3457984800          0     427330.737           0
write:         0        0         0         0          0       3560.808           0

Non-medium error count:       48

SMART Self-test log
Num  Test              Status                 segment  LifeTime  LBA_first_err [SK ASC ASQ]
     Description                              number   (hours)
# 1  Background short  Completed                   -   46843                 - [-   -    -] <a id="1BackgroundshortCompleted-46843----"></a>
# 2  Background short  Completed                   -   46819                 - [-   -    -] <a id="2BackgroundshortCompleted-46819----"></a>
# 3  Background short  Completed                   -   46795                 - [-   -    -] <a id="3BackgroundshortCompleted-46795----"></a>
# 4  Background long   Completed                   -   46773                 - [-   -    -] <a id="4BackgroundlongCompleted-46773----"></a>
# 5  Background short  Completed                   -   46771                 - [-   -    -] <a id="5BackgroundshortCompleted-46771----"></a>
# 6  Background short  Completed                   -   46747                 - [-   -    -] <a id="6BackgroundshortCompleted-46747----"></a>
# 7  Background short  Completed                   -   46723                 - [-   -    -] <a id="7BackgroundshortCompleted-46723----"></a>
# 8  Background short  Completed                   -   46699                 - [-   -    -] <a id="8BackgroundshortCompleted-46699----"></a>
# 9  Background short  Completed                   -   46675                 - [-   -    -] <a id="9BackgroundshortCompleted-46675----"></a>
#10  Background short  Completed                   -   46651                 - [-   -    -]
#11  Background short  Completed                   -   46627                 - [-   -    -]
#12  Background long   Completed                   -   46605                 - [-   -    -]
#13  Background short  Completed                   -   46603                 - [-   -    -]
#14  Background short  Completed                   -   46579                 - [-   -    -]
#15  Background short  Completed                   -   46555                 - [-   -    -]
#16  Background short  Completed                   -   46531                 - [-   -    -]
#17  Background short  Completed                   -   46507                 - [-   -    -]
#18  Background short  Completed                   -   46483                 - [-   -    -]
#19  Background short  Completed                   -   46459                 - [-   -    -]
#20  Background long   Completed                   -   46437                 - [-   -    -]

Long (extended) Self Test duration: 1570 seconds [26.2 minutes]

Background scan results log
  Status: waiting until BMS interval timer expires
    Accumulated power on time, hours:minutes 55491:43 [3329503 minutes]
    Number of background scans performed: 2152,  scan progress: 0.00%
    Number of background medium scans performed: 2152

   #  when        lba(hex)    [sk,asc,ascq]    reassign_status
 33024 21708:31  0008012701180900  [f,3,7e]   Reserved [0x0]
 33025 34882:38  0008012401180900  [f,1,56]   Reserved [0x0]
 33026 41201:47  0008012b01180900  [f,fe,ab]   Reserved [0x0]
Protocol Specific port log page for SAS SSP
relative target port id = 1
  generation code = 0
  number of phys = 1
  phy identifier = 0
    attached device type: end device
    attached reason: unknown
    reason: hard reset
    negotiated logical link rate: phy enabled; 6 Gbps
    attached initiator port: ssp=1 stp=1 smp=1
    attached target port: ssp=0 stp=0 smp=0
    SAS address = 0x5000c5002bdd5c6d
    attached SAS address = 0x5001438009600560
    attached phy identifier = 3
    Invalid DWORD count = 0
    Running disparity error count = 0
    Loss of DWORD synchronization = 29271
    Phy reset problem = 0
    Phy event descriptors:
     Invalid word count: 0
     Running disparity error count: 0
     Loss of dword synchronization count: 29271
     Phy reset problem count: 0
relative target port id = 2
  generation code = 0
  number of phys = 1
  phy identifier = 1
    attached device type: no device attached
    attached reason: unknown
    reason: unknown
    negotiated logical link rate: phy enabled; 1.5 Gbps
    attached initiator port: ssp=0 stp=0 smp=0
    attached target port: ssp=0 stp=0 smp=0
    SAS address = 0x5000c5002bdd5c6e
    attached SAS address = 0x0
    attached phy identifier = 0
    Invalid DWORD count = 0
    Running disparity error count = 0
    Loss of DWORD synchronization = 0
    Phy reset problem = 0
    Phy event descriptors:
     Invalid word count: 0
     Running disparity error count: 0
     Loss of dword synchronization count: 0
     Phy reset problem count: 0
```
