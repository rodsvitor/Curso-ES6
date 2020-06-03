// Operador rest

const arr = [1, 2, 3, 4, 5, 6];

let [x, ...y] = arr;

// console.log(x);
// console.log(y);

const soma = (...params) => params.reduce((total, currentIndex) => total + currentIndex);
// console.log(soma(1, 2));

// Operador spread
const usuario = {
  nome: 'Rodrigo',
  idade: 28,
  endereco: {
    cidade: 'Goiânia',
    uf: 'GO',
    pais: 'Brasils'
  }
}
const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};

console.log(usuario3);
