## smartctl report about read failure for TOSHIBA THNSNJ256GVNU <a id="smartctlreportaboutreadfailureforTOSHIBATHNSNJ256GVNU"></a>

### Command <a id="Command"></a>

`smartctl -x -q noserial ..`

### Some Explanations <a id="SomeExplanations"></a>

Concerning this line: `Device is:        Not in smartctl database [for details use: -P showall]`

See under `INFORMATION SECTION`. This disk model was not in [smartmontools drive db](https://www.smartmontools.org/browser/trunk/smartmontools/drivedb.h) at the time when this report was printed. Therefore it shows *Unknown_SSD_Attribute* and *Unknown_Attribute* in some lines of the `SMART Attributes Data Structure`.
See the following section of our FAQ for [more details and an instruction on how you can get a disk added to the database](faq.md#MyATASATAdriveisnotinthesmartctlsmartddatabase).

### Output <a id="Output"></a>

```
smartctl 6.5 2016-05-07 r4318 [i686-w64-mingw32-win7] (sf-6.5-1)
Copyright (C) 2002-16, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Device Model:     TOSHIBA THNSNJ256GVNU
Firmware Version: JUTA0101
User Capacity:    256,060,514,304 bytes [256 GB]
Sector Size:      512 bytes logical/physical
Rotation Rate:    Solid State Device
Form Factor:      < 1.8 inches
Device is:        Not in smartctl database [for details use: -P showall]
ATA Version is:   ACS-2 (minor revision not indicated)
SATA Version is:  SATA 3.1, 6.0 Gb/s (current: 6.0 Gb/s)
Local Time is:    Sun Mar 12 07:35:17 2017 PST
SMART support is: Available - device has SMART capability.
SMART support is: Enabled
AAM feature is:   Unavailable
APM level is:     254 (maximum performance)
Rd look-ahead is: Enabled
Write cache is:   Enabled
ATA Security is:  Disabled, frozen [SEC2]
Wt Cache Reorder: Enabled

=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

General SMART Values:
Offline data collection status:  (0x02)	Offline data collection activity
					was completed without error.
					Auto Offline Data Collection: Disabled.
Self-test execution status:      ( 112)	The previous self-test completed having
					the read element of the test failed.
Total time to complete Offline 
data collection: 		(  120) seconds.
Offline data collection
capabilities: 			 (0x5b) SMART execute Offline immediate.
					Auto Offline data collection on/off support.
					Suspend Offline collection upon new
					command.
					Offline surface scan supported.
					Self-test supported.
					No Conveyance Self-test supported.
					Selective Self-test supported.
SMART capabilities:            (0x0003)	Saves SMART data before entering
					power-saving mode.
					Supports SMART auto save timer.
Error logging capability:        (0x01)	Error logging supported.
					General Purpose Logging supported.
Short self-test routine 
recommended polling time: 	 (   2) minutes.
Extended self-test routine
recommended polling time: 	 (  10) minutes.
SCT capabilities: 	       (0x003d)	SCT Status supported.
					SCT Error Recovery Control supported.
					SCT Feature Control supported.
					SCT Data Table supported.

SMART Attributes Data Structure revision number: 16
Vendor Specific SMART Attributes with Thresholds:
ID# ATTRIBUTE_NAME          FLAGS    VALUE WORST THRESH FAIL RAW_VALUE
  1 Raw_Read_Error_Rate     -O-R--   099   092   000    -    0
  2 Throughput_Performance  P-S---   100   100   050    -    0
  3 Spin_Up_Time            POS---   100   100   050    -    0
  5 Reallocated_Sector_Ct   PO--C-   100   100   050    -    0
  7 Unknown_SSD_Attribute   PO-R--   100   100   050    -    0
  8 Unknown_SSD_Attribute   P-S---   100   100   050    -    0
  9 Power_On_Hours          -O--C-   100   100   000    -    438
 10 Unknown_SSD_Attribute   PO--C-   100   100   050    -    0
 12 Power_Cycle_Count       -O--C-   100   100   000    -    287
167 Unknown_Attribute       -O---K   100   100   000    -    0
168 Unknown_Attribute       -O--C-   100   100   000    -    3
169 Unknown_Attribute       PO--C-   100   100   010    -    100
170 Unknown_Attribute       PO--C-   100   100   010    -    0
173 Unknown_Attribute       PO--C-   200   200   100    -    0
175 Program_Fail_Count_Chip PO--C-   100   100   010    -    0
192 Power-Off_Retract_Count -O--C-   100   100   000    -    25
194 Temperature_Celsius     -O---K   062   046   000    -    38 (Min/Max 18/54)
197 Current_Pending_Sector  -O--C-   100   100   000    -    0
240 Unknown_SSD_Attribute   PO--C-   100   100   050    -    0
                            ||||||_ K auto-keep
                            |||||__ C event count
                            ||||___ R error rate
                            |||____ S speed/performance
                            ||_____ O updated online
                            |______ P prefailure warning

General Purpose Log Directory Version 1
SMART           Log Directory Version 1 [multi-sector log support]
Address    Access  R/W   Size  Description
0x00       GPL,SL  R/O      1  Log Directory
0x01           SL  R/O      1  Summary SMART error log
0x02           SL  R/O     51  Comprehensive SMART error log
0x03       GPL     R/O     64  Ext. Comprehensive SMART error log
0x04       GPL,SL  R/O      8  Device Statistics log
0x06           SL  R/O      1  SMART self-test log
0x07       GPL     R/O      1  Extended self-test log
0x09           SL  R/W      1  Selective self-test log
0x10       GPL     R/O      1  SATA NCQ Queued Error log
0x11       GPL     R/O      1  SATA Phy Event Counters log
0x30       GPL,SL  R/O      9  IDENTIFY DEVICE data log
0x80-0x9f  GPL,SL  R/W     16  Host vendor specific log
0xe0       GPL,SL  R/W      1  SCT Command/Status
0xe1       GPL,SL  R/W      1  SCT Data Transfer

SMART Extended Comprehensive Error Log Version: 1 (64 sectors)
Device Error Count: 65535 (device log contains only the most recent 256 errors)
	CR     = Command Register
	FEATR  = Features Register
	COUNT  = Count (was: Sector Count) Register
	LBA_48 = Upper bytes of LBA High/Mid/Low Registers ]  ATA-8
	LH     = LBA High (was: Cylinder High) Register    ]   LBA
	LM     = LBA Mid (was: Cylinder Low) Register      ] Register
	LL     = LBA Low (was: Sector Number) Register     ]
	DV     = Device (was: Device/Head) Register
	DC     = Device Control Register
	ER     = Error register
	ST     = Status register
Powered_Up_Time is measured from power on, and printed as
DDd+hh:mm:SS.sss where DD=days, hh=hours, mm=minutes,
SS=sec, and sss=millisec. It "wraps" after 49.710 days.

Error 65535 [118] occurred at disk power-on lifetime: 438 hours (18 days + 6 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER -- ST COUNT  LBA_48  LH LM LL DV DC
  -- -- -- == -- == == == -- -- -- -- --
  40 -- 51 00 f0 00 00 01 8a a7 20 40 00  Error: UNC at LBA = 0x018aa720 = 25863968

  Commands leading to the command that caused the error were:
  CR FEATR COUNT  LBA_48  LH LM LL DV DC  Powered_Up_Time  Command/Feature_Name
  -- == -- == -- == == == -- -- -- -- --  ---------------  --------------------
  60 00 20 00 a0 00 00 01 d8 eb 8e 40 00     00:00:12.307  READ FPDMA QUEUED
  60 00 40 00 98 00 00 02 94 7f fa 40 00     00:00:12.307  READ FPDMA QUEUED
  61 00 08 00 90 00 00 1c 46 16 18 40 00     00:00:12.307  WRITE FPDMA QUEUED
  60 00 40 00 88 00 00 01 2d 9d 22 40 00     00:00:12.290  READ FPDMA QUEUED
  61 00 08 00 80 00 00 00 66 d1 38 40 00     00:00:12.290  WRITE FPDMA QUEUED

Error 65534 [117] occurred at disk power-on lifetime: 438 hours (18 days + 6 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER -- ST COUNT  LBA_48  LH LM LL DV DC
  -- -- -- == -- == == == -- -- -- -- --
  40 -- 51 00 10 00 00 01 8a a7 20 40 00  Error: WP at LBA = 0x018aa720 = 25863968

  Commands leading to the command that caused the error were:
  CR FEATR COUNT  LBA_48  LH LM LL DV DC  Powered_Up_Time  Command/Feature_Name
  -- == -- == -- == == == -- -- -- -- --  ---------------  --------------------
  61 00 08 00 d8 00 00 00 66 d1 40 40 00     00:00:12.183  WRITE FPDMA QUEUED
  61 00 48 00 d0 00 00 00 66 d3 30 40 00     00:00:12.183  WRITE FPDMA QUEUED
  60 00 08 00 c8 00 00 00 6b 0a 78 40 00     00:00:12.132  READ FPDMA QUEUED
  60 00 08 00 c0 00 00 00 a1 e5 10 40 00     00:00:12.100  READ FPDMA QUEUED
  61 00 01 00 b8 00 00 00 b8 9d 58 40 00     00:00:12.045  WRITE FPDMA QUEUED

Error 65533 [116] occurred at disk power-on lifetime: 438 hours (18 days + 6 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER -- ST COUNT  LBA_48  LH LM LL DV DC
  -- -- -- == -- == == == -- -- -- -- --
  40 -- 51 00 48 00 00 01 8a a7 20 40 00  Error: UNC at LBA = 0x018aa720 = 25863968

  Commands leading to the command that caused the error were:
  CR FEATR COUNT  LBA_48  LH LM LL DV DC  Powered_Up_Time  Command/Feature_Name
  -- == -- == -- == == == -- -- -- -- --  ---------------  --------------------
  60 00 20 00 f0 00 00 02 1c 7a c8 40 00     00:00:11.900  READ FPDMA QUEUED
  60 00 08 00 e8 00 00 02 94 87 64 40 00     00:00:11.885  READ FPDMA QUEUED
  60 00 08 00 d8 00 00 00 6c 9f 20 40 00     00:00:11.884  READ FPDMA QUEUED
  60 00 08 00 d0 00 00 02 7a d3 08 40 00     00:00:11.884  READ FPDMA QUEUED
  60 00 40 00 c8 00 00 03 33 4a 20 40 00     00:00:11.884  READ FPDMA QUEUED

Error 65532 [115] occurred at disk power-on lifetime: 438 hours (18 days + 6 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER -- ST COUNT  LBA_48  LH LM LL DV DC
  -- -- -- == -- == == == -- -- -- -- --
  40 -- 51 00 70 00 00 01 8a a7 20 40 00  Error: UNC at LBA = 0x018aa720 = 25863968

  Commands leading to the command that caused the error were:
  CR FEATR COUNT  LBA_48  LH LM LL DV DC  Powered_Up_Time  Command/Feature_Name
  -- == -- == -- == == == -- -- -- -- --  ---------------  --------------------
  60 00 03 00 20 00 00 03 1f d5 dd 40 00     00:00:11.859  READ FPDMA QUEUED
  60 00 05 00 18 00 00 03 35 3a 00 40 00     00:00:11.545  READ FPDMA QUEUED
  60 00 18 00 10 00 00 03 33 5d 15 40 00     00:00:11.529  READ FPDMA QUEUED
  60 00 08 00 08 00 00 00 68 ea 10 40 00     00:00:11.528  READ FPDMA QUEUED
  60 00 08 00 00 00 00 02 4d 3f b8 40 00     00:00:11.527  READ FPDMA QUEUED

Error 65531 [114] occurred at disk power-on lifetime: 438 hours (18 days + 6 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER -- ST COUNT  LBA_48  LH LM LL DV DC
  -- -- -- == -- == == == -- -- -- -- --
  40 -- 51 00 30 00 00 01 8a a7 20 40 00  Error: UNC at LBA = 0x018aa720 = 25863968

  Commands leading to the command that caused the error were:
  CR FEATR COUNT  LBA_48  LH LM LL DV DC  Powered_Up_Time  Command/Feature_Name
  -- == -- == -- == == == -- -- -- -- --  ---------------  --------------------
  60 00 40 00 00 00 00 01 73 07 d2 40 00     00:00:11.463  READ FPDMA QUEUED
  60 00 b4 00 f8 00 00 01 e1 6b 60 40 00     00:00:11.462  READ FPDMA QUEUED
  60 00 08 00 f0 00 00 02 1c 77 20 40 00     00:00:11.462  READ FPDMA QUEUED
  60 00 08 00 e0 00 00 00 6a 14 30 40 00     00:00:11.462  READ FPDMA QUEUED
  60 00 08 00 c8 00 00 03 01 01 00 40 00     00:00:11.462  READ FPDMA QUEUED

Error 65530 [113] occurred at disk power-on lifetime: 438 hours (18 days + 6 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER -- ST COUNT  LBA_48  LH LM LL DV DC
  -- -- -- == -- == == == -- -- -- -- --
  40 -- 51 00 20 00 00 01 8a a7 20 40 00  Error: UNC at LBA = 0x018aa720 = 25863968

  Commands leading to the command that caused the error were:
  CR FEATR COUNT  LBA_48  LH LM LL DV DC  Powered_Up_Time  Command/Feature_Name
  -- == -- == -- == == == -- -- -- -- --  ---------------  --------------------
  60 00 20 00 28 00 00 03 33 5f 75 40 00     00:00:11.430  READ FPDMA QUEUED
  60 00 40 00 18 00 00 00 21 f6 92 40 00     00:00:11.430  READ FPDMA QUEUED
  60 00 20 00 10 00 00 01 2d bb 28 40 00     00:00:11.229  READ FPDMA QUEUED
  60 00 40 00 08 00 00 01 73 05 e0 40 00     00:00:11.122  READ FPDMA QUEUED
  60 00 40 00 00 00 00 00 3d 9d 60 40 00     00:00:11.122  READ FPDMA QUEUED

Error 65529 [112] occurred at disk power-on lifetime: 438 hours (18 days + 6 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER -- ST COUNT  LBA_48  LH LM LL DV DC
  -- -- -- == -- == == == -- -- -- -- --
  40 -- 51 00 f8 00 00 01 8a a7 20 40 00  Error: UNC at LBA = 0x018aa720 = 25863968

  Commands leading to the command that caused the error were:
  CR FEATR COUNT  LBA_48  LH LM LL DV DC  Powered_Up_Time  Command/Feature_Name
  -- == -- == -- == == == -- -- -- -- --  ---------------  --------------------
  60 00 40 00 10 00 00 01 25 a3 a2 40 00     00:00:15.867  READ FPDMA QUEUED
  60 00 80 00 08 00 00 01 93 63 88 40 00     00:00:15.850  READ FPDMA QUEUED
  60 00 08 00 00 00 00 00 6c c4 48 40 00     00:00:15.850  READ FPDMA QUEUED
  60 00 08 00 f8 00 00 01 8a a7 20 40 00     00:00:15.850  READ FPDMA QUEUED
  60 00 18 00 f0 00 00 01 25 60 1a 40 00     00:00:15.850  READ FPDMA QUEUED

Error 65528 [111] occurred at disk power-on lifetime: 438 hours (18 days + 6 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER -- ST COUNT  LBA_48  LH LM LL DV DC
  -- -- -- == -- == == == -- -- -- -- --
  40 -- 51 00 70 00 00 01 8a a7 20 40 00  Error: UNC at LBA = 0x018aa720 = 25863968

  Commands leading to the command that caused the error were:
  CR FEATR COUNT  LBA_48  LH LM LL DV DC  Powered_Up_Time  Command/Feature_Name
  -- == -- == -- == == == -- -- -- -- --  ---------------  --------------------
  60 00 03 00 d8 00 00 00 f6 92 b7 40 00     00:00:15.821  READ FPDMA QUEUED
  60 00 08 00 d0 00 00 01 93 63 80 40 00     00:00:15.821  READ FPDMA QUEUED
  60 00 28 00 c8 00 00 04 dc 35 3a 40 00     00:00:15.821  READ FPDMA QUEUED
  60 00 20 00 c0 00 00 01 25 ac 13 40 00     00:00:15.621  READ FPDMA QUEUED
  61 00 01 00 b8 00 00 00 22 fc f8 40 00     00:00:15.587  WRITE FPDMA QUEUED

SMART Extended Self-test Log Version: 1 (1 sectors)
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Short offline       Completed: read failure       00%       406         635416 <a id="1ShortofflineCompleted:readfailure00406635416"></a>
# 2  Short offline       Completed without error       00%       371         - <a id="2ShortofflineCompletedwithouterror00371-"></a>
# 3  Short offline       Completed without error       00%       274         - <a id="3ShortofflineCompletedwithouterror00274-"></a>
# 4  Short offline       Completed without error       00%       202         - <a id="4ShortofflineCompletedwithouterror00202-"></a>
# 5  Short offline       Completed without error       00%       109         - <a id="5ShortofflineCompletedwithouterror00109-"></a>

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

SCT Status Version:                  3
SCT Version (vendor specific):       3 (0x0003)
SCT Support Level:                   0
Device State:                        Active (0)
Current Temperature:                    38 Celsius
Power Cycle Min/Max Temperature:     24/38 Celsius
Lifetime    Min/Max Temperature:     18/54 Celsius
Under/Over Temperature Limit Count:   0/0
Vendor specific:
00 00 04 00 01 01 00 05 05 00 00 00 00 00 00 00
00 01 00 00 f4 13 18 00 02 02 00 00 00 00 00 06

SCT Temperature History Version:     2
Temperature Sampling Period:         1 minute
Temperature Logging Interval:        1 minute
Min/Max recommended Temperature:      5/40 Celsius
Min/Max Temperature Limit:            0/80 Celsius
Temperature History Size (Index):    128 (0)

Index    Estimated Time   Temperature Celsius
   1    2017-03-12 05:28    43  ************************
 ...    ..(112 skipped).    ..  ************************
 114    2017-03-12 07:21    43  ************************
 115    2017-03-12 07:22     ?  -
 116    2017-03-12 07:23    27  ********
 117    2017-03-12 07:24     ?  -
 ...    ..(  2 skipped).    ..  -
 120    2017-03-12 07:27     ?  -
 121    2017-03-12 07:28    32  *************
 122    2017-03-12 07:29    34  ***************
 123    2017-03-12 07:30    35  ****************
 124    2017-03-12 07:31    36  *****************
 125    2017-03-12 07:32    37  ******************
 126    2017-03-12 07:33    37  ******************
 127    2017-03-12 07:34    38  *******************
   0    2017-03-12 07:35    38  *******************

SCT Error Recovery Control:
           Read:    600 (60.0 seconds)
          Write:    600 (60.0 seconds)

Device Statistics (GP Log 0x04)
Page  Offset Size        Value Flags Description
0x01  =====  =               =  ===  == General Statistics (rev 2) ==
0x01  0x008  4             287  ---  Lifetime Power-On Resets
0x01  0x018  6      1480544217  ---  Logical Sectors Written
0x01  0x020  6        24980205  ---  Number of Write Commands
0x01  0x028  6      1579365109  ---  Logical Sectors Read
0x01  0x030  6        27722663  ---  Number of Read Commands
0x04  =====  =               =  ===  == General Errors Statistics (rev 1) ==
0x04  0x008  4          132980  ---  Number of Reported Uncorrectable Errors
0x04  0x010  4               0  ---  Resets Between Cmd Acceptance and Completion
0x05  =====  =               =  ===  == Temperature Statistics (rev 1) ==
0x05  0x008  1              38  ---  Current Temperature
0x05  0x010  1              30  ---  Average Short Term Temperature
0x05  0x018  1               -  ---  Average Long Term Temperature
0x05  0x020  1              52  ---  Highest Temperature
0x05  0x028  1              23  ---  Lowest Temperature
0x05  0x030  1              41  ---  Highest Average Short Term Temperature
0x05  0x038  1              25  ---  Lowest Average Short Term Temperature
0x05  0x040  1               -  ---  Highest Average Long Term Temperature
0x05  0x048  1               -  ---  Lowest Average Long Term Temperature
0x05  0x050  4            1400  ---  Time in Over-Temperature
0x05  0x058  1              40  ---  Specified Maximum Operating Temperature
0x05  0x060  4               0  ---  Time in Under-Temperature
0x05  0x068  1               5  ---  Specified Minimum Operating Temperature
0x06  =====  =               =  ===  == Transport Statistics (rev 1) ==
0x06  0x008  4             673  ---  Number of Hardware Resets
0x06  0x018  4               3  ---  Number of Interface CRC Errors
0x07  =====  =               =  ===  == Solid State Device Statistics (rev 1) ==
0x07  0x008  1               0  N--  Percentage Used Endurance Indicator
                                |||_ C monitored condition met
                                ||__ D supports DSN
                                |___ N normalized value

SATA Phy Event Counters (GP Log 0x11)
ID      Size     Value  Description
0x0001  2            0  Command failed due to ICRC error
0x0002  4            0  R_ERR response for data FIS
0x0003  2            0  R_ERR response for device-to-host data FIS
0x0004  2            0  R_ERR response for host-to-device data FIS
0x0005  4            0  R_ERR response for non-data FIS
0x0006  2            0  R_ERR response for device-to-host non-data FIS
0x0007  2            0  R_ERR response for host-to-device non-data FIS
0x0008  2            0  Device-to-host non-data FIS retries
0x0009  4            4  Transition from drive PhyRdy to drive PhyNRdy
0x000a  4            5  Device-to-host register FISes sent due to a COMRESET
0x000b  4            0  CRC errors within host-to-device FIS
0x000d  4            0  Non-CRC errors within host-to-device FIS
0x000f  2            0  R_ERR response for host-to-device data FIS, CRC
0x0010  2            0  R_ERR response for host-to-device data FIS, non-CRC
0x0012  2            0  R_ERR response for host-to-device non-data FIS, CRC
0x0013  2            0  R_ERR response for host-to-device non-data FIS, non-CRC
```

## License <a id="License"></a>

Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation;

For an online copy of the license see https://www.gnu.org/licenses/fdl.html
