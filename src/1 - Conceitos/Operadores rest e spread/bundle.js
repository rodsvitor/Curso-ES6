"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// =========================== Operador rest (...) ===========================
//Operador rest na desestruturação do objeto
var usuario = {
  nome: 'Rodrigo',
  idade: 23,
  empresa: 'Rocketseat'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]); // console.log(nome);
// console.log(resto);
//Operador rest na desestruturação de um array


var array = [1, 2, 3, 4];
var a = array[0],
    b = array[1],
    c = array.slice(2); // console.log(a);
// console.log(b);
// console.log(c);
//Operador rest na desestruturação dos parametros de uma function

function soma(a) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return params.reduce(function (total, currentValue) {
    return total + currentValue;
  });
} // console.log(soma(1, 2, 3, 4, 5, 6));
// ==================================== Operador SPREAD ====================================
// == Na união de array ==


var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [].concat(array1, array2); // console.log(array3);
// == Na união de objetos ==

var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
  cargo: 'teste'
}); // console.log(usuario);
// console.log(usuario2);


var cargo = {
  nomeCargo: 'Engenheiro',
  salario: 10000.00
};

var usuario3 = _objectSpread(_objectSpread({}, usuario), cargo); // console.log(usuario3);
