function checaRenovacaoRG(dataNascimento:string, dataEmissao:string):boolean {
    
    let nascimento = dataNascimento.split("/")
    let emissao = dataEmissao.split("/")
    let dataAtual = new Date()

    let dataNascFormatada =new Date(nascimento[1] + '-' + nascimento[0] + '-' + nascimento[2]);
    let dataEmissaoFormatada = new Date(emissao[1] + '-' + emissao[0] + '-' + emissao[2]);  
  
    const idade:number = dataAtual.getTime() - dataNascFormatada.getTime()
    const tempoCarteira:number = dataAtual.getTime() - dataEmissaoFormatada.getTime()

    const cond1:boolean = idade <= 20 && tempoCarteira >= 5
    const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3:boolean = idade > 50 && tempoCarteira >= 15
    console.log(idade)
    return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG(process.argv[2],process.argv[3]))
