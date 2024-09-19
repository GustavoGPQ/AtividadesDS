let matrizDiagonalSecundaria = [];

for (let i = 0; i < 3; i++) {
    matrizDiagonalSecundaria[i] = [];
    for (let j = 0; j < 3; j++) {
        if (i + j === 2) {
            matrizDiagonalSecundaria[i][j] = 1;
        } else {
            matrizDiagonalSecundaria[i][j] = 0;
        }
    }
}

console.log(matrizDiagonalSecundaria);
