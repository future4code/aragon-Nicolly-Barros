// AULA - FUNÇÕES DE ARRAY

//Exercício de interpretação - 1
/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]
  
const novoArrayA = usuarios.map((item, index, array) => {
    console.log(item, index, array)
 })  
*/

/*a) O que vai ser impresso no console? 

Será impresso todos os itens do array "usuarios", um embaixo do outro pois o console.log
esta dentro da condição.
*/





//Exercício de interpretação - 2
/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]
  
const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
})
  
console.log(novoArrayB) */

/*  a) O que vai ser impresso no console?

Irá sem impresso no terminal somente o valor da chave "nome", nesse caso, os nomes
das meninas dentro da nova lista "novoArrayB" pois o console.log esta fora da função
*/




//Exercício de interpretação - 3
/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]
  
const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
})
  
console.log(novoArrayC) */

/* a) O que vai ser impresso no console?

Irá imprimir no terminal todos os itens(objetos por inteiro) em que o apelido
seja diferente de "Chijo", nesse caso, os itens Amanda e Lais. Tudo dentro de um
unico array pois o console.log está fora da função*/

//-----------------------------------------------------------------------------------------------------------------


//Exercício de escrita - 1
/* const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
] */

//a) Crie um novo array que contenha apenas o nome dos doguinhos

/* const nomeDosDogs = pets.map((item) => {
    return item.nome
})

console.log(nomeDosDogs) */

//b) Crie um novo array apenas com os cachorros salsicha

/* const dogsSalsichas = pets.filter((item) => {
    return item.raca === "Salsicha"
})

console.log(dogsSalsichas) */

/*c)Crie um novo array que possuirá mensagens para enviar para todos os 
clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de 
desconto de 10% para tosar o/a [NOME]!"*/

/* const dogsPoodle = pets.filter((item) => {
    return item.raca === "Poodle"
})

console.log(dogsPoodle)

const descontoPoodle = dogsPoodle.map((item) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
}) */




//Exercício de escrita - 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) Crie um novo array que contenha apenas o nome de cada item

/* const nomeDosProdutos = produtos.map((item) => {
    console.log(item.nome)
})
*/


/*b) Crie um novo array que contenha um objeto com o nome e o preço
de cada item, aplicando 5% de desconto em todos eles*/

/* const descontosAplicados = produtos.filter((item,) => {
    item.preco = (item.preco - (item.preco * 0.05))
    console.log(item)
}) */


//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

/* const produtosBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

console.log(produtosBebidas) */


//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

/* const listaYpê = produtos.filter((item)=> {
     return item.nome.includes("Ypê")
})

console.log(listaYpê) */


/*e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array 
deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"*/

/* const compreYpe = listaYpê.map((item) => {
    console.log(`Compre ${item.nome} por ${item.preco}`)
})*/



//DESAFIOOOO
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

const ordemAlfabetica = pokemons.map((item) => {
    return item.nome
}).sort()

console.log(ordemAlfabetica)

//Crie um novo array apenas com os tipos dos pokémons, sem repetição


const tiposPokemons = pokemons.map((item) => {
    return item.tipo 
})

console.log(tiposPokemons)

const semTiposRepetidos = tiposPokemons.filter((item, i) => {
    return tiposPokemons.indexOf(item) === i;
})

console.log(semTiposRepetidos)