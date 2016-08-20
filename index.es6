// if value is not defined or matches with pattern it subtitutes with default value
// else passes as is
//
// using:
// import Dflt from 'dflt'
// const dflt = Dflt('oh fuck', 'oh god')
// const bazquxval = fetchBazQux(/*...*/)
// foobar(dflt(bazquxval)) // if bazquxval equals 'oh fuck' or not bazquxval: 'oh god' else bazquxval
// // ...

const Dflt = (match, dfltVal) => val => (match !== undefined ? val === match : !val) ? dfltVal : val

export { Dflt as default }
