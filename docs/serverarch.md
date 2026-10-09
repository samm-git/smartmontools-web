# Server arch <a id="Serverarch"></a>

## Overview <a id="Overview"></a>
This server is providing hosting for the smartmontools project trac. This document contains description about installed software and configuration details. No sensitive data should be included. Access to this page is restricted. 
## Software overview <a id="Softwareoverview"></a>
Server is running in the VM and based on CentOS 6.5.

Currently server using this software:
 - **nginx** - web server.
 - **Trac** - project management and bug/issue tracking system
 - **MySQL server** - database for the Trac
 - **postfix** - mail server, in smtp relay mode
 - **doxygen** - to build sourcecode documentation
 - **graphviz** - to generate the images of the sourcecode documentation
 - **nagios** - status monitoring and reporting
Also standard UNIX daemons (crond, syslogd, sshd, etc.) are running, as well as VMWare agent required by cloud hosting provider.

## nginx web server configuration notes <a id="nginxwebserverconfigurationnotes"></a>
Nginx is installed from [official nginx repository](http://wiki.nginx.org/Install) and is used to serve static Trac data directly and forward all other requests to the Trac using FastCGI protocol. Configuration is located in the `/etc/nginx/conf.d/trac-smartmontools.conf` file. 
## HTTPS Configuration <a id="HTTPSConfiguration"></a>
Server is configured to use (and force) TLS for the HTTP protocol. Certificates are automatically obtained using LetsEncrypt free service. This is done using Go lang client acmetool. Initially official python client was in use, but it was working very unreliable, so i decided to replace it. 
Acmetool automatically reload nginx configuration if certificates are updated. Software is installed in the `/opt/acmetool` folder, with database in the `/var/lib/acme`. Hooks (to reload nginx) are installed in the `/usr/libexec/acme/hooks` directory. Authentication is done using acme challenge in the `/data1/smartmontools/misc/.well-known/acme-challenge` folder. Cron file to do daily check (and update, if needed) - `/etc/cron.d/acmetool`. 
To check status of the certificates use `/opt/acmetool/bin/acmetool status` command. It is also possible to revoke certificates and do other related tasks, see `--help` command for the full list. HTTPS status additionally checked by the Nagios check.

## Trac <a id="Trac"></a>
### Local modification and configuration <a id="Localmodificationandconfiguration"></a>

Trac is installed using `pip install` command. 

Notification issue in the Trac Account Manager plugin was fixed, see: https://trac-hacks.org/ticket/12228. Fixed version is placed in the trac/plugins directory.  


To provide syntax highlighting **Pygments** module been installed. Also **configobj** was added to make [Trac Fine Grained Permission](http://trac.edgewall.org/wiki/TracFineGrainedPermissions) functionality working. For the Table Of Content generation [TocMacro plugin](http://trac-hacks.org/wiki/TocMacro) is installed.   

For user management [Account Manager Plugin](http://trac-hacks.org/wiki/AccountManagerPlugin) is used instead of limited native functionality.  

Smartmontools Trac instance is located in `/data1/smartmontools/trac` directory. To (re)start init.d style script created: `/etc/init.d/trac-smartmontools`. This script using `/usr/local/bin/trac-fastcgi` python script, which actually running Trac in the FastCGI mode. If you need to restart trac use `/etc/init.d/trac-smartmontools restart` command.

### 64k bytes wiki page limit <a id="64kbyteswikipagelimit"></a>
It was found that Trac is using MySQL TEXT type to store wiki pages. This type limits raw page size to 64k bytes. To overcome this limitation database was altered with such query: `` ALTER TABLE  `wiki` CHANGE  `text`  `text` MEDIUMTEXT CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL;``. This is [fixed in the upstream](https://trac.edgewall.org/ticket/8396) but only for the Trac 1.1.x. 

### SVN Synchronization <a id="SVNSynchronization"></a>
Primary SVN server is located on [source forge server](http://svn.code.sf.net/p/smartmontools/code/). Trac also needs local copy of the repository, so synchronization is configured to provide this. Initial configuration:
```
#!bash
svnadmin create /data1/svn-mirror/smartmontools
echo -e '#!/bin/sh\n\nexit 0'> /data1/svn-mirror/smartmontools/hooks/pre-revprop-change
chmod +x /data1/svn-mirror/smartmontools/hooks/pre-revprop-change
svnsync init file:///data1/svn-mirror/smartmontools http://svn.code.sf.net/p/smartmontools/code/
```
To synchronize new commits with Trac files hooks/post-commit and hooks/post-revprop-change were added.  
  

`hooks/post-revprop-change`:
```
#!bash
#!/bin/sh

# post-revprop-change hook <a id="post-revprop-changehook"></a>
/usr/bin/trac-admin /data1/smartmontools changeset modified $1 $2
# we should not block mirroring if trac fails <a id="weshouldnotblockmirroringiftracfails"></a>
exit 0;
```
`hooks/post-commit`:
```
#!bash
#!/bin/sh

# post-commit hook <a id="post-commithook"></a>
/usr/bin/trac-admin /data1/smartmontools changeset added "$1" "$2"
# we should not block mirroring if trac fails <a id="weshouldnotblockmirroringiftracfails-1"></a>
exit 0;
```
To do actual syncronization crontask this added to the trac user crontab:
```
*/3 * * * * /usr/bin/svnsync sync --non-interactive file:///data1/smartmontools/svn-mirror > /dev/null
```
### Trac man and docxml viewer <a id="Tracmananddocxmlviewer"></a>
TODO
### Trac SPAM filtering <a id="TracSPAMfiltering"></a>
To deal with SPAM plugin [TracSpamFilter](http://trac.edgewall.org/wiki/SpamFilter) has been installed. Also it was integrated with TAM plugin. It is manageable from GUI and hopefully will protect our WIKI from the spam attempts. Internal filtering is now implemented using BadContent page (protected from non-admin users) which contains regular expressions to filter. 

Below is a list of external services we are using:
- Akismet
- StopForumSpam
- BotScout
- HTTP:BL
- FSpamList
- Blacklists: list.blogspambl.com, all.s5h.net, dnsbl.tornevall.org
This services are disabled:
- Defensio: EoL notice on the main page
- BlogSpam: timeouts and very slow responses

Also to remove spam account and all it tickets/messages/attachments special script (/home/samm/removeuser.sh) was created, please use with care and make entries for deleted users
### Trac admin users <a id="Tracadminusers"></a>
Users with **TRAC_ADMIN** permission: `UserQuery(perm=TRAC_ADMIN)`
## Postfix configuration notes <a id="Postfixconfigurationnotes"></a>
Postfix is installed as forwarding relay. All mail is sent using cloud SMTP **relay.t3mx.com**, using password based authentication.  Alias for root is configured in `/etc/aliases` file.
## Monitoring <a id="Monitoring"></a>

### Nagios <a id="Nagios"></a>

For the monitoring purposes [Nagios 4.3.2 is installed](https://www.smartmontools.org:8443/) from the EPEL repository. Nginx configuration is located in the `/etc/nginx/conf.d/nagios` file. To support PHP frontend php-fpm is installed and enabled. For the nagios CGI scripts [fcgiwrap](https://github.com/gnosek/fcgiwrap) is installed in the `/usr/local/sbin` directory and `/etc/init.d/spawn-fcgi` script. 
For the monitoring of the FastCGI services (PHP, Spawn-FCGI, TRAC) check_fcgi and check_trac plugins are copied to the `/usr/local/lib64/nagios/plugins/` directory.

### Munin <a id="Munin"></a>

Installed package munin-node from EPEL repository. The node is monitored by [Gabrieles Munin Master](https://munin.dipohl-kunden.de/smartmontools.org/sphere.smartmontools.org/index.html) (Protected by htaccess. Contact Gabriele to get the credentials.)

## Backup & restore <a id="Backuprestore"></a>
All backups are stored in the `/data1/backup` folder. MySQL backup is done using mysqldump and system/trac backup is implemented using [duplucity](http://duplicity.nongnu.org/)/[duply](http://sourceforge.net/projects/ftplicity/) tools. Backups are encrypted with pass-phrase. 

To download backups special user `safeu` is in use. This user allows sftp download of /data1/backup folder. Shell access and port forwarding are not allowed. To mirror content to the remote directory following script can be used:
```
cd ~/smartmontools-backup
lftp sftp://safeu:@smartmontools.org: -e "mirror;bye" 
```

To restore duplicity backups use
```
duplicity restore file:///home/files/backup/ ~/tmp/restore
```

to restore mysql dumps:
```
cd mysql
gpg --decrypt-files *gpg
```
And use mysql tool to import dumps if needed.
## Cronjobs <a id="Cronjobs"></a>

### Build sourcecode documentation for the homepage <a id="Buildsourcecodedocumentationforthehomepage"></a>

`/etc/cron.d/static-hp`

It uses software doxygen and graphviz and svn of course :)

The following files in directory `/home/trac/doxygen` belong to the method:

 - do_doxy.sh - Script to run within cronjob
 - Doxyfile.hp - Configfile for doxygen
 - doc_main.txt - Content of start page
 - last-svnrev - SVN revision number from last build

The following directories play a role in the method:

 - WWWDIR=/data1/smartmontools/misc/static
 - REPO=file:///data1/smartmontools/svn-mirror
 - SVNHEAD=/data1/svn-head
 - WORKDIR=$SVNHEAD/trunk/smartmontools/
### SVN Synchronization <a id="SVNSynchronization-1"></a>
Task to synchronize local SVN storage with remote origin, script  `/etc/cron.d/svnsync`.
