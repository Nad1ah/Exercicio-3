function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
console.log(getRandom);
const computerNumber = getRandom(0, 100);

console.log(`Número escolhido: ${computerNumber}`);

const userChoice = Number.parseInt(prompt("Escolha um número"));
const isInvalid = Number.isNaN(userChoice);

if (isInvalid) {
  console.log("Número Inválido");
} else if (userChoice > computerNumber) {
  console.log("Demasiado alto");
} else if (userChoice < computerNumber) {
  console.log("Demasiado baixo");
} else {
  console.log("Certo, acertaste!");
}
