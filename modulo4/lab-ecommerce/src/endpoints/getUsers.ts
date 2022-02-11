import { Request, Response } from "express";
import connection from "../data/connection";

export const getAllUsers = async(
   req: Request,
   res: Response
): Promise<void> =>{
    let errorCode: number = 400;
   const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

   try {

    const users = await connection('labecommerce_users')
    .then(() => { console.log("Usuário criado") })
    .catch(printError);

      res.status(200).send(users);
      
    } catch (error) {
      if (error instanceof Error ) {
         res.status(errorCode).send({ message: error.message });
      } else {
         res.status(400).send({ message: "Erro inesperado!"})
      };  
   };  
};