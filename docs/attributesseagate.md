  
  


## >> Seagate Devices << <a id="SeagateDevices"></a>

### Interpretation of S.M.A.R.T. Attributes <a id="InterpretationofS.M.A.R.T.Attributes"></a>
| **Device Model** | **Attributes ID#** | **Attributes Name** | **Special** | **Description** |
| --- | --- | --- | --- | --- |
|  | 1 | Raw Read Error Rate |  | Frequency of errors while reading raw data from a disk. |
|  | 2 | Throughput Performance |  | Average efficiency of a hard disk. |
|  | 3 | Spin Up Time |  | Time needed by spindle to spin-up. |
|  | 4 | Start/Stop Count |  | Number of start/stop cycles of spindle. |
|  | 5 | Reallocated Sector Count |  | Quantity of remapped sectors. |
|  | 6 | Start/Stop Count |  | Number of start/stop cycles of spindle. |
|  | **7** | **Seek Error Rate** |  | Frequency of errors appearance while positioning. |
|  |  |  | ![question.png](img/question.png) | *"I believe that the cooked value of the attribute is logarithmic.* `90% = < 1 error per 1000 million seeks, 80% = < 1 error per 100 million, 70% = < 1 error per 10 million, 60% = < 1 error per million, 50% = 10 errors per million, 40% = 100 errors per million, 30% = 1000 errors per million.`" [Reference](https://sourceforge.net/mailarchive/message.php?msg_id=49BE3893.7010101%40aei.mpg.de) |
|  | 8 | Seek Time Performance |  | The average efficiency of operations while positioning. |
|  | 9 | Power-On Hours Count |  | Quantity of elapsed hours in the switched-on state. |
|  | 10 | Spin-up Retry Count |  | Number of retry attempts, that were needed to reach the operational speed of the spindle. |
|  | 11 | Calibration Retry Count |  | Number of attempts to calibrate a drive. |
|  | 12 | Power Cycle Count |  | Number of complete power on/off cycles of hard disk. |
|  | 13 | Soft Read Error Rate |  | Frequency of program errors appearance while reading data from a disk. |
|  |  |  |  |  |
| not all (which?) | **190** | **Airflow_Temperature_Cel** |  | Temperature measured at fan (?) |
| Maxtor OneTouch USB disk (Model Family: Seagate Barracuda 7200.10 family) |  |  | ![question.png](img/question.png) | *After some more watching logs, in my case the normalization function seems to be* **`value=100-raw_value`** [Reference](https://sourceforge.net/mailarchive/message.php?msg_name=20081120140313.GA21006%40adsl-181.cshore.com)] |
|  |  |  |  |  |
|  | 191 | G-Sense Error Rate |  | Frequency of mistakes as a result of impact loads as detected by a shock sensor(?). |
| *<unknown>* | 192 | Power-Off Retract Cycle |  | Number of power-off cycles. |
|  | 193 | Load/Unload Cycle Count |  | Number of cycles into Landing Zone position. |
|  |  |  |  |  |
|  | **194** | **HDA Temperature** |  | Temperature of a Hard Disk Assembly. |
| not all (which?) |  |  | ![exclamation.png](img/exclamation.png) | *Some Seagate disks store the current temperature Celsius in both the RAW and NORMALIZED Attribute 194 values, and the maximum lifetime temperature in Celsius in the WORST value. Since cooler is better, this means that in this case, lower NORMALIZED Attribute values are farther from failure, and that over time the WORST Attribute values get larger, not smaller (as with other Attributes).* |
|  |  |  |  |  |
| *<unknown>* | 195 | Hardware ECC Recovered |  | Frequency of the on the fly errors. |
|  | 196 | Reallocated Event Count |  | Number of remap operations. That means replacing a bad sector by one from the spare area. |
|  | 197 | Current Pending Sector Count |  | Current number of unstable sectors (waiting for remapping). |
| *<unknown>* | 198 | Offline Scan Uncorrectable Count |  | Number of uncorrected errors. |
|  | 199 | UltraDMA CRC Error Rate |  | Total number of errors CRC during UltraDMA mode. |
|  | 200 | Write Error Rate |  | Number of errors while writing to disk (or) flying height (?) |
|  | 201 | Soft Read Error Rate |  | Frequency of program errors appearance while reading data from a disk. |
| *<unknown>* | 202 | Data Address Mark Errors |  | Number of Data Address Mark (DAM) errors (or) vendor-specific. |
| *<unknown>* | 203 | Run Out Cancel |  | Number of the ECC errors. |
| *<unknown>* | 204 | Soft ECC Correction |  | Quantity of errors corrected by software ECC. |
| *<unknown>* | 205 | Thermal Asperity Rate (TAR) |  | Frequency of the thermal asperity errors. |
| *<unknown>* | 206 | Flying Height |  | The height of the disk heads above the disk surface. |
| *<unknown>* | 207 | Spin High Current |  | Amount of high current used to spin up the drive. |
| *<unknown>* | 208 | Spin Buzz |  | Number of buzz routines to spin up the drive. |
| *<unknown>* | 209 | Offline Seek Performance |  | Drive's seek performance during offline operations. (Relation to Seek Time Performance - [#8](https://github.com/smartmontools/trac-tickets-archive/issues/8)?) |
| *<unknown>* | 220 | Disk Shift |  | Shift of disk is possible as a result of strong shock loading in the store, as a result of it's falling or for other reasons (sometimes: Temperature) |
| *<unknown>* | 221 | G-Sense Error Rate |  | Frequency of mistakes as a result of impact loads as detected by a shock sensor(?). |
| *<unknown>* | 222 | Loaded Hours |  | Number of hours in general operational state. |
| *<unknown>* | 223 | Load/Unload Retry Count |  | Loading on drive caused by numerous recurrences of operations, like reading, recording, positioning of heads, etc. |
| *<unknown>* | 224 | Load Friction |  | Load on drive caused by friction in mechanical parts of the store. |
| *<unknown>* | 225 | Load/Unload Cycle Count |  | Number of cycles into Landing Zone position. |
| *<unknown>* | 226 | Load-in Time |  | General time of loading for drive. |
| *<unknown>* | 227 | Torque Amplification Count |  | Quantity efforts of the rotating moment of a drive. |
| *<unknown>* | 228 | Power-Off Retract Cycle |  | Number of power-off cycles. |
| *<unknown>* | 230 | GMR Head Amplitude |  | Amplitude of heads trembling (GMR-head) in running mode. |
| *<unknown>* | 231 | Temperature |  | Temperature of a drive. |
| *<unknown>* | 240 | Head Flying Hours |  | Time while head is positioning. |
| *<unknown>* | 250 | Read Error Retry Rate |  | Number of errors while reading from a disk. |

**References:** http://www.ariolic.com/activesmart/smart-attributes/

Images ![exclamation.png](img/exclamation.png) and ![question.png](img/question.png) were made by Melamed katz, based on Image from the Nuvola icon theme for KDE 3.x by David Vignoni. Source: http://commons.wikimedia.org/wiki/File:Question_exclamation.svg
