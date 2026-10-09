# NAS devices and smartmontools <a id="NASdevicesandsmartmontools"></a>

With the increased use of netbooks and laptops, plus other mobile devices on home networks, there can be advantages to adding some Network Attached Storage (NAS) to the mix. This can be wired (i.e. with 100 Mbps or gigabit wired ethernet) directly to the wireless access point.

One of the disadvantages of NAS is that it is typically managed via a web interface and "what you see is what you get". This may not include access to SMART information. Using RAID (other than RAID 0) on the NAS box should help reliability but there is always that nagging feeling that all may not be well with one of those disks.

The remaining part of this page will discuss the Dlink DNS-323 and DNS-321 NAS boxes. They take one or two 3.5" SATA disks whose size can be up to 1.5 TB each. If two disks are present then they can be configured to appear as separate volumes, RAID 0, RAID 1 (and linear mode?). A variable speed fan keeps the disks relatively cool (and isn't too loud) and the disks are spun down when not in use. I leave my DNS-323 on all the time and have it connected to a UPS. The standard firmware from Dlink has a web interface whose look and feel should be familiar to anyone who has configured a wireless access point.

Like many such devices these NAS boxes are running Linux under the covers. Further the Dlink firmware during its boot sequence checks the top level directory of the first disk for an executable file called "funplug" and if present executes it. This is a hackers delight allowing many additional features to be added while maintaining the manufacturer's firmware. One such hacker who goes by the name of "fonz" has almost a mini-distribution leveraged off the standard Dlink firmware. See http://wiki.dns323.info/ for more information and http://www.inreto.de/dns323/fun-plug/ to download fonz's work. I use version 0.5 without problems.

So Dlink gives us a web interface and telnet for low level access. Fonz adds ssh and numerous other packages including smartmontools. The 323 and 321 use marvell SATA controllers which are not currently auto-detected. Hence an additional "-d marvell" option is required. The two SATA disks are named /dev/sda and /dev/sdb and here is output from the first disk on a DNS-321 followed by the second disk on a DNS-323.
```
#!sh
# smartctl -i -d marvell /dev/sda <a id="smartctl-i-dmarvelldevsda"></a>
smartctl version 5.38 [arm-unknown-linux-uclibc] Copyright (C) 2002-8 Bruce Allen
Home page is http://smartmontools.sourceforge.net/

=== START OF INFORMATION SECTION ===
Device Model:     WDC WD10EACS-00D6B1
Serial Number:    xxxxxx
Firmware Version: 01.01A01
User Capacity:    1,000,204,886,016 bytes
Device is:        Not in smartctl database [for details use: -P showall]
ATA Version is:   8
ATA Standard is:  Exact ATA specification draft version not indicated
Local Time is:    Fri Jan 23 02:47:55 2009 UTC
SMART support is: Available - device has SMART capability.
SMART support is: Enabled
```

```
#!sh
# smartctl -a -d marvell /dev/sdb <a id="smartctl-a-dmarvelldevsdb"></a>
smartctl version 5.38 [arm-unknown-linux-uclibc] Copyright (C) 2002-8 Bruce Allen
Home page is http://smartmontools.sourceforge.net/

=== START OF INFORMATION SECTION ===
Model Family:     Seagate Barracuda 7200.10 family
Device Model:     ST3320620AS
Serial Number:    xxxx
Firmware Version: 3.AAK
User Capacity:    320,072,933,376 bytes
Device is:        In smartctl database [for details use: -P show]
ATA Version is:   7
ATA Standard is:  Exact ATA specification draft version not indicated
Local Time is:    Thu Jan 22 23:22:50 2009 EST
SMART support is: Available - device has SMART capability.
SMART support is: Enabled

=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

General SMART Values:
Offline data collection status:  (0x82)    Offline data collection activity
                    was completed without error.
                    Auto Offline Data Collection: Enabled.
Self-test execution status:      (   0)    The previous self-test routine completed
                    without error or no self-test has ever
                    been run.
Total time to complete Offline
data collection:          ( 430) seconds.
Offline data collection
capabilities:              (0x5b) SMART execute Offline immediate.
                    Auto Offline data collection on/off support.
                    Suspend Offline collection upon new
                    command.
                    Offline surface scan supported.
                    Self-test supported.
                    No Conveyance Self-test supported.
                    Selective Self-test supported.
SMART capabilities:            (0x0003)    Saves SMART data before entering
                    power-saving mode.
                    Supports SMART auto save timer.
Error logging capability:        (0x01)    Error logging supported.
                    General Purpose Logging supported.
Short self-test routine
recommended polling time:      (   1) minutes.
Extended self-test routine
recommended polling time:      ( 115) minutes.

SMART Attributes Data Structure revision number: 10
Vendor Specific SMART Attributes with Thresholds:
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  1 Raw_Read_Error_Rate     0x000f   113   099   006    Pre-fail  Always       -       109438732
  3 Spin_Up_Time            0x0003   096   095   000    Pre-fail  Always       -       0
  4 Start_Stop_Count        0x0032   099   099   020    Old_age   Always       -       1395
  5 Reallocated_Sector_Ct   0x0033   100   100   036    Pre-fail  Always       -       0
  7 Seek_Error_Rate         0x000f   069   060   030    Pre-fail  Always       -       8296949
  9 Power_On_Hours          0x0032   098   098   000    Old_age   Always       -       2232
 10 Spin_Retry_Count        0x0013   100   100   097    Pre-fail  Always       -       0
 12 Power_Cycle_Count       0x0032   100   100   020    Old_age   Always       -       26
187 Reported_Uncorrect      0x0032   100   100   000    Old_age   Always       -       0
189 High_Fly_Writes         0x003a   100   100   000    Old_age   Always       -       0
190 Airflow_Temperature_Cel 0x0022   072   055   045    Old_age   Always       -       28 (Lifetime Min/Max 28/28)
194 Temperature_Celsius     0x0022   028   045   000    Old_age   Always       -       28 (0 18 0 0)
195 Hardware_ECC_Recovered  0x001a   068   060   000    Old_age   Always       -       107892778
197 Current_Pending_Sector  0x0012   100   100   000    Old_age   Always       -       0
198 Offline_Uncorrectable   0x0010   100   100   000    Old_age   Offline      -       0
199 UDMA_CRC_Error_Count    0x003e   200   200   000    Old_age   Always       -       0
200 Multi_Zone_Error_Rate   0x0000   100   253   000    Old_age   Offline      -       0
202 TA_Increase_Count       0x0032   100   253   000    Old_age   Always       -       0

SMART Error Log Version: 1
No Errors Logged

SMART Self-test log structure revision number 1
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Short offline       Completed without error       00%         0         - <a id="1ShortofflineCompletedwithouterror000-"></a>

SMART Selective self-test log data structure revision number 1
 SPAN  MIN_LBA  MAX_LBA  CURRENT_TEST_STATUS
    1        0        0  Not_testing
    2        0        0  Not_testing
    3        0        0  Not_testing
    4        0        0  Not_testing
    5        0        0  Not_testing
Selective self-test flags (0x0):
  After scanning selected spans, do NOT read-scan remainder of disk.
If Selective self-test is pending on power-up, resume after 0 minute delay.
```
