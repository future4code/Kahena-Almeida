const colors = require('colors')

const operation = process.argv[2]
const firstNum = Number(process.argv[3])
const secondNum = Number(process.argv[4])

let result = "Resultado: "

switch (operation) {
  case "add":
    result += firstNum + secondNum
    break
  case "sub":
    result += firstNum - secondNum
    break
  case "mult":
    result += firstNum * secondNum
    break
  case "div":
    result += (firstNum / secondNum).toFixed(1)
    break
  default:
    result += "invalid operation"
}

console.log(result.yellow)
