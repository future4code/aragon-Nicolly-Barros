
const listaTarefas = [
    "Limpar casa", "Estender roupa", "Rever conteúdo da aula", ]

function addTarefa(tarefa){
    listaTarefas.push(tarefa)
    return `Tarefa adicionada com sucesso! Tarefas: ${listaTarefas}`
}

console.log(addTarefa(process.argv[2]))