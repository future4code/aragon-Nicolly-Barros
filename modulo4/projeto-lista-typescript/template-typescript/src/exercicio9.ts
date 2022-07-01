function anagrama(palavra:string):number | string {
    let array = palavra.split('')
    let valor = 1
    let contador = 1
    let listaVazia:string[] = []
    let letraRepetida = false

    for(let elemento of array){
        let index = listaVazia.findIndex(val => val === elemento)
        if(index < 0){
            listaVazia.push(elemento)
        } else {
            letraRepetida = true
        }
    }
    
    if(letraRepetida !== false){
        return 'Palavras com letras repetidas não pode.'
    }else{
        for(let i=0; i<array.length; i++){

            valor = valor * contador
            contador += 1
        }
        return valor
    }
}

console.log(anagrama("comida"))
console.log(anagrama("boi"))
console.log(anagrama("mesa"))
console.log(anagrama("bolo"))
console.log(anagrama("mel"))
console.log(anagrama("amar"))