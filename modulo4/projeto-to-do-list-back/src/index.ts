import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

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


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app