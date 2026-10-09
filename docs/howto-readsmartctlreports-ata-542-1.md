# Reading smartctl reports (ATA, smartctl 5.42.1)

## Introduction <a id="Introduction"></a>
The report below is an example of `smartctl -a` output.  The sections that follow explain the individual fields.

---

## The report <a id="Thereport"></a>
<pre>
# smartctl -q noserial -a /dev/ada30
smartctl 5.42 2011-10-20 r3458 [FreeBSD 9.0-RELEASE-p4 amd64] (local build)
Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net

=== START OF INFORMATION SECTION ===
Model Family:     Hitachi Deskstar 5K3000
Device Model:     Hitachi HDS5C3030ALA630
LU WWN Device Id: 5 000cca 228c089f4
Firmware Version: MEAOA580
User Capacity:    3,000,592,982,016 bytes [3.00 TB]
Sector Size:      512 bytes logical/physical
Device is:        In smartctl database [for details use: -P show]
ATA Version is:   8
ATA Standard is:  ATA-8-ACS revision 4
Local Time is:    Fri Aug 31 13:37:32 2012 PDT
SMART support is: Available - device has SMART capability.
SMART support is: Enabled

=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

General SMART Values:
Offline data collection status:  (0x84)	Offline data collection activity
					was suspended by an interrupting command from host.
					Auto Offline Data Collection: Enabled.
Self-test execution status:      (   0)	The previous self-test routine completed
					without error or no self-test has ever 
					been run.
Total time to complete Offline 
data collection: 		(37566) seconds.
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
recommended polling time: 	 (   1) minutes.
Extended self-test routine
recommended polling time: 	 ( 255) minutes.
SCT capabilities: 	       (0x003d)	SCT Status supported.
					SCT Error Recovery Control supported.
					SCT Feature Control supported.
					SCT Data Table supported.

SMART Attributes Data Structure revision number: 16
Vendor Specific SMART Attributes with Thresholds:
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  1 Raw_Read_Error_Rate     0x000b   100   100   016    Pre-fail  Always       -       0
  2 Throughput_Performance  0x0005   134   134   054    Pre-fail  Offline      -       109
  3 Spin_Up_Time            0x0007   162   162   024    Pre-fail  Always       -       498 (Average 363)
  4 Start_Stop_Count        0x0012   100   100   000    Old_age   Always       -       26
  5 Reallocated_Sector_Ct   0x0033   100   100   005    Pre-fail  Always       -       3
  7 Seek_Error_Rate         0x000b   100   100   067    Pre-fail  Always       -       0
  8 Seek_Time_Performance   0x0005   132   132   020    Pre-fail  Offline      -       32
  9 Power_On_Hours          0x0012   099   099   000    Old_age   Always       -       7493
 10 Spin_Retry_Count        0x0013   100   100   060    Pre-fail  Always       -       0
 12 Power_Cycle_Count       0x0032   100   100   000    Old_age   Always       -       25
192 Power-Off_Retract_Count 0x0032   100   100   000    Old_age   Always       -       142
193 Load_Cycle_Count        0x0012   100   100   000    Old_age   Always       -       142
194 Temperature_Celsius     0x0002   230   230   000    Old_age   Always       -       26 (Min/Max 18/39)
196 Reallocated_Event_Count 0x0032   100   100   000    Old_age   Always       -       3
197 Current_Pending_Sector  0x0022   100   100   000    Old_age   Always       -       2
198 Offline_Uncorrectable   0x0008   100   100   000    Old_age   Offline      -       0
199 UDMA_CRC_Error_Count    0x000a   200   200   000    Old_age   Always       -       0

SMART Error Log Version: 1
ATA Error Count: 5
	CR = Command Register [HEX]
	FR = Features Register [HEX]
	SC = Sector Count Register [HEX]
	SN = Sector Number Register [HEX]
	CL = Cylinder Low Register [HEX]
	CH = Cylinder High Register [HEX]
	DH = Device/Head Register [HEX]
	DC = Device Command Register [HEX]
	ER = Error register [HEX]
	ST = Status register [HEX]
Powered_Up_Time is measured from power on, and printed as
DDd+hh:mm:SS.sss where DD=days, hh=hours, mm=minutes,
SS=sec, and sss=millisec. It &quot;wraps&quot; after 49.710 days.

Error 5 occurred at disk power-on lifetime: 5353 hours (223 days + 1 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER ST SC SN CL CH DH
  -- -- -- -- -- -- --
  40 51 52 9b d9 3f 05  Error: UNC at LBA) = 0x053fd99b = 88070555

  Commands leading to the command that caused the error were:
  CR FR SC SN CL CH DH DC   Powered_Up_Time  Command/Feature_Name
  -- -- -- -- -- -- -- --  ----------------  --------------------
  60 60 d8 ed da 3f 40 00      23:30:45.474  READ FPDMA QUEUED
  60 00 e0 ed d9 3f 40 00      23:30:45.474  READ FPDMA QUEUED
  60 02 e8 ec 0a 9e 40 00      23:30:45.474  READ FPDMA QUEUED
  60 a0 f0 4d d9 3f 40 00      23:30:45.474  READ FPDMA QUEUED
  2f 00 01 10 00 00 00 00      23:30:45.474  READ LOG EXT

