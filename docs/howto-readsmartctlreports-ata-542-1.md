## HOWTO read smartctl reports <a id="HOWTOreadsmartctlreports"></a>

### Instruction <a id="Instruction"></a>
Move the mouse to the coloured parts of the text below to see a short explanation. Click the links to get background info.

---

### ATA Disk Report <a id="ATADiskReport"></a>
<pre>
<b># smartctl <a href="https://github.com/smartmontools/smartmontools/blob/main/smartmontools/smartctl.8.in#lbAG" title="With this option, the report will not list the /Serial Number/ of the device. Use it, when you present smartctl reports in the public."><font color="blue">-q noserial</font></a> -a /dev/ada30</b>
smartctl <b><a href="faq.md#Whydidthereleaseversionschemechange" title="This is the /Version Number/ of smartmontools"><font color="red">5.42</font></a></b> 2011-10-20 <b><a href="https://github.com/smartmontools/smartmontools/blob/3458/smartmontools" title="This is the /Revision Number/ of the sources in our SVN-Repository. So we know the exact version of each file, that was used to build your smartctl executable."><font color="red">r3458</font></a></b> [FreeBSD 9.0-RELEASE-p4 amd64] (local build)
Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net
 
=== START OF INFORMATION SECTION ===
Model Family:     Hitachi Deskstar 5K3000
Device Model:     Hitachi HDS5C3030ALA630
LU WWN Device Id: 5 000cca 228c089f4
Firmware Version: MEAOA580
User Capacity:    3,000,592,982,016 bytes [3.00 TB]
Sector Size:      512 bytes logical/physical
Device is:        <b><a href="faq.md#MyATAdriveisnotinthesmartctlsmartddatabase" title="If your drive is not in the database, then the names of the Attributes (displayed in the ATTRIBUTE_NAME column) and the format of the the raw Attribute values shown in the RAW_VALUE column may be incorrect. This is /mostly cosmetic/: the essential drive health monitoring/testing functionality of smartmontools does not depend upon the database! If you want to have your drive added to the database, click the link to get a detailed instruction."><font color="DarkGreen">In smartctl database</font></a></b> [for details use: -P show]
ATA Version is:   8
ATA Standard is:  ATA-8-ACS revision 4
Local Time is:    Fri Aug 31 13:37:32 2012 PDT
SMART support is: Available - device has SMART capability.
SMART support is: Enabled
 
=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: <b><a href="#SMART_Status" title="The SMART /overall-health state/. If you see /PASSED/, then the device stood the proof and is OK so far. If you see state /FAILED/, then one ore more attributes signaled a failure. You should try to get a backup and replace the drive instantly (!)"><font color="DarkGreen">PASSED</font></a></b>
 
General SMART Values:
Offline data collection status:  (0x84)	Offline data collection activity
					was suspended by an interrupting command from host.
					Auto Offline Data Collection: <b><a href="https://github.com/smartmontools/smartmontools/blob/main/smartmontools/smartctl.8.in#lbAG" title="Offline testing is to be carried out, automatically, on a regular scheduled basis. 'smartctl --offlineauto=on' enables it. The results of this automatic or immediate offline testing (data collection) are reflected in the values of the SMART Attributes. Some SMART attribute values are updated /only/ during off-line data collection activities. These Attributes are labeled /Offline/ in the UPDATED column of the Attribute Table (see below)."><font color="DarkGreen">Enabled</font></a></b>.
Self-test execution status:      (   0)	The previous self-test routine completed
					without error or no self-test has ever 
					been run.
Total time to complete Offline 
data collection: 		(37566) seconds.
Offline data collection
capabilities: 			 (0x5b) <b><a href="test_offline" title="A one-time offline test can be carried out immediately upon receipt of a user command. Call smartctl with the '-t offline' option for that. The disk will suspend offline testing while disk accesses are taking place, and automatically resume it when the disk would otherwise be idle. So to run the test as quick as possible take care that the disk in an idle state during testing."><font color="browne">SMART execute Offline immediate</font></a></b>.
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
ID# <b><a href="tocdoc.md#SMARTAttributes" title="If your drive is not in the database, the names of the Attributes may be incorrect. Also note that starting with ATA/ATAPI-4, revision 4, the meaning of these Attribute fields have been made /entirely vendor-specific/. We collect info about the SMART attributes in separate wiki pages for the different vendors. Click the link to get there and choose the appropriate one."><font color="blue">ATTRIBUTE_NAME<font></a></b>          FLAG     <b><a href="tocdoc.md#SMARTAttributes" title="These are /NORMALIZED/ attribute values in the range 1-254. They are calculated by the vendors firmware using his detailed knowledge of the disk's operations and failure mode. Smartmontools only /report/ these."><font color="blue">VALUE<font></a></b> <b><a href="#Worst" title="This is the smallest (/closest to failure/) value that the disk has recorded at any time during its lifetime when SMART was enabled."><font color="browne">WORST</font></a></b> <b><a href="#Thresh" title="Each Attribute also has a Threshold value (whose range is 0 to 255). If the Normalized value (printed in column VALUE) is less than or equal to the Threshold value, then the Attribute is said to have failed. If the Attribute is a pre-failure Attribute, then disk failure is imminent."><font color="red">THRESH</font></a></b> <b><a href="#Attribute_Type" title="Attributes are one of two possible types: /Pre-fail/ or /Old_age/. Pre-failure Attributes are ones which, if less than or equal to their threshold values, indicate pending disk failure. Old age, or usage Attributes, are ones which indicate end-of-product life from old-age or normal aging and wearout, if the Attribute value is less than or equal to the threshold."><font color="DarkGreen">TYPE</font></a></b>      <b><a href="#When_Udated" title="Info in column /UPDATED/ shows if the SMART Attribute values are updated during both normal operation and off-line testing, or only during offline testing. The former are labeled /Always/ and the latter are labeled /Offline/"><font color="DarkGreen">UPDATED</font></a></b>  <b><a href="#When_Failed" title="If the Attribute's current /Normalized value/ is less than or equal to the threshold value, then the /WHEN_FAILED/ column will display /FAILING_NOW/. If not, but the worst recorded value is less than or equal to the threshold value, then this column will display /In_the_past/. If the /WHEN_FAILED/ column has no entry (indicated by a dash: '-') then this Attribute is OK now (not failing) and has also never failed in the past."><font color="red">WHEN_FAILED</font></a></b> <b><a href="#Raw_Value" title="Each Attribute has a /Raw/ value. [Note: smartctl prints these values in base-10.] Vendors use their own algorithms to convert this to a /Normalized/ value in the range from 1 to 254. (See column /Value/"><font color="blue">RAW_VALUE</font></a></b>
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
SS=sec, and sss=millisec. It "wraps" after 49.710 days.
 
