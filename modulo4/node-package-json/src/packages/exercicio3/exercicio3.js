const colors = require('colors') // colors é um pacote npm, instale-o com npm i colors

/** 
    SEM PERSISTÊNCIA DE DADOS
**/

const tasks = [
  "estudar",
  "trabalhar",
  "ler livro"
]

const task = process.argv[2]

if (!task) {
  return console.log(`Was expecting at least 1 parameter for new task`.red)
}

tasks.push(task)

console.log(`Task ${task} added successfuly`.magenta)
console.log("tasks:".magenta, tasks.toString().magenta) // colors só funciona em strings, por isso convertemos o array tasks em string

/**/




/** 
    COM PERSISTÊNCIA DE DADOS
**/

const fs = require('fs')

const persistentTasks = JSON.parse(fs.readFileSync('src/data/tasks.json')) // de acordo com o root do projeto

const newPersistentTask = process.argv[2]

persistentTasks.push(newPersistentTask)

fs.writeFileSync('src/data/tasks.json', JSON.stringify(persistentTasks, null, '\t')) // o null e '\t' serve para deixar o código formatado com tabs // retire-os e veja como fica o arquivo tasks.json depois de adicionar uma task

console.log(`Persistent task ${newPersistentTask} added succesfully`.green)
console.log('Check file tasks.json on src/data'.green)

/**/
