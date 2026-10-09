### Instruction <a id="Instruction"></a>
Move the mouse to the coloured parts of the text below to see a short explanation. Click the links to get background info.

---

### The Report <a id="TheReport"></a>
<pre>
<b># smartctl <a href="https://github.com/smartmontools/smartmontools/blob/main/smartmontools/smartctl.8.in#lbAG" title="With this option, the report will not list the /Serial Number/ of the device. Use it, when you present smartctl reports in the public."><font color="blue">-q noserial</font></a> -a  /dev/sdb</b>
smartctl <b><a href="faq.md#Whydidthereleaseversionschemechange" title="This is the /Version Number/ of smartmontools"><font color="red">5.39</font></a></b> 2009-09-04 <b><a href="https://github.com/smartmontools/smartmontools/blob/2902/smartmontools" title="This is the /Revision Number/ of the sources in our SVN-Repository. So we know the exact version of each file, that was used to build your smartctl executable."><font color="red">r2902</font></a></b> [i686-pc-linux-gnu] (local build)
Copyright (C) 2002-9 by Bruce Allen, http://smartmontools.sourceforge.net

=== START OF INFORMATION SECTION ===
Model Family:     Seagate Barracuda 7200.7 and 7200.7 Plus family
Device Model:     ST380011A
Firmware Version: 3.04
User Capacity:    80.026.361.856 bytes
Device is:        <b><a href="faq.md#MyATAdriveisnotinthesmartctlsmartddatabase" title="If your drive is not in the database, then the names of the Attributes (displayed in the ATTRIBUTE_NAME column) and the format of the the raw Attribute values shown in the RAW_VALUE column may be incorrect. This is /mostly cosmetic/: the essential drive health monitoring/testing functionality of smartmontools does not depend upon the database! If you want to have your drive added to the database, click the link to get a detailed instruction."><font color="DarkGreen">In smartctl database</font></a></b> [for details use: -P show]
ATA Version is:   6
ATA Standard is:  ATA/ATAPI-6 T13 1410D revision 2
Local Time is:    Tue Sep 29 19:50:43 2009 CEST
SMART support is: Available - device has SMART capability.
SMART support is: Enabled

=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: <b><a href="#SMART_Status" title="The SMART /overall-health state/. If you see /PASSED/, then the device stood the proof and is OK so far. If you see state /FAILED/, then one ore more attributes signaled a failure. You should try to get a backup and replace the drive instantly (!)"><font color="DarkGreen">PASSED</font></a></b>

