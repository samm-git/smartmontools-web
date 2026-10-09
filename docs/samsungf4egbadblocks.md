# Using smartctl with Samsung F4 EcoGreen drives may result in data loss <a id="UsingsmartctlwithSamsungF4EcoGreendrivesmayresultindataloss"></a>
---
## Summary <a id="Summary"></a>

 - **WARNING: Do not use smartmontools with Samsung HD155UI and HD204UI drives unless the firmware patch is already installed.**

 - **Samsung provides separate patches for [HD155UI and HD204UI](http://knowledge.seagate.com/articles/en_US/FAQ/223571en) and for [HD204UI/JP](http://knowledge.seagate.com/articles/en_US/FAQ/223451en).**

 - **This warning also applies to other tools which use IDENTIFY DEVICE to obtain drive information.** The problem is not SMART related.

 - **The problem could (at least) also be reproduced with [hdparm](http://sourceforge.net/projects/hdparm/) (on Linux and [Windows](http://hdparm-win32.dyndns.org/)) and with *SeaTools for Windows*.**

 - **THE SAMSUNG FIRMWARE PATCH DOES NOT CHANGE THE FIRMWARE VERSION NUMBER (Believe it or not!).**

 - **Update:** According to Samsung Support, HD204UI drives manufactured December 2010 or later include the firmware patch (see [smartmontools-support mailing list](http://sourceforge.net/mailarchive/forum.php?thread_name=34E79188-3354-4FB4-A2C2-18220DD6381C%40gmail.com&forum_name=smartmontools-support)).

 - **Update:** Samsung HDD support info is now included in the [Seagate Knowledge Base](http://knowledge.seagate.com/).

 - Smartctl 5.39.X and 5.40 print a [warning](https://github.com/smartmontools/smartmontools/blob/ece573132e52fd64e05c84556ffea66fbc2b342e/smartmontools/drivedb.h#L516) if the user has done a [drive database update](download.md#Updatethedrivedatabase) after 2010-11-24.

 - The warning will also be printed when the patch is already installed!

---
## History <a id="History"></a>

2010-11-24: We received a problem report from German c't magazine. Here are the details as reported by c't and
[on our mailing list](http://sourceforge.net/mailarchive/forum.php?thread_name=201011251136.03927.michael%40trunner.de&forum_name=smartmontools-support)
(updated 2010-11-30):

 - Affected disk: SAMSUNG SpinPoint F4 EcoGreen 2TB

`Device Model: SAMSUNG HD204UI`  

`Firmware Version: 1AQ10001`

 - Problem: If the system writes to this disk and `smartctl -a` (5.40) is used at the same time, write errors are reported and bad blocks appear on the disk.

This was reported by a reader and could be reproduced in c't magazine lab on the following system:

Windows 7 x64 Ultimate  

Core i3-560  

Intel H55 chipset  

SATA-AHCI-Driver: Intel Rapid Storage Technology (RST) 9.6

 - It could also be reproduced under Linux (Fedora 14) if AHCI is enabled and the following commands are run in parallel:
```
# badblocks -svw -b 4096 /dev/sdd 4000000 <a id="badblocks-svw-b4096devsdd4000000"></a>
# smartctl -a /dev/sdd <a id="smartctl-adevsdd"></a>
```

 - It could **not** be reproduced if the Intel H55 chipset is set to IDE mode.

 - It could also be reproduced on another system with an AMD chipset under Windows and drivers `msahci.sys` or `amdsata.sys`.

 - It could **not** be reproduced on the same AMD system and `amdsata.sys` driver with the following other disks:

`SAMSUNG HD322GJ (F4)`  

`SAMSUNG HD103SJ (F3)`  

`SAMSUNG HD153WI (F3 EcoGreen)`  

`SAMSUNG HD642JJ (F1)`  

`SAMSUNG SP2504C (P120)`  

`WDC WD6400AAKS`  

`WDC WD10EADS`

 - It could also be reproduced on an system with Intel P45 chipset.

 - It could also be reproduced on an AMD based system with NVIDIA nForce 520 chipset.

 - It could also be reproduced if only `smartctl -i` is used. This command sends only one ATA command to the disk: IDENTIFY DEVICE. No SMART functionality is used then.

 - It could also be reproduced with `hdparm -I` on Linux.

 - It could also be reproduced with Seagate *SeaTools for Windows*.

---

2010-11-24: Drive database file for smartmontools [5.39.X](https://github.com/smartmontools/smartmontools/commit/917993997c07f24c80024dbfa90f88acbdc68268) and [5.40](https://github.com/smartmontools/smartmontools/commit/f5d08b80567a446b11a00f8b2ca79511158f2d16) is updated. A warning is printed if such a drive is detected. Please note that it might be too late then because the IDENTIFY DEVICE command is the actual problem.

---

2010-11-26: The info is published on [heise online news](http://www.heise.de/newsticker/meldung/SMART-Tool-beschaedigt-Daten-auf-Samsung-Festplatte-Update-1143120.html) (German) (updated 2010-11-30, [2010-12-09](http://www.heise.de/newsticker/meldung/Firmware-Patch-fuer-Samsung-Festplatte-EcoGreen-F4-HD204UI-1150154.html)).

---

2010-11-30: We could reproduce the problem, see [below](#Howtoreproduce).

---

2010-12-02: Samsung confirmed the problem and provided a beta version of the firmware patch.

---

2010-12-09: Samsung released a [firmware patch for HD155UI and HD204UI](http://www.samsung.com/global/business/hdd/faqView.do?b2b_bbs_msg_id=386).

---

2010-12-13: Samsung released a [firmware patch for HD204UI/JP](http://www.samsung.com/global/business/hdd/faqView.do?b2b_bbs_msg_id=387).

---

## How to reproduce <a id="Howtoreproduce"></a>

Tested on an Intel based system with P35 chipset under Linux ([grml](http://grml.org/) 2010.04 Live CD) with NCQ and disk write cache enabled.

```
# uname -a <a id="uname-a"></a>
Linux grml.somewhere 2.6.33-grml #1 SMP PREEMPT Fri Apr 2 10:16:25 UTC 2010 i686 GNU/Linux

# smartctl -i -q noserial /dev/sda <a id="smartctl-i-qnoserialdevsda"></a>
smartctl 5.40 2010-10-16 r3189 [i686-pc-linux-gnu] (local build)
Copyright (C) 2002-10 by Bruce Allen, http://smartmontools.sourceforge.net

=== START OF INFORMATION SECTION ===
Device Model:     SAMSUNG HD204UI
Firmware Version: 1AQ10001
User Capacity:    2,000,398,934,016 bytes
...

# cat /sys/block/sda/device/queue_depth <a id="catsysblocksdadevicequeue_depth"></a>
31

# hdparm -W /dev/sda <a id="hdparm-Wdevsda"></a>
/dev/sda:
 write-caching =  1 (on)
```

First run one of these commands in another terminal window: 
```
# watch -n 1 smartctl -i /dev/sda <a id="watch-n1smartctl-idevsda"></a>
```
or:
```
# watch -n 1 hdparm -I /dev/sda <a id="watch-n1hdparm-Idevsda"></a>
```

With the above command running concurrently the problem can be reproduced as follows:
```
# dd if=/dev/zero of=/dev/sda count=1000000 <a id="ddifdevzeroofdevsdacount1000000"></a>
1000000+0 records in
1000000+0 records out
512000000 bytes (512 MB) copied, 12.7394 s, 40.2 MB/s

# badblocks -vw -b 512 -t 0x55 /dev/sda 1000000 <a id="badblocks-vw-b512-t0x55devsda1000000"></a>
Checking for bad blocks in read-write mode
From block 0 to 1000000
Testing with pattern 0x55: done                                
Reading and comparing: 36608
...
36671
107200
...
107263
169984
...
170047
245824
...
245887
321216
...
343615
606336
...
606399
875520
...
875583
done                                
Pass completed, 256 bad blocks found.

# od -A x -x -N 100000b /dev/sda <a id="od-Ax-x-N100000bdevsda"></a>
  000000 5555 5555 5555 5555 5555 5555 5555 5555
*
 1180000 0000 0000 0000 0000 0000 0000 0000 0000
*
 1188000 5555 5555 5555 5555 5555 5555 5555 5555
*
 a7c0000 0000 0000 0000 0000 0000 0000 0000 0000
*
 a7c8000 5555 5555 5555 5555 5555 5555 5555 5555
*
12810000 0000 0000 0000 0000 0000 0000 0000 0000
*
12818000 5555 5555 5555 5555 5555 5555 5555 5555
*
1ab80000 0000 0000 0000 0000 0000 0000 0000 0000
*
1ab88000 5555 5555 5555 5555 5555 5555 5555 5555
*
1e848000
```

The above suggests that the disk sometimes discards a pending 64 sector write command when a IDENTIFY DEVICE command is received. This data loss occurs silently. There is no error message in kernel log, SMART Error log, NCQ Command Error log page, or SATA Phy Event Counters log page.

Please note that the `badblocks` command reported "`256 bad blocks`" in the above test because the data read differs from the data written before. None of the tests resulted in actual bad (unreadable) blocks on the disk. Testing did not damage the disk itself. The problem is that new data already sent to the disk may not be written. Previously written data is not affected.

The problem could **not** be reproduced with the above test if any of the following conditions are met:

 - Disk write cache is disabled.

 - NCQ is disabled. This may not always be true as the c't lab also reported problems with NCQ disabled.

 - A modified test version of smartctl which does not issue IDENTIFY DEVICE commands is used. Then all other SMART and non-SMART commands used by smartctl work without any data loss.

 - The disk is replaced by another model (tested with Samsung HE103UJ and Seagate ST31000524NS).

2010-11-30, [Christian Franke](mailto:chrfranke@users.sourceforge.net).

---
 - The problem could no longer be reproduced after the firmware patch was installed.

 - The patch did **not** change the firmware version number reported by IDENTIFY DEVICE:
```
# smartctl -i -q noserial /dev/sda <a id="smartctl-i-qnoserialdevsda-1"></a>
smartctl 5.40 2010-10-16 r3189 [i686-pc-linux-gnu] (local build)
Copyright (C) 2002-10 by Bruce Allen, http://smartmontools.sourceforge.net

=== START OF INFORMATION SECTION ===
Device Model:     SAMSUNG HD204UI
Firmware Version: 1AQ10001
User Capacity:    2,000,398,934,016 bytes
...
```

2010-12-09, [Christian Franke](mailto:chrfranke@users.sourceforge.net).

---
## Related Links <a id="RelatedLinks"></a>

[Samsung HD204UI 2TB Error (D-Link Forum)](http://forums.dlink.com/index.php?topic=15596.0)  

[Strange badblocks / possible firmware bug on Samsung F4 (Gentoo Forum)](http://forums.gentoo.org/viewtopic-t-847350.html)  

[New drive badblocks (Hard|Forum)](http://hardforum.com/showthread.php?t=1551753)  
 
[Samsung 2TB green drives defective firmware? (Hard|Forum)](http://hardforum.com/showthread.php?t=1566067)  

[Potential Samsung F4 issues (Lime Technology Forum)](http://lime-technology.com/forum/index.php?topic=9339.0)  
 
[Final Word on the Samsung HD204UI (Lime Technology Forum)](http://lime-technology.com/forum/index.php?topic=8012.60)  

[WARNING: Samsung F4 owners / warning. Disable smartmontools (MythTV Mailing List)](http://mythtv.org/pipermail/mythtv-users/2010-December/304427.html)  

[Samsung Spinpoint F4EG HD204UI 2TB compatibility? (Synology Forum)](http://forum.synology.com/enu/viewtopic.php?f=26&t=27905&start=90)  

[Data loss with Samsung 204UI and Smartmontools (Synology Forum)](http://forum.synology.com/enu/viewtopic.php?f=26&t=30838)  


[SMART-Tool beschädigt Daten auf Samsung-Festplatte (Heise Online News, German)](http://www.heise.de/newsticker/meldung/SMART-Tool-beschaedigt-Daten-auf-Samsung-Festplatte-Update-1143120.html)  

[Firmware-Patch für Samsung-Festplatte EcoGreen F4 HD204UI (Heise Online News, German)](http://www.heise.de/newsticker/meldung/Firmware-Patch-fuer-Samsung-Festplatte-EcoGreen-F4-HD204UI-Update-1150154.html)  


---

If you have additional info, please report it to the [smartmontools-support mailing list](mailto:smartmontools-support@lists.sourceforge.net).
