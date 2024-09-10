
//Valido até 120 -- Crivo de Eratóstenes
function VerificaoTreco(params) {
    const numero = document.getElementById('numero').value
    
    let resultado
    if (numero % 2 === 0) {
        resultado = 'Não é primo';
    } else if (numero % 3 === 0) {
        resultado = 'Não é primo';
    } else if (numero % 5 === 0) {
        resultado = 'Não é primo';
    } else if(numero % 7 ===0) {
        resultado = 'Não é primo';
    }else {
        resultado = 'É um número primo'
    }

    document.getElementById('resultado').value = resultado
}
document.getElementById('button').addEventListener('click', VerificaoTreco)