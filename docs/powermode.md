# Powermanagement <a id="Powermanagement"></a>

If you use a computer under control of power management, you should instruct `smartd` how to handle disks in low power mode.

ATA disks have five different power states. In order of increasing power consumption they are: `'OFF'`, `'SLEEP'`, `'STANDBY'`, `'IDLE'`, and `'ACTIVE'`. Typically in the OFF, SLEEP, and STANDBY modes the disk's platters are not spinning. But usually, in response to SMART commands issued by `smartd`, the disk platters are spun up. So if this option is not used, then a disk which is in a low-power mode may be spun up and put into a higher-power mode when it is periodically polled by `smartd`.

Note that if the disk is in SLEEP mode when `smartd` is started, then it won't respond to `smartd` commands, and so the disk won't be registered as a device for `smartd` to monitor. If a disk is in any other low-power mode, then the commands issued by `smartd` to register the disk will probably cause it to spin-up.

### `-n POWERMODE[,N][,q]` <a id="-nPOWERMODENq"></a>

This *nocheck* Directive is used to prevent a disk from being spun-up when it is periodically polled by `smartd`. It specifies if `smartd`'s periodic checks should still be carried out when the device is in a low-power mode. It may be used to prevent a disk from being spun-up by periodic `smartd` polling.

The allowed values of POWERMODE are:

#### -n never <a id="-nnever"></a>
`smartd` will poll (check) the device regardless of its power mode. This may cause a disk which is spun-down to be spun-up when **smartd** checks it. This is the default behavior if the '-n' Directive is not given.

#### -n sleep <a id="-nsleep"></a>
check the device unless it is in SLEEP mode.

#### -n standby <a id="-nstandby"></a>
check the device unless it is in SLEEP or STANDBY mode. In these modes most disks are not spinning, so if you want to prevent a laptop disk from spinning up each time that `smartd` polls, this is probably what you want.

#### -n idle <a id="-nidle"></a>
check the device unless it is in SLEEP, STANDBY or IDLE mode. In the IDLE state, most disks are still spinning, so this is probably not what you want.

Maximum number of skipped checks (in a row) can be specified by appending positive number ',N' to POWERMODE (like '-n standby,15'). After N checks are skipped in a row, powermode is ignored and the check is performed anyway.

When a periodic test is skipped, `smartd` normally writes an informal log message. The message can be suppressed by appending the option ',q' to POWERMODE (like '-n standby,q'). This prevents a laptop disk from spinning up due to this message.

Both ',N' and ',q' can be specified together.
