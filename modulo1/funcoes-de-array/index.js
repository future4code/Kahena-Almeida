//Exercícios de interpretação de código

//1. Vai imprimir todas as informações contidas no array.
//2. Vai imprimir os 03 nomes contidos no array. 
//3. Vai imprimir os 02 diferentes de chijo, Mandi e Laura. 

//Exercícios de escrita
//1.a.

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomeDoguinhos = pets.map((item) => { //pq nao funcionou com filter?
//      return item.nome 
//  })

//  console.log(nomeDoguinhos)

 //1.b.

// const cachorrosSalsicha = pets.filter((pets) => {
//     return pets.raca == "Salsicha"
// })

// console.log(cachorrosSalsicha)

//1.c.

// const mensagemPoodles = pets.filter((item) => {
//     return item.raca == "Poodle"
// }).map((item) => {
//     mensagem = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
//     return mensagem
// })

// console.log(mensagemPoodles)

//2.a.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  const nomeApenas = produtos.map((item) => {
//      return item.nome
//  })

//  console.log(nomeApenas)

//2.b

// const novoArray = produtos.map((item) => {
//     const novoPreco = (item.preco / 100) * 95
//     const arredondar = Math.round(novoPreco * 100) / 100
//     return {nome:item.nome,preco:arredondar}
// })
 
// console.log(novoArray)

//2.c.
// const apenasBebidas = produtos.filter((item) => {
//     return item.categoria == "Bebidas"
// })

// console.log(apenasBebidas)

//2.d.

// const nomesYpe = produtos.filter((item) => {
//     return item.nome.includes('Ypê')
// })

// console.log(nomesYpe)

//2.e.

const nomesYpe = produtos.filter((item) => {
    return item.nome.includes('Ypê')
    }).map((item) => {
    return `Compre ${item.nome} por R$ ${item.preco}.`
})

console.log(nomesYpe)