
function anagrama(palavra:string):number{
    let array = palavra.split('')
    let valor =1
    let contador = 1
    for(let i=0; i<array.length; i++){

        valor = valor * contador
        contador += 1
    }

    return valor
}

console.log(anagrama("comida"))
console.log(anagrama("boi"))
console.log(anagrama("mesa"))