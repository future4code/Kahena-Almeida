//EXERCÍCIO DE INTERPRETAÇÃO
//1.Está modificando o valor declarado de valor, somando pelo index,
// em 5 elos, valor+0, valor+1, valor+2, valor+3, valor+4, ou seja: 0+1, 1+2
// 3+3, 6+4, totalizando o valor impresso 10. 

//2.a. Será impresso o próximo número maior que 18,
// o laço irá procurar entre todos, e irá parar quando encontrar o 19.

//2.b. O for of seria suficiente para obter o valor. Então seria:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// for (let index = 0; index < lista.length; index++) {
//     const element = lista[index];
//     console.log(element)
// }

//3.*
//**
//***
//****

//EXERCÍCÍO DE ESCRITA
//1.

// const quantosAnimais = Number(prompt('Quantos animais de estimação você tem?'))

// if (quantosAnimais > 0) {
//     const nomesAnimais = []
//     for (let index = 0; index < quantosAnimais; index++) {
//         const quaisNomesAnimais = prompt('Digite o nome do seu pet?')
//         nomesAnimais.push(quaisNomesAnimais)
//     }
//     console.log(nomesAnimais)

// } else {
//     console.log('Adote um animalzinho!')
// }

//2.a.

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let i = 0
// while(i < arrayOriginal.length) {
//     console.log(arrayOriginal[i])
//     i++
// }

//2.b.

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let i = 0
// while(i < arrayOriginal.length) {
//     console.log(arrayOriginal[i]/10)
//     i++
// }

//2.c.

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// const arrayPares = []

// for (let numero of arrayOriginal) {
//     if (numero % 2 === 0) {
//         arrayPares.push(numero)
//     }
// }

// console.log(arrayPares)

//2.d.

// const arrayPalavras = []

// function criarArray(palavra1, palavra2, palavra3) {
//     const inserir = arrayPalavras.push(palavra1, palavra2, palavra3)
//     return inserir
// }

// criarArray('banana', 'abacate', 'maça')
// console.log(arrayPalavras)
// console.log(`O elemento do arrayPalavras[1] é ${arrayPalavras[1]}.`)

//2.e.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumero = 0
for (let index = 0; index < arrayOriginal.length; index++) {
    const numeroAtual = arrayOriginal[index]
    if(numeroAtual > maiorNumero) {
        maiorNumero = numeroAtual
    }    
}

let menorNumero = arrayOriginal[0]
for (let index = 0; index < arrayOriginal.length; index++) {
    const numeroAtual = arrayOriginal[index]
    if (numeroAtual < menorNumero) {
        menorNumero = numeroAtual
    }
    
}

console.log(maiorNumero, 'maior número') 
console.log(menorNumero, 'menor número')