### New feature: attribute logging in smartmontools <a id="Newfeature:attributelogginginsmartmontools"></a>

Manfred Schwarb on 2009-08-02:

```
I just have added a new experimental feature to the smartmontools
development version: attribute logging.
 
You can now log all normalized and raw attribute values at each
check interval into a file (per drive), so you can track the change of
values over time.

As some vendors seem to overload some raw values (e.g. for rate
information, storing the count of events in the high bits and the count
of failed events in the low bits, instead of only storing one value), 
this feature may help to decipher things, as
we can see which bits evolve at what rate, and how this reflects
in the normalized values (these are computed in the hard disk chip).
 
You can also use this feature to visualize things more easily, e.g. 
monitoring tools can only parse the log files instead of periodically 
polling smartctl. But please don't rely on this feature for now, we
will see how it proves in practice.
 
The log file format is as follows:
Timestamp;    Attribute-ID;Attribute-norm-value;Attribute-raw-value; ...
 
e.g.:
2009-07-31 09:39:47;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3681;      10;100;0;
2009-07-31 09:41:07;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3681;      10;100;0;
2009-07-31 10:11:07;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3682;      10;100;0;
2009-07-31 10:41:08;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3682;      10;100;0;
2009-07-31 11:11:07;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3683;      10;100;0;
2009-07-31 11:41:08;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3683;      10;100;0;
2009-07-31 12:11:07;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3684;      10;100;0;
2009-07-31 12:41:08;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3684;      10;100;0;
2009-07-31 13:11:07;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3685;      10;100;0;
2009-07-31 13:41:08;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3685;      10;100;0;
2009-07-31 14:11:07;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3686;      10;100;0;
2009-07-31 14:41:08;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3686;      10;100;0;
2009-07-31 15:11:08;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3687;      10;100;0;
2009-07-31 15:41:07;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3687;      10;100;0;
2009-07-31 16:11:08;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3688;      10;100;0;
2009-07-31 16:41:07;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3688;      10;100;0;
2009-07-31 17:11:08;    1;200;0;        3;239;1025;     4;100;8;        5;200;0;        7;200;0;        9;95;3689;      10;100;0;
 
 
smartd has a new option -A PREFIX / --attributelog=PREFIX; if PREFIX is
set logging is activated, and the log files are stored at a location
indicated by PREFIX. For details see "man smartd". 

There are 2 configure options so you can enable logging per default,
see "configure --help" for details.
 
So I would like to invite everybody to test this new feature, and 
perhaps even help to decipher some of these strange raw values.
 
Note that we have switched to SVN, so the procedure to check out the
development version has changed, see our homepage for details.
```

Manfred Schwarb on 2009-08-22:

```
I tried to keep the output as simple as possible and therefore I opted
for decimal output. However, I recently found myself often
converting the raw values into hex, as it is sometimes more meaningful.

It's very easy of course, e.g. with something like

awk -F";" '{ printf "%s",$1; for(i=2; i<=NF; i=i+3) { printf \
";%s;%s;0x%012x",$(i),$(i+1),$(i+2) }; printf "\n" }' attrlog.*

```
