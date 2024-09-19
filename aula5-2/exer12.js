let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

let maior = matriz[0][0];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
        }
    }
}

console.log("Matriz:", matriz);
console.log("Maior valor:", maior);
