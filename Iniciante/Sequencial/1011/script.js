const input = require('fs').readFileSync('stdin', 'utf-8');
let valor = input.split('\n');

const pi = 3.14159;

let raio = Number(valor.shift());

let volume = (4/3.0) * pi * raio ** 3;

console.log(`VOLUME = ${volume.toFixed(3)}`);