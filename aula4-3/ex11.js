const prompt = require('prompt-sync')();
 let a = 0;
 let g = 0;
 let d = 0;
for (let t = 0; ; ) {
    t = parseInt(prompt("Digite 1.Álcool 2.Gasolina 3.Diesel 4.Fim: "));
    
    if (t === 1) { 
        console.log(`Álcool`);
        a++;
    } else if (t === 2) {
        console.log(`Gasolina`);
        g++;
    } else if (t === 3) {
        console.log(`Diesel`);
        d++;
    } else if (t === 4) {
        console.log(`MUITO OBRIGADO`);
        break;
    } else {
        console.log("Código inválido. Por favor, digite um número entre 1 e 4.");
    }
}
console.log(`Quantidade de clientes que abasteceram cada tipo de combustível:`);
console.log(`Álcool: ${a}`);
console.log(`Gasolina: ${g}`);
console.log(`Diesel: ${d}`);