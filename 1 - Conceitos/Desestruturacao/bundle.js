"use strict";

//Desestruturação
var usuario = {
  nome: 'Rodrigo',
  idade: 23,
  endereco: {
    cidade: 'Goiânia',
    estado: 'Go'
  }
};
var usuario2 = {
  nome: 'Diego',
  idade: 23,
  endereco: 'rua potengi'
}; //Forma comum de acessar atributos
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      estado = _ref.endereco.estado;
  console.log(nome, idade, estado);
}

mostraNome(usuario);
