const prompt = require("prompt-sync")()

let resposta = 1


while (resposta ===1) {
    const n1 = Number(prompt("Digite o primeiro valor:")) 
    const n2 = Number(prompt("Digite o segundo valor:"))
    const d = n1/n2
    if (n1 === 0 && n2 === 0) {
        console.log("Valor invalido!");
         continue
    }
    console.log(`Resultado: ${d}`)
    resposta = Number(prompt("Deseja continuar? 1:sim 2:não"))

}