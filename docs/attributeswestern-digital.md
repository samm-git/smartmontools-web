  
  


## Western-Digital Devices <a id="Western-DigitalDevices"></a>

### Interpretation of S.M.A.R.T. Attributes <a id="InterpretationofS.M.A.R.T.Attributes"></a>
| **Device Model** | **Attributes ID#** | **Attributes Name** | **Special** | **Description** |
| --- | --- | --- | --- | --- |
|  | 1 | Raw Read Error Rate |  | Frequency of errors while reading raw data from a disk. |
|  | 2 | Throughput Performance |  | Average efficiency of a hard disk. |
|  | 3 | Spin Up Time |  | Time needed by spindle to spin-up. |
|  | 4 | !Start/Stop Count |  | Number of start/stop cycles of spindle. |
|  | 5 | Reallocated Sector Count |  | Quantity of remapped sectors. |
|  | 6 | Read Channel Margin |  | Margin of a channel while reading data. The function of this attribute is not specified. |
|  | 7 | Seek Error Rate |  | Frequency of errors appearance while positioning. |
|  | 8 | Seek Time Performance |  | The average efficiency of operations while positioning. |
|  | 9 | Power-On Hours Count |  | Quantity of elapsed hours in the switched-on state. |
|  |  |  |  |  |
|  | **10** | **Spin-up Retry Count** |  | Number of retry attempts, that were needed to reach the operational speed of the spindle. |
|  |  |  | ![exclamation.png](img/exclamation.png) | *Western Digital firmware initializes SMART Attribute 10 after either 120 spin-ups or 8 power-on hours. Until that time, they have the uninitialized value 253.* |
|  |  |  |  |  |
|  | **11** | **Calibration Retry Count** |  | Number of attempts to calibrate a drive. |
|  |  |  | ![exclamation.png](img/exclamation.png) | *Western Digital firmware initializes SMART Attribute 11 after either 120 spin-ups or 8 power-on hours. Until that time, they have the uninitialized value 253.* |
|  |  |  |  |  |
|  | 12 | Power Cycle Count |  | Number of complete power on/off cycles of hard disk. |
|  | 13 | Soft Read Error Rate |  | Frequency of program errors appearance while reading data from a disk. |
|  | 22 | Some parameter related to the drives helium filling |  | ![question.png](img/question.png) |
|  | 183 | SATA Downshift Error Count<sup>[2](#footnote_lba)</sup> |  | ![question.png](img/question.png) |
|  | 184 | End to End Error !Det/Corr Count |  | This attribute is a part of HP's SMART IV technology and it means that after transferring through the cache RAM data buffer the parity data between the host and the hard drive did not match. |
|  | 185 | Head Stability |  | ![question.png](img/question.png) |
|  | 186 | Induced Op-Vibration Detection |  | ![question.png](img/question.png) |
|  | 187 | Reported Uncorrectable Errors |  | A number of errors that could not be recovered using hardware ECC (see attribute 195). |
|  | 188 | Command Time Out |  | A number of aborted operations due to HDD timeout. Normally this attribute value should be equal to zero and if you have values far above zero, then most likely you have some serious problems with your power supply or you have an oxidized data cable. |
| WDE18300, WDE9180 Ultra2 SCSI hard drives and future WD Enterprise products <sup>[1](#footnote_hfw)</sup> | 189 | High Fly Writes |  | HDD producers implement a Fly Height Monitor that attempts to provide additional protections for write operations by detecting when a recording head is flying outside its normal operating range. If an unsafe fly height condition is encountered, the write process is stopped, and the information is rewritten or reallocated to a safe region of the hard drive. This attribute indicates the count of these errors detected over the lifetime of the drive. |
|  | 190 | Airflow Temperature |  | Airflow temperature (Same as temp. [C2], but current value is 50 less for some models. Marked as obsolete.) |
|  | 191 | G-sense error rate |  | The number of errors resulting from externally-induced shock & vibration. (See also attribute ID 221) |
|  | 191 | Shock Sense<sup>[2](#footnote_lba)</sup> |  | ![question.png](img/question.png) |
|  | 192 | Emergency Retract Cycle Count |  | Number of times the heads are loaded off the media. |
|  | 193 | !Load/Unload Cycle Count |  | Number of cycles into Landing Zone position. |
| not all (which?) | 194 | HDA Temperature |  | Temperature of a Hard Disk Assembly. |
| *<unknown>* | 195 | Hardware ECC Recovered |  | Frequency of the on the fly errors ![question.png](img/question.png) |
|  | 195 | ECC on the Fly Count |  | Frequency of the on the fly errors. |
| not all (which?) | 196 | Relocation Event Count / Re-allocated Sector Event |  | Number of remap operations. That means replacing a bad sector by one from the spare area. |
|  | 197 | Current Pending Sector Count |  | Current number of unstable sectors (waiting for remapping). |
| *<unknown>* | 198 | Offline Uncorrectable Sector Count |  | Number of uncorrected errors. |
|  |  |  |  |  |
| not all (which?) | **199** | **UltraDMA CRC Error Rate** |  | Total number of errors CRC during UltraDMA mode. |
|  |  |  | ![exclamation.png](img/exclamation.png) | *Western Digital firmware initializes SMART Attribute 199 after either 120 spin-ups or 8 power-on hours. Until that time, they have the uninitialized value 253.* |
|  |  |  |  |  |
|  | 200 | Multi Zone Error Rate |  | Multi Zone Error Rate. |
|  | 201 | Soft Read Error Rate |  | Frequency of program errors appearance while reading data from a disk. |
| *<unknown>* | 202 | Data Address Mark Errors |  | Number of Data Address Mark (DAM) errors (or) vendor-specific. |
| *<unknown>* | 203 | Run Out Cancel |  | Number of the ECC errors (Maxtor: ECC Errors). |
| *<unknown>* | 204 | Soft ECC Correction |  | Quantity of errors corrected by software ECC. |
| *<unknown>* | 205 | Thermal Asperity Rate (TAR) |  | Frequency of the thermal asperity errors. |
| *<unknown>* | 206 | Flying Height |  | The height of the disk heads above the disk surface. |
| *<unknown>* | 207 | Spin High Current |  | Amount of high current used to spin up the drive. |
| *<unknown>* | 208 | Spin Buzz |  | Number of buzz routines to spin up the drive. |
| *<unknown>* | 209 | Offline Seek Performance |  | Drive's seek performance during offline operations. (Relation to Seek Time Performance? => ID 8) |
| *<unknown>* | 220 | Disk Shift |  | Shift of disk is possible as a result of strong shock loading in the store, as a result of it's falling or for other reasons (sometimes: Temperature) |
| *<unknown>* | 221 | G-Sense Error Rate |  | Frequency of mistakes as a result of impact loads as detected by a shock sensor. (See also attribute ID 191) |
| *<unknown>* | 222 | Loaded Hours |  | Number of hours in general operational state. |
| *<unknown>* | 223 | !Load/Unload Retry Count |  | Loading on drive caused by numerous recurrences of operations, like reading, recording, positioning of heads, etc. |
| *<unknown>* | 224 | Load Friction |  | Load on drive caused by friction in mechanical parts of the store. |
| *<unknown>* | 225 | !Load/Unload Cycle Count |  | Number of cycles into Landing Zone position. |
| *<unknown>* | 226 | Load-in Time |  | General time of loading for drive. |
| *<unknown>* | 227 | Torque Amplification Count |  | Quantity efforts of the rotating moment of a drive. |
| *<unknown>* | 228 | Power-Off Retract Count |  | Number of power-off cycles. |
| *<unknown>* | 230 | GMR Head Amp |  | Amplitude of heads trembling (GMR-head) in running mode. |
| *<unknown>* | 231 | Temperature |  | Temperature of a drive. |
| WDS500G2B0A | 232 | Available Reserved Space |  | ![question.png](img/question.png) |
| WDS500G2B0A | 233 | Media Wearout Indicator |  | ![question.png](img/question.png) |
| *<unknown>* | 240 | Head Flying Hours |  | Time while head is positioning. |
| WDS500G2B0A | 241 | Total LBAs written<sup>[2](#footnote_lba)</sup> |  | Number of logical blocks written during drive's lifetime? ![question.png](img/question.png) |
| WDS500G2B0A | 242 | Total LBAs read<sup>[2](#footnote_lba)</sup> |  | Number of logical blocks read during drive's lifetime? ![question.png](img/question.png) |
| *<unknown>* | 250 | Read Error Retry Rate |  | Number of errors while reading from a disk. |
| *<unknown>* | 254 | Free Fall Sensor<sup>[2](#footnote_lba)</sup> |  | Number of "Free Fall Events" detected |

**Footnotes:**
<a name="footnote_hfw">1.</a> <a href="http://www.wdc.com/en/library/2579-850123.pdf" target="_blank">Fly Height Monitor Improves Hard Drive Reliability</a>, Western Digital, April 1999, 79-850123-000<br />
<a name="footnote_lba">2.</a> The attributes were extracted from WD's <tt>wdidle3.exe</tt> utility, after unpacking it with <a href="http://upx.sourceforge.net/" target="_blank">UPX</a>. (Source: <a href="https://sourceforge.net/mailarchive/message.php?msg_name=1256250589_13792%40mail.internode.on.net">ML-Archive</a>).

**References:** 

http://www.ariolic.com/activesmart/smart-attributes/

http://en.wikipedia.org/wiki/S.M.A.R.T.

http://en.wikipedia.org/wiki/Talk:S.M.A.R.T.#Attributes_185_.26_186_.28WDC.29

http://en.wikipedia.org/wiki/Talk:S.M.A.R.T.#More_WDC_SMART_attributes

http://www.hdat2.com/files/hdat2en_v11.pdf
 

Images ![exclamation.png](img/exclamation.png) and ![question.png](img/question.png) were made by Melamed katz, based on Image from the Nuvola icon theme for KDE 3.x by David Vignoni. Source: http://commons.wikimedia.org/wiki/File:Question_exclamation.svg
