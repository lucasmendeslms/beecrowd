const input = require('fs').readFileSync('stdin', 'utf-8');

let valores = input.split("\n");

let x = valores.shift();
let y = valores.shift();

console.log(`${(x / y).toFixed(3)} km/l`);