// EXERCÍCIOS DE INTERPRETAÇÃO
// EXERCÍCIO 01

"a. ", false
"b. ", false
"c. ", true
"d. ", boolean

// EXERCÍCIO 02
primeiroNumerosegundoNumero //Ficará um ao lado do outro.

// EXERCÍCIO 03
//Para de fato os dois números serem somados seria:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

console.log("Soma:", Number(primeiroNumero) + Number(segundoNumero))

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 01

let idadeUsuarie = prompt("Qual sua idade?")
let idadeAmige = prompt("Qual a idade de sue melhor amige?")

console.log("Sua idade é maior do que a de sue melhor amige?")
console.log(idadeUsuarie > idadeAmige )

// EXERCÍCIO 02

let primeiroNumero = prompt("Digite um numero par!")
console.log("Resto:", Number(primeiroNumero) % 2)

//O padrão está que quando é 0 é par, e quando é 1 o número é ímpar

// EXERCÍCIO 03

let idadeUsuarie = prompt("Quantos anos você tem?")
console.log("Idade em meses:", Number(idadeUsuarie) * 12)
console.log("Idade em dias:", Number(idadeUsuarie) * 365)
console.log("Idade em horas:", Number(idadeUsuarie) * 8760)

// EXERCÍCIO 04

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

console.log("O primeiro numero é maior que segundo?", Number(primeiroNumero) > Number(segundoNumero))

console.log("O primeiro numero é igual ao segundo?", Number(primeiroNumero) = Number(segundoNumero))

let resultado1 = Number(primeiroNumero) % Number(segundoNumero) === 0
console.log("O primeiro numero é divisível pelo segundo?", resultado1)

let resultado2 = Number(segundoNumero) % Number(primeiroNumero) === 0
console.log("O segundo numero é divisível pelo primeiro?", resultado2)