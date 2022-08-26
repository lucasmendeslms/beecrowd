const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split('\n')

let idade = valores.shift();
let ano = 0, mes = 0, dia = 0;

if (idade >= 365){
    ano = Math.floor(idade/365);
    idade %= 365;
    mes = Math.floor(idade/30);
    dia =  idade % 30;
}

else if (idade < 365){
    mes = Math.floor(idade/30);
    dia =  idade % 30;
}

console.log(`${ano} ano(s)\n${mes} mes(es)\n${dia} dia(s)`)