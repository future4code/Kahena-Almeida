import { connection } from './connection'

connection
  .raw(
    `
   CREATE TABLE IF NOT EXISTS to_do_list_users (
      id VARCHAR(64) PRIMARY KEY,
      name VARCHAR(64) NOT NULL,
      nickname VARCHAR(64) NOT NULL,
      email VARCHAR(64) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role ENUM("normal", "admin") DEFAULT "normal",
   );

   IF TABLE to_do_list_users EXISTS (
      ALTER TABLE nome_da_tabela ADD COLUMN 
      role ENUM("normal", "admin") DEFAULT "normal");`
  )
  .then(() => {
    console.log('Tabela criada!')
  })
  .catch(error => {
    console.log(error.sqlMessage || error.message)
  })
  .finally(() => {
    connection.destroy()
  })
