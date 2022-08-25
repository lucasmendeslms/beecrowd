const input = require('fs').readFileSync('stdin', 'utf-8');
let lines = input.split(" ");

let salario = Number(lines.shift());

if(salario >= 0.00 && salario <= 2000.00){
    console.log("Isento");
} else if(salario <= 3000.00){
    salario -= 2000;
    console.log(`R$ ${(salario * 0.08).toFixed(2)}`);
} else if(salario <= 4500){
    salario -= 2000;
    console.log(`R$ ${(80 + ((salario - 1000) * 0.18)).toFixed(2)}`);
} else {
    salario -= 2000;
    console.log(`R$ ${(80 + 270 + ((salario - 2500) * 0.28)).toFixed(2)}`);
}
