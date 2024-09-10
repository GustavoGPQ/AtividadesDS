const valorDasParadas = {
     usd:0.18, 
     eur:0.16, 
     jpy:26.29,
      chf:0.15, 
      aud:0.27
}

function convertor() {
    const valorBRL = Number(document.getElementById('valorBRL').value)
    const moeda = document.getElementById('moeda').value

    if (isNaN(valorBRL) || valorBRL <= 0) {
        alert('Por favor, insira um valor válido em BRL.');
        return;
    }

    const convercao = valorBRL*valorDasParadas[moeda]

    document.getElementById('resultado').value = convercao.toFixed(2)
}

document.querySelector('button').addEventListener('click', convertor)