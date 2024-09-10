function verificadorParImpar(params) {
    const numero = Number(document.getElementById('numero').value)

    let resultado
    if (numero % 2 === 0) {
        resultado = 'par'
    } else {
        resultado = 'impar'
    }
    document.getElementById('resultado').value = resultado
}
document.querySelector('button').addEventListener('click', verificadorParImpar );