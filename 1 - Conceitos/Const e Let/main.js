// ========================= Constantes =========================

/* Nesse caso a é uma constante e pode ser lido apenas.
const a = 1;
a = 3;
*/

/* a constante pode ser mutável - diferente de ser reatribuido-
 (alteração nos atributos de um objeto constante)
const usuario = { nome : 'Rodrigo'};
usuario.nome = 'Cleiton';
console.log(usuario);*/

//Constante não pode ter o seu valor reatribuido.

function teste (x) {
  let y = 2;

  if (x > 5) {
    let  y = 4;
    console.log(x, y);
  }
}

// console.log(y);
teste(10);