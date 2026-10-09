## smartctl report for HUS154545VLS300 <a id="smartctlreportforHUS154545VLS300"></a>

### Command <a id="Command"></a>

Access via MegaRAID SAS 1078 controller: `smartctl -x -q noserial ..`


### Output <a id="Output"></a>

```
smartctl 6.5 2016-05-07 r4318 [FreeBSD 10.3-RELEASE-p16 amd64] (local build)
Copyright (C) 2002-16, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Vendor:               HITACHI
Product:              HUS154545VLS300
Revision:             D522
User Capacity:        450,098,159,616 bytes [450 GB]
Logical block size:   512 bytes
Rotation Rate:        15000 rpm
Device type:          disk
Transport protocol:   SAS (SPL-3)
Local Time is:        Tue Mar 14 21:49:32 2017 CET
SMART support is:     Available - device has SMART capability.
SMART support is:     Enabled
Temperature Warning:  Disabled or Not Supported
Read Cache is:        Enabled
Writeback Cache is:   Disabled

=== START OF READ SMART DATA SECTION ===
SMART Health Status: OK

Current Drive Temperature:     36 C
Drive Trip Temperature:        85 C

Manufactured in week 48 of year 2008
Specified cycle count over device lifetime:  50000
Accumulated start-stop cycles:  32
Elements in grown defect list: 0

Vendor (Seagate) cache information
  Blocks sent to initiator = 62140123709440

Error counter log:
           Errors Corrected by           Total   Correction     Gigabytes    Total
               ECC          rereads/    errors   algorithm      processed    uncorrected
           fast | delayed   rewrites  corrected  invocations   [10^9 bytes]  errors
read:          0        9         0         9       2244          8.745           0
write:         0     7950         0      7950       7978        242.625           0
verify:        0   475104         0    475104     497209     118830.415          30

Non-medium error count:        0

SMART Self-test log
Num  Test              Status                 segment  LifeTime  LBA_first_err [SK ASC ASQ]
     Description                              number   (hours)
# 1  Background long   Completed                  11    5640                 - [-   -    -] <a id="1BackgroundlongCompleted115640----"></a>
# 2  Background long   Completed                  11     469                 - [-   -    -] <a id="2BackgroundlongCompleted11469----"></a>
# 3  Background long   Completed                  11       2                 - [-   -    -] <a id="3BackgroundlongCompleted112----"></a>
# 4  Background short  Completed                  11       1                 - [-   -    -] <a id="4BackgroundshortCompleted111----"></a>

Long (extended) Self Test duration: 4363 seconds [72.7 minutes]

Background scan results log
  Status: waiting until BMS interval timer expires
    Accumulated power on time, hours:minutes 10762:29 [645749 minutes]
    Number of background scans performed: 422,  scan progress: 0.00%
    Number of background medium scans performed: 0

   #  when        lba(hex)    [sk,asc,ascq]    reassign_status
   1   96:41  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
   2   93:37  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
   3   90:33  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
   4   87:30  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
   5   83:49  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
   6   80:45  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
   7   77:42  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
   8   74:38  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
   9   71:34  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  10   68:30  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  11   65:26  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  12   62:22  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  13   59:18  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  14   56:14  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  15   53:11  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  16   50:07  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  17   47:03  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  18   43:59  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  19   40:55  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  20   37:51  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  21   34:47  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  22   31:43  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  23   28:40  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  24   25:36  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  25   22:32  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  26   19:28  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  27   16:24  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  28   13:20  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command
  29    8:14  0000000000000000  [3,3,0]   Require Write or Reassign Blocks command

Protocol Specific port log page for SAS SSP
relative target port id = 1
  generation code = 0
  number of phys = 1
  phy identifier = 0
    attached device type: SAS or SATA device
    attached reason: unknown
    reason: unknown
    negotiated logical link rate: phy enabled; 3 Gbps
    attached initiator port: ssp=1 stp=1 smp=1
    attached target port: ssp=0 stp=0 smp=0
    SAS address = 0x5000cca0091af0e9
    attached SAS address = 0x50022190a744c003
    attached phy identifier = 3
    Invalid DWORD count = 332
    Running disparity error count = 265
    Loss of DWORD synchronization = 266
    Phy reset problem = 0
relative target port id = 2
  generation code = 0
  number of phys = 1
  phy identifier = 1
    attached device type: no device attached
    attached reason: unknown
    reason: unknown
    negotiated logical link rate: phy enabled; unknown
    attached initiator port: ssp=0 stp=0 smp=0
    attached target port: ssp=0 stp=0 smp=0
    SAS address = 0x5000cca0091af0ea
    attached SAS address = 0x0
    attached phy identifier = 0
    Invalid DWORD count = 0
    Running disparity error count = 0
    Loss of DWORD synchronization = 0
    Phy reset problem = 0
```
