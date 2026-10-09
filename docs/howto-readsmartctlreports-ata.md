# Reading smartctl reports (ATA)

## Introduction <a id="Introduction"></a>
The report below is an example of `smartctl -a` output.  The sections that follow explain the individual fields.

---

## The report <a id="Thereport"></a>
```
# smartctl -q noserial -a  /dev/sdb
smartctl 5.39 2009-09-04 r2902 [i686-pc-linux-gnu] (local build)
Copyright (C) 2002-9 by Bruce Allen, http://smartmontools.sourceforge.net

=== START OF INFORMATION SECTION ===
Model Family:     Seagate Barracuda 7200.7 and 7200.7 Plus family
Device Model:     ST380011A
Firmware Version: 3.04
User Capacity:    80.026.361.856 bytes
Device is:        In smartctl database [for details use: -P show]
ATA Version is:   6
ATA Standard is:  ATA/ATAPI-6 T13 1410D revision 2
Local Time is:    Tue Sep 29 19:50:43 2009 CEST
SMART support is: Available - device has SMART capability.
SMART support is: Enabled

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
data collection: 		 ( 430) seconds.
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
					No General Purpose Logging support.
Short self-test routine 
recommended polling time: 	 (   1) minutes.
Extended self-test routine
recommended polling time: 	 (  58) minutes.

SMART Attributes Data Structure revision number: 10
Vendor Specific SMART Attributes with Thresholds:
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  1 Raw_Read_Error_Rate     0x000f   054   051   006    Pre-fail  Always       -       141524796
  3 Spin_Up_Time            0x0003   097   097   000    Pre-fail  Always       -       0
  4 Start_Stop_Count        0x0032   100   100   020    Old_age   Always       -       176
  5 Reallocated_Sector_Ct   0x0033   100   100   036    Pre-fail  Always       -       0
  7 Seek_Error_Rate         0x000f   080   060   030    Pre-fail  Always       -       117208349
  9 Power_On_Hours          0x0032   071   071   000    Old_age   Always       -       25921
 10 Spin_Retry_Count        0x0013   100   100   097    Pre-fail  Always       -       0
 12 Power_Cycle_Count       0x0032   099   099   020    Old_age   Always       -       1745
194 Temperature_Celsius     0x0022   043   053   000    Old_age   Always       -       43
195 Hardware_ECC_Recovered  0x001a   054   051   000    Old_age   Always       -       141524796
197 Current_Pending_Sector  0x0012   100   100   000    Old_age   Always       -       0
198 Offline_Uncorrectable   0x0010   100   100   000    Old_age   Offline      -       0
199 UDMA_CRC_Error_Count    0x003e   200   197   000    Old_age   Always       -       4
200 Multi_Zone_Error_Rate   0x0000   100   253   000    Old_age   Offline      -       0
202 TA_Increase_Count       0x0032   100   253   000    Old_age   Always       -       0

SMART Error Log Version: 1
No Errors Logged

SMART Self-test log structure revision number 1
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Extended offline    Completed without error       00%     20014         -
# 2  Short offline       Completed without error       00%     20009         -
# 3  Short offline       Completed without error       00%     19992         -
# 4  Extended offline    Completed without error       00%     19989         -
# 5  Short offline       Completed without error       00%     11827         -
# 6  Short offline       Completed without error       00%     11803         -
# 7  Short offline       Completed without error       00%     11780         -
# 8  Short offline       Completed without error       00%     11756         -
# 9  Extended offline    Completed without error       00%     11751         -
#10  Short offline       Completed without error       00%     11732         -
#11  Short offline       Completed without error       00%     11709         -
#12  Extended offline    Completed without error       00%     11690         -
#13  Short offline       Completed without error       00%     11686         -
#14  Short offline       Completed without error       00%     11679         -
#15  Short offline       Completed without error       00%     11674         -
#16  Short offline       Completed without error       00%     11650         -
#17  Short offline       Completed without error       00%     11626         -
#18  Short offline       Completed without error       00%     11611         -
#19  Short offline       Completed without error       00%     11598         -
#20  Short offline       Completed without error       00%     11590         -
#21  Short offline       Completed without error       00%     11582         -

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

<a id="SMART_Status"></a>

#### SMART overall-health state <a id="SMARToverall-healthstate"></a>

The overall SMART health status reported by the device.  `PASSED` means the drive currently reports itself as healthy; `FAILED` means one or more attributes signalled a failure, so back up your data and replace the drive.
<a id="Thresh"></a>

#### Attributes Threshold Values <a id="AttributesThresholdValues"></a>

These are defined by the vendor.
<a id="Worst"></a>

#### Attributes Worst Value <a id="AttributesWorstValue"></a>

Note that some vendors firmware may actually increase the "Worst" value for some *rate-type* Attributes.
<a id="Attribute_Type"></a>

#### Attributes Type <a id="AttributesType"></a>

Note that if an Attribute is of type 'Pre-fail', it does not mean that your disk is about to fail! 
It only has this meaning if the Attribute's current Normalized value is less than or equal to the threshold value. 
<a id="When_Udated"></a>

#### Column Updated <a id="ColumnUpdated"></a>

Some SMART attributes values, that are updated only during *off-line data collection* activities are labeled "Offline" in column "UPDATED". 
<a id="When_Failed"></a>

#### Column "When Failed" <a id="ColumnWhenFailed"></a>

If the Attribute's current "Normalized value" is less than or equal to the threshold value, then the attribute is marked with "FAILING_NOW" in column WHEN_FAILED.
<a id="Raw_Value"></a>

#### Raw Values <a id="RawValues"></a>

Please keep in mind that the conversion from RAW value to a quantity with physical units is not specified by the SMART standard!  

smartctl only reports the different Attribute types, values, and thresholds as read from the device. 
It does not carry out the conversion between "Raw" and "Normalized" values: this is done by the disk's firmware.  
 
  

In most cases, the values printed by smartctl are sensible. 
For example the temperature Attribute generally has its raw value equal to the temperature in Celsius.  

However in some cases vendors use unusual conventions. For example the Hitachi disk on my laptop reports 
its power-on hours in minutes, not hours. Some IBM disks track three temperatures rather than one, 
in their raw values. Have a look at our wiki pages on topic [SMART attributes](TocDoc#SMARTAttributes).
