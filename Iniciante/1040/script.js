const input = require("fs").readFileSync("stdin", "utf-8");
let valores = input.split("\n");

let notas = [];
notas = valores.shift().split(" ");

let media = +((notas[0] * 2 + notas[1] * 3 + notas[2] * 4 + notas[3] * 1) / 10);

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
  console.log(`Aluno aprovado.`);
} else if (media >= 5.0) {
    console.log("Aluno em exame.");
    let exame = Number.parseFloat(valores.shift());
    console.log(`Nota do exame: ${exame.toFixed(1)}`);
    media = (media + exame) / 2.0;

    if (media >= 5.0) {
      console.log(`Aluno aprovado.`);
    } else {
      console.log(`Aluno reprovado.`);
    }
    console.log(`Media final: ${media.toFixed(1)}`);
} else {
  console.log(`Aluno reprovado.`);
}
