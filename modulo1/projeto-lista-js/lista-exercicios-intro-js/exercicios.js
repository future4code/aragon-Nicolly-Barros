// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
/*function calculaAreaRetangulo() {

  const altura = Number(prompt("Informe a altura:"))
  const largura = Number(prompt("Informa a largura:"))
  const area = altura * largura
  console.log(area)

}
calculaAreaRetangulo()*/

// EXERCÍCIO 02
/*function imprimeIdade() {

  const anoAtual = Number(prompt("Informe o ano atual"))
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento?"))
  const idade = anoAtual - anoNascimento
  console.log(idade)
  
}
imprimeIdade()*/

// EXERCÍCIO 03
/*function calculaIMC(peso, altura) {

  const IMC = peso / (altura * altura)
  return IMC

}*/

// EXERCÍCIO 04
/*function imprimeInformacoesUsuario() {

  const nome = prompt("Qual o seu nome?")
  const idade = Number(prompt("Qual a sua idade?"))
  const email = prompt("Qual o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}
imprimeInformacoesUsuario()*/

// EXERCÍCIO 05
/*function imprimeTresCoresFavoritas() {

  const coresFavoritas = []
  const cor1 = prompt("Informe sua 1ª cor favorita?")
  const cor2 = prompt("Informe sua 2ª cor favorita?")
  const cor3 = prompt("Informe sua 3ª cor favorita?")
  
  coresFavoritas.push(cor1)
  coresFavoritas.push(cor2)
  coresFavoritas.push(cor3)

  console.log(coresFavoritas)

}
imprimeTresCoresFavoritas*/


// EXERCÍCIO 06
/*function retornaStringEmMaiuscula(string) {

  return string.toUpperCase()

}*/


// EXERCÍCIO 07
/*function calculaIngressosEspetaculo(custo, valorIngresso) {

  const ingressosAVender = custo / valorIngresso
  return ingressosAVender

}*/

// EXERCÍCIO 08
/*function checaStringsMesmoTamanho(string1, string2) {
  const tamanhoString1 = string1.length
  const tamanhoString2 = string2.length
  const tamanhoIgual = tamanhoString1 === tamanhoString2 
  return tamanhoIgual

}*/

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array.shift()

}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array.pop()
  
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  let primeiroNumero = array[0]
  let ultimoNumero = array.pop()
  array.push(primeiroNumero)
  array[0]= ultimoNumero
  return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const minusculaString1 = string1.toLowerCase()
  const minusculaString2 = string2.toLowerCase()
  const igualdadeDeStrings = minusculaString1 === minusculaString2
  return igualdadeDeStrings
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoDeNascimento = Number(prompt("Digite o ano de nascimento:"))
  const anoDeEmissaoRG = Number(prompt("Digite o ano de emissão do seu RG:"))

  let idade = anoAtual - anoDeNascimento
  let renovacao = anoAtual - anoDeEmissaoRG

  let verificandoIdade20 = idade <= 20 
  let pessoasDeVinteAnos = renovacao === 5
  const renovarRG1 = verificandoIdade20 && pessoasDeVinteAnos 

  let verificandoIdade50 = idade > 20
  let pessoasDeCinquentaAnos = renovacao === 10
  const renovarRG2 = verificandoIdade50 && pessoasDeCinquentaAnos

  let maiorDeCinquentaAnos = idade > 50
  let pessoasMaioresDe50anos = renovacao === 15
  const renovarRG3 = maiorDeCinquentaAnos && pessoasMaioresDe50anos
  
  console.log(renovarRG1||renovarRG2||renovarRG3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDeIdade = prompt("Você tem mais de 18 anos? (responda sim ou não)")
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo? (responda sim ou não)")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (reponda sim ou não)")

  let confirmandoIdade = maiorDeIdade === "sim"
  let confirmandoEnsinoMedio = ensinoMedioCompleto === "sim"
  let confirmandoDisponibilidade = disponibilidade === "sim"


  console.log(confirmandoIdade && confirmandoEnsinoMedio && confirmandoDisponibilidade)

}