const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split("\n");
let valor = Number.parseFloat(valores.shift());
let trocoNotas = Number.parseInt(valor);
let trocoMoedas = valor % 1;


let cedulas = [100, 50, 20, 10, 5, 2];
let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let notasTroco = [0, 0, 0, 0, 0, 0, 0];
let moedasTroco = [0, 0, 0, 0, 0, 0];

console.log('NOTAS:')
cedulas.forEach(function(_notas, i){
    if(trocoNotas >= cedulas[i]) {
        notasTroco[i] = Math.floor(trocoNotas/cedulas[i]);
        trocoNotas = (trocoNotas % cedulas[i]);
    }
    console.log(`${notasTroco[i]} notas(s) de R$ ${cedulas[i].toFixed(2)}`);
});
console.log(`Valor da variável trocoNotas: ${trocoNotas}`)
console.log(`Valor da variável trocoMoedas: ${trocoMoedas}`)
trocoMoedas = +(trocoMoedas + trocoNotas).toFixed(2)

console.log(`Valor da variável trocoMoedas após atualizar: ${trocoMoedas}`)

console.log('MOEDAS:')
moedas.forEach(function(_moedas, i){
    console.log(`TrocoMoedas: ${trocoMoedas}`)
    if(trocoMoedas >= moedas[i]) {
        moedasTroco[i] = Math.floor(trocoMoedas/moedas[i]);
        trocoMoedas = trocoMoedas % moedas[i];
        console.log(`TrocoMoedas: ${trocoMoedas}`)
    }
    console.log(`${moedasTroco[i]} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
});

console.log(trocoNotas)
console.log(trocoMoedas)