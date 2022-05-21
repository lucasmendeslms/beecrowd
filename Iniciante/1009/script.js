const input = require('fs').readFileSync('stdin', 'utf-8');

let valores = input.split("\n");

let nomeVendedor = valores.shift();
let salarioVendedor = Number(valores.shift());
let totalVendas = Number(valores.shift());

let totalRecebido = salarioVendedor + (totalVendas * 0.15);

console.log(`TOTAL = R$ ${totalRecebido.toFixed(2)}`);
