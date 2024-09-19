const prompt = require("prompt-sync")();

const n = prompt("Digite o tamanho do array: ");
let array = [];


for(let i = 1; i <= n; i++){
    if(i%2 == 0) {
        array.push("par");
        continue;
    }
    array.push("impar");
}

console.log(array);
