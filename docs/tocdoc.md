# Smartmontools Documentation <a id="SmartmontoolsDocumentation"></a>


---

In this section we provide documentation upon basic and general understanding
of smartmontools. Have a look on the [FAQ Page](faq.md) too,
where you find information concerning more specific issues.

## Manpages <a id="Manpages"></a>
If you are having trouble understanding the output of smartctl
or smartd, please first read the manual pages installed on your
system:

```
  man 8 smartctl
  man 8 smartd
  man 8 update-smart-drivedb
  man 5 smartd.conf
```

Here are on-line versions of the smartmontools man pages:

[smartctl manual page](https://github.com/smartmontools/smartmontools/blob/main/src/smartctl.8.in)  

[smartd manual page](https://github.com/smartmontools/smartmontools/blob/main/src/smartd.8.in)  

[update-smart-drivedb manual page](https://github.com/smartmontools/smartmontools/blob/main/src/update-smart-drivedb.8.in)  

[smartd.conf manual page](https://github.com/smartmontools/smartmontools/blob/main/src/smartd.conf.5.in)

Note that these are the manual pages for the *current version* 
of smartmontools in the developers Git repository; they might not
correspond to the (possibly older) version of smartmontools installed
on **your** system.  So the manual pages installed on your system
should be regarded as definitive for your installation.

---

## Tutorials <a id="Tutorials"></a>

[Bad block HOWTO for smartmontools](badblockhowto.md)

[Monitoring Hard Drive Health on Linux with smartmontools ("Random Bits", Jan 2009)](https://blog.shadypixel.com/monitoring-hard-drive-health-on-linux-with-smartmontools/)  
Step by step for beginners. Clear instruction with very nice layout :-)

[Monitoring Hard Disks with SMART (Linux Journal, Jan 2004)](https://www.linuxjournal.com/article/6983)

[Vorbeugen statt Crash (Deutsch)](https://www.linux-community.de/ausgaben/linuxuser/2004/10/die-zuverlaessigkeit-von-festplatten-ueberwachen-mit-smartmontools/) from <https://www.linux-community.de/magazine/linuxuser/2004/10/>

[Crash Prevention (English version of above)](https://web.archive.org/web/20060603181315/http://www.linux-magazine.com/issue/49/Monitoring_Hard_Disks_with_smartmontools.pdf) from [Linux Magazine Dec 2004](http://www.linux-magazine.com/)

---

## Case Studies <a id="CaseStudies"></a>

- [smartctl Example Reports](help.md#Howtoreadsmartctlreports)
- [Graphical Monitoring with Munin: Agony of a dying disk](https://www.dipohl.de/blog/no-sudden-death-of-disk) (plus buggy disk firmware)
---

## SMART Testing <a id="SMARTTesting"></a>
*- Types of tests*

Offline test (Data collection)  

[Short Selftest](selftest-short.md)  

Long Selftest  

Conveyance Selftest (ATA only)  

Selective Selftest (ATA only)

*- Handling and configuration*

Automate selftests with smartd  

[Special options for powermanagement](powermode.md)

---

## SMART Attributes <a id="SMARTAttributes"></a>

If you find strange output, or unknown attributes, please look in the below listed pages with vendor specific info.  

When you don't find an answer to your question there, send an email to [smartmontools-support](https://listi.jpberlin.de/mailman/listinfo/smartmontools-support) and we'll help you try and figure it out.

### RAW Values <a id="RAWValues"></a>

*Different vendors, different interpretation..*
The RAW values of SMART attributes (temperature, power-on lifetime, and so on) are stored in vendor-specific structures. 
Sometime these are strange. Hitachi disks (at least some of them) store power-on lifetime in minutes, rather than hours. 
IBM disks (at least some of them) have three temperatures stored in the raw structure, not just one. And so on.  


Bruce Allen said on [smartmontools-support list](https://sourceforge.net/p/smartmontools/mailman/message/10782139/) (2007-08-31): *The raw values for certain Attributes have vendor-specific meanings and are hard to interpret unless you know exactly how the vendor uses them on that specific disk model. The bit pattern might be a mix of flags, counters, and bitmasks, for example, leading to large and strange numbers. I wouldn't worry about the raw values very much. The normalized values (VALUE/WORST/THRESH) should have a sensible interpretation.*

Nevertheless smartmontools have a new EXPERIMENTAL feature to log *Attributes Raw Data*
in external files. See option [--attributelog](https://github.com/smartmontools/smartmontools/blob/main/smartmontools/smartd.8.in#lbAE)
in smartd manpage and read the [authors instructions](attributelog.md).

Franc Zabkar has a special interest in deciphering raw values. Read [some of his elaborated postings](raw-values.md) on smartmontools-support mailing list.

### External Information Resources <a id="ExternalInformationResources"></a>

[Links to vendor spec files for SMART attributes](attributes-vendordocs.md)

Further collections see [Links](links.md) page.

## Warnings <a id="Warnings"></a>

Warnings

---
**License**  

All content in this wiki is published under [GNU GPL](https://www.gnu.org/licenses/gpl-2.0.html#SEC1).
