//EXERCÍCIOS DE INTERPRETAÇÃO
//1.
//a. O código pega o número que o usuário
//colocou e retorna se o resto da divisão desse número é igual a zero ou não.
//b. Números pares.
//c. Números ímpares.

//2.a. Para buscar o valor de uma fruta.
//2.b. 2.25
//2.c. Ele continuaria para o último valor mostrado, 5.

//3.a. Está pedindo um número ao usuário e convertendo de string para número.
//3.b. Se fosse 10 passaria no teste, se fosse -10 não, pq para passar precisa
//ser maior que 0.
//3.c. Sim, a última linha, pq ela está buscando uma declaração que está dentro do 
//objeto, e por tanto não está disponivel para o escopo global.

//EXERCÍCIOS DE ESCRITA
//1.

// let idade = Number(prompt('Qual sua idade?'))

// if (idade >= 18) {
//     console.log('Você é maior de idade, já pode dirigir!')
// }else{
//     console.log('Você ainda não é maior de idade, não pode dirigir!')
// }

//2.

// let turno = prompt('Qual o turno da sua escola? M/V/N?').toUpperCase()
// if (turno=='M') {
//     console.log('Bom dia!')
// }else if (turno=='V') {
//     console.log('Boa tarde!')
// }else if (turno=='N') {
//     console.log('Boa noite!')
// } else {
//     console.log('Turno informado incorreto.')
// }

//3.

// let turno = prompt('Qual o turno da sua escola? M/V/N?').toUpperCase()
// let Seuturno
// switch (turno) {
//     case 'M':
//         console.log('Bom dia!')
//         break;
//     case 'V':
//         console.log('Boa tarde!')
//      case 'N':
//         console.log('Boa noite!')
//     default:
//         console.log('Turno informado incorreto.')
//         break;
// }

//4.

// let qualGenero = prompt('Qual o genero de filme vão assistir?').toLowerCase()
// let valorIngresso = prompt('Qual o preço do ingresso?')

// if (qualGenero=='fantasia' && valorIngresso=='15') {
//     console.log('Bom filme!')
// } else if (qualGenero!=='fantasia' || valorIngresso!=='15') {
//     console.log('Escolha outro filme :/')
// }

//DESAFIO:
//1.
// let qualGenero = prompt('Qual o genero de filme vão assistir?').toLowerCase()
// let valorIngresso = prompt('Qual o preço do ingresso?')

// if (qualGenero=='fantasia' && valorIngresso=='15') {
//     let lanchinho = prompt('Qual lanchinho vc vai querer? Pipoca, chocolate, doces...')
//     console.log('Bom filme!')
//     console.log(`Aproveite o seu ${lanchinho}`)
// } else if (qualGenero!=='fantasia' || valorIngresso!=='15') {
//     console.log('Escolha outro filme :/')
// }

//2.

let nome = prompt('Qual seu nome completo?')
let tipoJogo = prompt('Tipo de jogo: IN ou DO -> IN = internacional e DO = doméstico.').toLowerCase()
let etapaJogo = prompt('Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final').toLowerCase()
let categoria = Number(prompt('pode ser as opções 1, 2, 3 ou 4;'))
let quantosIngressos = Number(prompt('Quantos ingressos vc vai querer?'))

const etapasDoJogo = {
    sf: [1320, 880, 550, 220],
    dt: [660, 440, 330, 170],
    fi: [1980, 1320, 880, 330]
}  

const informarPosicao = categoria - 1
const custoJogo = etapasDoJogo[etapaJogo][informarPosicao] * quantosIngressos

if (tipoJogo == 'in') {
    let converterDolar = custoJogo * 4.10
    respostaFinal1 = `Olá ${nome}, para assistir o tipo de jogo ${tipoJogo}, na etapa ${etapaJogo}, categoria ${categoria}, comprando a quantidade ${quantosIngressos} o valor total é de ${converterDolar}.`
    console.log(respostaFinal1)
} else {
    respostaFinal2 = `Olá ${nome}, para assistir o tipo de jogo ${tipoJogo}, na etapa ${etapaJogo}, categoria ${categoria}, comprando a quantidade ${quantosIngressos} o valor total é de ${custoJogo}.`
    console.log(respostaFinal2)
}



