import express from "express";
import { AddressInfo } from "net";

type toDos = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const toDoList: toDos[] = [
  {userId: 111,
    id: 121121,
    title: "Limpar a casa",
    completed: false},
    {userId: 222,
      id: 122122,
      title: "Estudar",
      completed: true},
      {userId: 333,
        id: 123123,
        title: "Terapia",
        completed: false}
]

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

const findList = (status: boolean) => toDoList.filter(toDos => toDos.completed === status)

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

app.get("/list/:status", (req, res) => {         
  const completed = req.params.status === 'true' ? true : false
  const response = findList(completed)
  if (!response) return res.status(404).send("User not found")
  res.json(response)
})

app.post("/posts", (req, res) => {    
  const newPost = {userId: 444,
    id: 124124,
    title: "Cuidar dos Pets",
    completed: true}
  const newToDoList = toDoList.push(newPost)    
  return res.json(newToDoList)
})