## smartctl report for INTEL SSDSC2BB120G4 <a id="smartctlreportforINTELSSDSC2BB120G4"></a>

### Command <a id="Command"></a>

Access via AHCI controller: `smartctl -x -q noserial ..`


### Output <a id="Output"></a>


```
smartctl 6.5 2016-05-07 r4318 [FreeBSD 10.3-RELEASE-p16 amd64] (local build)
Copyright (C) 2002-16, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Family:     Intel 730 and DC S35x0/3610/3700 Series SSDs
Device Model:     INTEL SSDSC2BB120G4
Firmware Version: D2010355
User Capacity:    120,034,123,776 bytes [120 GB]
Sector Size:      512 bytes logical/physical
Rotation Rate:    Solid State Device
Form Factor:      2.5 inches
Device is:        In smartctl database [for details use: -P show]
ATA Version is:   ATA8-ACS T13/1699-D revision 4
SATA Version is:  SATA 2.6, 6.0 Gb/s (current: 3.0 Gb/s)
Local Time is:    Tue Mar 14 15:30:22 2017 CET
SMART support is: Available - device has SMART capability.
SMART support is: Enabled
AAM feature is:   Unavailable
APM feature is:   Unavailable
Rd look-ahead is: Enabled
Write cache is:   Enabled
ATA Security is:  Disabled, NOT FROZEN [SEC1]
Wt Cache Reorder: Enabled

=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

General SMART Values:
Offline data collection status:  (0x02)	Offline data collection activity
					was completed without error.
					Auto Offline Data Collection: Disabled.
Self-test execution status:      (   0)	The previous self-test routine completed
					without error or no self-test has ever 
					been run.
Total time to complete Offline 
data collection: 		(   18) seconds.
Offline data collection
capabilities: 			 (0x79) SMART execute Offline immediate.
					No Auto Offline data collection support.
					Suspend Offline collection upon new
					command.
					Offline surface scan supported.
					Self-test supported.
					Conveyance Self-test supported.
					Selective Self-test supported.
SMART capabilities:            (0x0003)	Saves SMART data before entering
					power-saving mode.
					Supports SMART auto save timer.
Error logging capability:        (0x01)	Error logging supported.
					General Purpose Logging supported.
Short self-test routine 
recommended polling time: 	 (   1) minutes.
Extended self-test routine
recommended polling time: 	 (   2) minutes.
Conveyance self-test routine
recommended polling time: 	 (   2) minutes.
SCT capabilities: 	       (0x003d)	SCT Status supported.
					SCT Error Recovery Control supported.
					SCT Feature Control supported.
					SCT Data Table supported.

SMART Attributes Data Structure revision number: 1
Vendor Specific SMART Attributes with Thresholds:
ID# ATTRIBUTE_NAME          FLAGS    VALUE WORST THRESH FAIL RAW_VALUE
  5 Reallocated_Sector_Ct   -O--CK   095   095   000    -    0
  9 Power_On_Hours          -O--CK   100   100   000    -    31270
 12 Power_Cycle_Count       -O--CK   100   100   000    -    36
170 Available_Reservd_Space PO--CK   100   100   010    -    0
171 Program_Fail_Count      -O--CK   100   100   000    -    0
172 Erase_Fail_Count        -O--CK   100   100   000    -    0
174 Unsafe_Shutdown_Count   -O--CK   100   100   000    -    25
175 Power_Loss_Cap_Test     PO--CK   100   100   010    -    652 (183 4792)
183 SATA_Downshift_Count    -O--CK   100   100   000    -    0
184 End-to-End_Error        PO--CK   100   100   090    -    0
187 Reported_Uncorrect      -O--CK   100   100   000    -    0
190 Temperature_Case        -O---K   070   065   000    -    30 (Min/Max 27/37)
192 Unsafe_Shutdown_Count   -O--CK   100   100   000    -    25
194 Temperature_Internal    -O---K   100   100   000    -    30
197 Current_Pending_Sector  -O--CK   100   100   000    -    0
199 CRC_Error_Count         -OSRCK   100   100   000    -    0
225 Host_Writes_32MiB       -O--CK   100   100   000    -    85938
226 Workld_Media_Wear_Indic -O--CK   100   100   000    -    65535
227 Workld_Host_Reads_Perc  -O--CK   100   100   000    -    4294967295
228 Workload_Minutes        -O--CK   100   100   000    -    65535
232 Available_Reservd_Space PO--CK   100   100   010    -    0
233 Media_Wearout_Indicator -O--CK   099   099   000    -    0
234 Thermal_Throttle        -O--CK   100   100   000    -    0/0
241 Host_Writes_32MiB       -O--CK   100   100   000    -    85938
242 Host_Reads_32MiB        -O--CK   100   100   000    -    30820
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
0x01       GPL,SL  R/O      1  Summary SMART error log
0x02       GPL,SL  R/O      8  Comprehensive SMART error log
0x03       GPL,SL  R/O     20  Ext. Comprehensive SMART error log
0x04       GPL,SL  R/O      8  Device Statistics log
0x06       GPL,SL  R/O      1  SMART self-test log
0x07       GPL,SL  R/O      2  Extended self-test log
0x09       GPL,SL  R/W      1  Selective self-test log
0x10       GPL,SL  R/O      1  SATA NCQ Queued Error log
0x11       GPL,SL  R/O      1  SATA Phy Event Counters log
0x80-0x9f  GPL,SL  R/W     16  Host vendor specific log
0xb0       GPL,SL  VS       1  Device vendor specific log
0xb1       GPL,SL  VS      33  Device vendor specific log
0xd1       GPL     VS   13056  Device vendor specific log
0xdf       GPL     VS    1152  Device vendor specific log
0xdf       SL      VS     128  Device vendor specific log
0xe0       GPL,SL  R/W      1  SCT Command/Status
0xe1       GPL,SL  R/W      1  SCT Data Transfer

SMART Extended Comprehensive Error Log Version: 1 (20 sectors)
No Errors Logged

SMART Extended Self-test Log Version: 1 (2 sectors)
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Extended offline    Completed without error       00%     21048         - <a id="1ExtendedofflineCompletedwithouterror0021048-"></a>
# 2  Extended offline    Completed without error       00%     15902         - <a id="2ExtendedofflineCompletedwithouterror0015902-"></a>
# 3  Extended offline    Completed without error       00%     12630         - <a id="3ExtendedofflineCompletedwithouterror0012630-"></a>
# 4  Extended offline    Completed without error       00%      7215         - <a id="4ExtendedofflineCompletedwithouterror007215-"></a>
# 5  Extended offline    Completed without error       00%      4172         - <a id="5ExtendedofflineCompletedwithouterror004172-"></a>
# 6  Extended offline    Completed without error       00%      2009         - <a id="6ExtendedofflineCompletedwithouterror002009-"></a>
# 7  Extended offline    Completed without error       00%      1498         - <a id="7ExtendedofflineCompletedwithouterror001498-"></a>
# 8  Extended offline    Completed without error       00%         0         - <a id="8ExtendedofflineCompletedwithouterror000-"></a>

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
SCT Version (vendor specific):       1 (0x0001)
SCT Support Level:                   0
Device State:                        Active (0)
Current Temperature:                    30 Celsius
Power Cycle Min/Max Temperature:     27/37 Celsius
Lifetime    Min/Max Temperature:     15/37 Celsius
Under/Over Temperature Limit Count:   0/0
Vendor specific:
00 00 62 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00

SCT Temperature History Version:     2
Temperature Sampling Period:         1 minute
Temperature Logging Interval:        60 minutes
Min/Max recommended Temperature:      0/70 Celsius
Min/Max Temperature Limit:            0/70 Celsius
Temperature History Size (Index):    478 (205)

Index    Estimated Time   Temperature Celsius
 206    2017-02-22 18:00    30  ***********
 207    2017-02-22 19:00    30  ***********
 208    2017-02-22 20:00    29  **********
 209    2017-02-22 21:00    29  **********
 210    2017-02-22 22:00    29  **********
 211    2017-02-22 23:00    30  ***********
 212    2017-02-23 00:00    29  **********
 ...    ..(  6 skipped).    ..  **********
 219    2017-02-23 07:00    29  **********
 220    2017-02-23 08:00    28  *********
 221    2017-02-23 09:00    30  ***********
 222    2017-02-23 10:00    30  ***********
 223    2017-02-23 11:00    29  **********
 224    2017-02-23 12:00    30  ***********
 ...    ..(  5 skipped).    ..  ***********
 230    2017-02-23 18:00    30  ***********
 231    2017-02-23 19:00    29  **********
 ...    ..(  2 skipped).    ..  **********
 234    2017-02-23 22:00    29  **********
 235    2017-02-23 23:00    30  ***********
 236    2017-02-24 00:00    30  ***********
 237    2017-02-24 01:00    29  **********
 ...    ..(  7 skipped).    ..  **********
 245    2017-02-24 09:00    29  **********
 246    2017-02-24 10:00    30  ***********
 ...    ..(  5 skipped).    ..  ***********
 252    2017-02-24 16:00    30  ***********
 253    2017-02-24 17:00    29  **********
 ...    ..( 21 skipped).    ..  **********
 275    2017-02-25 15:00    29  **********
 276    2017-02-25 16:00    28  *********
 277    2017-02-25 17:00    29  **********
 ...    ..(  8 skipped).    ..  **********
 286    2017-02-26 02:00    29  **********
 287    2017-02-26 03:00    28  *********
 288    2017-02-26 04:00    29  **********
 ...    ..( 22 skipped).    ..  **********
 311    2017-02-27 03:00    29  **********
 312    2017-02-27 04:00    28  *********
 313    2017-02-27 05:00    29  **********
 314    2017-02-27 06:00    29  **********
 315    2017-02-27 07:00    28  *********
 316    2017-02-27 08:00    29  **********
 ...    ..(  3 skipped).    ..  **********
 320    2017-02-27 12:00    29  **********
 321    2017-02-27 13:00    30  ***********
 322    2017-02-27 14:00    30  ***********
 323    2017-02-27 15:00    29  **********
 324    2017-02-27 16:00    29  **********
 325    2017-02-27 17:00    30  ***********
 326    2017-02-27 18:00    30  ***********
 327    2017-02-27 19:00    30  ***********
 328    2017-02-27 20:00    29  **********
 329    2017-02-27 21:00    30  ***********
 330    2017-02-27 22:00    28  *********
 331    2017-02-27 23:00    29  **********
 332    2017-02-28 00:00    30  ***********
 333    2017-02-28 01:00    30  ***********
 334    2017-02-28 02:00    29  **********
 ...    ..(  5 skipped).    ..  **********
 340    2017-02-28 08:00    29  **********
 341    2017-02-28 09:00    28  *********
 342    2017-02-28 10:00    29  **********
 343    2017-02-28 11:00    29  **********
 344    2017-02-28 12:00    30  ***********
 ...    ..(  3 skipped).    ..  ***********
 348    2017-02-28 16:00    30  ***********
 349    2017-02-28 17:00    29  **********
 350    2017-02-28 18:00    30  ***********
 351    2017-02-28 19:00    30  ***********
 352    2017-02-28 20:00    28  *********
 353    2017-02-28 21:00    29  **********
 354    2017-02-28 22:00    29  **********
 355    2017-02-28 23:00    28  *********
 356    2017-03-01 00:00    29  **********
 ...    ..(  5 skipped).    ..  **********
 362    2017-03-01 06:00    29  **********
 363    2017-03-01 07:00    28  *********
 364    2017-03-01 08:00    29  **********
 ...    ..(  4 skipped).    ..  **********
 369    2017-03-01 13:00    29  **********
 370    2017-03-01 14:00    30  ***********
 ...    ..(  2 skipped).    ..  ***********
 373    2017-03-01 17:00    30  ***********
 374    2017-03-01 18:00    29  **********
 ...    ..( 16 skipped).    ..  **********
 391    2017-03-02 11:00    29  **********
 392    2017-03-02 12:00    30  ***********
 ...    ..(  2 skipped).    ..  ***********
 395    2017-03-02 15:00    30  ***********
 396    2017-03-02 16:00    29  **********
 397    2017-03-02 17:00    30  ***********
 398    2017-03-02 18:00    30  ***********
 399    2017-03-02 19:00    29  **********
 ...    ..(  9 skipped).    ..  **********
 409    2017-03-03 05:00    29  **********
 410    2017-03-03 06:00    28  *********
 411    2017-03-03 07:00    29  **********
 ...    ..(  4 skipped).    ..  **********
 416    2017-03-03 12:00    29  **********
 417    2017-03-03 13:00    30  ***********
 ...    ..(  2 skipped).    ..  ***********
 420    2017-03-03 16:00    30  ***********
 421    2017-03-03 17:00    29  **********
 422    2017-03-03 18:00    30  ***********
 423    2017-03-03 19:00    29  **********
 424    2017-03-03 20:00    30  ***********
 425    2017-03-03 21:00    29  **********
 ...    ..(  5 skipped).    ..  **********
 431    2017-03-04 03:00    29  **********
 432    2017-03-04 04:00    28  *********
 433    2017-03-04 05:00    29  **********
 ...    ..(  3 skipped).    ..  **********
 437    2017-03-04 09:00    29  **********
 438    2017-03-04 10:00    30  ***********
 439    2017-03-04 11:00    29  **********
 ...    ..(  5 skipped).    ..  **********
 445    2017-03-04 17:00    29  **********
 446    2017-03-04 18:00    28  *********
 447    2017-03-04 19:00    29  **********
 448    2017-03-04 20:00    29  **********
 449    2017-03-04 21:00    30  ***********
 450    2017-03-04 22:00    29  **********
 ...    ..(  5 skipped).    ..  **********
 456    2017-03-05 04:00    29  **********
 457    2017-03-05 05:00    28  *********
 458    2017-03-05 06:00    29  **********
 ...    ..(  8 skipped).    ..  **********
 467    2017-03-05 15:00    29  **********
 468    2017-03-05 16:00    28  *********
 469    2017-03-05 17:00    29  **********
 ...    ..(  8 skipped).    ..  **********
   0    2017-03-06 02:00    29  **********
   1    2017-03-06 03:00    28  *********
   2    2017-03-06 04:00    29  **********
 ...    ..(  5 skipped).    ..  **********
   8    2017-03-06 10:00    29  **********
   9    2017-03-06 11:00    30  ***********
  10    2017-03-06 12:00    30  ***********
  11    2017-03-06 13:00    30  ***********
  12    2017-03-06 14:00    29  **********
  13    2017-03-06 15:00    30  ***********
  14    2017-03-06 16:00    30  ***********
  15    2017-03-06 17:00    30  ***********
  16    2017-03-06 18:00    29  **********
 ...    ..(  5 skipped).    ..  **********
  22    2017-03-07 00:00    29  **********
  23    2017-03-07 01:00    28  *********
  24    2017-03-07 02:00    29  **********
  25    2017-03-07 03:00    29  **********
  26    2017-03-07 04:00    28  *********
  27    2017-03-07 05:00    29  **********
 ...    ..(  9 skipped).    ..  **********
  37    2017-03-07 15:00    29  **********
  38    2017-03-07 16:00    30  ***********
  39    2017-03-07 17:00    29  **********
 ...    ..(  7 skipped).    ..  **********
  47    2017-03-08 01:00    29  **********
  48    2017-03-08 02:00    28  *********
  49    2017-03-08 03:00    29  **********
  50    2017-03-08 04:00    29  **********
  51    2017-03-08 05:00    28  *********
  52    2017-03-08 06:00    29  **********
 ...    ..(  5 skipped).    ..  **********
  58    2017-03-08 12:00    29  **********
  59    2017-03-08 13:00    28  *********
  60    2017-03-08 14:00    29  **********
  61    2017-03-08 15:00    29  **********
  62    2017-03-08 16:00    30  ***********
  63    2017-03-08 17:00    29  **********
  64    2017-03-08 18:00    30  ***********
  65    2017-03-08 19:00    29  **********
 ...    ..(  3 skipped).    ..  **********
  69    2017-03-08 23:00    29  **********
  70    2017-03-09 00:00    28  *********
  71    2017-03-09 01:00    29  **********
  72    2017-03-09 02:00    29  **********
  73    2017-03-09 03:00    28  *********
  74    2017-03-09 04:00    29  **********
 ...    ..(  3 skipped).    ..  **********
  78    2017-03-09 08:00    29  **********
  79    2017-03-09 09:00    30  ***********
  80    2017-03-09 10:00    29  **********
  81    2017-03-09 11:00    28  *********
  82    2017-03-09 12:00    30  ***********
 ...    ..(  6 skipped).    ..  ***********
  89    2017-03-09 19:00    30  ***********
  90    2017-03-09 20:00    29  **********
  91    2017-03-09 21:00    29  **********
  92    2017-03-09 22:00    28  *********
  93    2017-03-09 23:00    29  **********
 ...    ..(  2 skipped).    ..  **********
  96    2017-03-10 02:00    29  **********
  97    2017-03-10 03:00    30  ***********
  98    2017-03-10 04:00    29  **********
 ...    ..(  3 skipped).    ..  **********
 102    2017-03-10 08:00    29  **********
 103    2017-03-10 09:00    28  *********
 104    2017-03-10 10:00    30  ***********
 105    2017-03-10 11:00    30  ***********
 106    2017-03-10 12:00    29  **********
 107    2017-03-10 13:00    30  ***********
 108    2017-03-10 14:00    29  **********
 ...    ..(  4 skipped).    ..  **********
 113    2017-03-10 19:00    29  **********
 114    2017-03-10 20:00    28  *********
 115    2017-03-10 21:00    30  ***********
 116    2017-03-10 22:00    29  **********
 117    2017-03-10 23:00    28  *********
 118    2017-03-11 00:00    29  **********
 ...    ..( 10 skipped).    ..  **********
 129    2017-03-11 11:00    29  **********
 130    2017-03-11 12:00    30  ***********
 131    2017-03-11 13:00    29  **********
 ...    ..(  6 skipped).    ..  **********
 138    2017-03-11 20:00    29  **********
 139    2017-03-11 21:00    28  *********
 140    2017-03-11 22:00    29  **********
 ...    ..(  3 skipped).    ..  **********
 144    2017-03-12 02:00    29  **********
 145    2017-03-12 03:00    28  *********
 146    2017-03-12 04:00    28  *********
 147    2017-03-12 05:00    29  **********
 148    2017-03-12 06:00    29  **********
 149    2017-03-12 07:00    28  *********
 150    2017-03-12 08:00    30  ***********
 151    2017-03-12 09:00    30  ***********
 152    2017-03-12 10:00    28  *********
 153    2017-03-12 11:00    29  **********
 154    2017-03-12 12:00    29  **********
 155    2017-03-12 13:00    29  **********
 156    2017-03-12 14:00    30  ***********
 ...    ..(  3 skipped).    ..  ***********
 160    2017-03-12 18:00    30  ***********
 161    2017-03-12 19:00    29  **********
 162    2017-03-12 20:00    29  **********
 163    2017-03-12 21:00    28  *********
 164    2017-03-12 22:00    30  ***********
 165    2017-03-12 23:00    29  **********
 ...    ..(  2 skipped).    ..  **********
 168    2017-03-13 02:00    29  **********
 169    2017-03-13 03:00    28  *********
 170    2017-03-13 04:00    30  ***********
 171    2017-03-13 05:00    29  **********
 172    2017-03-13 06:00    29  **********
 173    2017-03-13 07:00    30  ***********
 174    2017-03-13 08:00    29  **********
 175    2017-03-13 09:00    29  **********
 176    2017-03-13 10:00    30  ***********
 177    2017-03-13 11:00    30  ***********
 178    2017-03-13 12:00    28  *********
 179    2017-03-13 13:00    30  ***********
 ...    ..(  6 skipped).    ..  ***********
 186    2017-03-13 20:00    30  ***********
 187    2017-03-13 21:00    29  **********
 ...    ..(  3 skipped).    ..  **********
 191    2017-03-14 01:00    29  **********
 192    2017-03-14 02:00    28  *********
 193    2017-03-14 03:00    29  **********
 ...    ..(  7 skipped).    ..  **********
 201    2017-03-14 11:00    29  **********
 202    2017-03-14 12:00    30  ***********
 203    2017-03-14 13:00    29  **********
 204    2017-03-14 14:00    29  **********
 205    2017-03-14 15:00    29  **********

SCT Error Recovery Control:
           Read: Disabled
          Write: Disabled

Device Statistics (GP Log 0x04)
Page  Offset Size        Value Flags Description
0x01  =====  =               =  ===  == General Statistics (rev 2) ==
0x01  0x008  4              36  ---  Lifetime Power-On Resets
0x01  0x018  6      5632045585  ---  Logical Sectors Written
0x01  0x020  6         4133997  ---  Number of Write Commands
0x01  0x028  6      2019859597  ---  Logical Sectors Read
0x01  0x030  6           79711  ---  Number of Read Commands
0x04  =====  =               =  ===  == General Errors Statistics (rev 1) ==
0x04  0x008  4               0  ---  Number of Reported Uncorrectable Errors
0x04  0x010  4               0  ---  Resets Between Cmd Acceptance and Completion
0x05  =====  =               =  ===  == Temperature Statistics (rev 1) ==
0x05  0x008  1              30  ---  Current Temperature
0x05  0x010  1              29  ---  Average Short Term Temperature
0x05  0x018  1              28  ---  Average Long Term Temperature
0x05  0x020  1              36  ---  Highest Temperature
0x05  0x028  1              20  ---  Lowest Temperature
0x05  0x030  1              29  ---  Highest Average Short Term Temperature
0x05  0x038  1              23  ---  Lowest Average Short Term Temperature
0x05  0x040  1              29  ---  Highest Average Long Term Temperature
0x05  0x048  1              23  ---  Lowest Average Long Term Temperature
0x05  0x050  4               0  ---  Time in Over-Temperature
0x05  0x058  1              70  ---  Specified Maximum Operating Temperature
0x05  0x060  4               0  ---  Time in Under-Temperature
0x05  0x068  1               0  ---  Specified Minimum Operating Temperature
0x06  =====  =               =  ===  == Transport Statistics (rev 1) ==
0x06  0x008  4             736  ---  Number of Hardware Resets
0x06  0x010  4             351  ---  Number of ASR Events
0x06  0x018  4               0  ---  Number of Interface CRC Errors
0x07  =====  =               =  ===  == Solid State Device Statistics (rev 1) ==
0x07  0x008  1               1  ---  Percentage Used Endurance Indicator
                                |||_ C monitored condition met
                                ||__ D supports DSN
                                |___ N normalized value

SATA Phy Event Counters (GP Log 0x11)
ID      Size     Value  Description
0x0001  4            0  Command failed due to ICRC error
0x0003  4            0  R_ERR response for device-to-host data FIS
0x0004  4            0  R_ERR response for host-to-device data FIS
0x0006  4            0  R_ERR response for device-to-host non-data FIS
0x000a  4           10  Device-to-host register FISes sent due to a COMRESET
0x000b  4            0  CRC errors within host-to-device FIS
0x000d  4            0  Non-CRC errors within host-to-device FIS
```
