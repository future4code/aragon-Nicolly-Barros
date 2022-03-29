//AULA - CONDICIONAIS

//Exercício de interpretação - 1
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.") 
}

/* a) Explique o que o código faz. Qual o teste que ele realiza? 
É um teste que verifica se o resto da divisão do número informado pelo usuário por 2 será igual à 0

b) Para que tipos de números ele imprime no console "Passou no teste"? 
Para número pares

c) Para que tipos de números a mensagem é "Não passou no teste"? 
Para números impares*/



//Exercício de interpretação - 2
let fruta = prompt("Escolha uma fruta")
let preco

switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* a) Para que serve o código acima?
Para retornar o valor da fruta informada pelo usuário

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta maça é 2.25 preco

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no 
console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo 
comentário "BREAK PARA O ITEM c.")?
Irá retornar o valor 5, pois o break é o comando usado para parar a condicional após achar o valor da variável requisitada */


//Exercício de interpretação - 3
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/* a) O que a primeira linha está fazendo?
Está solicitando ao usuário um número

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
10 - Esse número passou no teste
-10 - Não exibir nenhuma mensagem no terminal, pois o if só executa se a condição informada for true

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. 
Sim, no console.log(mensagem). Pois a variavel mensagem está no escopo local que não é acessível pelo escopo global*/


//------------------------------------------------------------------------------------------------------

//Exercício de escrita - 1

let idadeDoUsuario = Number(prompt("Informe a sua idade:"))

if(idadeDoUsuario >= 18){
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir.")
} 


//Exercício de escrita - 2

let turnoDoAluno = prompt("Digite a letra que corresponde ao seu turno de estudos: M - matutino, V - vespertino ou N - noturno")

if(turnoDoAluno === "M" || turnoDoAluno === "m" || turnoDoAluno === "Manhã"){
    console.log("Bom dia!")
} else if(turnoDoAluno === "V" || turnoDoAluno === "v" || turnoDoAluno === "Tarde"){
    console.log("Boa tarde!")
} else if(turnoDoAluno === "N" || turnoDoAluno === "n" || turnoDoAluno === "Noite"){
    console.log("Boa noite!")
} else {
    console.log("Turno incorreto, recarregue a pagina e informe novamente")
}


//Exercício de escrita - 3

switch(turnoDoAluno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno incorreto, recarregue a pagina e informe novamente")
        break
}



//Exercício de escrita - 4 Desafio - 1

const generoFilme = prompt("Informe o gênero do filme que irão assistir:")
const valorIngresso = Number(prompt("Informe o valor do ingresso:"))

const genero = generoFilme === "fantasia"
const ingresso = valorIngresso < 15

if(genero && ingresso){
    const lanchinho = prompt("Qual lanchinho irá comprar?")
    console.log(`Bom filme! E aproveite o seu ${lanchinho}.`)
} else {
    console.log("Escolha outro filme")
}


//DESAFIO

//Desafio 1 esta junto com o exercício 4 de escrita, linha 136

