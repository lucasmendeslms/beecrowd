const input = require("fs").readFileSync("stdin", "utf-8");
let lines = input.split("\n");

let caracteristica1 = lines.shift();
let caracteristica2 = lines.shift();
let caracteristica3 = lines.shift();

if (caracteristica1 == "vertebrado" && caracteristica3 == "carnivoro") {
  console.log("aguia");
} else if (caracteristica2 == "ave"){
    console.log("pomba");
} else if(caracteristica2 == "mamifero" && caracteristica3 == "onivoro"){
    console.log("homem");
} else if(caracteristica2 == "mamifero"){
    console.log("vaca");
} else if(caracteristica3 == "herbivoro"){
    console.log("lagarta");
} else if(caracteristica2 == "inseto"){
    console.log("pulga");
} else if(caracteristica3 == "hematofago"){
    console.log("sanguessuga");
} else{
    console.log("minhoca");
}