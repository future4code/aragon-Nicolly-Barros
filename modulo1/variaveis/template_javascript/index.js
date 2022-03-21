// Exercício de interpretação - 1
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
/* Na primeira console, irá mostrar no terminal do navegador somente o número 5 (variavel let b = 10).
Na segunda console irá mostrar os números 10 (let a = 10) e 5, visto que foi atribuido um novo valor na variavel let b.*/


//Exercício de interpretação - 2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
/* Na console acima, irá retornar os seguintes números respectivamente 10, 10, 10. */


//Exercício de interpretação - 3
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
/* O programa acima irá perguntar ao usúario  "Quantas horas você trabalha por dia?" e após 
irá perguntar "Quanto você recebe por dia?".
Após as perguntas, irá aparecer no navegador a seguinte mensagem "Você recebe X por hora". O valor de X
se dá pela divisão da resposta da segunda pergunta pela resposta da primeira pergunta.
Melhores nomes para as variáveis:
let p trocar para: let horasTrabalhadas
let t trocar para: let valorDiario */


//Exercício de escrita - 1
const seuNome = prompt("Qual o seu nome?")
const suaIdade = prompt("Qual a sua idade?")

let nome = seuNome
let idade = suaIdade

console.log(typeof nome)
console.log(typeof idade)

/* No terminal imprimiu a palavra undefined, pois ainda não atribuimos valores nas variaveis*/
/* Prosseguindo o exercicio e atribuindo valores às minhas variaveis, o tipo retornado é strings, pois só recebem
esse tipo */

console.log("Olá", nome,", você tem", idade, "anos.")


//Exercício de escrita - 2

const humor = prompt("Você está feliz hoje")
const alimentacao = prompt("Você almoçou?")
const estudos = prompt("Você irá estudar hoje?")

const seuHumor = humor
const suaAlimentacao = alimentacao
const seusEstudos = estudos

console.log("Você está feliz hoje?", seuHumor,". Você almoçou?", suaAlimentacao, ". Você irá estudar hoje?", seusEstudos)


//Exercicio ed escrita - 3
let a = 25
let b = 10

c = a
a = b
b = c

console.log("O valor de a é:", a)
console.log("O valor de b é:", b)

//Desafio

let primeiroNumero = prompt("Informe o primeiro número:")
let segundoNumero = prompt("Informe o segundo número:")

const numeroPrimeiro = Number(primeiroNumero)
const numeroSegundo = Number(segundoNumero)

console.log("A multiplicação do primeiro numero com o segundo número é:", primeiroNumero*segundoNumero)
console.log("A adição do primeiro número com o segundo número é:", primeiroNumero+segundoNumero)