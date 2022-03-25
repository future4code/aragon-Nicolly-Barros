//--------- FUNÇÕES

//--------- Exercício de Interpretação -1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a - No primerio console irá retornar o valor 10 (2*5 = 10)
//a - No segundo console irá retornar o valor 50 (10*5 = 50)
//b - Não iria aparecer nada, pois na função não tem console, somente o return.


//---------- Exercício de Interpretação -2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a - Essa função irá solicitar uma frase ao usuário e após irá deixa-lá com todos os caracteres minusculo e buscar a palavra cenoura.
//b - I) frase todas minuscula e true ; II) frase toda minuscula e true; III) frase toda minuscula e true. Todas serão true, pq antes do includes() tem o toLowerCase()



//-------------------------------------------------------------------------------------------------------------------

//---------- Exercício de Escrita -1

//Letra a-

function minhasInformacoes(){

    console.log("Meu nome é Nicoly, tenho 22 anos, moro em Bauru e sou estudante da Labenu")
}

minhasInformacoes()

//Letra b-

function suasInformacoes(){
    const nome = String(prompt("Qual o seu nome?"))
    const idade = Number(prompt("Qual a sua idade?"))
    const cidade = String(prompt("Onde você mora?"))
    const profissao =String(prompt("Qual a sua profissão?"))

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

}

suasInformacoes()



//---------- Exercício de Escrita -2

//------Letra a-

const valor1 = Number(prompt("Informe o primeiro número:"))
const valor2 = Number(prompt("Informe o segundo número:"))

function operacao1(valor1,valor2){
    const soma = valor1 + valor2
    return soma
}

const resultado = operacao1(valor1,valor2)
console.log(resultado)

//-------Letra b- utilizei as mesmas variaveis da letra a

function operacao2(valor1, valor2) {
    const maiorOuIgual = valor1 >= valor2
    console.log(maiorOuIgual)
}

operacao2(valor1,valor2)

//-------Letra c-
const numero1 = Number(prompt("Informe um numero para verificar se ele é par ou não:"))

const operacoe3 = (numero1) => {
    const paridade = (numero1 % 2 === 0)
    return paridade
}

const resultado = operacoe3(numero1)
console.log(`O número ${numero1} é par? ${resultado}`)*/

//------Letra d-

const mensagem = String(prompt("Escreva uma mensagem:"))

function mensagemComFuncao(mensagem){
    const tamanhoDaMensagem = mensagem.length
    const mensagemMaiuscula = mensagem.toUpperCase()
    console.log(`O tamanho da mensagem é: ${tamanhoDaMensagem}, e sua versão em maiúscula é: ${mensagemMaiuscula}`)
}

mensagemComFuncao(mensagem)


//---------------Exercício de Escrita -3 

const primeiroValor = Number(prompt("Informe o primeiro número:"))
const segundoValor = Number(prompt("Informe o segundo número:"))

function operacaoSoma(primeiroValor,segundoValor){
    const soma = primeiroValor + segundoValor
    return soma
}

function operacaoDiferenca(primeiroValor,segundoValor){
    const diferenca = primeiroValor - segundoValor
    return diferenca
}

function operacaoMultiplicacao(primeiroValor,segundoValor){
    const multiplicacao = primeiroValor * segundoValor
    return multiplicacao
}

function operacaoDivisao(primeiroValor, segundoValor){
    const divisao = primeiroValor / segundoValor
    return divisao
}

console.log(`Números inseridos: ${primeiroValor} e ${segundoValor}`)
console.log(`Soma: ${operacaoSoma(primeiroValor, segundoValor)}`)
console.log(`Diferença: ${operacaoDiferenca(primeiroValor, segundoValor)}`)
console.log(`Multiplicação: ${operacaoMultiplicacao(primeiroValor, segundoValor)}`)
console.log(`Divisão: ${operacaoDivisao(primeiroValor, segundoValor)}`)


//---------DESAFIO 1- letra a

const funcaoArrow = (parametro) => {
    console.log(parametro)
}

let parametro = prompt("Digite algo:")
funcaoArrow(parametro)


//----------DESAFIO 1- letra b

const valor1 = Number(prompt("Digite o primeiro valor:"))
const valor2 = Number(prompt("Digite o segundo valor:"))

const funcaoArrowSoma = (valor1, valor2) => {
    const somando = valor1 + valor2
    return somando
}

parametro = funcaoArrowSoma (valor1, valor2)
funcaoArrow(parametro)


//----------DESAFIO 2

const cateto1 = Number(prompt("Insira o primeiro cateto:"))
const cateto2 = Number(prompt("Insira o segunco cateto:"))

function teoremaDePitagoras(cateto1, cateto2){
    const potencia1 = cateto1**2
    const potencia2 = cateto2**2
    const soma = potencia1+potencia2
    const raizQuadrada = Math. sqrt(soma)
    const hipotenusa = raizQuadrada
    console.log(hipotenusa)
}

teoremaDePitagoras(cateto1, cateto2)