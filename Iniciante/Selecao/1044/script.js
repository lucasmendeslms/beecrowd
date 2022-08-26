const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split(" ");

let a = Number.parseInt(valores.shift());
let b = Number.parseInt(valores.shift());

if (a % b === 0 || b % a === 0){
    console.log("Sao Multiplos");
}  else {
    console.log("Nao sao Multiplos");
}

