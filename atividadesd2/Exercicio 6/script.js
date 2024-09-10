function verificaBissextidade() {
    const ano = Number(document.getElementById('ano').value)

    let resultado;
    if (ano % 400 === 0) {
        resultado = 'Ano Bissexto';
    } else if (ano % 100 === 0) {
        resultado = 'Não é um Ano Bissexto';
    } else if (ano % 4 === 0) {
        resultado = 'Ano Bissexto';
    } else {
        resultado = 'Não é um Ano Bissexto';
    }

    document.getElementById('resultado').value = resultado;
}
document.querySelector('button').addEventListener('click', verificaBissextidade)