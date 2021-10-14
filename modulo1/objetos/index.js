//EXERCÍCIOS DE INTERPRETAÇÃO
//1.a.

// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14hrs

//2.a.

//Juca 3 SRD
//Juba 3 SRD
//Jubo 3 SRD

//2.b. Copia o objeto

//3.a.false // undefined
//3.b. No 1° console é colocado objeto pessoa como parâmentro e encontrado o false.
// No 2° não é encontrado a chave altura, pois não existe.

//EXERCÍCIOS DE ESCRITA

//1.a.

// const primeiroExercicio = {
//     seuNome: "Kahena",
//     seusApelidos: ["Kah", "Kaiane", "Kaina"]
// }

// function primeiraFuncao (nome, apelidos) {
//     const frase = `Eu sou ${nome}, mas pode me chamar de: ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}.`
//     return frase
// }

// console.log(primeiraFuncao(primeiroExercicio.seuNome, primeiroExercicio.seusApelidos))

//1.b.

// const novoObjeto = {...primeiroExercicio, seusApelidos: ["Karine", "Kaiena", "Karina"]}
// console.log(primeiraFuncao(novoObjeto.seuNome, novoObjeto.seusApelidos))

//2.a.

// const objetoA = {
//     nome: "Kahena",
//     idade: 27,
//     profissao: "estudante"
// }

// function exercicioB(objetoA) {
//     const respostaArray = [objetoA.nome, objetoA.nome.length, objetoA.idade, objetoA.profissao, objetoA.profissao.length]
//     return respostaArray
// }

// console.log(exercicioB(objetoA))

//3.a.

// const carrinho = []

// const frutaA = {
//     nome: "banana",
//     disponibilidade: 15 > 0
// }

// const frutaB = {...frutaA, nome: "maçã", disponibilidade: 5 > 0}
// const frutaC = {...frutaA, nome: "mamão", disponibilidade: 1 > 0}

// function fruta(fruta1) {
//     const colocarCarrinho = carrinho.push(fruta1)
//     return colocarCarrinho
// }

// const resposta = fruta(frutaA)
// const resposta2 = fruta(frutaB)
// const resposta3 = fruta(frutaC)
// console.log(carrinho)

//DESAFIOS:
//1.

// function pergunta() {
//     const nome = prompt('Qual seu nome?')
//     const idade = prompt('Qual sua idade?')
//     const profissao = prompt('Qual sua profissão?')
//     const dados = {nome, idade, profissao}
//     return dados
// }

// console.log(pergunta())
// console.log(typeof[pergunta])

//2

const filme1 = {
    nome: 'lalaland',
    ano: 2018
}
const filme2 = {
    nome: 'carambola',
    ano: 2015
}

function filmes(a, b) {
    const recente = a.ano < b.ano
    const anoIgual = a.ano == b.ano
    
    const pergunta1 = `O primeiro filme foi lançado antes do segundo? ${recente}.`
    const pergunta2 = `O primeiro filme foi lançado no mesmo ano do segundo? ${anoIgual}.`
    const perguntas = {pergunta1, pergunta2}
    return perguntas
}

console.log(filmes(filme1,filme2))


