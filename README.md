# dfltv
default value wrapper

if value is not defined or it matches with a pattern then it subtitutes with default value
else passes as is

### using
```es6
import Dflt from 'dflt'
const dflt = Dflt('oh fuck', 'oh god')
//                 ^ pattern  ^ default
const bazquxval = fetchBazQux(/*...*/)
foobar(dflt(bazquxval)) // if bazquxval equals 'oh fuck' or not bazquxval: 'oh god' else bazquxval
// ...
```
