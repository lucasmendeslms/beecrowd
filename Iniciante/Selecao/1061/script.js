const input = require("fs").readFileSync("stdin", "utf-8");

let lines = input.split("\n");

let tempoInicial = lines[1].toString();
let tempoFinal = lines[3].toString();

const inicioEvento = {
  data: Number.parseInt(lines[0].split(" ")[1]),
  hora: Number.parseInt(tempoInicial.split(" : ")[0]),
  minuto: Number.parseInt(tempoInicial.split(" : ")[1]),
  segundo: Number.parseInt(tempoInicial.split(" : ")[2]),
};

const fimEvento = {
  data: Number.parseInt(lines[2].split(" ")[1]),
  hora: Number.parseInt(tempoFinal.split(" : ")[0]),
  minuto: Number.parseInt(tempoFinal.split(" : ")[1]),
  segundo: Number.parseInt(tempoFinal.split(" : ")[2]),
};

let eventSeconds = fimEvento.segundo - inicioEvento.segundo;

let eventMinutes = fimEvento.minuto - inicioEvento.minuto;

let eventHour = fimEvento.hora - inicioEvento.hora;

let eventDays = fimEvento.data - inicioEvento.data;

if (eventSeconds < 0) {
    eventSeconds += 60;
    eventMinutes -= 1;
}

if (eventMinutes < 0) {
    eventMinutes += 60;
    eventHour -= 1;
}

if (eventHour < 0) {
    eventHour += 24;
    eventDays -= 1;
}

console.log(`${eventDays} dia(s)\n${eventHour} hora(s)\n${eventMinutes} minuto(s)\n${eventSeconds} segundo(s)`);