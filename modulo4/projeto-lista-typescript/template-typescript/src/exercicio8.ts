let dataAtual = new Date()

function dataAtualFormatada(dataAtual: any): string {

    let dia = dataAtual.getDate().toString()
    let diaF = (dataAtual.length == 1) ? '0' + dia : dia
    let mes = (dataAtual.getMonth() + 1).toString()
    let mesF = (mes.length == 1) ? '0' + mes : mes
    let anoF = dataAtual.getFullYear();
    
    return `${diaF}/${mesF}/${anoF}`;
}

let hoje = dataAtualFormatada(dataAtual)

function checaRenovacaoRG(dataNascimento: string, dataEmissao: string, dataHoje: string): boolean {

    const nascimento = dataNascimento.split("/")
    const emissao = dataEmissao.split("/")
    const hoje = dataHoje.split("/")

    const idade: number = Number(hoje[2]) - Number(nascimento[2])
    const tempoCarteira: number = Number(hoje[2]) - Number(emissao[2])

    const cond1: boolean = idade <= 20 && tempoCarteira >= 5
    const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3: boolean = idade > 50 && tempoCarteira >= 15

    return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG(process.argv[2], process.argv[3], hoje))
