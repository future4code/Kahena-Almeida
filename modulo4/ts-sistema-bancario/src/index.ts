import express, { Request, Response } from "express"
import { AddressInfo } from "net";
import { users, User } from "./cadastro";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.post("/register", (req: Request, res: Response) => {
  try {
    const {name, cpf, birth} = req.body

    if (!name || !cpf || !birth) {
      throw new Error("Um ou mais campos estão faltando: 'name', 'CPF' e/ou 'birth'.")
    }

    if (typeof name !== "string") {
      throw new Error("O campo 'name' deve ser uma string.")
    }

    if (typeof cpf !== "number") {
      throw new Error("O campo 'cpf' deve ser um number.")
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].userCpf === cpf) {
        throw new Error("O campo 'cpf' não pode ser igual ao de outro usuário.")
      }
    }
  
    const newUser: User = {
      userId: Date.now(),
      userName: name,
      userCpf: cpf,
      userBirth: birth,
      userBalance: 0,
      userExtract:[]
    }
  
    users.push(newUser)
    res.send(users)

  }catch (error: any) {
      switch (error.message) {
        case "Um ou mais campos estão faltando: 'name', 'CPF' e/ou 'birth'.":
          res.status(422)
          break
        case "O campo 'name' deve ser uma string.":
          res.status(422)
          break
        case "O campo 'cpf' deve ser um number.":
          res.status(422)
          break
        case "O campo 'cpf' não pode ser igual ao de outro usuário.":
          res.status(409)
          break
        default:
          res.status(500)
      }
  
      res.send(error.message || "Erro inesperado")
    }
})

app.get("/balance", (req: Request, res: Response) => {
  try {
    const {name, cpf} = req.body
    let searchResponse = 0

    if (!name || !cpf) {
      throw new Error("Um ou mais campos estão faltando: 'name' e/ou 'CPF'")
    }

 
    for (let i = 0; i < users.length; i++) {
          if (users[i].userCpf !== cpf) {
            throw new Error("Usuário não encontrado")
          }
      }


    for (let i = 0; i < users.length; i++) {
      if (users[i].userName === name || users[i].userCpf === cpf) {
        res.send(users[i].userBalance) 
      }
    }


  } catch (error: any) {
    switch (error.message) {
      case "Um ou mais campos estão faltando: 'name', 'CPF' e/ou 'birth'.":
        res.status(422)
        break
      case "Usuário não encontrado":
          res.status(404)
          break
        default:
          res.status(500)
      }

    res.send(error.message || "Erro inesperado")
  }
})

app.put("/newbalance", (req: Request, res: Response) => {
  try {
    const {name, cpf, newValue} = req.body
  
    if (!name || !cpf || !newValue) {
      throw new Error("Um ou mais campos estão faltando: 'name', 'CPF' e/ou 'value'")
    }

    if (typeof newValue !== "number" || newValue <= 0) {
      throw new Error("O path param 'price' deve ser um number e maior que zero")
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].userName === name || users[i].userCpf === cpf) {
        users[i].userBalance = newValue
      }
    }

    res.send(name || cpf || newValue)

  } catch (error: any) {
    switch (error.message) {
      case "Path param faltando: 'price'":
        res.status(422)
        break
      case "O path param 'price' deve ser um number maior que zero":
        res.status(422)
        break
      case "Produto não encontrado":
        res.status(404)
        break
      default:
        res.status(500)
    }

    res.send(error.message || "Erro inesperado")
  }
})