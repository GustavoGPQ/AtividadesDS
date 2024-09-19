let numeros = [1,2,3,4,5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

let media = soma / numeros.length;
console.log(media);