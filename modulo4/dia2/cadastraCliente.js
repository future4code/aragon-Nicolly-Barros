const clientes = [
    { id: 1, nome: 'Fulano' },
	{ id: 2, nome: 'Ciclano' },
	{ id: 3, nome: 'Beltrano' },
	{ id: 4, nome: 'Fulana' },
]

function addCliente(cliente){
    let index = clientes.findIndex(val => val.id === cliente.id);
    if(index < 0){
        clientes.push(cliente)
    } else {
        return console.log(`Erro. Parâmetro inválido: id ${cliente.id} já existe.`)
    }

}

addCliente({id:5, nome:'Nicoly'},)
addCliente({id:6, nome:'Bruno'},)
addCliente({id:6, nome:'Renato'},)
console.log(clientes)





