//EXERCÍCIOS DE INTERPRETAÇÃO


//Exercício 1 - interpretação
const filme = {
 	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]) 

//Nos consoles irá imprimir, respectivamente:
//console.log(filme.elenco[0]) : Matheus Nachtergaele
//console.log(filme.elenco[filme.elenco.length - 1]) : Virginia Cavendish
//console.log(filme.transmissoesHoje[2]) : canal: "Globo", horario: "14h"



//Exercício 2 - interpretação
/const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) 

/*a) O que vai ser impresso no console?
console.log(cachorro) : irá retornar o objeto cachorro: nome: "Juca", idade: 3, raca: "SRD"
console.log(gato) : nome: "Juba", idade: 3, raca: "SRD"
console.log(tartaruga) : nome: "Jubo", idade: 3, raca: "SRD"*/

/*b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
A sintaxe 3 pontos copia o objeto citado, no caso, foi copiando o objeto cachorro para criar o objeto gato, e assim por diante.*/


//Exercício 3 - interpretação
 function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) 


/*a) O que vai ser impresso no console?
console.log(minhaFuncao(pessoa, "backender")) : false
console.log(minhaFuncao(pessoa, "altura")) : vai retornar indefinido*/

/*b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
Porque só foi criado a chave "altura", mas não foi atribuido um valor a ela.*/

//------------------------------------------------------------------------------------------------------------------


//Exercicio 1 - escrita
//Letra -a

const pessoaDados = {
    nome: "Nicoly",
    apelidos: ["Nick","Nih","Japa"]
}

function fraseApresentacao (objetoDados) {
    const frase = `Eu sou ${objetoDados.nome}, mas pode me chamar de: ${objetoDados.apelidos[0]}, ${objetoDados.apelidos[1]} ou ${objetoDados.apelidos[2]}.`
    console.log(frase)
}
fraseApresentacao(pessoaDados)

//Letra -b

const novosDados = {
    ...pessoaDados,
    apelidos: ["Nizinha", "Nicolinha", "Nikki"]
}
fraseApresentacao(novosDados) 




//Exercício 2 - escrita

 const objeto1 = {

    nome: "Isabelle",
    idade: 25,
    profissao: "Desenvolvedora"

}

const objeto2 = {

    nome: "Marcos",
    idade: 23,
    profissao: "Fresador"
}

function retornandoArray (objetoRecebido) {
    const valorDeNome = objetoRecebido.nome
    const numeroDeCaracteresNome = objetoRecebido.nome.length 
    const valorDeIdade = objetoRecebido.idade
    const valorDeProfissao = objetoRecebido.profissao
    const numeroDeCaracteresProfissao = objetoRecebido.profissao.length

    const arrayDosDados = [valorDeNome,numeroDeCaracteresNome,valorDeIdade,valorDeProfissao,numeroDeCaracteresProfissao]
    console.log(arrayDosDados)

}

retornandoArray(objeto1)
retornandoArray(objeto2) 


//Exercício 3 - escrita

const carrinho = []

const fruta1 = {
    nome :"Mamão",
    disponibilidade: true
}

const fruta2 = {
    ...fruta1,
    nome: "Uva"
}

const fruta3 = {
    ...fruta2,
    nome: "Banana"
}

function carrinhoDeCompras(frutas){
    carrinho.push(frutas)
}

carrinhoDeCompras(fruta1)
carrinhoDeCompras(fruta2)
carrinhoDeCompras(fruta3)
console.log(carrinho)



//DESAFIOOOOOO
//1)

/function dadosDoUsuario () {
    const nomeDoUsuario = prompt("Qualo seu nome?")
    const idadeDoUsuario = Number(prompt("Qual a sua idade?"))
    const profissaoDoUsuario = prompt("Qual a sua profissão?")
    const todosOsDados = {
    nomeDoUsuario,idadeDoUsuario,profissaoDoUsuario
}

    console.log(todosOsDados)
    console.log(typeof todosOsDados)
}
dadosDoUsuario() 

//2)

const filme1 ={
    nomeDoFilme:"Poderosas",
    anoDeLancamento: 1990
}

const filme2 ={
    nomeDoFilme:"Titanic",
    anoDeLancamento: 2002
}

function comparandoFilmes(primeiroFilme, segundoFilme){
    const comparandoLancamentoAntes = primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento
    const comparandoLancamentoMesmoAno = primeiroFilme.anoDeLancamento === segundoFilme.anoDeLancamento
    console.log(`O primeiro filme foi lançado antes do segundo? ${comparandoLancamentoAntes}
    O primeiro filme foi lançado no mesmo ano do segundo? ${comparandoLancamentoMesmoAno}`)
}

comparandoFilmes(filme1, filme2) 

//3)

function frutaIndisponivel(frutaFaltante){
    const indiponivel = !frutaFaltante
    console.log(`Fruta ${frutaFaltante.nome} está diposinivel: ${indiponivel}`)
}

frutaIndisponivel(fruta3)
