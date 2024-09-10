function calcularFrete() {
    const peso = parseFloat(document.getElementById('peso').value);
    const modalidade = document.getElementById('modalidade').value;
    let valorFrete;

    

    switch (modalidade) {
        case 'padrao':
            valorFrete = peso * 10;
            break;
        case 'expresso':
            valorFrete = peso * 20;
            break;
        case 'internacional':
            valorFrete = peso * 50;
            break;
        default:
            valorFrete = 0;
            break;
    }

    document.getElementById('resultado').value = `R$ ${valorFrete.toFixed(2)}`;
}
