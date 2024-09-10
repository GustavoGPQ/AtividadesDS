function VerifiaVelocidade(params) {
    const velocidade = document.getElementById('velocidade').value

    let resultado
    if (velocidade <= 80) {
        resultado = 'Dentro do limite Permitido';
    } else if (velocidade <=100) {
        resultado = 'Acima do limite, sujeito a multa leve';
    } else if (velocidade > 100 ) {
        resultado = 'Acima do limite, sujeito a multa grave';
    } 

document.getElementById('resultado').value = resultado

}
document.getElementById('button').addEventListener('click', VerifiaVelocidade)