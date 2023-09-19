let heroi = {
    nome: "Aspas",
    idade: 23,
    tipo: "Mago"
}

function ataqueHeroi() {
    let ataque = ""
    if (heroi.tipo == "Mago") {
        ataque = "magia."
    } else if (heroi.tipo == "Guerreiro") {
        ataque = "espada."
    } else if (heroi.tipo == "Monge") {
        ataque = "artes maciais."
    } else if (heroi.tipo == "Ninja") {
        ataque = "shuriken."
    } else {
        ataque = "nada, pois não reconhecemos esse herói."
    }
    let frase = (`O ${heroi.tipo} atacou usando ${ataque}`)
    return frase
}

console.log(ataqueHeroi())

