# Short Selftest <a id="ShortSelftest"></a>

The *Self*tests check the electrical and mechanical performance as well as the read performance of the disk. Their results are reported in the Self Test Error Log, readable with `smartctl -l selftest` *<device>*. Note that on some disks the progress of the selftest can be monitored by watching this log during the selftest; with other disks use `smartctl -c` *<device>* to monitor progress. 

Short selftests should take less than two minutes to complete. Background selftests can be aborted with the `smartctl -X` *<device>* command. The selftest log will note that an abort was requested.

Selftests cause an entry to be placed in the selftest results log page. The 20 most recent self tests are held. The selftest results can be viewed with the `smartctl -l selftest` *<device>* command. All tests output the accumulated power on hours when the test was performed and the success or otherwise (e.g. the selftest was aborted by the user's request) of the test. Unsuccessful selftests output a selftest segment number (vendor specific), the logical block address of the first failure (if appropriate) and a sense_key,asc,ascq triple (see appendix). Following the selftest result table is the expected duration of an uninterrupted extended selftest (when that figure is provided by the device). 

Besides checking performance and function of your disks, running a short selftest is also a way to find out how many hours the device has been in use for. One shortcoming of the Informational Exception data provided by SCSI devices (at least as defined in the current standard) is that no LOG SENSE page tells you this. The device needs to track its "age" for applying timestamps to self test results (seen in the "Lifetime (hours)" column of the `smartctl -l selftest` command) if they are supported. So one way to circumvent this shortcoming is to do dummy self tests. Hence do a `smartctl -t short`} *<device>* command and then wait 2 minutes to see the result in the self test log in which the most recent self test row (i.e. the first) will have the current lifetime of the device. 

---


**References**  

Manpages of [smartd](https://github.com/smartmontools/smartmontools/blob/main/smartmontools/smartd.8.in) and [smartctl](https://github.com/smartmontools/smartmontools/blob/main/smartmontools/smartctl.8.in)  

Doug Gilberts article [Smartmontools for SCSI devices](https://github.com/smartmontools/smartmontools/blob/main/www/smartmontools_scsi.xml) 

**License**  

Published under [GNU GPL](http://www.gnu.org/licenses/gpl-2.0.html#SEC1).
