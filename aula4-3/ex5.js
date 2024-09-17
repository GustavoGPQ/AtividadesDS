const prompt = require("prompt-sync")()
let resposta = 1
while (resposta === 1) {
    const n1 = Number(prompt("Digite a primeira nota:")) 
    const n2 = Number(prompt("Digite a segunda nota:"))

    let m = (n1+n2)/2
    console.log("A média final é: " + m.toFixed(2));

    resposta = Number(prompt("Calcular a média de outro aluno? 1. Sim 2. Não:"));
}