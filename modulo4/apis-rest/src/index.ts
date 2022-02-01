import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Exercício 1
app.get("/users", (req: Request, res: Response) => {
  try {
    res.send(users)

  } catch (error: any) {
    res.send(error.message || "Erro inesperado")
  }
})

//a. Qual método HTTP você deve utilizar para isso?
// O método GET, para "pegar" toda lista.
// b. Como você indicaria a entidade que está sendo manipulada?
// A entidade users está sendo manipulada através da requisição HTTP.

// Exercício 2
app.get("/users/:userType", (req: Request, res: Response) => {
  try {
    const userType: string = req.params.userType
    const newUsers = users 
    function searchType(value: any) {
      return value.type === userType
    }
    const responseSearch = newUsers.filter(searchType)

    if (responseSearch.length < 0) {
      throw new Error("Produto não encontrado")
    }

    res.send(responseSearch)

  } catch (error: any) {
    switch (error.message) {
      case "Produto não encontrado":
        res.status(404)
        break
      default:
        res.status(500)
    }
    
    res.send(error.message || "Erro inesperado")
  }
})

// a. Como você passou os parâmetros de type para a requisição? Por quê?
// Para que seja possível a busca, ela precisa de parâmetros

// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// type user = {
//   id: number,
//   name: string,
//   email: string,
//   type: UserType,
//   age: number
// }

// enum UserType {
//   ADMIN = "ADMIN",
//   NORMAL = "NORMAL"
// }
//Dessa forma podemos restringir os tipos a apenas os tipos acima e atirar um erro, caso o dado esteja fora do esperado.

// Exercício 3
//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?

//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

app.get("/users/searchName/:userName", (req: Request, res: Response) => {
  try {
    const userName: string = req.params.userName
    const newUsers = users 
    function searchType(value: any) {
      return value.name === userName
    }
    const responseSearch = newUsers.filter(searchType)

    if (responseSearch.length < 0) {
      throw new Error("Produto não encontrado")
    }

    res.send(responseSearch)

  } catch (error: any) {
    switch (error.message) {
      case "Produto não encontrado":
        res.status(404)
        break
      default:
        res.status(500)
    }
    
    res.send(error.message || "Erro inesperado")
  }
})




// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
