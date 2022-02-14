import { Request, Response } from "express";
import connection from "../data/connection";
import { Users } from "../types";

export default async function createUsers(
   req: Request,
   res: Response
): Promise<void> {
   let errorCode: number = 400;
   const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

   try{
      const {name, email, password} = req.body;

      if (!name || !email || !password) {
         errorCode = 422;
         throw new Error("Name, email e password são dados obrigatórios!");
      };

      const closeConnection = () => { connection.destroy() }
      
      const id = Math.ceil(Math.random() * Math.pow(10, 6)).toString();
      const newUser: Users = {id, name, email, password};

         await connection('labecommerce_users')
            .insert(newUser)
            .then(() => { console.log("Usuário criado") })
            .catch(printError)
            .finally(closeConnection);
            
   } catch (error) {
    if (error instanceof Error ) {
       res.status(errorCode).send({ message: error.message });
    } else {
       res.status(400).send({ message: "Erro inesperado!"})
    };  
 };    
 
};