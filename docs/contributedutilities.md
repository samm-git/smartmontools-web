# Utilities contributed by Smartmontools users <a id="UtilitiescontributedbySmartmontoolsusers"></a>

From time to time it happens, that users contribute small utilities they wrote for additional tasks and analysis in the context of SMART disk management.

We place them on this page at your own disposal. **We give no warranty for these, please contact the author directly**, if you have any questions!

It is also possible to give feedback or contribute enhancements by editing the page.

---

## Collect output of smartctl <a id="Collectoutputofsmartctl"></a>

### HElog_smart.pl by H.Ellenberger <a id="HElog_smart.plbyH.Ellenberger"></a>

Here the description from the script author:

In order to make more valid judgments about modern big disks above 1TB it 
becomes more and more important to keep long term data of some parameters like 
soft read errors, spinup time etc.

If a file name is automatically generated using Disk model and serial no., 
smart data can easily be accumulated by appending it for each disk to it's 
individual file with a separator holding also a time stamp.

The attached program first scans /dev/disk/by-id/ for scsi/sata drives and for 
each drive then executes smartctl -H. If bad health status is reported it will 
be appended to the file.

Then smartctl -a data is gathered and also appended. 

If the data is written to /var/log/SMART/ it could also become zipped and log-
rotated if appropriate config files are added.

On desktop systems I run that program from /etc/init.d/ after booting and 
before shutdown. On uninterrupted systems I recommend adding a cron job 
running at least once per day.

Since I'm not an expert in Perl programming any feedback and enhancements are 
welcome.

---

## Charts of SMART attributes <a id="ChartsofSMARTattributes"></a>

### sm.awk and sm.gnuplot by Frieder Ferlemann <a id="sm.awkandsm.gnuplotbyFriederFerlemann"></a>

See [sm.awk](https://www.smartmontools.org/attachment/sm.awk:ticket:84), [sm.gnuplot](https://www.smartmontools.org/attachment/sm.gnuplot:ticket:84), [example output](https://www.smartmontools.org/attachment/sm_all.png:ticket:84), and usage information in [ticket #84](https://github.com/smartmontools/trac-tickets-archive/issues/84#comment:description).

---
