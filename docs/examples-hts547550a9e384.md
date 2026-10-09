## smartctl report for HTS547550A9E384 <a id="smartctlreportforHTS547550A9E384"></a>

### Command <a id="Command"></a>

Access via AHCI controller: `smartctl -x -q noserial ..`


### Output <a id="Output"></a>

```
smartctl 6.5 2016-05-07 r4318 [FreeBSD 10.3-RELEASE-p16 amd64] (local build)
Copyright (C) 2002-16, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Family:     Hitachi/HGST Travelstar 5K750
Device Model:     Hitachi HTS547550A9E384
Firmware Version: JE3OA40J
User Capacity:    500,107,862,016 bytes [500 GB]
Sector Sizes:     512 bytes logical, 4096 bytes physical
Rotation Rate:    5400 rpm
Form Factor:      2.5 inches
Device is:        In smartctl database [for details use: -P show]
ATA Version is:   ATA8-ACS T13/1699-D revision 6
SATA Version is:  SATA 2.6, 3.0 Gb/s
Local Time is:    Tue Mar 14 15:19:01 2017 CET
SMART support is: Available - device has SMART capability.
SMART support is: Enabled
AAM feature is:   Unavailable
APM level is:     128 (minimum power consumption without standby)
Rd look-ahead is: Enabled
Write cache is:   Enabled
ATA Security is:  Disabled, NOT FROZEN [SEC1]
Wt Cache Reorder: Enabled

=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

General SMART Values:
Offline data collection status:  (0x82)	Offline data collection activity
					was completed without error.
					Auto Offline Data Collection: Enabled.
Self-test execution status:      (   0)	The previous self-test routine completed
					without error or no self-test has ever 
					been run.
Total time to complete Offline 
data collection: 		(   45) seconds.
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
recommended polling time: 	 ( 152) minutes.
SCT capabilities: 	       (0x003d)	SCT Status supported.
					SCT Error Recovery Control supported.
					SCT Feature Control supported.
					SCT Data Table supported.

SMART Attributes Data Structure revision number: 16
Vendor Specific SMART Attributes with Thresholds:
ID# ATTRIBUTE_NAME          FLAGS    VALUE WORST THRESH FAIL RAW_VALUE
  1 Raw_Read_Error_Rate     PO-R--   100   100   062    -    0
  2 Throughput_Performance  P-S---   197   197   040    -    160
  3 Spin_Up_Time            POS---   211   211   033    -    1
  4 Start_Stop_Count        -O--C-   100   100   000    -    59
  5 Reallocated_Sector_Ct   PO--CK   100   100   005    -    0
  7 Seek_Error_Rate         PO-R--   100   100   067    -    0
  8 Seek_Time_Performance   P-S---   120   120   040    -    32
  9 Power_On_Hours          -O--C-   001   001   000    -    53400
 10 Spin_Retry_Count        PO--C-   100   100   060    -    0
 12 Power_Cycle_Count       -O--CK   100   100   000    -    58
191 G-Sense_Error_Rate      -O-R--   100   100   000    -    0
192 Power-Off_Retract_Count -O--CK   100   100   000    -    9
193 Load_Cycle_Count        -O--C-   001   001   000    -    14907336
194 Temperature_Celsius     -O----   222   222   000    -    27 (Min/Max 12/48)
196 Reallocated_Event_Count -O--CK   100   100   000    -    1
197 Current_Pending_Sector  -O---K   100   100   000    -    0
198 Offline_Uncorrectable   ---R--   100   100   000    -    0
199 UDMA_CRC_Error_Count    -O-R--   200   200   000    -    0
223 Load_Retry_Count        -O-R--   100   100   000    -    0
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
0x02           SL  R/O      1  Comprehensive SMART error log
0x03       GPL     R/O      1  Ext. Comprehensive SMART error log
0x04       GPL     R/O      7  Device Statistics log
0x06           SL  R/O      1  SMART self-test log
0x07       GPL     R/O      1  Extended self-test log
0x09           SL  R/W      1  Selective self-test log
0x10       GPL     R/O      1  SATA NCQ Queued Error log
0x11       GPL     R/O      1  SATA Phy Event Counters log
0x80-0x9f  GPL,SL  R/W     16  Host vendor specific log
0xe0       GPL,SL  R/W      1  SCT Command/Status
0xe1       GPL,SL  R/W      1  SCT Data Transfer

SMART Extended Comprehensive Error Log Version: 1 (1 sectors)
Device Error Count: 1
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

Error 1 [0] occurred at disk power-on lifetime: 1 hours (0 days + 1 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER -- ST COUNT  LBA_48  LH LM LL DV DC
  -- -- -- == -- == == == -- -- -- -- --
  02 -- 51 00 00 00 00 00 00 00 00 00 00  Error: TK0NF

  Commands leading to the command that caused the error were:
  CR FEATR COUNT  LBA_48  LH LM LL DV DC  Powered_Up_Time  Command/Feature_Name
  -- == -- == -- == == == -- -- -- -- --  ---------------  --------------------
  10 00 00 00 01 00 00 00 00 03 34 e0 ff     00:00:17.305  RECALIBRATE [OBS-4]
  10 00 00 00 01 00 00 00 00 03 34 e0 08     00:00:17.138  RECALIBRATE [OBS-4]
  91 40 00 01 3f 00 00 01 00 03 34 af 08     00:00:17.138  INITIALIZE DEVICE PARAMETERS [OBS-6]
  c4 00 40 00 00 00 00 3f 00 00 00 e0 04     00:00:16.934  READ MULTIPLE
  c4 00 40 00 01 00 00 3f 00 00 00 e0 00     00:00:07.959  READ MULTIPLE

SMART Extended Self-test Log Version: 1 (1 sectors)
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Extended offline    Completed without error       00%     43116         - <a id="1ExtendedofflineCompletedwithouterror0043116-"></a>
# 2  Extended offline    Completed without error       00%     29867         - <a id="2ExtendedofflineCompletedwithouterror0029867-"></a>
# 3  Extended offline    Completed without error       00%     19477         - <a id="3ExtendedofflineCompletedwithouterror0019477-"></a>
# 4  Extended offline    Completed without error       00%     13675         - <a id="4ExtendedofflineCompletedwithouterror0013675-"></a>
# 5  Extended offline    Completed without error       00%     10202         - <a id="5ExtendedofflineCompletedwithouterror0010202-"></a>
# 6  Extended offline    Completed without error       00%      5334         - <a id="6ExtendedofflineCompletedwithouterror005334-"></a>
# 7  Extended offline    Completed without error       00%      4764         - <a id="7ExtendedofflineCompletedwithouterror004764-"></a>
# 8  Extended offline    Completed without error       00%      2322         - <a id="8ExtendedofflineCompletedwithouterror002322-"></a>
# 9  Extended offline    Completed without error       00%        25         - <a id="9ExtendedofflineCompletedwithouterror0025-"></a>

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
SCT Version (vendor specific):       256 (0x0100)
SCT Support Level:                   1
Device State:                        Active (0)
Current Temperature:                    27 Celsius
Power Cycle Min/Max Temperature:     15/38 Celsius
Lifetime    Min/Max Temperature:     12/48 Celsius
Lifetime    Average Temperature:        26 Celsius
Under/Over Temperature Limit Count:   0/0

SCT Temperature History Version:     2
Temperature Sampling Period:         1 minute
Temperature Logging Interval:        15 minutes
Min/Max recommended Temperature:      0/60 Celsius
Min/Max Temperature Limit:           -40/65 Celsius
Temperature History Size (Index):    128 (94)

Index    Estimated Time   Temperature Celsius
  95    2017-03-13 07:30    26  *******
  96    2017-03-13 07:45    25  ******
  97    2017-03-13 08:00    26  *******
  98    2017-03-13 08:15    25  ******
  99    2017-03-13 08:30    25  ******
 100    2017-03-13 08:45    26  *******
 ...    ..(  9 skipped).    ..  *******
 110    2017-03-13 11:15    26  *******
 111    2017-03-13 11:30    27  ********
 112    2017-03-13 11:45    27  ********
 113    2017-03-13 12:00    26  *******
 114    2017-03-13 12:15    26  *******
 115    2017-03-13 12:30    27  ********
 116    2017-03-13 12:45    26  *******
 ...    ..(  2 skipped).    ..  *******
 119    2017-03-13 13:30    26  *******
 120    2017-03-13 13:45    27  ********
 121    2017-03-13 14:00    26  *******
 122    2017-03-13 14:15    26  *******
 123    2017-03-13 14:30    26  *******
 124    2017-03-13 14:45    27  ********
 125    2017-03-13 15:00    26  *******
 126    2017-03-13 15:15    26  *******
 127    2017-03-13 15:30    27  ********
   0    2017-03-13 15:45    27  ********
   1    2017-03-13 16:00    26  *******
   2    2017-03-13 16:15    27  ********
   3    2017-03-13 16:30    27  ********
   4    2017-03-13 16:45    27  ********
   5    2017-03-13 17:00    26  *******
   6    2017-03-13 17:15    26  *******
   7    2017-03-13 17:30    26  *******
   8    2017-03-13 17:45    27  ********
 ...    ..(  6 skipped).    ..  ********
  15    2017-03-13 19:30    27  ********
  16    2017-03-13 19:45    26  *******
  17    2017-03-13 20:00    26  *******
  18    2017-03-13 20:15    26  *******
  19    2017-03-13 20:30    27  ********
  20    2017-03-13 20:45    27  ********
  21    2017-03-13 21:00    26  *******
  22    2017-03-13 21:15    27  ********
  23    2017-03-13 21:30    27  ********
  24    2017-03-13 21:45    26  *******
 ...    ..(  3 skipped).    ..  *******
  28    2017-03-13 22:45    26  *******
  29    2017-03-13 23:00    27  ********
  30    2017-03-13 23:15    26  *******
  31    2017-03-13 23:30    27  ********
  32    2017-03-13 23:45    26  *******
  33    2017-03-14 00:00    26  *******
  34    2017-03-14 00:15    26  *******
  35    2017-03-14 00:30    27  ********
  36    2017-03-14 00:45    27  ********
  37    2017-03-14 01:00    27  ********
  38    2017-03-14 01:15    26  *******
  39    2017-03-14 01:30    26  *******
  40    2017-03-14 01:45    27  ********
  41    2017-03-14 02:00    26  *******
 ...    ..(  8 skipped).    ..  *******
  50    2017-03-14 04:15    26  *******
  51    2017-03-14 04:30    27  ********
  52    2017-03-14 04:45    26  *******
 ...    ..( 36 skipped).    ..  *******
  89    2017-03-14 14:00    26  *******
  90    2017-03-14 14:15    27  ********
  91    2017-03-14 14:30    26  *******
  92    2017-03-14 14:45    27  ********
  93    2017-03-14 15:00    26  *******
  94    2017-03-14 15:15    27  ********

SCT Error Recovery Control:
           Read: Disabled
          Write: Disabled

Device Statistics (GP Log 0x04)
Page  Offset Size        Value Flags Description
0x01  =====  =               =  ===  == General Statistics (rev 1) ==
0x01  0x008  4              58  ---  Lifetime Power-On Resets
0x01  0x010  4           53400  ---  Power-on Hours
0x01  0x018  6     10920695850  ---  Logical Sectors Written
0x01  0x020  6       190751879  ---  Number of Write Commands
0x01  0x028  6     11545163847  ---  Logical Sectors Read
0x01  0x030  6        39023365  ---  Number of Read Commands
0x03  =====  =               =  ===  == Rotating Media Statistics (rev 1) ==
0x03  0x008  4           17557  ---  Spindle Motor Power-on Hours
0x03  0x010  4           16408  ---  Head Flying Hours
0x03  0x018  4        14907336  ---  Head Load Events
0x03  0x020  4               0  ---  Number of Reallocated Logical Sectors
0x03  0x028  4            4070  ---  Read Recovery Attempts
0x03  0x030  4               3  ---  Number of Mechanical Start Failures
0x04  =====  =               =  ===  == General Errors Statistics (rev 1) ==
0x04  0x008  4               0  ---  Number of Reported Uncorrectable Errors
0x04  0x010  4             358  ---  Resets Between Cmd Acceptance and Completion
0x05  =====  =               =  ===  == Temperature Statistics (rev 1) ==
0x05  0x008  1              27  ---  Current Temperature
0x05  0x010  1              26  N--  Average Short Term Temperature
0x05  0x018  1              25  N--  Average Long Term Temperature
0x05  0x020  1              48  ---  Highest Temperature
0x05  0x028  1              12  ---  Lowest Temperature
0x05  0x030  1              40  N--  Highest Average Short Term Temperature
0x05  0x038  1              14  N--  Lowest Average Short Term Temperature
0x05  0x040  1              38  N--  Highest Average Long Term Temperature
0x05  0x048  1              23  N--  Lowest Average Long Term Temperature
0x05  0x050  4               0  ---  Time in Over-Temperature
0x05  0x058  1              60  ---  Specified Maximum Operating Temperature
0x05  0x060  4               0  ---  Time in Under-Temperature
0x05  0x068  1               0  ---  Specified Minimum Operating Temperature
0x06  =====  =               =  ===  == Transport Statistics (rev 1) ==
0x06  0x008  4             507  ---  Number of Hardware Resets
0x06  0x010  4             288  ---  Number of ASR Events
0x06  0x018  4               0  ---  Number of Interface CRC Errors
                                |||_ C monitored condition met
                                ||__ D supports DSN
                                |___ N normalized value

SATA Phy Event Counters (GP Log 0x11)
ID      Size     Value  Description
0x0001  2            0  Command failed due to ICRC error
0x0002  2            0  R_ERR response for data FIS
0x0003  2            0  R_ERR response for device-to-host data FIS
0x0004  2            0  R_ERR response for host-to-device data FIS
0x0005  2            0  R_ERR response for non-data FIS
0x0006  2            0  R_ERR response for device-to-host non-data FIS
0x0007  2            0  R_ERR response for host-to-device non-data FIS
0x0009  2           62  Transition from drive PhyRdy to drive PhyNRdy
0x000a  2           46  Device-to-host register FISes sent due to a COMRESET
0x000b  2            0  CRC errors within host-to-device FIS
0x000d  2            0  Non-CRC errors within host-to-device FIS
```
