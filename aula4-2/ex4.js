let palavra = "JavaScript"
let letra = "a"
let contador = 0

for(let i = 0; i <= palavra.length; i++){
    if (palavra.charAt(i) === letra){
        contador++
    }

}
console.log(`A letra "${letra}" aparece ${contador} vezes na palavra "${palavra}".`)