## History of smartmontools <a id="Historyofsmartmontools"></a>

Smartmontools was derived directly from smartsuite. 
The smartsuite code was originally developed as a Senior Thesis by
Michael Cornwell at the Concurrent Systems Laboratory (now part of the
[Storage Systems Research Center](http://ssrc.soe.ucsc.edu/)), Jack Baskin School of Engineering, University of
California, Santa Cruz.
You can find some information about the original smartsuite project here:
[Press Release 1](https://web.archive.org/web/20080216015830/https://www.ucsc.edu/news_events/press_releases/archive/99-00/09-99/smart_software.htm), 
[Press Release 2](https://web.archive.org/web/20080509171436/http://www.santa-cruz.com/archive/1999/September/22/local/stories/5local.htm), 
[Press Release 3](http://www.ucsc.edu/currents/99-00/09-27/smart.html).
According to [SSRC](http://www.ssrc.ucsc.edu/) smartsuite is no longer maintained; the last release was in 2001.

Smartmontools was first released in October 2002. It differs from smartsuite 
in that it supports the ATA/ATAPI-5 standard. So for example `smartctl` from smartsuite 
has no facility for printing the SMART self-test logs, and doesn't print timestamp
information in the most usable way. The `smartctl` utility
in smartmontools has added functionality for this (`-q`, `-l selftest`,
`-S`, `-T`, `-v` and `-m` options), updated documentation, and also fixes small
technical bugs in smartsuite. (One example: smartsuite does not actually use the
ATA SMART RETURN STATUS command to find out the health status of a disk.  It instead tries to infer this from the
SMART Attribute values.) See the [CHANGELOG](https://github.com/smartmontools/smartmontools/blob/main/smartmontools/ChangeLog)
file in our repository for a summary of what's been done.

The `smartd` utility differs from the smartsuite `smartd` in major ways.
First, it prints somewhat more informative error messages to the syslog.
Second, on startup it looks for a configuration file
`/etc/smartd.conf`, and if `smartd` finds this file, it
monitors the list of devices therein, rather than querying all IDE and
SCSI devices on your system. (If the configuration file does not
exist, then it does query all IDE and SCSI devices.) Also, it's
a well-behaved daemon and doesn't leave open file descriptors and other
detrius behind. In addition, the `smartmontools` version of
`smartd` can be instructed (via Directives in the configuration
file) to monitor for changes in a number of different disk properties:
the SMART status, failure or prefailure attributes going below
threshold, new errors appearing in the ATA Error Log or the SMART
Self-Test Log, and so on. `smartd` can also send an email warning or run a
user-specified executable if it detects a problem with the disk.

The other principle difference is that smartmontools is an
OpenSource development project, meaning that we keep the files in SVN,
and that other developers who wish to contribute can commit changes to
the repository. If you would like to contribute, please write to to 
[smartmontools-devel](https://listi.jpberlin.de/mailman/listinfo/smartmontools-devel).

But the bottom line is that the code in smartmontools is derived
directly from smartsuite and is similar. The smartsuite package
can be found [here](http://sourceforge.net/projects/smartsuite/).
