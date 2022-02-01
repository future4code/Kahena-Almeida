import express from "express";
import { AddressInfo } from "net";

type user = {
  id: number,
  name: string,
  phone: string,
  email: string,
  website: string
}

type post = {
  id: number,
  title: string,
  body: string,
  userId: number
}

const usuarios: user[] = [
  {id: 1,
    name: "Pedro",
    phone: "9834823094",
    email: "pedrosampaio@gmail.com",
    website: "pedrosampaio.com.br"},
    {id: 2,
      name: "João",
      phone: "9834856476",
      email: "joaosampaio@gmail.com",
      website: "joaosampaio.com.br"}
]

const posts: post[] = [
  {id: 3,
    title: "Histórias da carochinha",
    body: "quia et suscipit nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    userId: 2},
    {id: 4,
      title: "Princípios de programação",
      body: "quia et suscipit nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      userId: 2},
      {id: 4,
        title: "Princípios de programação",
        body: "quia et suscipit nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        userId: 2}
]


//6. Você acha melhor criá-los dentro ou fora do array de usuários? Justifique com comentários no código.
//É preciso criar separado pois são informações diferentes.

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

const findUserById = (id: number) => usuarios.find(user => user.id === id)

app.get("/", (req, res) => {          
  res.send("Hello from Express")
})

app.get("/users", (req, res) => {  
  res.json(usuarios)
})

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id)  
  const user = findUserById(userId)
  if (!user) return res.status(404).send("User not found")
  res.json(user)
})

app.get("/users/:id/posts", (req, res) => {    
  const userId = Number(req.params.id)
  const user = findUserById(userId)
  if (!user) return res.status(404).send("User not found")

  const userPosts = posts.filter(post => post.userId === userId)
  if (!userPosts.length) return res.status(404).send("Posts not founded")
  res.json(userPosts)
})

app.get("/posts", (req, res) => {    
  res.json(posts)
})

