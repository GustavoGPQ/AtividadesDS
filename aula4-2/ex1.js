function fatorial(n) {
    if (n < 0) return "Não é possível calcular o fatorial de um número negativo";
    
    let resultado = 1;
    let i = n;

    while (i > 1) {
        resultado *= i;
        i--;
    }

    return resultado;
}

console.log(fatorial(5)); 
console.log(fatorial(3)); 
console.log(fatorial(0)); 
