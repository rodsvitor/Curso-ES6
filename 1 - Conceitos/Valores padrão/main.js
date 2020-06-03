function soma(a = 2, b = 5) {
  return a + b;
}
// arrow function
const somaAF = (a = 2, b = 6) => a + b;

console.log(somaAF());
console.log(somaAF(1));
console.log(somaAF(1, 2));
console.log(somaAF(1, 2, 3));
console.log(somaAF(null, null, 3, 4));