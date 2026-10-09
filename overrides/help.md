# Smartmontools Help Page <a id="SmartmontoolsHelpPage"></a>


---

## Frequently asked questions (FAQ) <a id="FrequentlyaskedquestionsFAQ"></a>

If you have problems or need support, first look at the page with answers to 
[frequently asked questions](faq.md).

---

## Mailing lists <a id="Mailinglists"></a>

- [smartmontools-support](https://listi.jpberlin.de/mailman/listinfo/smartmontools-support) — support, discussion and bug reports
- [smartmontools-database](https://listi.jpberlin.de/mailman/listinfo/smartmontools-database) — contributions of drive information not yet in the drive database
- [smartmontools-announce](https://listi.jpberlin.de/mailman/listinfo/smartmontools-announce) — release and project announcements

If you don't find an answer in the FAQ, the next step is to
[search the mailing list archives](https://listi.jpberlin.de/pipermail/).


If you don't find an answer to your question in the archives, then please send an email to the 
[smartmontools-support mailing list](https://listi.jpberlin.de/mailman/listinfo/smartmontools-support). This is a moderated forum: you are not
required to subscribe to the list in order to post your question. You can ask all questions concerning the installation and use of smartmontools. 
Or perhaps [you want to become a developer](tocdeveloper.md), or [suggest some new extensions](https://github.com/smartmontools/smartmontools/issues).

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

If you can provide additional distribution or OS-specific bug-database links, please send an email to the [smartmontools-support mailing list](https://listi.jpberlin.de/mailman/listinfo/smartmontools-support).

---

**License**

This website content is published under the [GNU GPL](https://www.gnu.org/licenses/gpl-2.0.html#SEC1) if not otherwise explicitly declared in the context of a contributed section or page.

