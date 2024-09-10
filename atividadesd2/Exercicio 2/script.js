function calcular(operacao) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    switch(operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = 'Erro: Divisão por zero';
            }
            break;
        default:
            resultado = 'Operação inválida';
    }

    document.getElementById('resultado').value = resultado;
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        calcular(this.textContent);
    });
});
