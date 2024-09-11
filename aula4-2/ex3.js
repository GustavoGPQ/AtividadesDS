const prompt = require("prompt-sync")();
const n = Number(prompt("Digite um numero:"))
for(let i = 1; i<=10;i++){
    console.log(`${n}X${i}=${n*i}`);
    
}