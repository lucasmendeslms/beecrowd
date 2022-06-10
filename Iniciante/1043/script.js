const input = require("fs").readFileSync("stdin", "utf-8");
let valores = input.split(" ");

let a = Number.parseFloat(valores.shift());
let b = Number.parseFloat(valores.shift());
let c = Number.parseFloat(valores.shift());

if (
  Math.abs(b - c) < a &&
  a < b + c &&
  Math.abs(a - c) < b &&
  b < a + c &&
  Math.abs(a - b) < c &&
  c < a + b
) {
  console.log(`Perimetro = ${(a + b + c).toFixed(1)}`);
} else {
  console.log(`Area = ${(((a + b) * c) / 2).toFixed(1)}`);
}
