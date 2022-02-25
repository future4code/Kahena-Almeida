import { BaseDatabase } from './BaseDatabase'

BaseDatabase.raw(
  `
CREATE TABLE IF NOT EXISTS cookenu_user (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  email VARCHAR(64) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL"
);
`
)
  .then(() => {
    console.log('Tabela criada!')
  })
  .catch((error: any) => {
    throw new Error(error.sqlMessage || error.message)
  })
  .finally(() => {
    BaseDatabase.destroy()
  })
