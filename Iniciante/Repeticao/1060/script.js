const input = require('fs').readFileSync("stdin", "utf-8");
let numeros = input.split("\n");
let cont = 0;

const numeroForEach = numeros.forEach((numeros) =>{
    if(numeros > 0){
        cont += 1;
    }
});

console.log(`${cont} valores positivos`);   