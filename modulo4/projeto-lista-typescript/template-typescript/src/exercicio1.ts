function valorQualquer (parametro:any):string{
    return typeof(parametro)
}

console.log(valorQualquer(7))
console.log(valorQualquer("Nicoly"))
console.log(valorQualquer(true))
console.log(valorQualquer([]))