Error 5 occurred at disk power-on lifetime: 5353 hours (223 days + 1 hours)
  When the command that caused the error occurred, the device was active or idle.
 
  After command completion occurred, registers were:
  ER ST SC SN CL CH DH
  -- -- -- -- -- -- --
  40 51 52 9b d9 3f 05  Error: <b><a href="#UNC" title="UNC (UNCorrectable): data is uncorrectable. This refers to data which has been read from the disk, but for which the Error Checking and Correction (ECC) codes are inconsistent. In effect, this means that the data can not be read."><font color="red">UNC<font></a></b> at <b><a href="#LBA" title="Logical Block Address (LBA) at which the error occurred printed in base 16 and base 10."><font color="blue">LBA</font></a></b>) = 0x053fd99b = 88070555
 
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
Num  Test_Description    Status                  Remaining  LifeTime(hours) <b><a href="badblockhowto.md" title="If you find not a hyphen, but a number in this row, then the test found a /bad block/ at the listed logical block address (LBA). Follow this link to read our /Bad block HOWTO/. It gives instructions to solve this sort of problem."><font color="red">LBA_of_first_error</font></a></b>
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
 
<hr />
</pre>
<a name="SMART_Status"></a><h4>SMART overall-health state</h4>
If the state changes from PASSED to FAILED, the disks firmware declares this device as broken.
If you still have warranty for the device ask the vendor for replacement.
<a name="Thresh"></a><h4>Attributes Threshold Values</h4>
These are defined by the vendor.
<a name="Worst"></a><h4>Attributes Worst Value</h4>
Note that some vendors firmware may actually increase the "Worst" value for some <em>rate-type</em> attributes.
<a name="Attribute_Type"></a><h4>Attributes Type</h4>
Note that if an Attribute is of type 'Pre-fail', it does not mean that your disk is about to fail! 
It only has this meaning if the Attribute's current Normalized value is less than or equal to the threshold value. 
<a name="When_Udated"></a><h4>Column Updated</h4>
Some SMART attributes values, that are updated only during <em>off-line data collection</em> activities are labeled "Offline" in column "UPDATED". 
<a name="When_Failed"></a><h4>Column "When Failed"</h4>
If the Attribute's current "Normalized value" is less than or equal to the threshold value, then the attribute is marked with "FAILING_NOW" in column WHEN_FAILED.
<a name="Raw_Value"></a><h4>Raw Values</h4>
Please keep in mind that the conversion from RAW value to a quantity with physical units is not specified by the SMART standard!<br />
smartctl only <u>reports</u> the different Attribute types, values, and thresholds as read from the device. 
It does not carry out the conversion between "Raw" and "Normalized" values: this is done by the disk's firmware.<br /> 
<br />
In most cases, the values printed by smartctl are sensible. 
For example the temperature Attribute generally has its raw value equal to the temperature in Celsius.<br />
However in some cases vendors use unusual conventions. For example the Hitachi disk on my laptop reports 
its power-on hours in minutes, not hours. Some IBM disks track three temperatures rather than one, 
in their raw values. Have a look at our wiki pages on topic <a href="tocdoc.md#SMARTAttributes">SMART attributes</a>.
<br />
<a name="UNC"></a><h4>UNCorrectable Error in Data</h4>
This refers to data which has been read from the disk, but for which the Error Checking and Correction (ECC) codes are inconsistent. In effect, this means that the data can not be read.
In the error log the Logical Block Address (<b><a href="#LBA" title="Logical Block Address"><font color="blue">LBA</font></a></b>) at which the error occurred will be printed in base 16 and base 10.
<a name="LBA"></a><h4>Logical Block Address</h4>
The LBA is a linear address, which counts 512-byte sectors on the disk, starting from zero. (Because of the limitations of the SMART error log, if the LBA is greater than 0xfffffff, then either no error log entry will be made, or the error log entry will have an incorrect LBA. This may happen for drives with a capacity greater than 128 GiB or 137 GB.) For Linux systems the smartmontools web page has <a href="badblockhowto.md" title="Bad block HOWTO">instructions</a> about how to convert the LBA address to the name of the disk file containing the erroneous disk sector.
