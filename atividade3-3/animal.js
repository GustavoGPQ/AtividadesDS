const prompt = require("prompt-sync")();
const animal = prompt("Digite o nome do animal:").toLowerCase(); 

function animaClass(animal) {
    let categoria;

    switch (true) {
        case ["gato", "cachorro", "coelho", "lebre", "paca"].includes(animal):
            categoria = "Mamifero";
            break;
        case ["corvo", "pinguim", "canário", "falcão", "cisne"].includes(animal):
            categoria = "Ave";
            break;
        case ["tigre", "iguana", "jacaré", "crocodilo", "rã"].includes(animal):
            categoria = "Réptil";
            break;
        case ["mola", "bagre", "sardinha", "cavala", "arapaima"].includes(animal):
            categoria = "Peixe";
            break;
        case ["joaninha", "barata", "abelha", "mariposa", "censer"].includes(animal):
            categoria = "Inseto";
            break;
        default:
            categoria = "Classificação desconhecida";
            break;
    }

    return categoria;
}

const categoria = animaClass(animal);
console.log(`O animal ${animal} é classificado como: ${categoria}`);
