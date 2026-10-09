# Some general guidelines for new smartmontools developers <a id="Somegeneralguidelinesfornewsmartmontoolsdevelopers"></a>


### Documentation <a id="Documentation"></a>

 - Keep the documentation current, by updating these files:
  - smartctl.8.in
  - smartd.8.in
  - smartd.conf.5.in
 - Add your name to the AUTHORS file
 - Update the CHANGELOG file (at the top) each time that you check in changes to SVN

### Code <a id="Code"></a>

 - If you are adding substantial code or new code, add yourself as a copyright holder to the top of the relevant file(s).
 - Please [comment your code enough](codingstyle.md) to make it understandable to others.
 - Please keep in mind that smartmontools runs on many different platforms, so one should avoid platform and operating-system-specific code whenever possible. If you are concerned about the portability of your code, please write to the developers list to ask for help.

### Collaboration <a id="Collaboration"></a>

 - Subscribe to the [smartmontools developers mailing list](https://listi.jpberlin.de/mailman/listinfo/smartmontools-devel) 
 - Your code should in general be checked directly into SVN. If you are concerned that your changes might have a broad impact, then it is a good idea to circulate an email about it to the developers mailing list above, and perhaps to also circulate your changes in the form of a patch.