General SMART Values:
Offline data collection status:  (0x82)	Offline data collection activity
					was completed without error.
					Auto Offline Data Collection: <b><a href="https://github.com/smartmontools/smartmontools/blob/main/smartmontools/smartctl.8.in#lbAG" title="Offline testing is to be carried out, automatically, on a regular scheduled basis. 'smartctl --offlineauto=on' enables it. The results of this automatic or immediate offline testing (data collection) are reflected in the values of the SMART Attributes. Some SMART attribute values are updated /only/ during off-line data collection activities. These Attributes are labeled /Offline/ in the UPDATED column of the Attribute Table (see below)."><font color="DarkGreen">Enabled</font></a></b>.
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
ID# <b><a href="tocdoc.md#SMARTAttributes" title="If your drive is not in the database, the names of the Attributes may be incorrect. Also note that starting with ATA/ATAPI-4, revision 4, the meaning of these Attribute fields have been made /entirely vendor-specific/. We collect info about the SMART attributes in separate wiki pages for the different vendors. Click the link to get there and choose the appropriate one."><font color="blue">ATTRIBUTE_NAME<font></a></b>          FLAG     <b><a href="tocdoc.md#SMARTAttributes" title="These are /NORMALIZED/ attribute values in the range 1-254. They are calculated by the vendors firmware using his detailed knowledge of the disk's operations and failure mode. Smartmontools only /report/ these."><font color="blue">VALUE<font></a></b> <b><a href="#Worst" title="This is the smallest (/closest to failure/) value that the disk has recorded at any time during its lifetime when SMART was enabled."><font color="browne">WORST</font></a></b> <b><a href="#Thresh" title="Each Attribute also has a Threshold value (whose range is 0 to 255). If the Normalized value (printed in column VALUE) is less than or equal to the Threshold value, then the Attribute is said to have failed. If the Attribute is a pre-failure Attribute, then disk failure is imminent."><font color="red">THRESH</font></a></b> <b><a href="#Attribute_Type" title="Attributes are one of two possible types: /Pre-fail/ or /Old_age/. Pre-failure Attributes are ones which, if less than or equal to their threshold values, indicate pending disk failure. Old age, or usage Attributes, are ones which indicate end-of-product life from old-age or normal aging and wearout, if the Attribute value is less than or equal to the threshold."><font color="DarkGreen">TYPE</font></a></b>      <b><a href="#When_Udated" title="Info in column /UPDATED/ shows if the SMART Attribute values are updated during both normal operation and off-line testing, or only during offline testing. The former are labeled /Always/ and the latter are labeled /Offline/"><font color="DarkGreen">UPDATED</font></a></b>  <b><a href="#When_Failed" title="If the Attribute's current /Normalized value/ is less than or equal to the threshold value, then the /WHEN_FAILED/ column will display /FAILING_NOW/. If not, but the worst recorded value is less than or equal to the threshold value, then this column will display /In_the_past/. If the /WHEN_FAILED/ column has no entry (indicated by a dash: '-') then this Attribute is OK now (not failing) and has also never failed in the past."><font color="red">WHEN_FAILED</font></a></b> <b><a href="#Raw_Value" title="Each Attribute has a /Raw/ value. [Note: smartctl prints these values in base-10.] Vendors use their own algorithms to convert this to a /Normalized/ value in the range from 1 to 254. (See column /Value/"><font color="blue">RAW_VALUE</font></a></b>
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
Num  Test_Description    Status                  Remaining  LifeTime(hours)  <b><a href="badblockhowto.md" title="If you find not a hyphen, but a number in this row, then the test found a /bad block/ at the listed logical block address (LBA). Follow this link to read our /Bad block HOWTO/. It gives instructions to solve this sort of problem."><font color="red">LBA_of_first_error</font></a></b>
# 1  Extended offline    Completed without error       00%     20014         - <a id="1ExtendedofflineCompletedwithouterror0020014-"></a>
# 2  Short offline       Completed without error       00%     20009         - <a id="2ShortofflineCompletedwithouterror0020009-"></a>
# 3  Short offline       Completed without error       00%     19992         - <a id="3ShortofflineCompletedwithouterror0019992-"></a>
# 4  Extended offline    Completed without error       00%     19989         - <a id="4ExtendedofflineCompletedwithouterror0019989-"></a>
# 5  Short offline       Completed without error       00%     11827         - <a id="5ShortofflineCompletedwithouterror0011827-"></a>
# 6  Short offline       Completed without error       00%     11803         - <a id="6ShortofflineCompletedwithouterror0011803-"></a>
# 7  Short offline       Completed without error       00%     11780         - <a id="7ShortofflineCompletedwithouterror0011780-"></a>
# 8  Short offline       Completed without error       00%     11756         - <a id="8ShortofflineCompletedwithouterror0011756-"></a>
# 9  Extended offline    Completed without error       00%     11751         - <a id="9ExtendedofflineCompletedwithouterror0011751-"></a>
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
<hr />
</pre>
<a name="SMART_Status"></a><h4>SMART overall-health state</h4>
..missing an explanation..
<a name="Thresh"></a><h4>Attributes Threshold Values</h4>
These are defined by the vendor.
<a name="Worst"></a><h4>Attributes Worst Value</h4>
Note that some vendors firmware may actually increase the "Worst" value for some <em>rate-type</em> Attributes.
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
