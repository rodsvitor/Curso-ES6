//Exercícios de arrow functions
//3.1
const arr = [1, 2, 3, 4, 5]

arr.map(function (item) {
  return item + 10;
})

arr.map(item => item+10);

//3.2
const usuario = { nome: 'Rodrigo', idade: 23 };

const mostrarIdade = ({idade}) => idade;

// console.log(mostrarIdade(usuario));

//3.3
const nome = 'Rodrigo';
const idade = 23;

const mostraUsuario = (nome= 'Diego', idade = 18) => ({nome, idade});

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
console.log(mostraUsuario());


//3.4
const promise = () => new Promise((resolve) => resolve());