import { connection } from "../connection";

const errorMesage = (error: any) => { error.sqlMessage || error.message }

const createTable = () => connection.raw(`
CREATE TABLE User (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
`)
.then(() => console.log("Tabela criada com sucesso!"))
.catch(errorMesage)


const closeConnection = () => { connection.destroy() }

createTable()
    .then()
    .finally(closeConnection)