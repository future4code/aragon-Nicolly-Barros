// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

console.log(retornaTamanhoArray)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

console.log(retornaArrayInvertido)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a -b)
}

console.log(retornaArrayOrdenado)

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []
  for (let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
      numerosPares.push(array[i])
      }
    }
  return numerosPares
}

console.log(retornaNumerosPares)


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesAoQuadrado = []
    for (let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0 ){
            let numeroAoQuadrado = array[i] ** 2
            numerosParesAoQuadrado.push(numeroAoQuadrado)

        }
    }
    return numerosParesAoQuadrado
}

console.log(retornaNumerosParesElevadosADois)

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = Math.max(...array)
    return maiorNumero
}

console.log(retornaMaiorNumero)

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objetoDosNumero = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1,num2)=== 0 ,
        diferenca : Math.abs(num1 - num2),
    }
    return objetoDosNumero
}
console.log(retornaObjetoEntreDoisNumeros)


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
        return `Equilátero`
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
        return `Isósceles`
    } else {
        return `Escaleno`
    }
}

console.log(classificaTriangulo)

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novoObjeto ={
       ...pessoa,
       nome : "ANÔNIMO"
   }
   return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = []
    for(let pessoa of pessoas){
        if(
        pessoa.idade > 14 && pessoa.altura >= 1.5 && pessoa.idade < 60
         ){
             pessoasAutorizadas.push(pessoa)
            
         }
    }
    return pessoasAutorizadas
}



// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = []
    for(let pessoa of pessoas){
        if(
        pessoa.idade <= 14 || pessoa.altura < 1.5 || pessoa.idade > 60
         ){
             pessoasNaoAutorizadas.push(pessoa)
            
         }
    }
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   
}




// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
 
}



// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}