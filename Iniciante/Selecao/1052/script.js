var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(" ");

let mes = Number.parseInt(lines.shift());

const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(meses[mes - 1]);