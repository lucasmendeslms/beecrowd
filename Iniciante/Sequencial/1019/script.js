const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split("\n")

let tempo = Number.parseInt(valores.shift());
let hora = 0, minuto = 0, segundo = 0;

if (tempo >= 3600){
    hora = Math.floor(tempo/3600);
    tempo %= 3600
    minuto = Math.floor(tempo/60);
    segundo = tempo % 60;
}

else if (tempo < 3600){
    minuto = Math.floor(tempo/60);
    segundo = tempo % 60;
}

else {
    segundo = tempo;
}

console.log(`${hora}:${minuto}:${segundo}`);
