# Smartmontools Device Support <a id="SmartmontoolsDeviceSupport"></a>


---

Smartmontools work on different operating systems. Due to OS-specific
issues and also depending on the different state of smartmontools 
development on the platforms, device support ist not the same  
for all OS platforms.

## Supported Devices <a id="SupportedDevices"></a>
[RAID-Controllers](supported-raid-controllers.md) that work with smartmontools  

[USB-Devices](supported-usb-devices.md) that work with smartmontools  


## Documentation On Device Support <a id="DocumentationOnDeviceSupport"></a>
 - [Smartmontools supports NVMe starting from version 6.5](nvme-support.md)
 - [SCSI devices and smartmontools](https://github.com/smartmontools/smartmontools/blob/main/www/smartmontools_scsi.xml) - This article by [Douglas Gilbert](http://sourceforge.net/users/dpgilbert/) describes how smartmontools interacts with SCSI devices like disks and tapes (including medium changers). Passing reference is also made to devices that use the SCSI command set such as USB mass storage devices and IEEE1394 devices that use the "sbp2" protocol. In many situations SATA disks are accessed using a (partial) SCSI command set.
 - [USB devices and smartmontools](usb.md) - To access SMART functionality, smartmontools must be able to send ATA commands directly to the disk.
 - [NAS devices and smartmontools](nas.md) - Smartmontools can work also on *Network Attached Storage* (NAS) devices, if the appropiate functions are available there, e.g. on Dlink DNS-323 with [fonz firmware](http://www.inreto.de/dns323/fun-plug/)
