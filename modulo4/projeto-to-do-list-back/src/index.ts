import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { request } from "http";

const app = express();

app.use(express.json());
app.use(cors());

const inserirNovosUsuarios = async (
  id: string,
  name: string,
  nickName: string,
  email: string
): Promise<void> => {
  await connection.raw(`
        INSERT INTO Users
          (id, name, nick_name, email)
        VALUES (
        ${Date.now().toString()},
        "${name}",
        "${nickName}",
        "${email}"
    );
    `);
};

app.put("/users", async (req: Request, res: Response): Promise<void> => {
  try {
    await inserirNovosUsuarios(
      Date.now().toString(),
      req.body.name,
      req.body.nickName,
      req.body.email
    );

    res.status(201).send("Usuário criado!");
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});
    
app.get("/users/:id", async (req: Request, res: Response):
Promise<any> => {
  try{
    const [resultado] = await connection("Users").where({id: req.params.id }).select();
    const {id, nick_name} = resultado

    if(!resultado){
      res.status(404).send({
        message: "Usuário não encontrado."
      })
    }

    res.status(200).send({id, nick_name});
  
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
})

const editarUsuarios = async (
  id: string,
  name?: string,
  nickName?: string,
  email?: string
): Promise<void> => {
  if (name) {
    await connection.raw(
      `UPDATE Users SET name = '${name}' WHERE id = '${id}'
      `)
  }
  if (nickName) {
    await connection.raw(
      `UPDATE Users SET nick_name = '${nickName}' WHERE id = '${id}'
      `)
  }
  if (email) {
    await connection.raw(
      `UPDATE Users SET email = '${email}' WHERE id = '${id}'
      `)
  }
};

app.post("/users/edit/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    if(!req.body.id){
      res.status(400).send("É necessário informar o id.");
    }
    if(!req.body.name && !req.body.nickName && !req.body.email){
      res.status(400).send("Os dados para substituição não podem ser vazios.");
    }
    await editarUsuarios(
      req.body.id,
      req.body.name,
      req.body.nickName,
      req.body.email
    );

    res.status(201).send("Usuário editado!");
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app