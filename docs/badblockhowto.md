# Bad block HOWTO for smartmontools <a id="BadblockHOWTOforsmartmontools"></a>

This article describes what actions might be taken when smartmontools detects a bad block on a disk. It demonstrates how to identify the file associated with an unreadable disk sector, and how to force that sector to reallocate. 

Registered users may add their recipes to solve *Bad Block Issues* here. Please create a new section with an own header for your addition then.
You may also update, improve or correct existing recipes. In both cases you should add a sentence to the [Changelog](#Changelog) section below in this article
For quality assurance we will review the changes from time to time. Here the link to the [last reviewed version of this article](https://www.smartmontools.org/wiki/BadBlockHowto?version=26).


## Introduction <a id="Introduction"></a>

Handling bad blocks is a difficult problem as it often involves decisions about losing information. Modern storage devices tend to handle the simple cases automatically, for example by writing a disk sector that was read with difficulty to another area on the media. Even though such a remapping can be done by a disk drive transparently, there is still a lingering worry about media deterioration and the disk running out of spare sectors to remap.

Can smartmontools help? As the SMART <sup>[[1]](#footnote1)</sup> acronym suggests, the `smartctl` command and the `smartd` daemon concentrate on monitoring and analysis. So apart from changing some reporting settings, smartmontools will not modify the raw data in a device. Also smartmontools only works with physical devices, it does not know about partitions and file systems. So other tools are needed. The job of smartmontools is to alert the user that something is wrong and user intervention may be required.

When a bad block is reported one approach is to work out the mapping between the logical block address used by a storage device and a file or some other component of a file system using that device. Note that there may not be such a mapping reflecting that a bad block has been found at a location not currently used by the file system. A user may want to do this analysis to localize and minimize the number of replacement files that are retrieved from some backup store. This approach requires knowledge of the file system involved and this document uses the Linux ext2/ext3 and ReiserFS file systems for examples. Also the type of content may come into play. For example if an area storing video has a corrupted sector, it may be easiest to accept that a frame or two might be corrupted and instruct the disk not to retry as that may have the visual effect of causing a momentary blank into a 1 second pause (while the disk retries the faulty sector, often accompanied by a telltale clicking sound).

Another approach is to ignore the upper level consequences (e.g. corrupting a file or worse damage to a file system) and use the facilities offered by a storage device to repair the damage. The SCSI disk command set is used elaborate on this low level approach.

## Repairs in a file system <a id="Repairsinafilesystem"></a>

This section contains examples of what to do at the file system level when smartmontools reports a bad block. These examples assume the Linux operating system and either the ext2/ext3 or ReiserFS file system. The various Linux commands shown have man pages and the reader is encouraged to examine these. Of note is the `dd` command which is often used in repair work <sup>[[2]](#footnote2)</sup> and has a unique command line syntax.

The authors would like to thank Sergey Vlasov, Theodore Ts'o, Michael Bendzick, and others for explaining this approach. The authors would like to add text showing how to do this for other file systems, in particular XFS and JFS: please edit if you can provide this information. (Try `xfs_db` , `jfs_debugfs`, `btrfs logical-resolve`, and `ntfscluster`.) 

### ext2/ext3 first example <a id="ext2ext3firstexample"></a>

In this example, the disk is failing self-tests at Logical Block Address `LBA = 0x016561e9 = 23421417`. The LBA counts sectors in units of 512 bytes, and starts at zero.

```
root]# smartctl -l selftest /dev/hda:
SMART Self-test log structure revision number 1
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Extended offline    Completed: read failure       90%       217         0x016561e9 <a id="1ExtendedofflineCompleted:readfailure902170x016561e9"></a>
```

Note that other signs that there is a bad sector on the disk can be found in the non-zero value of the `Current_Pending_Sector` count:

```
root]# smartctl -A /dev/hda
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  5 Reallocated_Sector_Ct   0x0033   100   100   005    Pre-fail  Always       -       0
196 Reallocated_Event_Count 0x0032   100   100   000    Old_age   Always       -       0
197 Current_Pending_Sector  0x0022   100   100   000    Old_age   Always       -       1
198 Offline_Uncorrectable   0x0008   100   100   000    Old_age   Offline      -       1
```

**First Step**: We need to locate the partition on which this sector of the disk lives:

```
root]# fdisk -lu /dev/hda
Disk /dev/hda: 123.5 GB, 123522416640 bytes
255 heads, 63 sectors/track, 15017 cylinders, total 241254720 sectors
Units = sectors of 1 * 512 = 512 bytes
   Device Boot    Start       End    Blocks   Id  System
/dev/hda1   *        63   4209029   2104483+  83  Linux
/dev/hda2       4209030   5269319    530145   82  Linux swap
/dev/hda3       5269320 238227884 116479282+  83  Linux
/dev/hda4     238227885 241248104   1510110   83  Linux
```

The partition `/dev/hda3` starts at `LBA 5269320` and extends past the *problem* LBA. The *problem* LBA is offset `23421417 - 5269320` = `18152097` sectors into the partition `/dev/hda3`.

To verify the type of the file system and the mount point, look in `/etc/fstab`:

```
root]# grep hda3 /etc/fstab
/dev/hda3 /data ext2 defaults 1 2
```

You can see that this is an `ext2` file system, mounted at `/data`.

**Second Step:** we need to find the block size of the file system (normally 4096 bytes for `ext2`):

```
root]# tune2fs -l /dev/hda3 | grep Block
Block count:              29119820
Block size:               4096
```

In this case the block size is 4096 bytes.

**Third Step**: we need to determine which File System Block contains this LBA. The formula is:

```
  b = (int)((L-S)*512/B)
where:
b = File System block number
B = File system block size in bytes
L = LBA of bad sector
S = Starting sector of partition as shown by fdisk -lu
and (int) denotes the integer part.
```

''NOTE: If you are hosting your ext filesystem in a LUKS-encrypted container, the "(L-S)" part of the formula becomes "(L-S-32768)".
LUKS reserves 16MB at the beginning of the partition, so the actual location where your filesystem starts is 32768 sectors **after** the partition starts.''

In our example, `L=23421417`, `S=5269320`, and `B=4096`. Hence the *problem* LBA is in block number

```
   b = (int)18152097*512/4096 = (int)2269012.125
so b=2269012.
```

Note: the fractional part of `0.125` indicates that this problem LBA is actually the second of the eight sectors that make up this file system block.

**Fourth Step:** we use `debugfs` to locate the inode stored in this block, and the file that contains that inode:

```
root]# debugfs
debugfs 1.32 (09-Nov-2002)
debugfs:  open /dev/hda3
debugfs:  testb 2269012
Block 2269012 not in use
```

If the block is not in use, as in the above example, then you can skip the rest of this step and go ahead to Step Five.

If, on the other hand, the block is in use, we want to identify the file that uses it:

```
debugfs:  testb 2269012
Block 2269012 marked in use
debugfs:  icheck 2269012
Block   Inode number
2269012 41032
debugfs:  ncheck 41032
Inode   Pathname
41032   /S1/R/H/714197568-714203359/H-R-714202192-16.gwf
```

In this example, you can see that the problematic file (with the mount point included in the path) is: `/data/S1/R/H/714197568-714203359/H-R-714202192-16.gwf`

When we are working with an `ext3` file system, it may happen that the affected file is the journal itself. Generally, if this is the case, the inode number will be very small. In any case, `debugfs` will not be able to get the file name:

```
debugfs:  testb 2269012
Block 2269012 marked in use
debugfs:  icheck 2269012
Block   Inode number
2269012 8
debugfs:  ncheck 8
Inode   Pathname
debugfs:
```

To get around this situation, we can remove the journal altogether:

```
tune2fs -O ^has_journal /dev/hda3
```

and then start again with Step Four: we should see this time that the wrong block is not in use any more. If we removed the journal file, at the end of the whole procedure we should remember to rebuild it:

```
tune2fs -j /dev/hda3
```

**Fifth Step** NOTE: **This last step will permanently and irretrievably destroy the contents of the file system block that is damaged**: if the block was allocated to a file, some of the data that is in this file is going to be overwritten with zeros. You will not be able to recover that data unless you can replace the file with a fresh or correct version.

To force the disk to reallocate this bad block we'll write zeros to the bad block, and sync the disk:

```
root]# dd if=/dev/zero of=/dev/hda3 bs=4096 count=1 seek=2269012
root]# sync
```

On some occasions using `dd` may not result in the sector being reallocated, with an error along the following lines:

```
May 24 14:19:30 ht-xm-2 kernel: ata1.00: exception Emask 0x0 SAct 0x8000000 SErr 0x0 action 0x0
May 24 14:19:30 ht-xm-2 kernel: ata1.00: irq_stat 0x40000008                                  
May 24 14:19:30 ht-xm-2 kernel: ata1.00: failed command: READ FPDMA QUEUED                    
May 24 14:19:30 ht-xm-2 kernel: ata1.00: cmd 60/08:d8:08:16:00/00:00:01:00:00/40 tag 27 ncq dma 4096 in
     res 41/40:08:0a:16:00/00:00:01:00:00/00 Emask 0x409 (media error) <F>                                                                                                            
May 24 14:19:30 ht-xm-2 kernel: ata1.00: status: { DRDY ERR }                                 
May 24 14:19:30 ht-xm-2 kernel: ata1.00: error: { UNC }                                       
May 24 14:19:30 ht-xm-2 kernel: ata1.00: configured for UDMA/133                              
May 24 14:19:30 ht-xm-2 kernel: sd 0:0:0:0: [sda] tag#27 FAILED Result: hostbyte=DID_OK driverbyte=DRIVER_SENSE
May 24 14:19:30 ht-xm-2 kernel: sd 0:0:0:0: [sda] tag#27 Sense Key : Medium Error [current]   
May 24 14:19:30 ht-xm-2 kernel: sd 0:0:0:0: [sda] tag#27 Add. Sense: Unrecovered read error - auto reallocate failed
May 24 14:19:30 ht-xm-2 kernel: sd 0:0:0:0: [sda] tag#27 CDB: Read(16) 88 00 00 00 00 00 01 00 16 08 00 00 00 08 00 00
May 24 14:19:30 ht-xm-2 kernel: blk_update_request: I/O error, dev sda, sector 16782858       
May 24 14:19:30 ht-xm-2 kernel: Buffer I/O error on dev sda, logical block 2097857, async page read
May 24 14:19:30 ht-xm-2 kernel: ata1: EH complete
```

In this case you may have better success using the `hdparm` tool.  First confirm the read error on the sector, which would look like this for the above error:

```
# hdparm --read-sector 16782858 /dev/sda <a id="hdparm--read-sector16782858devsda"></a>
```

And when you've confirmed the sector is indeed unreadable, use `hdparm` to write to that sector:

```
# hdparm --write-sector 16782858 /dev/sda <a id="hdparm--write-sector16782858devsda"></a>
```

Now everything is back to normal: the sector has been reallocated. Compare the output just below to similar output near the top of this article:

```
root]# smartctl -A /dev/hda
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  5 Reallocated_Sector_Ct   0x0033   100   100   005    Pre-fail  Always       -       1
196 Reallocated_Event_Count 0x0032   100   100   000    Old_age   Always       -       1
197 Current_Pending_Sector  0x0022   100   100   000    Old_age   Always       -       0
198 Offline_Uncorrectable   0x0008   100   100   000    Old_age   Offline      -       1
```

Note: for some disks it may be necessary to update the SMART Attribute values by using `smartctl -t offline /dev/hda`

We have corrected the first errored block. If more than one blocks were errored, we should repeat all the steps for the subsequent ones. After we do that, the disk will pass its self-tests again:

```
root]# smartctl -t long /dev/hda  [wait until test completes, then]
root]# smartctl -l selftest /dev/hda
SMART Self-test log structure revision number 1
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Extended offline    Completed without error       00%       239         - <a id="1ExtendedofflineCompletedwithouterror00239-"></a>
# 2  Extended offline    Completed: read failure       90%       217         0x016561e9 <a id="2ExtendedofflineCompleted:readfailure902170x016561e9"></a>
# 3  Extended offline    Completed: read failure       90%       212         0x016561e9 <a id="3ExtendedofflineCompleted:readfailure902120x016561e9"></a>
# 4  Extended offline    Completed: read failure       90%       181         0x016561e9 <a id="4ExtendedofflineCompleted:readfailure901810x016561e9"></a>
# 5  Extended offline    Completed without error       00%        14         - <a id="5ExtendedofflineCompletedwithouterror0014-"></a>
# 6  Extended offline    Completed without error       00%         4         - <a id="6ExtendedofflineCompletedwithouterror004-"></a>
```

and no longer shows any offline uncorrectable sectors:

```
root]# smartctl -A /dev/hda
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  5 Reallocated_Sector_Ct   0x0033   100   100   005    Pre-fail  Always       -       1
196 Reallocated_Event_Count 0x0032   100   100   000    Old_age   Always       -       1
197 Current_Pending_Sector  0x0022   100   100   000    Old_age   Always       -       0
198 Offline_Uncorrectable   0x0008   100   100   000    Old_age   Offline      -       0
```

### ext2/ext3 second example <a id="ext2ext3secondexample"></a>

On this drive, the first sign of trouble was this email from `smartd`:

```
    To: ballen
    Subject: SMART error (selftest) detected on host: medusa-slave166.medusa.phys.uwm.edu
    This email was generated by the smartd daemon running on host:
    medusa-slave166.medusa.phys.uwm.edu in the domain: master001-nis
    The following warning/error was logged by the smartd daemon:
    Device: /dev/hda, Self-Test Log error count increased from 0 to 1
```

Running `smartctl -a /dev/hda` confirmed the problem:

```
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Extended offline    Completed: read failure       80%       682         0x021d9f44 <a id="1ExtendedofflineCompleted:readfailure806820x021d9f44"></a>
Note that the failing LBA reported is 0x021d9f44 (base 16) = 35495748 (base 10)
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  5 Reallocated_Sector_Ct   0x0033   100   100   005    Pre-fail  Always       -       0
196 Reallocated_Event_Count 0x0032   100   100   000    Old_age   Always       -       0
197 Current_Pending_Sector  0x0022   100   100   000    Old_age   Always       -       3
198 Offline_Uncorrectable   0x0008   100   100   000    Old_age   Offline      -       3
```

and one can see above that there are 3 sectors on the list of pending sectors that the disk can't read but would like to reallocate.

The device also shows errors in the SMART error log:

```
Error 212 occurred at disk power-on lifetime: 690 hours
  After command completion occurred, registers were:
  ER ST SC SN CL CH DH
  -- -- -- -- -- -- --
  40 51 12 46 9f 1d e2  Error: UNC 18 sectors at LBA = 0x021d9f46 = 35495750
  Commands leading to the command that caused the error were:
  CR FR SC SN CL CH DH DC   Timestamp  Command/Feature_Name
  -- -- -- -- -- -- -- --   ---------  --------------------
  25 00 12 46 9f 1d e0 00 2485545.000  READ DMA EXT
```

Signs of trouble at this LBA may also be found in `SYSLOG`:

```
[root]# grep LBA /var/log/messages | awk '{print $12}' | sort | uniq
 LBAsect=35495748
 LBAsect=35495750
```

So I decide to do a quick check to see how many bad sectors there really are. Using the `bash` shell I check 70 sectors around the trouble area:

```
[root]# export i=35495730
[root]# while [ $i -lt 35495800 ]
        > do echo $i
        > dd if=/dev/hda of=/dev/null bs=512 count=1 skip=$i
        > let i+=1
        > done
<SNIP>
35495734
1+0 records in
1+0 records out
35495735
dd: reading `/dev/hda': Input/output error
0+0 records in
0+0 records out
<SNIP>
35495751
dd: reading `/dev/hda': Input/output error
0+0 records in
0+0 records out
35495752
1+0 records in
1+0 records out
<SNIP>
```

which shows that the seventeen sectors `35495735-35495751` (inclusive) are not readable.

Next, we identify the files at those locations. The partitioning information on this disk is identical to the first example above, and as in that case the problem sectors are on the third partition `/dev/hda3`. So we have:

```
     L=35495735 to 35495751
     S=5269320
     B=4096
```

so that `b=3778301` to `3778303` are the three bad blocks in the file system.

```
[root]# debugfs
debugfs 1.32 (09-Nov-2002)
debugfs:  open /dev/hda3
debugfs:  icheck 3778301
Block   Inode number
3778301 45192
debugfs:  icheck 3778302
Block   Inode number
3778302 45192
debugfs:  icheck 3778303
Block   Inode number
3778303 45192
debugfs:  ncheck 45192
Inode   Pathname
45192   /S1/R/H/714979488-714985279/H-R-714979984-16.gwf
debugfs:  quit
```

Note that the first few steps of this procedure could also be done with a single command, which is very helpful if there are many bad blocks (thanks to Danie Marais for pointing this out):

```
debugfs: icheck 3778301 3778302 3778303
```

And finally, just to confirm that this is really the damaged file:

```
[root]# md5sum /data/S1/R/H/714979488-714985279/H-R-714979984-16.gwf
md5sum: /data/S1/R/H/714979488-714985279/H-R-714979984-16.gwf: Input/output error
```

Finally we force the disk to reallocate the three bad blocks:

```
[root]# dd if=/dev/zero of=/dev/hda3 bs=4096 count=3 seek=3778301
[root]# sync
```

We could also probably use:

```
[root]# dd if=/dev/zero of=/dev/hda bs=512 count=17 seek=35495735
```

If using `dd` doesn't result in a reallocation, you may have better luck using `hdparm` as documented in the first example on this page.

At this point we now have:

```
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  5 Reallocated_Sector_Ct   0x0033   100   100   005    Pre-fail  Always       -       0
196 Reallocated_Event_Count 0x0032   100   100   000    Old_age   Always       -       0
197 Current_Pending_Sector  0x0022   100   100   000    Old_age   Always       -       0
198 Offline_Uncorrectable   0x0008   100   100   000    Old_age   Offline      -       0
```

which is encouraging, since the pending sectors count is now zero. Note that the drive reallocation count has not yet increased: the drive may now have confidence in these sectors and have decided not to reallocate them..

A device self test:

```
  [root#] smartctl -t long /dev/hda
(then wait about an hour) shows no unreadable sectors or errors:
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Extended offline    Completed without error       00%       692         - <a id="1ExtendedofflineCompletedwithouterror00692-"></a>
# 2  Extended offline    Completed: read failure       80%       682         0x021d9f44 <a id="2ExtendedofflineCompleted:readfailure806820x021d9f44"></a>
```

### Unassigned sectors <a id="Unassignedsectors"></a>

This section was written by Kay Diederichs. Even though this section assumes Linux and the ext2/ext3 file system, the strategy should be more generally applicable.

I read your badblocks-howto at and greatly benefited from it. One thing that's (maybe) missing is that often the `smartctl -t long` scan finds a bad sector which is not assigned to any file. In that case it does not help to run `debugfs`, or rather `debugfs` reports the fact that no file owns that sector. Furthermore, it is somewhat laborious to come up with the correct numbers for `debugfs`, and `debugfs` is slow ...

So what I suggest in the case of presence of `Current_Pending_Sector/Offline_Uncorrectable` errors is to create a huge file on that file system.

```
  dd if=/dev/zero of=/some/mount/point bs=4k
```

creates the file. Leave it running until the partition/file system is full. This will make the disk reallocate those sectors which do not belong to a file. Check the `smartctl -a` output after that and make sure that the sectors are reallocated. If any remain, use the debugfs method. Of course the usual caveats apply - back it up first, and so on.

Comment by Mingye Wang: wouldn't it be easier to skip to step 5 and do the `dd` or `hdparm`?

### ReiserFS example <a id="ReiserFSexample"></a>

This section was written by Joachim Jautz with additions from Manfred Schwarb.

The following problems were reported during a scheduled test:

```
smartd[575]: Device: /dev/hda, starting scheduled Offline Immediate Test.
[... 1 hour later ...]
smartd[575]: Device: /dev/hda, 1 Currently unreadable (pending) sectors
smartd[575]: Device: /dev/hda, 1 Offline uncorrectable sectors
```

**[Step 0]** The SMART selftest/error log (see `smartctl -l selftest`) indicated there was a problem with block address (i.e. the 512 byte sector at) `58656333`. The partition table (e.g. see `sfdisk -luS /dev/hda` or `fdisk -ul /dev/hda`) indicated that this block was in the `/dev/hda3` partition which contained a `ReiserFS` file system. That partition started at block address `54781650`.

While doing the initial analysis it may also be useful to take a copy of the disk attributes returned by `smartctl -A /dev/hda`. Specifically the values associated with the `Reallocated_Sector_Ct` and `Reallocated_Event_Count` attributes (for `ATA` disks, the grown list (`GLIST`) length for SCSI disks). If these are incremented at the end of the procedure it indicates that the disk has re-allocated one or more sectors.

**[Step 1]** Get the file system's block size:

```
# debugreiserfs /dev/hda3 | grep '^Blocksize' <a id="debugreiserfsdevhda3grepBlocksize"></a>
Blocksize: 4096
```

**[Step 2]** Calculate the block number:

```
# echo "(58656333-54781650)*512/4096" | bc -l <a id="echo58656333-547816505124096bc-l"></a>
484335.37500000000000000000
```

It is re-assuring that the calculated 4 KB damaged block address in `/dev/hda3` is less than `Count of blocks on the device` shown in the output of `debugreiserfs` shown above.

**[Step 3]** Try to get more info about this block => reading the block fails as expected but at least we see now that it seems to be unused. If we do not get the `Cannot read the block` error we should check if our calculation in [Step 2] was correct ;)

```
# debugreiserfs -1 484335 /dev/hda3 <a id="debugreiserfs-1484335devhda3"></a>
debugreiserfs 3.6.19 (2003 http://www.namesys.com)
484335 is free in ondisk bitmap
The problem has occurred looks like a hardware problem.
```

If you have bad blocks, we advise you to get a new hard drive, because once you get one bad block that the disk drive internals cannot hide from your sight, the chances of getting more are generally said to become much higher (precise statistics are unknown to us), and this disk drive is probably not expensive enough for you to risk your time and data on it. If you don't want to follow that advice then if you have just a few bad blocks, try writing to the bad blocks and see if the drive remaps the bad blocks (that means it takes a block it has in reserve and allocates it for use for of that block number). If it cannot remap the block, use badblock option (`-B`) with reiserfs utils to handle this block correctly.

```
bread: Cannot read the block (484335): (Input/output error).
Aborted
```

So it looks like we have the right (i.e. faulty) block address.

**[Step 4]** Try then to find the affected file <sup>[[3]](#footnote3)</sup>:

```
tar -cO /mydir | cat >/dev/null
```

If you do not find any unreadable files, then the block may be free or located in some metadata of the file system.

**[Step 5]** Try your luck: bang the affected block with `badblocks -n` (non-destructive read-write mode, do unmount first), if you are very lucky the failure is transient and you can provoke reallocation <sup>[[4]](#footnote4)</sup>:

```
# badblocks -b 4096 -p 3 -s -v -n /dev/hda3 $((484335 + 100)) $((expr 484335 - 100)) <a id="badblocks-b4096-p3-s-v-ndevhda3484335100expr484335-100"></a>
```

check success with `debugreiserfs -1 484335 /dev/hda3`. Otherwise:

**[Step 6]** Perform this step only if Step 5 has failed to fix the problem: overwrite that block to force reallocation:

```
# dd if=/dev/zero of=/dev/hda3 count=1 bs=4096 seek=484335 <a id="ddifdevzeroofdevhda3count1bs4096seek484335"></a>
1+0 records in
1+0 records out
4096 bytes transferred in 0.007770 seconds (527153 bytes/sec)
```

**[Step 7]** If you can't rule out the bad block being in metadata, do a file system check:

```
reiserfsck --check
```

This could take a long time so you probably better go for lunch ...

**[Step 8]** Proceed as stated earlier. For example, sync disk and run a long selftest that should succeed now.

## Repairs at the disk level <a id="Repairsatthedisklevel"></a>

This section first looks at a damaged partition table. Then it ignores the upper level impact of a bad block and just repairs the underlying sector so that defective sector will not cause problems in the future.

### Partition table problems <a id="Partitiontableproblems"></a>

Some software failures can lead to zeroes or random data being written on the first block of a disk. For disks that use a DOS-based partitioning scheme this will overwrite the partition table which is found at the end of the first block. This is a single point of failure so after the damage tools like `fdisk` have no alternate data to use so they report no partitions or a damaged partition table.

One utility that may help is `testdisk` <sup>[[6]](#footnote6)</sup> which can scan a disk looking for partitions and recreate a partition table if requested. 

Programs that create DOS partitions often place the first partition at logical block address `63`. In Linux a loop back mount can be attempted at the appropriate offset of a disk with a damaged partition table. This approach may involve placing the disk with the damaged partition table in a working computer or perhaps an external USB enclosure. Assuming the disk with the damaged partition is `/dev/hdb`. Then the following read-only loop back mount could be tried:

```
# mount -r /dev/hdb -o loop,offset=32256 /mnt <a id="mount-rdevhdb-oloopoffset32256mnt"></a>
```

The offset is in bytes so the number given is `(63 * 512)`. If the file system cannot be identified then a `-t <fs_type>` may be needed (although this is not a good sign). If this mount is successful, a backup procedure is advised.

Only the primary DOS partitions are recorded in the first block of a disk. The extended DOS partition table is placed elsewhere on a disk. Again there is only one copy of it so it represents another single point of failure. All DOS partition information can be read in a form that can be used to recreate the tables with the `sfdisk` command. Obviously this needs to be done beforehand and the file put on other media. Here is how to fetch the partition table information:

```
# sfdisk -dx /dev/hda > my_disk_partition_info.txt <a id="sfdisk-dxdevhdamy_disk_partition_info.txt"></a>
```

Then `my_disk_partition_info.txt` should be placed on other media. If disaster strikes, then the disk with the damaged partition table(s) can be placed in a working system, let us say the damaged disk is now at `/dev/hdc`, and the following command restores the partition table(s):

```
# sfdisk -x -O part_block_prior.img /dev/hdc < my_disk_partition_info.txt <a id="sfdisk-x-Opart_block_prior.imgdevhdcmy_disk_partition_info.txt"></a>
```

Since the above command is potentially destructive it takes a copy of the block(s) holding the partition table(s) and puts it in part_block_prior.img prior to any changes. Then it changes the partition tables as indicated by `my_disk_partition_info.txt`. For what it is worth the author did test this on his system! <sup>[[7]](#footnote7)</sup>

For creating, destroying, resizing, checking and copying partitions, and the file systems on them, GNU's `parted` is worth examining. The [Large Disk HOWTO](http://www.tldp.org/HOWTO/Large-Disk-HOWTO.html) is also a useful resource. 

### Bad block reassignment <a id="Badblockreassignment"></a>

The SCSI disk command set and associated disk architecture are assumed in this section. SCSI disks have their own logical to physical mapping allowing a damaged sector (usually carrying 512 bytes of data) to be remapped irrespective of the operating system, file system or software RAID being used. The terms *block* and *sector* are used interchangeably, although block tends to get used in higher level or more abstract contexts such as a *logical block*.

When a SCSI disk is formatted (see command `sg_format`), defective sectors identified during the manufacturing process (the so called primary list: PLIST), those found during the format itself (the certification list: CLIST), those given explicitly to the format command (the DLIST) and optionally the previous grown list (GLIST) are not used in the logical block map. The number (and low level addresses) of the unmapped sectors can be found with the `READ DEFECT DATA SCSI` command.

SCSI disks tend to be divided into zones which have spare sectors and perhaps spare tracks, to support the logical block address mapping process. The idea is that if a logical block is remapped, the heads do not have to move a long way to access the replacement sector. Note that spare sectors are a scarce resource.

Once a SCSI disk format has completed successfully, other problems may appear over time. These fall into two categories:

- recoverable: the Error Correction Codes (ECC) detect a problem but it is small enough to be corrected. Optionally other strategies such as retrying the access may retrieve the data.
- unrecoverable: try as it may, the disk logic and ECC algorithms cannot recover the data. This is often reported as a *medium error*.

Other things can go wrong, typically associated with the transport and they will be reported using a term other than *medium error*. For example a disk may decide a read operation was successful but a computer's host bus adapter (HBA) checking the incoming data detects a CRC error due to a bad cable or termination.

Depending on the disk vendor, recoverable errors can be ignored. After all, some disks have up to 68 bytes of ECC above the payload size of 512 bytes so why use up spare sectors which are limited in number <sup>[[8]](#footnote8)</sup> ? If the disk can recover the data and does decide to re-allocate (reassign) a sector, then first it checks the settings of the `ARRE` and `AWRE` bits in the read-write error recovery mode page. Usually these bits are set <sup>[[9]](#footnote9)</sup> enabling automatic (read or write) re-allocation. The automatic re-allocation may also fail if the zone (or disk) has run out of spare sectors.

Another consideration with RAIDs, and applications that require a high data rate without pauses, is that the controller logic may not want a disk to spend too long trying to recover an error.

Unrecoverable errors will cause a *medium error* sense key, perhaps with some useful additional sense information. If the extended background self test includes a full disk read scan, one would expect the self test log to list the bad block, as shown in section [Repairs in a file system](#Repairsinafilesystem). Recent SCSI disks with a periodic background scan should also list unrecoverable read errors (and some recoverable errors as well). The advantage of the background scan is that it runs to completion while self tests will often terminate at the first serious error.

SCSI disks expect unrecoverable errors to be fixed in one of the two ways (SBC-4 sect 4.13.1):

1. Simple overwriting, if `AWRE` bit is set. If writing suceeds, no remap would happen. If it does not, automatic write reassignment (AWRE) happens. SCSI specifically mentions that writing should only be done with valid data (SBC-4 sect 6.5.10), e.g. recovered from RAID.
2. The `REASSIGN BLOCKS` SCSI command. This command will reassign one or more blocks, attempting to (partially ?) recover the data (a forlorn hope at this stage). 

In either case, remapping will fetch an unused spare sector from the current zone while adding the damaged old sector to the GLIST (hence the name *grown* list). The difference is in the `REASSIGN STATUS` field from Background Scan Results, which describes how a reassignment happened. The contents of the GLIST may not be that interesting but `smartctl` prints out the number of entries in the grown list and if that number grows quickly, the disk may be approaching the end of its useful life.

Here is an alternate brute force technique to consider: if the data on the SCSI disk has all been backed up (e.g. is held on the other disks in a RAID 5 enclosure), then simply reformatting the disk with [`sg_format`](https://manned.org/sg_format.8) may be the least cumbersome approach.

(In the ATA command set, the OS is not given access to such fine-grained control as in SCSI. The equivalent of AWRE nearly always happens, so all you do is write over the defect. You also don't get an LBA-level format operation, only "security erase".)

#### Example <a id="Example"></a>

Given a *bad block*, it still may be useful to look at the `fdisk` command (if the disk has multiple partitions) to find out which partition is involved, then use `debugfs` (or a similar tool for the file system in question) to find out which, if any, file or other part of the file system may have been damaged. This is discussed in section [Repairs in a file system](#Repairsinafilesystem).

Then a program that can execute the `REASSIGN BLOCKS` SCSI command is required. In Linux (2.4 and 2.6 series), FreeBSD, Tru64(OSF) and Windows the Douglas Gilbert's `sg_reassign` utility in the `sg3_utils` package can be used. Also found in that package is `sg_verify` which can be used to check that a block is readable.

Assume that `logical block address 1193046` (which is `123456` in hex) is corrupt <sup>[[10]](#footnote10)</sup> on the disk at `/dev/sdb`. A long selftest command like `smartctl -t long /dev/sdb` may result in log results like this:

```
# smartctl -l selftest /dev/sdb <a id="smartctl-lselftestdevsdb"></a>
smartctl version 5.37 [i686-pc-linux-gnu] Copyright (C) 2002-6 Bruce Allen
Home page is http://smartmontools.sourceforge.net/
SMART Self-test log
Num  Test              Status            segment  LifeTime  LBA_first_err [SK ASC ASQ]
     Description                         number   (hours)
# 1  Background long   Failed in segment      -     354           1193046 [0x3 0x11 0x0] <a id="1BackgroundlongFailedinsegment-35411930460x30x110x0"></a>
# 2  Background short  Completed              -     323                 - [-   -    -] <a id="2BackgroundshortCompleted-323----"></a>
# 3  Background short  Completed              -     194                 - [-   -    -] <a id="3BackgroundshortCompleted-194----"></a>
```

The `sg_verify` utility can be used to confirm that there is a problem at that address:

```
# sg_verify --lba=1193046 /dev/sdb <a id="sg_verify--lba1193046devsdb"></a>
verify (10):  Fixed format, current;  Sense key: Medium Error
 Additional sense: Unrecovered read error
  Info fld=0x123456 [1193046]
  Field replaceable unit code: 228
  Actual retry count: 0x008b
medium or hardware error, reported lba=0x123456
```

Now the GLIST length is checked before the block reassignment:

```
# sg_reassign --grown /dev/sdb <a id="sg_reassign--growndevsdb"></a>
>> Elements in grown defect list: 0
```

And now for the actual reassignment followed by another check of the GLIST length:

```
# sg_reassign --address=1193046 /dev/sdb <a id="sg_reassign--address1193046devsdb"></a>
# sg_reassign --grown /dev/sdb <a id="sg_reassign--growndevsdb-1"></a>
>> Elements in grown defect list: 1
```

The GLIST length has grown by one as expected. If the disk was unable to recover any data, then the *new* block at lba `0x123456` has vendor specific data in it. The `sg_reassign` utility can also do bulk reassigns, see [`man sg_reassign` https://manned.org/sg_reassign.8] for more information.

The `dd` command could be used to read the contents of the *new* block:

```
# dd if=/dev/sdb iflag=direct skip=1193046 of=blk.img bs=512 count=1 <a id="ddifdevsdbiflagdirectskip1193046ofblk.imgbs512count1"></a>
```

and a hex editor <sup>[[11]](#footnote11)</sup> used to view and potentially change the `blk.img` file. An altered `blk.img` file (or `/dev/zero`) could be written back with:

```
# dd if=blk.img of=/dev/sdb seek=1193046 oflag=direct bs=512 count=1 <a id="ddifblk.imgofdevsdbseek1193046oflagdirectbs512count1"></a>
```

More work may be needed at the file system level, especially if the reassigned block held critical file system information such as a superblock or a directory.

Even if a full backup of the disk is available, or the disk has been *ejected* from a RAID, it may still be worthwhile to reassign the bad block(s) that caused the problem (or simply format the disk (see `sg_format`)) and re-use the disk later (not unlike the way a replacement disk from a manufacturer might be used).

### Automated test and reassign <a id="Automatedtestandreassign"></a>
There are tools that check the entire hard drive and performs reassignment (by SCSI command or by ordinary write) on bad LBAs.

- Seagate's Seachest and openSeaChest provide a [`openSeaChest_GenericTests`](https://github.com/Seagate/openSeaChest/blob/3fc1fb6154f079e6db4cec35bb8971205a68fc10/docs/openSeaChest_GenericTests.191.txt) utility that performs non-smart testing by ordinary read and write (as a result, it can do a "selective" test on SCSI). It can be configured to reassign any bad sectors fount. It understands SCSI error-recovery flags and acts accordingly.
- Also in (open)SeaChest is the `openSeaChest_SMART` utility. It performs SMART self-tests instead of a generic test, but has the same ability to reassign (getting locations from SMART error log).
- There are scripts on the internet that parses `smartctl` output and runs `hdparm`, but with seaChest they should be considered obsolete.

Seagate's tools print out a bad LBA list at the end. Since data on a bad sector is probably already lost, it may be a good idea to fix first and then go back to figuring out what was affected. Doing the fix first avoids futile read-retries by the disk, which can take a long time on disks without Error Recovery Control.

## Case Studies <a id="CaseStudies"></a>

This section is intended to collect step-by-step descriptions of some real-life use cases.

### Recovering a (mostly) unreadable sector of a Notebook HDD <a id="RecoveringamostlyunreadablesectorofaNotebookHDD"></a>

This was done in March 2016 under Windows 7 using *Cygwin*<sup>[12.](#footnote12)</sup> ports of *GNU ddrescue*<sup>[13.](#footnote13)</sup> and *The Sleuth Kit (TSK)*<sup>[14.](#footnote14)</sup>. All commands shown should work similar on other platforms and with other filesystems.

#### Determine Logical Block Address of unreadable sector <a id="DetermineLogicalBlockAddressofunreadablesector"></a>

Examine smartctl output:
```
root:~# smartctl -x /dev/sdb
smartctl 6.5 2016-02-29 r4227 [x86_64-w64-mingw32-win7-sp1] (daily-20160229)
...
Model Family:     SAMSUNG SpinPoint MP5
Device Model:     SAMSUNG HM640JJ
...
Firmware Version: 2AK10001
User Capacity:    640.135.028.736 bytes [640 GB]
Sector Size:      512 bytes logical/physical
Rotation Rate:    7200 rpm
Form Factor:      2.5 inches
...
ID# ATTRIBUTE_NAME          FLAGS    VALUE WORST THRESH FAIL RAW_VALUE
...
  5 Reallocated_Sector_Ct   PO--CK   252   252   010    -    0
...
  9 Power_On_Hours          -O--CK   100   100   000    -    251  <=== See Self-test Log below
...
197 Current_Pending_Sector  -O--CK   100   100   000    -    1    <=== At least 1 bad sector
...
SMART Extended Comprehensive Error Log Version: 1 (2 sectors)
Device Error Count: 351 (device log contains only the most recent 8 errors)
...
Error 351 [6] occurred at disk power-on lifetime: 251 hours (10 days + 11 hours)
  When the command that caused the error occurred, the device was active or idle.

  After command completion occurred, registers were:
  ER -- ST COUNT  LBA_48  LH LM LL DV DC
  -- -- -- == -- == == == -- -- -- -- --
  40 -- 51 00 01 00 00 33 3f d8 a6 40 00  Error: UNC 1 sectors at LBA = 0x333fd8a6 = 859822246  <=== Its LBA

  Commands leading to the command that caused the error were:
  CR FEATR COUNT  LBA_48  LH LM LL DV DC  Powered_Up_Time  Command/Feature_Name
  -- == -- == -- == == == -- -- -- -- --  ---------------  --------------------
  25 00 00 00 01 00 00 33 3f d8 a6 40 00     00:00:06.924  READ DMA EXT
...

SMART Extended Self-test Log Version: 1 (2 sectors)
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Short offline       Completed: read failure       90%       176         859822246  <=== Detected 75 power on hours ago <a id="1ShortofflineCompleted:readfailure90176859822246Detected75poweronhoursago"></a>
```

A read scan helps to verify the LBA and checks for other possible bad sectors
(alternatively replace `/dev/null` by a file path to create a disk image):

```
root:~# ddrescue --ask --verbose --binary-prefixes --idirect --force /dev/sdb /dev/null disk.map
GNU ddrescue 1.21-rc2
About to copy 610480 MiBytes from /dev/sdb [SAMSUNG HM640JJ::...] to /dev/null [0].
Proceed (y/N)? y
...
non-tried:        0 B,     errsize:      512 B,      run time:          2h
  rescued: 610480 MiB,      errors:        1,  remaining time:         n/a
percent rescued:  99.99%      time since last successful read:         20s
Finished
```

The `ddrescue` map file now shows byte ranges of good and bad disk areas:

```
root:~# cat disk.map
...
# pos        size      status <a id="possizestatus"></a>
  0x00000000  0x667FB14C00  +
0x667FB14C00    0x00000200  -  <=== 512 bytes unreadable
0x667FB14E00  0x2E8B541200  +
```

Translate the byte position to the LBA:

```
root:~# echo $((0x667FB14C00/512))
859822246
```

Or convert the map file to a `badblocks` like list with `ddrescuelog` (part of recent versions of *ddrescue* package):

```
root:~# ddrescuelog --list-blocks=- disk.map
859822246
```

Both match the LBA reported by `smartctl`.

#### Find affected file <a id="Findaffectedfile"></a>

Get start offset of affected partition:

```
root:~# fdisk --list /dev/sdb
...
Device     Boot Start        End    Sectors   Size Id Type
/dev/sdb1          63 1250258624 1250258562 596.2G  7 HPFS/NTFS/exFAT
```

Get filesystem block (cluster) size if unknown (4096 in many cases):

```
root:~# fsstat /dev/sdb1
...
File System Type: NTFS
...
Sector Size: 512
Cluster Size: 4096
...
```

Calculate number of bad cluster as `(BAD_LBA - START_LBA) / SECTORS_PER_CLUSTER`:

```
root:~# echo $(((859822246-63)/8))
107477772
```

Find inode (here: MFT entry) used by this cluster:

```
root:~# ifind -d 107477772 /dev/sdb1
663-128-2
```

Print some info about this inode:

```
root:~# istat /dev/sdb1 663-128-2
...
Name: Backup_2015-12-17.zip
Parent MFT Entry: 30    Sequence: 1
Allocated Size: 4660039680      Actual Size: 4660039516
Created:        2015-12-17 13:43:30.460000000 (CET)
File Modified:  2015-12-17 13:46:19.647000000 (CET)
...
Type: $DATA (128-2)   Name: N/A   Non-Resident   size: 4660039516  init_size: 4660039516
106950180 106950181 ...
...
107477772  <=== The bad cluster
...
108087884
```

Find full path of affected file:

```
root:~# ffind /dev/sdb1 663-128-2
/Backups/2015/Backup_2015-12-17.zip
```

If the file is no longer needed, it could be overwritten in place and removed then. This is easy with `shred` from *GNU coreutils*: `shred --iterations=1 --remove /PATH/TO/FILE`. This should reallocate the bad sector in most cases.

#### Try to recover the bad sector <a id="Trytorecoverthebadsector"></a>

Start with 100 read retries of the bad sector, write to `recovered.bin` if successful:

```
root:~# ddrescue --ask --verbose --binary-prefixes --idirect --retry=100 \
                 --input-position=859822246s --output-position=0 --size=1s \
                 /dev/sdb recovered.bin recovered.map
...
Current status
     ipos: 419835 MiB, non-trimmed:        0 B,  current rate:      32 B/s
     opos:        0 B, non-scraped:        0 B,  average rate:       4 B/s
non-tried:        0 B,     errsize:        0 B,      run time:      1m 49s
  rescued:      512 B,      errors:        0,  remaining time:         n/a
percent rescued: 100.00%      time since last successful read:          0s
Finished
```

We were very lucky:

```
root:~# cat recovered.map
...
# pos        size      status <a id="possizestatus-1"></a>
  0x00000000  0x667FB14C00  ?
0x667FB14C00  0x00000200    +  <=== Now OK!
0x667FB14E00  0x2E8B541200  ?
```

Check whether the disk firmware took the chance to reallocate the sector using the recovered data:

```
root:~# dd skip=859822246 count=1 iflag=direct if=/dev/sdb of=test.bin
dd: error reading ‘/dev/sdb’: Input/output error
0+0 records in
0+0 records out
0 bytes (0 B) copied, 23.5006 s, 0.0 kB/s
```

No luck in this case. So overwrite the sector manually:

```
root:~# dd seek=859822246 count=1 oflag=direct if=recovered.bin of=/dev/sdb
1+0 records in
1+0 records out
512 bytes (512 B) copied, 1.05331 s, 0.5 kB/s
```

Read data back and check:

```
root:~# dd skip=859822246 count=1 iflag=direct if=/dev/sdb of=test.bin
1+0 records in
1+0 records out
512 bytes (512 B) copied, 0.0211745 s, 24.2 kB/s

root:~# diff -s recovered.bin test.bin
Files recovered.bin and test.bin are identical
```

Finally, run a SMART self-test and check its result:

```
root:~# smartctl -t short /dev/sdb
...
Sending command: "Execute SMART Short self-test routine immediately in off-line mode".
...
Please wait 2 minutes for test to complete.

root:~# sleep 120 # :-)

root:~# smartctl -x /dev/sdb
...
ID# ATTRIBUTE_NAME          FLAGS    VALUE WORST THRESH FAIL RAW_VALUE
...
  5 Reallocated_Sector_Ct   PO--CK   252   252   010    -    0   <=== Interesting...
...
  9 Power_On_Hours          -O--CK   100   100   000    -    252
...
197 Current_Pending_Sector  -O--CK   100   100   000    -    0   <=== As expected
...
SMART Extended Self-test Log Version: 1 (2 sectors)
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Short offline       Completed without error       00%       252         -          <=== Works again! <a id="1ShortofflineCompletedwithouterror00252-Worksagain"></a>
# 2  Short offline       Completed: read failure       90%       176         859822246 <a id="2ShortofflineCompleted:readfailure90176859822246"></a>
```

Interestingly the `Reallocated_Sector_Ct` did not increase. Either the firmware did not record the reallocation or decided to reuse the original sector.

Done!

### LVM repairs <a id="LVMrepairs"></a>

This section was written by Frederic BOITEUX. It was titled: "HOW TO LOCATE AND REPAIR BAD BLOCKS ON AN LVM VOLUME".
Bill Gradwohl provided the spreadsheet *LVMBadBlockCalculator.ods*<sup>[[15]](#footnote15)</sup> to ease the required calculations.

Smartd reports an error in a short test :

```
# smartctl -a /dev/hdb <a id="smartctl-adevhdb"></a>
...
SMART Self-test log structure revision number 1
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Short offline       Completed: read failure       90%        66         37383668 <a id="1ShortofflineCompleted:readfailure906637383668"></a>
```

So the disk has a bad block located in `LBA block 37383668`

In which physical partition is the bad block ?

```
# sfdisk -luS /dev/hdb  # or 'fdisk -ul /dev/hdb' <a id="sfdisk-luSdevhdborfdisk-uldevhdb"></a>

Disk /dev/hdb: 9729 cylinders, 255 heads, 63 sectors/track
Units = sectors of 512 bytes, counting from 0

   Device Boot    Start       End   #sectors  Id  System
/dev/hdb1            63    996029     995967  82  Linux swap / Solaris
/dev/hdb2   *    996030   1188809     192780  83  Linux
/dev/hdb3       1188810 156296384  155107575  8e  Linux LVM
/dev/hdb4             0         -          0   0  Empty
```

It's in the `/dev/hdb3` partition, a LVM2 partition. From the LVM2 partition beginning, the bad block has an offset of
```
(37383668 - 1188810) = 36194858
```

We have to find in which LVM2 logical partition the block belongs to.

In which logical partition is the bad block ?

*IMPORTANT* : LVM2 can use different schemes dividing its physical partitions to logical ones : linear, striped, contiguous or not... The following example assumes that allocation is linear !

The physical partition used by LVM2 is divided in PE (Physical Extent) units of the same size, starting at `pe_start` 512 bytes blocks from the beginning of the physical partition.

The `pvdisplay` command gives the size of the PE (in KB) of the LVM partition :

```
# part=/dev/hdb3 ; pvdisplay -c $part | awk -F: '{print $8}' <a id="partdevhdb3pvdisplay-cpartawk-F:print8"></a>
4096
```

To get its size in LBA block size (512 bytes or 0.5 KB), we multiply this number by 2 : `4096 * 2 = 8192 blocks` for each PE.

To find the offset from the beginning of the physical partition is a bit more difficult : if you have a recent LVM2 version, try :

```
# pvs -o+pe_start $part <a id="pvs-ope_startpart"></a>
```

Either, you can look in `/etc/lvm/backup` :
```
# grep pe_start $(grep -l $part /etc/lvm/backup/*) <a id="greppe_startgrep-lpartetclvmbackup"></a>
                        pe_start = 384
```

Then, we search in which PE is the badblock, calculating the PE rank in which the faulty block of the partition is : `physical partition's bad block number / sizeof(PE)` =
```
36194858 / 8192 = 4418.3176
```

So we have to find in which LVM2 logical partition is used the PE number 4418 (count starts from 0) :
```
# lvdisplay --maps |egrep 'Physical|LV Name|Type' <a id="lvdisplay--mapsegrepPhysicalLVNameType"></a>
  LV Name                /dev/WDC80Go/racine
    Type                linear
    Physical volume     /dev/hdb3
    Physical extents    0 to 127
  LV Name                /dev/WDC80Go/usr
    Type                linear
    Physical volume     /dev/hdb3
    Physical extents    128 to 1407
  LV Name                /dev/WDC80Go/var
    Type                linear
    Physical volume     /dev/hdb3
    Physical extents    1408 to 1663
  LV Name                /dev/WDC80Go/tmp
    Type                linear
    Physical volume     /dev/hdb3
    Physical extents    1664 to 1791
  LV Name                /dev/WDC80Go/home
    Type                linear
    Physical volume     /dev/hdb3
    Physical extents    1792 to 3071
  LV Name                /dev/WDC80Go/ext1
    Type                linear
    Physical volume     /dev/hdb3
    Physical extents    3072 to 10751
  LV Name                /dev/WDC80Go/ext2
    Type                linear
    Physical volume     /dev/hdb3
    Physical extents    10752 to 18932
```

So the PE [#4418](https://github.com/smartmontools/trac-tickets-archive/issues?q=4418) is in the `/dev/WDC80Go/ext1` LVM logical partition.

Size of logical block of file system on `/dev/WDC80Go/ext1` :

It's a ext3 fs, so I get it like this :
```
# dumpe2fs /dev/WDC80Go/ext1 | grep 'Block size' <a id="dumpe2fsdevWDC80Goext1grepBlocksize"></a>
dumpe2fs 1.37 (21-Mar-2005)
Block size:               4096
```

bad block number for the file system :

The logical partition begins on `PE 3072` :
```
 (# PE's start of partition * sizeof(PE)) + parttion offset[pe_start] =
 (3072 * 8192) + 384 = 25166208
```

512b block of the physical partition, so the bad block number for the file system  is :
```
(36194858 - 25166208) / (sizeof(fs block) / 512)
= 11028650 / (4096 / 512)  = 1378581.25
```

Test of the fs bad block :
```
dd if=/dev/WDC80Go/ext1 of=block1378581 bs=4096 count=1 skip=1378581
```

If this `dd` command succeeds, without any error message in console or syslog, then the block number calculation is probably wrong ! *Don't* go further, re-check it and if you don't find the error, please renounce !

Search / correction follows the same scheme as for simple partitions :
- find possible impacted files with `debugfs` (`icheck <fs block nb>`, then `ncheck <icheck nb>`).
- reallocate bad block writing zeros in it, *using the fs block size* :

```
dd if=/dev/zero of=/dev/WDC80Go/ext1 count=1 bs=4096 seek=1378581
```

Et voilà !

## Footnotes <a id="Footnotes"></a>

<a id="footnote1"></a> [1] Self-Monitoring, Analysis and Reporting Technology -> SMART

<a id="footnote2"></a> [2] Starting with GNU coreutils release 5.3.0, the `dd` command in Linux includes the options 'iflag=direct' and 'oflag=direct'. Using these with the `dd` commands should be helpful, because adding these flags should avoid any interaction with the block buffering IO layer in Linux and permit direct reads/writes from the raw device. Use `dd --help` to see if your version of dd supports these options. If not, the latest code for dd can be found at https://www.gnu.org/software/coreutils/.

<a id="footnote3"></a> [3] Do not use `tar -c -f /dev/null or tar -cO /mydir >/dev/null`. GNU tar does not actually read the files if `/dev/null` is used as archive path or as standard output, see info tar.

<a id="footnote4"></a> [4] Important: set blocksize range is arbitrary, but do not only test a single block, as bad blocks are often social. Not too large as this test probably has not 0% risk.

<a id="footnote5"></a> [5] We use the [POSIX 1997+](http://pubs.opengroup.org/onlinepubs/007908799/xcu/chap2.html#tag_001_006_004) arithmetic expansion here. If you are using an ancient or unusual shell, try the slightly more awkward `` `expr 484335 + 100` `` and `` `expr 484335 - 100` `` (the backticks are mandatory). See also <sup>[11.](#footnote11)</sup> below.

<a id="footnote6"></a> [6] `testdisk` scans the media for the beginning of file systems that it recognizes. It can be tricked by data that looks like the beginning of a file system or an old file system from a previous partitioning of the media (disk). So care should be taken. Note that file systems should not overlap apart from the fact that extended partitions lie wholly within a extended partition table allocation. Also if the root partition of a !Linux/Unix installation can be found then the `/etc/fstab` file is a useful resource for finding the partition numbers of other partitions.

<a id="footnote7"></a> [7] Thanks to Manfred Schwarb for the information about storing partition table(s) beforehand.

<a id="footnote8"></a> [8] Detecting and fixing an error with ECC *on the fly* and not going the further step and reassigning the block in question may explain why some disks have large numbers in their read error counter log. Various worried users have reported large numbers in the `errors corrected without substantial delay` counter field which is in the `Errors corrected by ECC fast` column in the `smartctl -l error` output.

<a id="footnote9"></a> [9] Often disks inside a hardware RAID have the ARRE and AWRE bits cleared (disabled) so the RAID controller can do things manually or flag the disk for replacement.

<a id="footnote10"></a> [10] In this case the corruption was manufactured by using the `WRITE LONG SCSI` command. See `sg_write_long` in `sg3_utils`.

<a id="footnote11"></a> [11] Most window managers have a handy calculator that will do hex to decimal conversions. On the shell command level, the [printf](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/printf.html) command or [Arithmetic Expansion](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_06_04) could be used: `printf '%d\n' 0xC0DEBA5E` and `echo $((0xC0DEBA5E))` print `3235822174`. The command `printf '0x%X\n' 3235822174` prints `0xC0DEBA5E`. At least recent versions of `bash`, `busybox`, `dash` and `zsh` support 64-bit signed integer arithmetic, other shells may be limited to 32-bit.

<a id="footnote12"></a> [12] See <https://cygwin.com/>.

<a id="footnote13"></a> [13] See <https://www.gnu.org/software/ddrescue/>. Note that on Debian and Ubuntu the package is named [gddrescue](https://packages.debian.org/stable/gddrescue) because the (no longer available) package *ddrescue* provided the tool [dd_rescue](http://www.garloff.de/kurt/linux/ddrescue/).

<a id="footnote14"></a> [14] See <https://www.sleuthkit.org/sleuthkit/>.

<a id="footnote15"></a> [15] See attachment *LVMBadBlockCalculator.zip* from <https://forums.fedoraforum.org/showthread.php?p=1794197#post1794197>.

## Changelog <a id="Changelog"></a>

| Date | Author | Description |
| --- | --- | --- |
| 2024-05-25 | chrfranke | Fix LUKS offset (GH issues/261) |
| 2023-05-21 | Artoria2e5 | Add note about seaChest |
| 2023-05-21 | Artoria2e5 | Formatting: make the steps bold so they are easier to find & 1 comment |
| 2021-06-12 | ttsiodras | Added a note about LUKS-encrypted partitions hosting ext filesystems |
| 2017-03-29 | chrfranke | Add section Case Studies with a real-life example using ddrescue and sleuthkit on Windows |
| 2009-08-11 | dipohl | Add documentation improvements by Francesco Potorti` (​http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=540359) |
| 2009-01-28 | ballen4705 | Incorporated suggestion from Danie Marais (https://sourceforge.net/p/smartmontools/mailman/message/21437469/) |
| 2008-07-17 | chfranke | Update info about the /dev/null handling of GNU tar |
| 2007-01-31 | dpgilbert | Incorporate comments |
| 2007-01-18 | dpgilbert | Add Manfred Schwarb's suggestion to store partition table beforehand |
| 2007-01-16 | dpgilbert | Add sections on ReiserFS and damaged partition tables; re-arrange |
| 2007-01-16 | dpgilbert | Combine `BadBlockHowTo?.txt` and `BadBlockSCSIHowTo.txt` into one docbook … |
| 2006-06-12 | ballen4705 | Update copyright year |
| 2006-05-23 | ballen4705 | Added info about locating bad blocks using LVM. Thanks to Frederic BOITEUX. |
| 2005-04-26 | ballen4705 | Typo correction |
| 2005-04-22 | ballen4705 | Adding info about the 'dd DIRECT' option. |
| 2005-04-20 | ballen4705 | Added hints from Kay Diederichs |
| 2004-03-21 | ballen4705 | Added another real-life example |
| 2004-03-02 | ballen4705 | Added CVS version tag and copyright info |
| 2004-03-02 | ballen4705 | Added passing self-test |
| 2004-03-02 | ballen4705 | Added initial draft |

## License <a id="License"></a>

Copyright © 2004-2017 Bruce Allen

Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.1 or any later version published by the Free Software Foundation; with no Invariant Sections, with no Front-Cover Texts, and with no Back-Cover Texts.

For an online copy of the license see https://www.gnu.org/licenses/fdl.html
