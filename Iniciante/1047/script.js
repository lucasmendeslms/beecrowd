const input = require('fs').readFileSync('stdin', 'utf-8');
let lines = input.split(" ");

let horaInicio = Number.parseInt(lines.shift());
let minutoInicio = Number.parseInt(lines.shift());
let horaFim = Number.parseInt(lines.shift());
let minutoFim = Number.parseInt(lines.shift());
let checkHours = horaFim > horaInicio ? true : false;
let checkMinutes = minutoFim > minutoInicio ? true : false;

if (horaInicio === horaFim){
    if(minutoFim === minutoInicio){
        console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`);
    } else if(checkMinutes){
        console.log(`O JOGO DUROU 0 HORA(S) E ${minutoFim - minutoInicio} MINUTO(S)`);
    } else{
        console.log(`O JOGO DUROU 23 HORA(S) E ${60 - (minutoInicio - minutoFim)} MINUTO(S)`);
    }
} else if(checkHours && checkMinutes){
    console.log(`O JOGO DUROU ${horaFim - horaInicio} HORA(S) E ${minutoFim - minutoInicio} MINUTO(S)`);
} else if(checkHours && !checkMinutes){
    console.log(`O JOGO DUROU ${(horaFim - horaInicio) - 1} HORA(S) E ${60 - (minutoInicio - minutoFim)} MINUTO(S)`);
} else if(!checkHours && checkMinutes){
    console.log(`O JOGO DUROU ${24 - (horaInicio - horaFim)} HORA(S) E ${minutoFim - minutoInicio} MINUTO(S)`);
} else if(!checkHours && !checkMinutes){
    console.log(`O JOGO DUROU ${24 - ((horaInicio - horaFim) + 1)} HORA(S) E ${60 - (minutoInicio - minutoFim)} MINUTO(S)`); 
}