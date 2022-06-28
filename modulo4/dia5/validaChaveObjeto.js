function validaChaveObjeto(elemento) {
    const deuErro = {
        isErro: false,
        erros: []
    }

    Object.keys(elemento).map((item) => {
        if (elemento[item] === undefined || elemento[item] === 'undefined'){
            deuErro.erros.push(item)
            deuErro.isErro = true
        }
    });

    return (deuErro)
}

console.log(validaChaveObjeto({ id: 1, name: 'astrodev', email: 'astrodev@gmail.com' }))
console.log(validaChaveObjeto({ id: 1, name: undefined, email: undefined }))
console.log(validaChaveObjeto({}))
console.log(validaChaveObjeto({ id: undefined, name: 'undefined', email: 'undefined' }))

