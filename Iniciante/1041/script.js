const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split(" ");

let x = Number(valores.shift());
let y = Number(valores.shift());

if(x === 0.0 && y === 0.0) {
    console.log("Origem");
} else if(x === 0.0 && y !== 0.0) {
    console.log("Eixo Y");
} else if(y === 0.0 && x !== 0.0) {
    console.log("Eixo X");
} else if(x > 0.0) {
    if(y > 0.0){
        console.log("Q1");
    } else {
        console.log("Q4");
    }
} else if (x < 0.0){
    if (y > 0.0) {
        console.log("Q2");
    } else {
        console.log("Q3");
    }
}