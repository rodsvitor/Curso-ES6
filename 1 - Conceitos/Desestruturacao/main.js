//Desestruturação

const usuario = {
  nome: 'Rodrigo',
  idade: 23,
  endereco: {
    cidade: 'Goiânia',
    estado: 'Go'
  }
};

const usuario2 = {
  nome: 'Diego',
  idade: 23,
  endereco: 'rua potengi'
};

//Forma comum de acessar atributos
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade

let {nome, idade, endereco: { cidade } } = usuario;

console.log(nome, idade, cidade)

function mostraNome({nome, idade, endereco : {estado}}) {
  console.log(nome, idade, estado)
}

mostraNome(usuario);