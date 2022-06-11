const input = require("fs").readFileSync("stdin", "utf-8");
let lines = input.split("\n");

let valores = [];
valores = lines.shift().split(" ");

let ladoTriangulo = valores.map(Number);

ladoTriangulo.sort((a, b) => b - a);

if (ladoTriangulo[0] >= ladoTriangulo[1] + ladoTriangulo[2]) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (ladoTriangulo[0] ** 2 === ladoTriangulo[1] ** 2 + ladoTriangulo[2] ** 2) {
    console.log("TRIANGULO RETANGULO");
  }
  if (ladoTriangulo[0] ** 2 > ladoTriangulo[1] ** 2 + ladoTriangulo[2] ** 2) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (ladoTriangulo[0] ** 2 < ladoTriangulo[1] ** 2 + ladoTriangulo[2] ** 2) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if (
    ladoTriangulo[0] === ladoTriangulo[1] &&
    ladoTriangulo[1] === ladoTriangulo[2]
  ) {
    console.log("TRIANGULO EQUILATERO");
  }
  if (
    (ladoTriangulo[0] === ladoTriangulo[1] &&
      ladoTriangulo[1] !== ladoTriangulo[2]) ||
    (ladoTriangulo[2] === ladoTriangulo[1] &&
      ladoTriangulo[2] !== ladoTriangulo[0])
  ) {
    console.log("TRIANGULO ISOSCELES");
  }
}
