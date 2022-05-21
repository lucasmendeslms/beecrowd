const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split("\n");

let a = parseInt(valores.shift());
let b = parseInt(valores.shift());
let c = parseInt(valores.shift());
let d = parseInt(valores.shift());

if(c > 0 && d > 0 && a % 2 == 0){

    if(b > c && d > a && (c + d > a + b)){
        console.log(`Valores aceitos`);
    }
}
else{
    console.log(`Valores nao aceitos`);
}
