const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	},
    {
		nome: "Laranja"
	},
	{
		nome: "Cebola"
    },
	{
		nome: "Morango"
    }
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
    },
	{
		nome: "Cebola"
    },
	{
		nome: "Banana"
    },
	{
		nome: "Morango"
    }
]


const geraItensUnicos = (lista1, lista2) => {

    let novaLista = []

    for (let elemento of lista1){
        let index = novaLista.findIndex(val => val.nome === elemento.nome)
        if(index <0){
            novaLista.push(elemento)
        }
    }

    for (let elemento of lista2){
        let index = novaLista.findIndex(val => val.nome === elemento.nome)
        if(index <0){
            novaLista.push(elemento)
        }
    }

    return novaLista

}

console.log(geraItensUnicos(primeiraLista, segundaLista))

