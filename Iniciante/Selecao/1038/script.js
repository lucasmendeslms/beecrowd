const input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split(" ");

let codigo = Number.parseInt(valores.shift());
let quantidade = Number.parseInt(valores.shift());

switch(codigo) {
    case 1:
        console.log(`Total: R$ ${(4 * quantidade).toFixed(2)}`);
        break;
    case 2:
        console.log(`Total: R$ ${(4.5 * quantidade).toFixed(2)}`);
        break;
    case 3:
        console.log(`Total: R$ ${(5 * quantidade).toFixed(2)}`);
        break;
    case 4:
        console.log(`Total: R$ ${(2 * quantidade).toFixed(2)}`);
        break;
    case 5:
        console.log(`Total: R$ ${(1.5 * quantidade).toFixed(2)}`);
        break;
}