const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split(" ");

let a = Number.parseInt(valores.shift());
let b = Number.parseInt(valores.shift());
let c = Number.parseInt(valores.shift());
let d = Number.parseInt(valores.shift());

if(b > c && d > a && a % 2 === 0 && c + d > a +b){
    console.log(`Valores aceitos`); 
} else{
    console.log(`Valores nao aceitos`);
}
