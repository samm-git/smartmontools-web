# Smartmontools Release Policy <a id="SmartmontoolsReleasePolicy"></a>

A few words about smartmontools releases:

## Sourcecode <a id="Sourcecode"></a>

We try to provide source code releases X.Y at least two times a year. *Please note that odd-numbered releases will no longer be considered "experimental" or "unstable"*.

Release candidate tarballs may be provided prior to the final release. In this case only bugfix or trivial commits are allowed on the SVN trunk until the final release.

For each release a SVN tag named [RELEASE_X_Y](https://github.com/smartmontools/smartmontools/commit/e239b96e07770538823921d49b9609533ed47a5c) is created (see also [do_release script](https://www.smartmontools.org/browser/trunk/smartmontools/do_release)).

After a release X.Y the package version number is [incremented to X.Y+1](https://github.com/smartmontools/smartmontools/commit/e29d5d82dfe1b6a4effd00894baf0a7d7e2f2289) on SVN trunk.

If important bugs are reported after X.Y is release, we try to provide [bugfix releases X.Y.1](https://github.com/smartmontools/smartmontools/commit/a17b0cabec43a365807aba6a9cc3956801d147ed), X.Y.2, ... as soon as possible. These are build from a SVN branch named [RELEASE_X_Y_BRANCH](https://www.smartmontools.org/browser/branches/RELEASE_5_39_BRANCH) created from tag [RELEASE_X_Y](https://github.com/smartmontools/smartmontools/commit/9d03c37500271df7abe2342acfd8f56da80bcb81). Such a branch is maintained at least until the next major release.

Release files should be uploaded to the [SourceForge](https://sourceforge.net/projects/smartmontools/files/) and [Github](https://github.com/smartmontools/smartmontools/releases). 

## Binaries <a id="Binaries"></a>

Precompiled packages are only provided for Windows and MacOS. For other platforms see [Download info](download.md#Installprecompiledpackage).

## Drive Database <a id="DriveDatabase"></a>

The drive database file [drivedb.h](https://www.smartmontools.org/browser/trunk/smartmontools/drivedb.h) is maintained on trunk. If new features added to drivedb.h are incompatible with the last major release X.Y, a compatible version is provided on a branch named [RELEASE_X_Y_DRIVEDB](https://www.smartmontools.org/browser/branches/RELEASE_5_39_DRIVEDB). Compatible changes from trunk are frequently [merged to this branch](https://www.smartmontools.org/log//branches/RELEASE_5_39_DRIVEDB). The [update-smart-drivedb](https://www.smartmontools.org/browser/trunk/smartmontools/update-smart-drivedb.in) script checks this branch first.
