// Exercícios

//Função delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
//
// async function umPorSegundo() {
//   delay().then(() => {
//     console.log('1s');
//
//     delay().then(() => {
//       console.log('2s');
//
//       delay().then(() => {
//         console.log('3s');
//       });
//     });
//   });
// }

const delay = (msg) => new Promise(resolve =>
  setTimeout(() => resolve(msg), 1000));

const umPorSegundo = async () => {
  console.log(await delay("1s"));
  console.log(await delay("2s"));
  console.log(await delay("3s"));
}

umPorSegundo();