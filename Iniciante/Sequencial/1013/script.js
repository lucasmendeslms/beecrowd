const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split(' ');

let a = Number(valores.shift());
let b = Number(valores.shift());
let c = Number(valores.shift());



function maiorAB(d, e){
    return (d + e + Math.abs((d - e)))/2
}

const comparaAB = maiorAB(a, b);

const resposta = maiorAB(comparaAB, c);

resposta >= comparaAB ? console.log(`${resposta} eh o maior`) : console.log(`${comparaAB} eh o maior`);


