"use strict";

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a + b;
} // arrow function


var somaAF = function somaAF() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(somaAF());
console.log(somaAF(1));
console.log(somaAF(1, 2));
console.log(somaAF(1, 2, 3));
console.log(somaAF(null, null, 3, 4));
