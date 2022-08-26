const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split("\n");

let [x1, y1] = valores.shift().split(" ");
let [x2, y2] = valores.shift().split(" ");

function distancia (a1, b1, a2, b2) {
    return Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2);
}

console.log(distancia(x1, y1, x2, y2).toFixed(4));