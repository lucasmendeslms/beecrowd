const input = require('fs').readFileSync('stdin', 'utf-8');
let lines = input.split(" ");

let horaInicio = Number.parseInt(lines.shift());
let horaFim = Number.parseInt(lines.shift());
let duracao; 

if (horaInicio === horaFim) {
    duracao = 24;
} else if(horaInicio <= 12){
    duracao = horaFim - horaInicio;
} else {
    duracao = 24 - horaInicio + horaFim;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);