## Migrate old os_*youros*.cpp to new class interface <a id="Migrateoldos_youros.cpptonewclassinterface"></a>

Christian Franke wrote this quick outline how a migration works, which he already tested with os_linux.cpp.

### Step 1: Move adapter classes into os_*youros*.cpp <a id="Step1:Moveadapterclassesintoos_youros.cpp"></a>

 - Append adapter classes to old module:
```
#!sh
$ cat dev_legacy.cpp >> os_youros.cpp
```
 - Re-configure, this should now detect new interface:
```
#!sh
$ ./configure
...
checking whether os_youros.cpp uses new interface... yes
```
 - This should compile and work!
 - Move #includes to top, remove duplicates.
 - Remove all dummy functions for controllers not supported on your os (marvell_command_interface, ...).
 - Remove corresponding classes (e.g legacy_marvell_device, ...).
 - **- Remove corresponding section from legacy_smart_interface** get_custom_smart_device(). If nothing left, remove this function.
 - Rename remaining classes 'legacy_*' to 'youros_*'. Rename namespace 'os' to 'os_youros'.
 - This should compile and work!

### Step 2: Merge old functions into class member functions <a id="Step2:Mergeoldfunctionsintoclassmemberfunctions"></a>

**Old:**
```
#!c
int deviceopen(const char *pathname, char *type)
{
  ...
  int fd = open(pathname, ...);
  ...
  return fd;
}

bool youros_smart_device::open()
{
  m_fd = ::deviceopen(get_dev_name(), (char*)m_mode);
  if (m_fd < 0) {
    set_err(errno);
    return false;
  }
  return true;
}
```

**New:**
```
#!cpp
bool youros_smart_device::open()
{
  ...
  m_fd = ::open(get_dev_name(), ...);
  if (m_fd < 0) {
    set_err(errno);
    return false;
  }
  return true;
}
```

**Old:**
```
#!c
int ata_command_interface(int fd, smart_command_set command, int select, char *data)
{
  ...
  if (ioctl(fd, ...))
    return -1;
  ...
  return 0;
}

int youros_ata_device::ata_command_interface(smart_command_set command, int select, char * data)
{
  return ::ata_command_interface(get_fd(), command, select, data);
}
```

**New:**
```
#!cpp
int youros_ata_device::ata_command_interface(smart_command_set command, int select, char * data)
{
  ...
  if (ioctl(get_fd(), ...))
    return -1;
  ...
  return 0;
}
```


### Step 3: Convert SMART-only to full fledged ATA pass through <a id="Step3:ConvertSMART-onlytofullfledgedATApassthrough"></a>

 - Change base class of 'youros_ata_device' from 'ata_device_with_command_set' to 'ata_device'.
 - **- Change 'youros_ata_device** ata_command_interface()' to 'youros_ata_device::ata_pass_through()'.
 - Add parameter check using ata_cmd_is_ok(in, 'supported features')
 - Remove 'switch (command) {....}', set ioctl input struct directly from input registers e.g. 'in.in_regs.*'.
 - Remove special handling for SMART STATUS, return result registers in 'out.out_regs' if requested by 'in.out_needed.is_set()'.
 - Adjust returns:
   - Replace 'return 0;' by 'return true;'.
   - Replace 'errno = ERR; return -1;' by 'return set_err(ERR, "optional message", ...)'.
 - Optional add 48bit ATA pass through support:
   - If 'in.in_regs.is_48bit_cmd()' is set, pass low (in.in_regs.lba_mid) and high (in.in_regs.prev.lba_mid) byte of each register to ioctl.

### Later <a id="Later"></a>
 - Rework device scanning.
 - Add/Rework auto-detection (function autodetect_open()).
 - **- remove os_youros.h, each module does only export smart_interface** init().

### Example for Steps 1+2: <a id="ExampleforSteps12:"></a>
See changeset [r2623](https://github.com/smartmontools/smartmontools/commit/94f4c352c2306a012dc008c4c267e89c841fc6c4)

### Example for Step 3 (3ware only): <a id="ExampleforStep33wareonly:"></a>
See changeset [r2624](https://github.com/smartmontools/smartmontools/commit/7527807e9bf057c75ef35ded0afb36ae94b677e7)
