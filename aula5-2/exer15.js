let matrizIdentidadeModificada = [];

for (let i = 0; i < 3; i++) {
    matrizIdentidadeModificada[i] = [];
    for (let j = 0; j < 3; j++) {
        if (i === j) {
            matrizIdentidadeModificada[i][j] = 1;
        } else if (j > i) {
            matrizIdentidadeModificada[i][j] = 0;
        } else {
            matrizIdentidadeModificada[i][j] = 0;
        }
    }
}

console.log(matrizIdentidadeModificada);
