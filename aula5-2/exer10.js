var prompt = require("prompt-sync")()

let nomes = [];

for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite um nome: ");
    nomes.push(nome);
}

let nomeBusca = prompt("Digite o nome a ser buscado: ");

if (nomes.includes(nomeBusca)) {
    console.log("Achei");
} else {
    console.log("Não achei");
}
