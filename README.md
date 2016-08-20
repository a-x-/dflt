# dfltv
default value wrapper

if value is not defined or matches with pattern it subtitutes with default value
else passes as is

### using
```es6
import Dflt from 'dflt'
const dflt = Dflt('oh fuck', 'oh god')
const bazquxval = fetchBazQux(/*...*/)
foobar(dflt(bazquxval)) // if bazquxval equals 'oh fuck' or not bazquxval: 'oh god' else bazquxval
// ...
```
