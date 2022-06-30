type Colaborador = {
    nome: string,
    salário: number,
    setor: SETOR,
    presencial: boolean
}

enum SETOR{
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

const colaboradores: Colaborador[]= [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
]

function marketingPresencial(colaboradores:Colaborador[]): Colaborador[]{
    
    let listaColaboradores = colaboradores.filter((colaborador)=>{
        return colaborador.setor === "marketing" && colaborador.presencial === true
    })

    return listaColaboradores
}

console.log(marketingPresencial(colaboradores))
