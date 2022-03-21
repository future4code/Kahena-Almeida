import { Request, Response } from "express";
import connection from "../data/connection";

export default async function getAllUsers(
   req: Request,
   res: Response
): Promise<void>{
      let errorCode: number = 400;
   const printError = (error: any) => { console.log(error.sqlMessage || error.message) };
   const closeConnection = () => { connection.destroy() }

   try {

      const result = await connection('labecommerce_users')
      .then(() => { console.log("Lista de usuários encontrada!") })
      .catch(printError)
      .finally(closeConnection);

      return result;
      
    } catch (error) {
      if (error instanceof Error ) {
         res.status(errorCode).send({ message: error.message });
      } else {
         res.status(400).send({ message: "Erro inesperado!"})
      };  
   };  
};