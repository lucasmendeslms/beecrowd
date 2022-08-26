const input = require("fs").readFileSync("stdin", "utf-8");
let lines = input.split("\n");

let aux;
let vetorInicial = [];
vetorInicial = lines.shift().split(" ");

let numberArray = vetorInicial.map(Number);

for (let i = 0; i < numberArray.length; i++) {
  while (numberArray[i + 1] < numberArray[i]) {
    aux = numberArray[i];
    numberArray[i] = numberArray[i + 1];
    numberArray[i + 1] = aux;
    i--;
  }
}

numberArray.forEach((element) => {
  console.log(element);
});

console.log();

vetorInicial.forEach((element) => {
    console.log(element);
});