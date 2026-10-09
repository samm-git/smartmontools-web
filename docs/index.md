<div class="hero" markdown>

# smartmontools

Control and monitor storage systems using **S.M.A.R.T.** — for ATA/SATA,
SCSI/SAS and NVMe disks.  The two utilities `smartctl` and `smartd` give you
advanced warning of disk degradation and failure.

[Download](download.md){ .md-button .md-button--primary }
[Documentation](tocdoc.md){ .md-button }
[GitHub](https://github.com/smartmontools/smartmontools){ .md-button }

</div>

<div class="grid cards" markdown>

-   **Download & install**

    ---

    Source tarballs, binaries and packages for Linux, FreeBSD, NetBSD, OpenBSD,
    macOS, Solaris and Windows.

    [Download & install](download.md)

-   **Documentation**

    ---

    FAQ, installation notes and the on-line manual pages for `smartctl`,
    `smartd` and `smartd.conf`.

    [Read the documentation](tocdoc.md)

-   **Device support**

    ---

    Supported USB bridges, RAID controllers and NVMe devices, plus how to read
    `smartctl` reports.

    [Device support](tocsupport.md)

-   **Get help**

    ---

    Frequently asked questions, mailing lists and how to report a problem on
    GitHub.

    [Help & support](help.md)

</div>

## About smartmontools

![S.M.A.R.T. logo](assets/smart_logo.gif)

Smartmontools was originally derived from the Linux
[smartsuite package](https://sourceforge.net/projects/smartsuite/) and supports
ATA/SATA, [SCSI](https://github.com/smartmontools/smartmontools/blob/main/www/smartmontools_scsi.xml)/SAS
and [NVMe](nvme-support.md) disks as well as SCSI/SAS tape devices.  It runs on
Linux, FreeBSD, NetBSD, OpenBSD, Darwin (macOS), Solaris, Windows, Cygwin, OS/2,
eComStation and QNX, and can also be run from one of many
[Live CDs/DVDs](livecds.md).

Precompiled packages are available from the repositories of many distributions —
see the [Packages](packages.md) page or
[Repology.org](https://repology.org/project/smartmontools/versions).  Thanks to
[Alexander Shaduri](https://gsmartcontrol.sourceforge.io/) there is also
[GSmartControl](https://gsmartcontrol.sourceforge.io/), a graphical user
interface for `smartctl`.

Smartmontools is published under the
[GNU General Public License](https://www.gnu.org/licenses/gpl-2.0.html).

## Contribute

- **Device information** — if your drive is not in the
  [drive database](https://github.com/smartmontools/smartmontools/blob/main/src/drivedb.h),
  help add it; see the [FAQ](faq.md).  We also collect
  [USB device test results](supported-usb-devices.md).
- **Bug reports** — [create an issue](https://github.com/smartmontools/smartmontools/issues)
  on GitHub, or send the details to the
  [smartmontools-support](https://listi.jpberlin.de/mailman/listinfo/smartmontools-support)
  mailing list.
- **Patches** — the preferred way is to
  [open a pull request](https://github.com/smartmontools/smartmontools/pulls) on GitHub.
- **Development** — see the [developer information](tocdeveloper.md).

## Quick links

- [Frequently asked questions (FAQ)](faq.md)
- [On-line manual pages](man/index.md)
- [Bad block HOWTO](badblockhowto.md)
- [Supported USB devices](supported-usb-devices.md) ·
  [RAID controllers](supported-raid-controllers.md) ·
  [NVMe](nvme-support.md)
- [Recommended links](links.md)

**Latest release:** smartmontools **7.5** (2025-04-30) — see the
[NEWS](https://github.com/smartmontools/smartmontools/blob/main/NEWS) and
[releases](https://github.com/smartmontools/smartmontools/releases).
