## Current state of smartmontools QNX port <a id="CurrentstateofsmartmontoolsQNXport"></a>

  - [Active tickets](https://github.com/smartmontools/smartmontools/issues)


---


### Howto install version from SVN repository <a id="HowtoinstallversionfromSVNrepository"></a>

#### Prerequisits <a id="Prerequisits"></a>

OS:  

  - QNX Neutrino 6.5.0 (M9) for x86  

Tools:  

  - automake-1.11.1  

  - perl-5.10.1nb1  

  - autoconf-2.65nb1  

  - m4-1.4.14  

  - svn client 1.6.5 (included in OS)  


Checkout the source from svn:  

```
# svn co https://smartmontools.svn.sourceforge.net/svnroot/smartmontools/trunk/smartmontools smartmontools <a id="svncohttps:smartmontools.svn.sourceforge.netsvnrootsmartmontoolstrunksmartmontoolssmartmontools"></a>
```
This will result in the following output the first time you run it:  

```
Error validating server certificate for 'https://smartmontools.svn.sourceforge.net:443':
 - The certificate is not issued by a trusted authority. Use the
   fingerprint to validate the certificate manually!
Certificate information:
 - Hostname: *.svn.sourceforge.net
 - Valid: from Mon, 04 Jan 2010 15:21:55 GMT until Sat, 05 Feb 2011 10:03:23 GMT
 - Issuer: Equifax Secure Certificate Authority, Equifax, US
 - Fingerprint: ea:d1:3e:01:cc:16:e9:9b:c2:ab:4b:0c:cc:26:5f:25:78:ea:89:b4
(R)eject, accept (t)emporarily or accept (p)ermanently? p
```
Accept by choosing permantently and run the checkout command again  

Now you will get all the files to ./smartmontools ( check the revision to be sure, what you got )
```
...
A    smartmontools/os_openbsd.cpp
A    smartmontools/os_qnxnto.h
A    smartmontools/dev_tunnelled.h
 U   smartmontools
Checked out revision 3110.
```

prepare build by calling autogen.sh
```
# ./autogen.sh <a id=".autogen.sh"></a>
```
the output should look like this
```
configure.in:33: installing `./config.guess'
configure.in:33: installing `./config.sub'
configure.in:23: installing `./install-sh'
configure.in:23: installing `./missing'
Makefile.am: installing `./depcomp'
```
now run the created script...
```
# ./config.guess <a id=".config.guess"></a>
```
... and check what your plattform is
```
i386-pc-nto-qnx6.5.0
```
now run ./configure
```
# ./configure <a id=".configure"></a>
```
the output looks like this:
```
-----------------------------------------------------------------------------
smartmontools-5.40 configuration:
host operating system:  i386-pc-nto-qnx6.5.0
C++ compiler:           g++
preprocessor flags:     
C++ compiler flags:     -g -O2 -Wall -W -fno-strict-aliasing
linker flags:           
binary install path:    /usr/local/sbin
man page install path:  /usr/local/share/man
doc file install path:  /usr/local/share/doc/smartmontools
(NOTE: old default was: /usr/local/share/doc/smartmontools-5.40)
drive database file:    [disabled]
database update script: [disabled]
local drive database:   /usr/local/etc/smart_drivedb.h
smartd config file:     /usr/local/etc/smartd.conf
smartd initd script:    /usr/local/etc/rc.d/init.d/smartd
smartd save files:      [disabled]
smartd attribute logs:  [disabled]
libcap-ng support:      no
-----------------------------------------------------------------------------
```
now build the executables
```
# make <a id="make"></a>
```

currently checked smartctl on QNX 6.5.0, 6.4.1 and 6.3.2 targets with some SATA drives ( in IDE mode ) -> basically working  

smartd is not supported up to now
