let input = require('fs').readFileSync("stdin", "utf-8");
let lines = input.split('\n');

let numbers = lines.map(Number);

let positivos = 0;
let media = 0

numbers.forEach((number) => {
  if(number > 0) {
    positivos++;
    media += number;
  }
})

console.log(`${positivos} valores positivos\n${(media / positivos).toFixed(1)}`);