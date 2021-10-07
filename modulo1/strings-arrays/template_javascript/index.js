// EXERCÍCIOS DE INTERPRETAÇÃO:
// EXERCÍCIO 01
/*
a. undefined 
b. null //já declarado
c. 11 //caracteres
d. 3 // i=0 e na última declaração em lista o 0 é o primeiro número, no caso 3
e. 3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 // a forma de expressar a posição é  dentro de [ ] e o [i+1] foi o caminho para informar a posição e 19 foi a inserção declarada após o =
f. 9

// EXERCÍCIO 02

SUBI NUM ÔNIBUS EM MIRROCOS, 27 


// EXERCÍCIOS DE ESCRITA:
// EXERCÍCIO 01

const qualSeuNome = prompt("Qual seu nome?")
const qualSeuEmail = prompt("Qual seu e-mail?")

console.log("O e-mail", qualSeuEmail, "foi cadastrado com sucesso! Seja bem-vinde,", qualSeuNome)

// EXERCÍCIO 02

const comidaPreferida = ["sobá","pizza","lasanha","yakissoba","lancho"]
console.log(comidaPreferida)

console.log(`Essas são minhas comidas preferidas:
${comidaPreferida[0]}
${comidaPreferida[1]}
${comidaPreferida[2]}
${comidaPreferida[3]}
${comidaPreferida[4]}`)

const qualSuaComidaPreferida = prompt ("Qual sua comida preferida?")
comidaPreferida[1] = qualSuaComidaPreferida
console.log(comidaPreferida)

// EXERCÍCIO 03
*/

let listaDeTarefas = ['tarefa1', 'tarefa2', 'tarefa3']
const tarefa1 = prompt("Que tarefa precisa fazer pela manhã?")
const tarefa2 = prompt("E pela tarde?")
const tarefa3 = prompt("E pela noite?")

console.log($listaDeTarefas)