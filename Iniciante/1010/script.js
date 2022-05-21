const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split("\n");

let [peca1, quantidade1, valorUnidade1] = valores.shift().split(" ");
let [peca2, quantidade2, valorUnidade2] = valores.shift().split(" ");

let valorTotalPeca1 = quantidade1 * valorUnidade1;
let valorTotalPeca2 = quantidade2 * valorUnidade2;
let valorTotal = valorTotalPeca1 + valorTotalPeca2;

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);