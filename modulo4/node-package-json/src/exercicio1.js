const colors = require('colors') // colors é um pacote npm, instale-o com npm i colors

const username = process.argv[2] // "name" é uma palavra reservada do sistema
const age = Number(process.argv[3])

const params = process.argv.length - 2

if (params < 2) {
  return console.log(`Was expecting 2 parameters, got ${params}`.red)
}

console.log(`Olá, ${username}! Você tem ${age} anos.`.blue)

console.log(`Olá, ${username}! Você tem ${age} anos. Em sete anos você terá ${age+7}`.green)
