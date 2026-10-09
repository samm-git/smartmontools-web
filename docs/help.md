# Smartmontools Help Page <a id="SmartmontoolsHelpPage"></a>


---

## Frequently asked questions (FAQ) <a id="FrequentlyaskedquestionsFAQ"></a>

If you have problems or need support, first look at the page with answers to 
[frequently asked questions](faq.md).

---

## Mailinglists <a id="Mailinglists"></a>

***Note:** On 2017-07-30 we started new mailing lists. We will need some time to setup searchable web archives for them.*

- [smartmontools-support](https://listi.jpberlin.de/mailman/listinfo/smartmontools-support) - *This is the support, discussion, bug report and suggestion mailing list for smartmontools*
- [smartmontools-database](https://listi.jpberlin.de/mailman/listinfo/smartmontools-database) - *List for contributions of info about drives that are not yet in smartmontools drive db*
- [smartmontools-announce](https://listi.jpberlin.de/mailman/listinfo/smartmontools-announce) - *Announcement mailing list for the smartmontools package*


If you don't find an answer in the FAQs, the next step is, to 
[search the (old) support mailing list archives](https://sourceforge.net/p/smartmontools/mailman/search/?q=&mail_list=smartmontools-support).

List of searchable archives on the internet:

| smartmontools-support (Old List!): | [SourceForge](https://sourceforge.net/p/smartmontools/mailman/smartmontools-support/) | - | [MARC](https://marc.info/?l=smartmontools-support) | [Narkive](https://smartmontools-support.narkive.com/) |
| --- | --- | --- | --- | --- |
| smartmontools-database (Old List!): | [SourceForge](https://sourceforge.net/p/smartmontools/mailman/smartmontools-database/) | [Mail-Archive](https://www.mail-archive.com/smartmontools-database@lists.sourceforge.net/) | [MARC](https://marc.info/?l=smartmontools-database) | [Narkive](https://smartmontools-database.narkive.com/) |


If you don't find an answer to your question in the archives, then please send an email to the 
[smartmontools-support mailing list](https://listi.jpberlin.de/mailman/listinfo/smartmontools-support). This is a moderated forum: you are not
required to subscribe to the list in order to post your question. You can ask all questions concerning the installation and use of smartmontools. 
Or perhaps [you want to become a developer](tocdeveloper.md), or [suggest some new extensions](https://www.smartmontools.org/newticket)?

---

## Serious Problem Reports <a id="SeriousProblemReports"></a>

If you are worried about your disks `Health` state, because `smartctl` gave 
critical warnings or reported strange attribute values:
Have a look at the [FAQ page](faq.md) and consult the 
[section on how to read smartctl reports](#Howtoreadsmartctlreports).

If the drive fails a self-test, but still has '`PASSED`' SMART health status, 
this usually means that there is a corrupted (uncorrectable=UNC) sector on the disk.
See [Bad block HOWTO](badblockhowto.md) for 
instructions about how to force this sector to reallocate.

---

## Howto read `smartctl` reports <a id="Howtoreadsmartctlreports"></a>

### Annotated Reports <a id="AnnotatedReports"></a>

  - [ATA-Disk](howto-readsmartctlreports-ata-542-1.md) (`smartctl 5.42`)
  - [ATA-Disk](howto-readsmartctlreports-ata.md) (`smartctl 5.39`)

### Example Output <a id="ExampleOutput"></a>

  - [ATA HDD (Hitachi) thru AHCI controller](examples-hts547550a9e384.md) (`smartctl 6.5`)
  - [SSD (Intel) thru AHCI controller](examples-ssdsc2bb120g4.md) (`smartctl 6.5`)
  - [SAS HDD (Hitachi) thru MegaRAID SAS 1078 controller](examples-hus154545vls300.md) (`smartctl 6.5`)
  - [SAS HDD (HP) thru HP Smart Array controller](examples-eg0146fawhu.md) (`smartctl 5.43`)

#### Faulty Disks <a id="FaultyDisks"></a>

  - [SSD (Toshiba) - self test detected read failure ](examples-thnsnj256gvnu.md) (`smartctl 6.5`)

---

## Distribution-specific bug reports <a id="Distribution-specificbugreports"></a>

The smartmontools package supports a number of different operating
systems. Some of those operating systems are also distributed by
multiple sources, and some of these maintain a database of bug
reports.  Here are links:

 - [Debian Linux bug database](http://bugs.debian.org/cgi-bin/pkgreport.cgi?which=pkg&data=smartmontools&archive=no)
 - [Redhat/Fedora Linux bugzilla database](https://bugzilla.redhat.com/buglist.cgi?field0-0-0=short_desc&type0-0-1=anywords&field0-0-1=status_whiteboard&value0-0-2=smartmontools+smartsuite&classification=Red+Hat&classification=Fedora&query_format=advanced&field0-0-2=component&value0-0-1=smartctl+smartd+smartmontools+smartsuite&type0-0-0=anywords&value0-0-0=smartctl+smartd+smartmontools+smartsuite&type0-0-2=anywordssubstr)
 - [Gentoo Linux bugzilla database](http://bugs.gentoo.org/buglist.cgi?query_format=advanced&short_desc_type=allwordssubstr&short_desc=&long_desc_type=allwordssubstr&long_desc=&bug_file_loc_type=allwordssubstr&bug_file_loc=&status_whiteboard_type=allwordssubstr&status_whiteboard=&keywords_type=allwords&keywords=&emailtype1=substring&email1=&emailtype2=substring&email2=&bugidtype=include&bug_id=&votes=&chfieldfrom=&chfieldto=Now&chfieldvalue=&cmdtype=doit&order=Reuse+same+sort+as+last+time&field0-0-0=product&type0-0-0=substring&value0-0-0=smartmontools&field0-0-1=component&type0-0-1=substring&value0-0-1=smartmontools&field0-0-2=short_desc&type0-0-2=anywords&value0-0-2=smartctl+smartd+smartmontools&field0-0-3=status_whiteboard&type0-0-3=anywords&value0-0-3=smartctl+smartd+smartmontools)
 - [Ubuntu Linux bug database](https://bugs.launchpad.net/ubuntu/+source/smartmontools/)
 - [FreeBSD bugzilla database](https://bugs.freebsd.org/bugzilla/buglist.cgi?order=resolution,bug_id%20DESC&query_based_on=&query_format=advanced&short_desc=smartctl%20smartd%20smartmontools&short_desc_type=anywords)
 - [NetBSD bug database](https://www.netbsd.org/cgi-bin/query-pr-list.pl?text=smartctl%7Csmartd%7Csmartmontools&state=open&state=analyzed&state=feedback&state=suspended)
 - [MacPorts bug database](https://trac.macports.org/query?port=smartmontools&col=id&col=summary&col=status&col=owner&col=type&col=priority&desc=1&order=status)

If you can provide additional distribution or OS-specific bug-database links, please send an email to [smartmontools-support mailing list](https://lists.sourceforge.net/mailman/listinfo/smartmontools-support).

---

## No access to Sourceforge services? <a id="NoaccesstoSourceforgeservices"></a>

Our project offers [File Download](https://sourceforge.net/projects/smartmontools/files/?source=navbar) and [SVN](https://sourceforge.net/p/smartmontools/code/HEAD/tree/) which are hosted in [our project at SourceForge](https://sourceforge.net/projects/smartmontools/).
[SourceForge](https://sourceforge.net/) is a free service, which supports a very large number of users and projects. Please check [SF.net Operations](https://twitter.com/sfnet_ops) to see the maintenance schedule and to learn if SourceForge is experiencing unscheduled system outages or other problems.

For download purposes you can also use the SVN mirror and the [daily builds](https://builds.smartmontools.org/) on our own internet servers.

---

## Problems with Trac registration? <a id="ProblemswithTracregistration"></a>

In case of problems with your Trac registration write to the [smartmontools team list](https://listi.jpberlin.de/mailman/listinfo/smartmontools-devel). This is a private list. Postings from non-member addresses are held in moderation queue and need manual approvement to go to the list. So you have to take a delay into account until your mail reaches the smartmontools team members.
---

**License**  

All content in this wiki is published under [GNU GPL](https://www.gnu.org/licenses/gpl-2.0.html#SEC1) if not otherwise explicitly declared in context of a contributed section or page.
