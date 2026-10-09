## Report from Alex Keda <a id="ReportfromAlexKeda"></a>

Device is working with "-d usbcypress". Reported within the [mailinglist](http://sourceforge.net/mailarchive/forum.php?thread_name=20100326164007.GA25263%40x61s.reliablesolutions.de&forum_name=smartmontools-support).

## Hint/Remark from Stefan Nowak <a id="HintRemarkfromStefanNowak"></a>

Make sure the first command you send to the device is "-s on".
After that you can use all the queries/commands you like.

If you first query, and SMART wasn't enabled yet, then you'll get nonsensical  info. And if you then try to enable SMART, it fails.
If you got into this situation, you have to disconnect and reconnect the device (sort of "start a new session"), and first send "-s on", and from then on all commands works as usual.

That's it. For those who want to see more details, see the logs below.


## Correct command order <a id="Correctcommandorder"></a>

```
$ smartctl -d usbcypress -s on sdb
# You get the confirmation. <a id="Yougettheconfirmation."></a>
# And after that, use any command you like. <a id="Andafterthatuseanycommandyoulike."></a>
```

## Wrong command order <a id="Wrongcommandorder"></a>

```
$ smartctl -d usbcypress -a sdb

=== START OF INFORMATION SECTION ===
… Correct info about the device …
Error SMART Values Read failed
=== START OF READ SMART DATA SECTION ===
… Some nil values …
Error SMART Error Log Read failed
Error SMART Error Self-Test Log Read failed

$ smartctl -d usbcypress -s on sdb

Smartctl: Device Read Identity Failed (not an ATA/ATAPI device)
A mandatory SMART command failed: exiting. To continue, add one or more '-T perm
issive' options.

# Whatever command you enter from now on fails. <a id="Whatevercommandyouenterfromnowonfails."></a>
# Disconnect and reconnect the device, then enable SMART as shown in the chapter "Correct command order" <a id="DisconnectandreconnectthedevicethenenableSMARTasshowninthechapterCorrectcommandorder"></a>
```
