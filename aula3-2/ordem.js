var prompt = require('prompt-sync')();
const a = Number(prompt("Digite um numero:"))
const b = Number(prompt("Digie um numero:"))
const c = Number(prompt("Digie um numero:"))

if (a<b && b<c) {
    console.log("O numero esta em orden crescente!");
}else if (a>b && b>c) {
    console.log("O numero esta em orden decrescente!");
}else{
    console.log("O numero não esta em nenhuma ordem!");
}  