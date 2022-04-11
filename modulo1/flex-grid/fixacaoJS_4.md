```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
   const novaArray = []
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if (arrayDeNumeros[i] === numeroEscolhido){
      novaArray.push(arrayDeNumeros[i])
    } 
   
  }
  
  if (novaArray.length !== 0){
      return `O número ${numeroEscolhido} aparece ${novaArray.length}x`
    } else {
      return `Número não encontrado`
    }
}```