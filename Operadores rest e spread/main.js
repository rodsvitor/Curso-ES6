// =========================== Operador rest (...) ===========================

//Operador rest na desestruturação do objeto
const usuario = {
  nome: 'Rodrigo',
  idade: 23,
  empresa: 'Rocketseat'
}

const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);


//Operador rest na desestruturação de um array
const array = [1, 2, 3, 4];
const [ a, b, ...c ] = array;

// console.log(a);
// console.log(b);
// console.log(c);

//Operador rest na desestruturação dos parametros de uma function

function soma (a, ...params) {
  return params.reduce((total, currentValue) => total + currentValue)
}

// console.log(soma(1, 2, 3, 4, 5, 6));

// ==================================== Operador SPREAD ====================================

// == Na união de array ==
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];

// console.log(array3);

// == Na união de objetos ==
const usuario2 = { ...usuario, cargo: 'teste' };

// console.log(usuario);
// console.log(usuario2);

const cargo = {
  nomeCargo: 'Engenheiro',
  salario: 10000.00
}

const usuario3 = {...usuario, ...cargo};
// console.log(usuario3);