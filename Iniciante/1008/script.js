const input = require("fs").readFileSync("stdin", "utf-8");

let valores = input.split("\n");

let idFuncionario = valores.shift();
let qtdHorasTrabalhadas = valores.shift();
let valorHora = valores.shift();

const salario = qtdHorasTrabalhadas * valorHora;

console.log(`NUMBER = ${idFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);