var prompt = require('prompt-sync') ();

const vendas1 = Number(prompt("Digite o numero de vendas do 1° mês:"))
const vendas2 = Number(prompt("Digite o numero de vendas do 2° mês:"))
const vendas3 = Number(prompt("Digite o numero de vendas do 3° mês:"))
const vendas = vendas1+vendas2+vendas3

if (vendas<5000) {
    console.log("Sem comissão parceiro");
}else if (vendas >= 5000 && vendas<=10000) {
    const comissao = vendas*0.05
     console.log(`Sua comissão é ${comissao.toFixed(2)}`);
}else {
    const comissao = vendas*0.10
    console.log(`Sua comissão é ${comissao.toFixed(2)}`);
    
}