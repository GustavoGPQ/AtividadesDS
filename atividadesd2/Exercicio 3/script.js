function CalcularAsMediaAi() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)  

    const media =  (nota1+nota2+nota3) /3  

    if (media>=7) {
        situacao = "Aprovados, Parabens!"
    } if (media<7) {
        situacao = "Em recuperação, estude mais!"
        
    }if (media<=4) {
        situacao = "Reprovado."

    }

    document.getElementById('resultado').value = media.toFixed(1)
    document.getElementById('mensagem').value = situacao
}

document.querySelector('button').addEventListener('click', CalcularAsMediaAi)
