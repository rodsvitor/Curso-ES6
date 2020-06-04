// Desestruturação em parametros

const mostraInfo =
  ({nome, idade}) => `${nome} tem ${idade} anos.`;

console.log(mostraInfo({nome: 'Diego', idade: 23}));