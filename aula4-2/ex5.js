const prompt = require("prompt-sync")()
let ano = parseInt(prompt("Digite um ano (ou 0 para sair): "));

while (ano !== 0) {
  let CopaDoMundo = false;

  if (ano >= 1930 && (ano - 1930) % 4 === 0 && ano !== 1942 && ano !== 1946) {
    CopaDoMundo = true;
  }

  console.log(`O ano ${ano} ${CopaDoMundo ? "é" : "não é"} um ano de Copa do Mundo.`);

  ano = parseInt(prompt("Digite um ano (ou 0 para sair): "));
}