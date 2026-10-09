## OS X Package <a id="OSXPackage"></a>
You can get OSX package directly from http://builds.smartmontools.org/. Please keep in mind, that package is not signed, so you will have to open pkg file with ctrl key pressed. Another option is to use ports system, smartmontools is available in the [brew](http://brew.sh/), [fink](http://www.finkproject.org/) and [MacPorts](https://www.macports.org/).

## Current state of smartmontools Darwin / MacOSX port <a id="CurrentstateofsmartmontoolsDarwinMacOSXport"></a>

Smartmontools is using very limited [IOATASMARTInterface](https://developer.apple.com/library/mac/documentation/IOKit/Reference/IOATASMARTInterface_reference/) API provided by Darwin/OSX core. There is [no possibility to send raw ATA or SCSI commands](http://coriolis-systems.com/blog/2014/07/ssds-and-os-x/) to a disk, so functionality of smartmontools on darwin is very limited. This could be changed only if Apple will extend IOATASMARTInterface API or will open source AHCI driver code.

  - [Active tickets](https://github.com/smartmontools/smartmontools/issues)
