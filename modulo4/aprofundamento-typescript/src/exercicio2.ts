type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita
}

enum CorFavorita{
    AZUL= "Azul",
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    VIOLETA = "Violeta"
}

const nicoly: Pessoa = {
    nome: "Nicoly Barros",
    idade: 22,
    corFavorita: CorFavorita.AMARELO
}

console.log(nicoly)