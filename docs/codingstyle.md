# Coding Styleguide <a id="CodingStyleguide"></a>


### Comments <a id="Comments"></a>

Doxygen generates our [sourcecode documentation pages](https://www.smartmontools.org/static/doxygen/) 
automatically by *reading* the sourcecode. If you set a block with C++ comment lines, 
where each line starts with an additional slash, the text will be shown in the doxygen generated docs.
Note that a blank line ends a documentation block. You may add two blocks, a first one with a brief description
and a second with an extended description for a class, struct or function.

```
/// SAT support.
/// Implements ATA by tunnelling through SCSI.

class sat_device
```

Use *in line* comment style to add explanation on defines and variables.
A comment starting with three slashes, will appear in doxygen.
Comments that start with only two slashes, will be invisible there.

```
// ATA ONLY
bool sct_erc_set;                       // set SCT ERC to:
unsigned short sct_erc_readtime;        // ERC read time (deciseconds)
unsigned short sct_erc_writetime;       // ERC write time (deciseconds)

unsigned char curr_pending_id;          // ID of current pending sector count, 0 if none
unsigned char offl_pending_id;          // ID of offline uncorrectable sector count, 0 if none
```

### Some Hints <a id="SomeHints"></a>

A snippet cut out of a mail from Christian Franke on developers list..

Due to its long history, many contributors and late move from C to C++, smartmontools is in fact a mixture of different coding styles. 

In my recent additions I used (or tried to use) the following for new code:

```
Naming:
lowercase_underline_lowercase (like C++ std::)

Indentation:
2 Blanks, no tab characters

No extra indentation level for {...} blocks

No extra line for '{' except for the function body.

Lokal variables:
C++/C99 declaration statements: First use=declaration=initialization
(I really dislike traditional C style with all decls at the beginning of a block :-)

Null pointers:
"Stroustrup Style": 0 instead of NULL,
(T *)0 if needed or compiler check is desired.

Checks in boolean style: if (p) ; if (!p) ;

In comments: "nullptr" (forward compatible to C++0x :-)

Exceptions:
Avoid any try/catch blocks if possible, use RAII instead
```
