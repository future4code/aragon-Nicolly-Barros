const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

function login(email, senha){

  if(email.includes("@")){
    if(senha.length >= 6){
      let validaEmail = contas.findIndex(val => val.email === email)
      let validaSenha = contas.findIndex(val => val.password === senha)
      if(validaEmail === validaSenha ){
        return console.log("Login realizado com sucesso!")
      } else{
        return console.log("Email ou senha incorretos.")
      }
    }else{
      return console.log("Senha deve possuir no mínimo 6 caracteres.")
    }
  }else{
    return console.log("E-mail inválido.")
  }
}

login("astrodev@labenu.com", "abc123")
login("bananinha@gmail.com", "banana")
login("astrodev.labenu.com", "abc123")
login("bananinha@gmail.com", "banan")
login("astrodev@labenu.com", "bananinha")
login("bananinha@gmail.com", "bananinha")