type Filme = {
    nome:string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function retornaFilme
(nome:string, anoLancamento:number, genero:GENERO, pontuacao?:number)
:Filme {
   
    if(pontuacao !== undefined){
        const filme = {
            nome:nome,
            anoLancamento: anoLancamento,
            genero: genero,
            pontuacao:pontuacao
        }

        return filme
    } else {

        const filme = {
            nome:nome,
            anoLancamento: anoLancamento,
            genero: genero,
        }

        return filme
    }

    
}

console.log(retornaFilme("Lascou",2022,GENERO.COMEDIA,76))
console.log(retornaFilme("Pânico",2013,GENERO.TERROR))

