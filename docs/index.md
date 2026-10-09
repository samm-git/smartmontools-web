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

Source code tarballs and precompiled packages for Darwin (macOS) and Windows are
available at the [project page at SourceForge](https://sourceforge.net/projects/smartmontools/files/smartmontools/).

[![...](https://img.shields.io/sourceforge/dt/smartmontools/smartmontools/7.5?label=7.5%20downloads)](https://sourceforge.net/projects/smartmontools/files/smartmontools/7.5/stats/timeline)
[![...](https://img.shields.io/sourceforge/dw/smartmontools/smartmontools/7.5?label=)](https://sourceforge.net/projects/smartmontools/files/smartmontools/7.5/stats/timeline)
[![...](https://img.shields.io/sourceforge/dt/smartmontools/smartmontools/7.4?label=7.4%20downloads)](https://sourceforge.net/projects/smartmontools/files/smartmontools/7.4/stats/timeline)
...
[![...](https://img.shields.io/sourceforge/dt/smartmontools?label=all%20downloads)](https://sourceforge.net/projects/smartmontools/files/stats/timeline?dates=2002-10-01+to+2025-12-31)

Precompiled packages are available from the repositories of many distributions —
see the [Packages](packages.md) page or
[Repology.org](https://repology.org/project/smartmontools/versions).  Some examples:

[![Arch](https://repology.org/badge/version-for-repo/arch/smartmontools.svg?header=Arch)](https://www.archlinux.org/packages/?q=smartmontools)
[![Fedora](https://repology.org/badge/version-for-repo/fedora_41/smartmontools.svg?header=Fedora%2041)](https://src.fedoraproject.org/rpms/smartmontools)
[![Debian](https://repology.org/badge/version-for-repo/debian_13_backports/smartmontools.svg?header=Debian%2013)](https://packages.debian.org/trixie-backports/smartmontools)
[![Ubuntu](https://repology.org/badge/version-for-repo/ubuntu_26_04/smartmontools.svg?header=Ubuntu%2026.04)](https://packages.ubuntu.com/resolute/smartmontools)
[![FreeBSD](https://repology.org/badge/version-for-repo/freebsd/smartmontools.svg?header=FreeBSD)](https://www.freshports.org/sysutils/smartmontools)
[![NetBSD](https://repology.org/badge/version-for-repo/pkgsrc_current/smartmontools.svg?header=NetBSD)](https://cdn.netbsd.org/pub/pkgsrc/current/pkgsrc/sysutils/smartmontools/)
[![OpenBSD](https://repology.org/badge/version-for-repo/openbsd/smartmontools.svg?header=OpenBSD)](https://openports.pl/path/sysutils/smartmontools)
[![macOS (brew)](https://repology.org/badge/version-for-repo/homebrew/smartmontools.svg?header=macOS%20%28brew%29)](https://github.com/Homebrew/homebrew-core/commits/master/Formula/smartmontools.rb)
[![macOS (ports)](https://repology.org/badge/version-for-repo/macports/smartmontools.svg?header=macOS%20%28ports%29)](https://github.com/macports/macports-ports/tree/master/sysutils/smartmontools)
[![OpenIndiana](https://repology.org/badge/version-for-repo/openindiana/smartmontools.svg?header=OpenIndiana)](http://pkg.openindiana.org/hipster/en/search.shtml?token=smartmontools&action=Search)
[![Windows (choco)](https://repology.org/badge/version-for-repo/chocolatey/smartmontools.svg?header=Windows%20%28choco%29)](https://chocolatey.org/packages/smartmontools)
[![Cygwin](https://repology.org/badge/version-for-repo/cygwin/smartmontools.svg?header=Cygwin)](https://cygwin.com/packages/summary/smartmontools.html)
...
[![in repositories](https://repology.org/badge/tiny-repos/smartmontools.svg)](https://repology.org/badge/vertical-allrepos/smartmontools.svg)

Thanks to [Alexander Shaduri](https://gsmartcontrol.sourceforge.io/) there is
also [GSmartControl](https://gsmartcontrol.sourceforge.io/), a graphical user
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

[![issues](https://img.shields.io/github/issues/smartmontools/smartmontools?logo=github&label=issues)](https://github.com/smartmontools/smartmontools/issues)
[![issues closed](https://img.shields.io/github/issues-closed/smartmontools/smartmontools?label=)](https://github.com/smartmontools/smartmontools/issues?q=is%3Aclosed)
[![pull requests](https://img.shields.io/github/issues-pr/smartmontools/smartmontools?logo=github&label=pull%20requests)](https://github.com/smartmontools/smartmontools/pulls)
[![pull requests closed](https://img.shields.io/github/issues-pr-closed/smartmontools/smartmontools?label=)](https://github.com/smartmontools/smartmontools/pulls?q=is%3Aclosed)

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
