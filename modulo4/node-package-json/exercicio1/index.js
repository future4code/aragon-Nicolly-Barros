/* a) Responda como comentário no seu código: Como fazemos para acessar 
os parâmetros passados na linha de comando para o Node? 
R: Atráves da process.argv, onde informamos a posição do "array" do comando que queremos acessar
*/

/* b) Crie um programa que receba seu nome e sua idade. */

console.log(`Olá, ${process.argv[2]}! Você tem ${Number(process.argv[3])} anos!`)

/* c) Altere o programa acima para que mostre também a sua idade daqui a sete anos. */

console.log(`Olá, ${process.argv[2]}! Você tem ${Number(process.argv[3])} anos. Em sete anos você terá ${Number(process.argv[3]) + 7}.`)

