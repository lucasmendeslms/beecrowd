const input = require("fs").readFileSync("stdin", "utf-8");
let valores = input.split("\n");
let troco = Number.parseFloat(valores.shift()) + 0.0001;

let cedulas = [100, 50, 20, 10, 5, 2, 1.0, 0.5, 0.25, 0.1, 0.05, 0.01];
let notas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < cedulas.length; i++) {
  if (troco >= cedulas[i]) {
    notas[i] = Math.floor(troco / cedulas[i]);
    troco -= cedulas[i] * notas[i];
  }
}

console.log("NOTAS:");
for (let i = 0; i < 6; i++) {
  console.log(`${notas[i]} nota(s) de R$ ${cedulas[i].toFixed(2)}`);
}

console.log("MOEDAS:");
for (let i = 6; i < cedulas.length; i++) {
  console.log(`${notas[i]} moeda(s) de R$ ${cedulas[i].toFixed(2)}`);
}