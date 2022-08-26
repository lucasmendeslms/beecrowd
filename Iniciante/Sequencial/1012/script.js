const input = require('fs').readFileSync('stdin', 'utf-8');

let valores = input.split(" ");

const pi = 3.14159;

let a = Number(valores.shift());
let b = Number(valores.shift());
let c = Number(valores.shift()); 

console.log(`TRIANGULO: ${(a * c / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(pi * c ** 2).toFixed(3)}`);
console.log(`TRAPEZIO: ${((a + b) * c / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(b ** 2).toFixed(3)}`);
console.log(`RETANGULO: ${(a * b).toFixed(3)}`);

