const prompt = require("prompt-sync")()

const cores = ["vermelho", "verde", "azul", "amarelo", "preto", "branco"];


const escolhaCor = prompt("Insira uma cor:");

const posicao = cores.indexOf(escolhaCor.toLowerCase());


if (posicao !== -1) {
    console.log(`A cor "${escolhaCor}" está na posição ${posicao} do vetor.`);
} else {
    console.log(`A cor "${escolhaCor}" não foi encontrada no vetor.`);
}
