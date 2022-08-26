const input = require('fs').readFileSync('stdin', 'utf-8');
let lines = input.split(" ");

let salario = Number(lines.shift());
let percentual;

if(salario >= 0 && salario <= 400.00){
    percentual = 15;
} else if(salario > 400.00 && salario <= 800.00){
    percentual = 12;
} else if(salario > 800.00 && salario <= 1200.00){
    percentual = 10;
} else if(salario > 1200.00 && salario <= 2000.00){
    percentual = 7;
} else {
    percentual = 4;
}

console.log(`Novo salario: ${(salario + salario * (percentual/100)).toFixed(2)}`);
console.log(`Reajuste ganho: ${(salario * (percentual/100)).toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);