const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split("\n");

let valor = Number.parseInt(valores.shift());
let valorInicial = valor;
let moedas = [100, 50, 20, 10, 5, 2, 1];
let notas = [0, 0, 0, 0, 0, 0, 0];

for(let i = 0; i < moedas.length; i++){

    if(valor >= moedas[i]){
        notas[i] = Math.floor(valor/moedas[i]);
        valor = valor % moedas[i];
    }  
}

console.log(`${valorInicial}`);

for(let i = 0; i < moedas.length; i++){
    console.log(`${notas[i]} nota(s) de R$ ${moedas[i]},00`);
}

