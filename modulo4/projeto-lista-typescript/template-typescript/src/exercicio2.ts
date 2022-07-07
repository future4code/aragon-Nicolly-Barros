
function nomeEAniversario(nome:string, niver:string):string{
    const dataSeparada = niver.split("/")
    return `Olá, me chamo ${nome}, nasci no dia ${dataSeparada[0]}, no mês ${dataSeparada[1]} e no ano de ${dataSeparada[2]}.`
}
 
console.log(nomeEAniversario("Nicoly", "25/11/1999"))