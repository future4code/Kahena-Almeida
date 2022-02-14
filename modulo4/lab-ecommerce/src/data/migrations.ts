import connection from "./connection";
import users from "./users.json";
import products from "./products.json";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTableUsers = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS labecommerce_users(
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabela criada!") })
   .catch(printError);

const insertUsers = () => connection("labecommerce_users")
   .insert(users)
   .then(() => { console.log("Tabela de usuários criada!") })
   .catch(printError);

const closeConnection = () => { connection.destroy() }

createTableUsers()
.then(insertUsers)
.finally(closeConnection);



const createTableProducts = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS labecommerce_products(
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         price VARCHAR(255) NOT NULL,
         image_url VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabela de produtos criada!") })
   .catch(printError);

const insertProducts = () => connection("labecommerce_products")
   .insert(products)
   .then(() => { console.log("Produtos inseridos!") })
   .catch(printError);


createTableProducts()
   .then(insertProducts)
   .finally(closeConnection);

