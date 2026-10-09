# Smartmontools Download and Installation <a id="SmartmontoolsDownloadandInstallation"></a>


---

Smartmontools 7.5 was released 2025-04-30, see [NEWS](https://www.smartmontools.org/browser/smartmontools/NEWS@RELEASE_7_5), [ChangeLog](https://www.smartmontools.org/browser/smartmontools/ChangeLog@RELEASE_7_5) and [tickets](https://github.com/smartmontools/smartmontools/issues) for details.

Release files are signed with OpenPGP/GPG key ID `FF3AEFF5`, fingerprint: `0C95 77FD 2C4C FCB4 B9A5  9964 0A30 812E FF3A EFF5`.  

The public key block is available here:
[Trac Browser](https://www.smartmontools.org/browser/doc/old/SmartmontoolsSigningKey_2021.txt),
[Git Repository](https://github.com/smartmontools/smartmontools/blob/main/doc/old/SmartmontoolsSigningKey_2021.txt),
[Key Servers](https://keyserver.ubuntu.com/pks/lookup?search=0xFF3AEFF5&fingerprint=on&op=index) (see the [FAQ](faq.md#check-signature) for older keys).

---

After installation or booting from a [Live-CD](livecds.md), you can read smartmontools man pages and try out the commands:

```
  man smartd.conf
  man smartctl
  man smartd
  
  sudo /usr/sbin/smartctl -s on -o on -S on /dev/sda
  sudo /usr/sbin/smartctl -x /dev/sda
```

Note that the default location for the manual pages are
`/usr/share/man/man5` and `/usr/share/man/man8`. 
If '`man`' doesn't find them, then you may need to add
`/usr/share/man` to your `MANPATH` environment variable.

The [Windows package](#InstalltheWindowspackage) provides 
preformatted man pages in `*.html` and `*.pdf` format.

---

## Install precompiled package <a id="Installprecompiledpackage"></a>
Precompiled packages are available for many distributions; see the [Packages](packages.md) page or [Repology.org](https://repology.org/project/smartmontools/versions) for details.

---

### Install the Windows package <a id="InstalltheWindowspackage"></a>

Download and run the latest smartmontools [NSIS](https://nsis.sourceforge.io/Main_Page)-installer (`*.win32-setup.exe`) from [here](https://sourceforge.net/projects/smartmontools/files/).
More recent Windows test releases built from Git snapshots are available [here](https://github.com/smartmontools/smartmontools-builds/releases).

The default installation type, "Full", creates start menu shortcuts, including an uninstaller, and adds the installation directory to the PATH variable.
The install type "Extract files only" is useful to unpack a "portable" version without affecting the Windows registry.
The files can also be unpacked by [7-Zip](https://www.7-zip.org/), which is also available for [Linux distributions](https://repology.org/project/7zip/versions).

Starting with smartmontools 5.43, the (32-bit) installer provides 32-bit and 64-bit executables.
The 32-bit version of smartmontools usually also works on 64-bit versions of Windows, except if the 32-bit subsystem is unavailable (e.g., 64-bit WinPE).

Virus scanners occasionally produce false positive virus reports for smartmontools executables or [NSIS Installers](https://nsis.sourceforge.io/NSIS_False_Positives).
If this is the case on your system, please send a report to the [smartmontools-support mailing list](https://listi.jpberlin.de/mailman/listinfo/smartmontools-support).
This is not needed if the detection is also reported by [VirusTotal](https://www.virustotal.com/).

The [Chocolatey package manager](https://chocolatey.org/) provides install scripts for
[smartmontools](https://chocolatey.org/packages/smartmontools) and
[GSmartControl](https://chocolatey.org/packages/gsmartcontrol).

---
### Install the OSX/Darwin package <a id="InstalltheOSXDarwinpackage"></a>

Download and run the latest smartmontools dmg image from [here](https://github.com/smartmontools/smartmontools/releases).
More recent OS X test releases built from the Git snapshots are available [here](https://github.com/smartmontools/smartmontools-builds/releases).

The package provides a Mach-O universal binary with two architectures (arm64 and x86_64) and should work on any Intel-based Mac. 

---
## Install from the source tarball <a id="Installfromthesourcetarball"></a>

Download the latest source tarball from [here](https://github.com/smartmontools/smartmontools/releases).
More recent test tarballs built from Git snapshots are available [here](https://github.com/smartmontools/smartmontools-builds/releases).

Uncompress the tarball:
```
  tar zxvf smartmontools-7.5.tar.gz
```

The previous step created a directory called `smartmontools-7.5`
containing the code. Go to that directory, build, and install:
```
  cd smartmontools-7.5
  ./configure
  make
  sudo make install
```

These optional arguments of `./configure` are fully explained in the
[INSTALL](https://www.smartmontools.org/browser/doc/INSTALL) file.
The most important one is `--prefix` to change the default installation directories.
If you don't pass any arguments to `./configure` all files will reside under
`/usr/local` to not interfere with files from your distribution.

To compile from another directory (avoids overwriting virgin files from the smartmontools package) 
replace `./configure [options]` by:
```
  mkdir objdir
  cd objdir
  ../configure [options]
```

To install to another destination (useful for testing and to avoid overwriting an existing smartmontools installation)
replace `make install` by:
```
  make DESTDIR=/home/myself/smartmontools-test install
```

Use a full path: `~/smartmontools-test` would work but `./smartmontools-test` won't.

The smartmontools binaries for Windows can be built from the source tarball (or from Git) using the [MinGW-w64](https://www.mingw-w64.org/) runtime.
Build environments may be [Cygwin](https://cygwin.com/) or [MSYS2](https://www.msys2.org/), cross-compilation under Linux is also supported.
Extra `./configure` arguments `--host=...` and `--build=...` may be required.
The `make install` command does not work for Windows.
See [INSTALL](https://www.smartmontools.org/browser/doc/INSTALL) file for details.

---

## Install latest unreleased code from the Git repository <a id="InstalllatestunreleasedcodefromtheGitrepository"></a>

We have also [CI builds](https://github.com/smartmontools/smartmontools-builds/releases).

For those, who don't already have a Git client installed,
here is a [detailed instruction](https://github.com/git-guides/install-git) to install Git on different operating systems.  

All you need to do to get the latest development code is
(but note that the development code may be unstable, and that the
documentation and code may be inconsistent):

```
  git clone https://github.com/smartmontools/smartmontools
```

This will create a subdirectory called `smartmontools/` containing the
code. Go to that directory, build, and install:
```
  cd smartmontools
  ./autogen.sh
  ./configure
  make
  sudo make install
```

See notes under [Install from source tarball](#Installfromthesourcetarball) for different options to `./configure`
and other useful remarks.

To update your sources from trunk (development version):
```
  cd smartmontools
  git pull
```

One of the really cool things about version control systems is that you can get
*any* version of the code you want, from the first release up to
the most current development version. And it's trivial, because
each release is __tagged__ with a name. Look at the 
[tags in our Git repository](https://github.com/smartmontools/smartmontools/tags)
to see what the different names are.

E.g. run the following command to fetch the RELEASE_5_38 release:

```
  git clone https://github.com/smartmontools/smartmontools -b RELEASE_5_38
```

Note that the directory with the smartmontools sourcefiles is named **`sm5`** in
releases <= 5.38.

The rest of the build procedure is the same like described above.

---

## Update the drive database <a id="Updatethedrivedatabase"></a>

The drive database file `drivedb.h` can be updated separately with the following command:
```
  sudo /usr/sbin/update-smart-drivedb
```
This command uses [curl](https://curl.haxx.se/), [wget](https://www.gnu.org/software/wget/) or [lynx](https://lynx.invisible-island.net/) for download. A proxy server can be specified by the environment variable `https_proxy` (lower case only), see the man pages of the tools for details.

The downloaded file is verified with OpenPGP/GPG key ID `721042C5` (release 6.6: `DFD22559`).

The public key block is [included in the script](https://github.com/smartmontools/smartmontools/blob/11415ee0b9d5f4a22ddfb3722fdfb05e72372a03/smartmontools/update-smart-drivedb.in#L400).
It is also available at [Key Servers](https://keyserver.ubuntu.com/pks/lookup?search=0x721042C5&fingerprint=on&op=vindex) ([release 6.6](https://keyserver.ubuntu.com/pks/lookup?search=0xDFD22559&fingerprint=on&op=vindex)) but there is no need to import it into a local keyring.

The Windows package provides `update-smart-drivedb.ps1` since 7.3. It reads the proxy configuration from system settings.
Older releases provide `update-smart-drivedb.exe`.

The `drivedb.h` file can be viewed or downloaded () using the Trac browser: 
[7.0-7.1](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_7_0_DRIVEDB),
[7.2](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_7_2_DRIVEDB),
[7.3-7.4](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_7_3_DRIVEDB),
[7.5](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_7_5_DRIVEDB),
[main](https://www.smartmontools.org/browser/src/drivedb.h).  

The following branches are no longer maintained:
[5.39](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_5_39_DRIVEDB),
[5.40](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_5_40_DRIVEDB),
[5.41](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_5_41_DRIVEDB),
[5.42](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_5_42_DRIVEDB),
[5.43](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_5_43_DRIVEDB),
[6.0](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_6_0_DRIVEDB),
[6.1](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_6_1_DRIVEDB),
[6.2](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_6_2_DRIVEDB),
[6.3](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_6_3_DRIVEDB),
[6.4](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_6_4_DRIVEDB),
[6.5](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_6_5_DRIVEDB),
[6.6](https://www.smartmontools.org/browser/smartmontools/drivedb.h@origin/RELEASE_6_6_DRIVEDB).

---

## Run smartmontools from Live-system <a id="RunsmartmontoolsfromLive-system"></a>

If you have a system that is showing signs of disk trouble (for
example, it's unbootable and the console is full of disk error
messages) it can be handy to have a version of smartmontools that can
be run off of a bootable medium to examine the disk's SMART data and run
self-tests.  This is also useful if you want to run Captive Self-Tests
(the **`-C`** option of `smartctl` ) on disks that can not easily be unmounted,
such as those hosting the Operating System files. Or you can use
this to run `smartctl` on computers that don't use Linux as the
day-to-day operating system.

Please see the list of [Live CDs/DVDs containing smartmontools](livecds.md).

---
**License**  

All content in this wiki is published under [GNU GPL](https://www.gnu.org/licenses/gpl-2.0.html#SEC1).
