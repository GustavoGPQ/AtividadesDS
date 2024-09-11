const totalLinhas = 4;

for (let i = 1; i <= totalLinhas; i++) {

    let linha = ' '.repeat(totalLinhas - i);
    
    
    linha += '* '.repeat(i).trim();
    
   
    console.log(linha);
}
