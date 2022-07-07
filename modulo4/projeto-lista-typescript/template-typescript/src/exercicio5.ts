type Usuario = {
    name:string,
    email: string,
    role: string
}

const usuarios:Usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

function usuariosAdmin(usuarios:Usuario[]):string[]{

    const listaUsuarios = usuarios.filter((usuario)=>{
        return usuario.role === "admin"
    }).map((usuario)=>{
        return usuario.email
    })
    
    return listaUsuarios
}

console.log(usuariosAdmin(usuarios))