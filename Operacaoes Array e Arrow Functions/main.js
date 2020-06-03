const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// =================================== Map: ===================================

// //Um parâmetro
// const map = array.map(function(item) {
//   return item * 2;
// });
// Simplificado
// const map = array.map(item => item * 2);

// // Dois Parâmetros
// const map = array.map(function(item, index) {
//   return item + index;
// });
// // Simplificado
// const map = array.map((item, index) => item + index);
// console.log(map);

// ======================================= Reduce =======================================

// const reduce = array.reduce(function (total, index) {
//   return total + index;
// });
// //Simplificado
// const reduce = array.reduce((total, index) => total + index);
//
// console.log(reduce);

// ======================================= Filter =======================================

// const filter = array.filter(function(item) {
//   return item %2 === 0;
// });
// //Simplificado
// const filter = array.filter(item => item %2 === 0);
//
// console.log(filter);


// ======================================= Find =======================================

// const find = array.find(function (item) {
//   return item === 2;
// });
// //Simplificado
// const find = array.find(item => item === 4);
// console.log(find)

// ======================================= Arrow Function =======================================

const a = () => 1; //Integer
const b = () => "nome"; //String
const c = () => [1,2,3,4]; //Array
const d = () => ({ nome : 'Rodrigo'}); //Object : deve-se colocar um () para diferencia da chave da função.

console.log(a.apply());

