function operacao(operador, num1, num2){
    switch(operador){
        case "add":
            return Number(num1) + Number(num2)
        case "sub":
            return Number(num1) - Number(num2)
        case "mult":
            return Number(num1) * Number(num2)
        case "div":
            return Number(num1) / Number(num2)
        default:
            return "Erro ao inserir os parâmetros."
    }
}

console.log(operacao(process.argv[2],process.argv[3],process.argv[4]))