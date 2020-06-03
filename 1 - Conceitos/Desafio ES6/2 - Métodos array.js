// Exercídios de métodos de array

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

const idades = usuarios.map(user => user.idade);
// console.log(idades);

const maiores18 = usuarios.filter(user => user.idade >= 18)
  .filter(user => user.empresa === 'Rocketseat');
// console.log(maiores18);

const anyGoogle = usuarios
  .find(user => user.empresa === 'Google');
// console.log(anyGoogle);

const idadeDobradaMenorQue50 = usuarios.map(user => ({ ...user, idade: user.idade*2 }))
  .filter(({idade}) => idade <= 50);
console.log(idadeDobradaMenorQue50);

