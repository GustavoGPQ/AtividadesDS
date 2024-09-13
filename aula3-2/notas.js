var prompt = require ('prompt-sync') ()
const nota1 = Number(prompt("DIgite a 1° nota do aluno:"))
const nota2 = Number(prompt("DIgite a 2° nota do aluno:"))
const nota3 = Number(prompt("DIgite a 3° nota do aluno:"))
const m  = (nota1+nota2+nota3)/3

if (m>85) {
    const bonus = m + 5
    console.log(`Sua media foi ${m} + O seu bonus de 5 pontos. O total ficou ${bonus}`);
}else if (m >= 70 && m<=85) {
    const bonus = m + 3
    console.log(`Sua media foi ${m} + O seu bonus de 3 pontos. O total ficou ${bonus}`);
}else{'''
    console.log(`Su"""a media foi ${m}`);
}'''''