const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split(" ");

let A = Number(valores.shift());
let B = Number(valores.shift());
let C = Number(valores.shift());

let delta = B ** 2 - 4 * A * C;

if(delta < 0 || A === 0) {
    console.log(`Impossivel calcular`);
} else {
    console.log(`R1 = ${((-B + Math.sqrt(delta)) / (2 * A)).toFixed(5)}`);
    console.log(`R2 = ${((-B - Math.sqrt(delta)) / (2 * A)).toFixed(5)}`);
}