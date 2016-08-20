"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// if value is not defined or matches with pattern it subtitutes with default value
// else passes as is
//
// using:
// import Dflt from 'dflt'
// const dflt = Dflt('oh fuck', 'oh god')
// const bazquxval = fetchBazQux(/*...*/)
// foobar(dflt(bazquxval)) // if bazquxval equals 'oh fuck' or not bazquxval: 'oh god' else bazquxval
// // ...

var Dflt = function Dflt(match, dfltVal) {
  return function (val) {
    return (match !== undefined ? val === match : !val) ? dfltVal : val;
  };
};

exports.default = Dflt;