Error 4 occurred at disk power-on lifetime: 5353 hours (223 days + 1 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER ST SC SN CL CH DH
  -- -- -- -- -- -- --
  40 51 52 9b d9 3f 05  Error: UNC at LBA = 0x053fd99b = 88070555

  Commands leading to the command that caused the error were:
  CR FR SC SN CL CH DH DC   Powered_Up_Time  Command/Feature_Name
  -- -- -- -- -- -- -- --  ----------------  --------------------
  60 60 d8 ed da 3f 40 00      23:30:41.562  READ FPDMA QUEUED
  60 00 e0 ed d9 3f 40 00      23:30:41.562  READ FPDMA QUEUED
  60 02 e8 ec 0a 9e 40 00      23:30:41.562  READ FPDMA QUEUED
  60 a0 f0 4d d9 3f 40 00      23:30:41.562  READ FPDMA QUEUED
  2f 00 01 10 00 00 00 00      23:30:41.562  READ LOG EXT

Error 3 occurred at disk power-on lifetime: 5353 hours (223 days + 1 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER ST SC SN CL CH DH
  -- -- -- -- -- -- --
  40 51 52 9b d9 3f 05  Error: UNC at LBA = 0x053fd99b = 88070555

  Commands leading to the command that caused the error were:
  CR FR SC SN CL CH DH DC   Powered_Up_Time  Command/Feature_Name
  -- -- -- -- -- -- -- --  ----------------  --------------------
  60 60 d8 ed da 3f 40 00      23:30:37.639  READ FPDMA QUEUED
  60 00 e0 ed d9 3f 40 00      23:30:37.639  READ FPDMA QUEUED
  60 02 e8 ec 0a 9e 40 00      23:30:37.639  READ FPDMA QUEUED
  60 a0 f0 4d d9 3f 40 00      23:30:37.639  READ FPDMA QUEUED
  2f 00 01 10 00 00 00 00      23:30:37.639  READ LOG EXT

Error 2 occurred at disk power-on lifetime: 5353 hours (223 days + 1 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER ST SC SN CL CH DH
  -- -- -- -- -- -- --
  40 51 52 9b d9 3f 05  Error: UNC at LBA = 0x053fd99b = 88070555

  Commands leading to the command that caused the error were:
  CR FR SC SN CL CH DH DC   Powered_Up_Time  Command/Feature_Name
  -- -- -- -- -- -- -- --  ----------------  --------------------
  60 60 d8 ed da 3f 40 00      23:30:33.740  READ FPDMA QUEUED
  60 00 e0 ed d9 3f 40 00      23:30:33.740  READ FPDMA QUEUED
  60 02 e8 ec 0a 9e 40 00      23:30:33.740  READ FPDMA QUEUED
  60 a0 f0 4d d9 3f 40 00      23:30:33.740  READ FPDMA QUEUED
  2f 00 01 10 00 00 00 00      23:30:33.727  READ LOG EXT

Error 1 occurred at disk power-on lifetime: 5353 hours (223 days + 1 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER ST SC SN CL CH DH
  -- -- -- -- -- -- --
  40 51 52 9b d9 3f 05  Error: UNC at LBA = 0x053fd99b = 88070555

  Commands leading to the command that caused the error were:
  CR FR SC SN CL CH DH DC   Powered_Up_Time  Command/Feature_Name
  -- -- -- -- -- -- -- --  ----------------  --------------------
  60 60 d8 ed da 3f 40 00      23:30:29.836  READ FPDMA QUEUED
  60 00 b8 ed d9 3f 40 00      23:30:29.836  READ FPDMA QUEUED
  60 02 e8 ec 0a 9e 40 00      23:30:29.836  READ FPDMA QUEUED
  60 a0 a0 4d d9 3f 40 00      23:30:29.836  READ FPDMA QUEUED
  60 20 a8 2d d9 3f 40 00      23:30:29.833  READ FPDMA QUEUED

SMART Self-test log structure revision number 1
Num  Test_Description    Status                  Remaining  LifeTime(hours) LBA_of_first_error
# 1  Short offline       Completed without error       00%      7465         -

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
</pre>

<a id="SMART_Status"></a>

#### SMART overall-health state <a id="SMARToverall-healthstate"></a>

If the state changes from PASSED to FAILED, the disks firmware declares this device as broken.
If you still have warranty for the device ask the vendor for replacement.
<a id="Thresh"></a>

#### Attributes Threshold Values <a id="AttributesThresholdValues"></a>

These are defined by the vendor.
<a id="Worst"></a>

#### Attributes Worst Value <a id="AttributesWorstValue"></a>

Note that some vendors firmware may actually increase the "Worst" value for some *rate-type* attributes.
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
  

<a id="UNC"></a>

#### UNCorrectable Error in Data <a id="UNCorrectableErrorinData"></a>

This refers to data which has been read from the disk, but for which the Error Checking and Correction (ECC) codes are inconsistent. In effect, this means that the data can not be read.
In the error log the Logical Block Address (**[LBA](#LBA)**) at which the error occurred will be printed in base 16 and base 10.
<a id="LBA"></a>

#### Logical Block Address <a id="LogicalBlockAddress"></a>

The LBA is a linear address, which counts 512-byte sectors on the disk, starting from zero. (Because of the limitations of the SMART error log, if the LBA is greater than 0xfffffff, then either no error log entry will be made, or the error log entry will have an incorrect LBA. This may happen for drives with a capacity greater than 128 GiB or 137 GB.) For Linux systems the smartmontools web page has [instructions](/wiki/BadBlockHowto) about how to convert the LBA address to the name of the disk file containing the erroneous disk sector.
