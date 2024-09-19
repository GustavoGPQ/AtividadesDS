let matrizIdentidade = [];

for (let i = 0; i < 3; i++) {
    matrizIdentidade[i] = [];
    for (let j = 0; j < 3; j++) {
        if (i === j) {
            matrizIdentidade[i][j] = 1;
        } else {
            matrizIdentidade[i][j] = 0;
        }
    }
}

console.log(matrizIdentidade);
