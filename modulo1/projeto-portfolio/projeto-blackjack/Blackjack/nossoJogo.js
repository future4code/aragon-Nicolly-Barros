/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
*/

let cartaUsuario1 = comprarCarta()
let cartaUsuario2 = comprarCarta()
let somaCartasUsuario = cartaUsuario1.valor + cartaUsuario2.valor

let cartaComputador1 = comprarCarta()
let cartaComputador2 = comprarCarta()
let somaCartasComputador = cartaComputador1.valor + cartaComputador2.valor 


console.log ("Bem-vindo(a) ao jogo de blackjack!") 
      
if(confirm("Quer iniciar uma nova rodada?")) {
   console.log(`Usuário cartas: ${cartaUsuario1.texto} , ${cartaUsuario2.texto} - ${somaCartasUsuario}`)
   console.log(`Computador cartas: ${cartaComputador1.texto}, ${cartaComputador2.texto} - ${somaCartasComputador}`)
   if(somaCartasUsuario>somaCartasComputador){
      console.log(`Usuário ganhou!`)
   } else if (somaCartasComputador>somaCartasUsuario){
      console.log(`Computador ganhou!`)
   } else if(somaCartasComputador=somaCartasUsuario){
      console.log(`Empate!`)
   }
} else {
   console.log("O jogo acabou.")
}



