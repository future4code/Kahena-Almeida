import { Request, Response } from "express";
import connection from "../data/connection";
import { Products } from "../types";

export default async function createProducts(
   req: Request,
   res: Response
): Promise<void> {
   let errorCode: number = 400;
   const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

   try{
      const {name, price, image_url} = req.body;

      if (!name || !price || !image_url) {
         errorCode = 422;
         throw new Error("Name, price e image são dados obrigatórios!");
      };
      
      const closeConnection = () => { connection.destroy() }

      const id = Math.ceil(Math.random() * Math.pow(10, 6)).toString();
      const newProduct: Products = {id, name, price, image_url};

         await connection('labecommerce_products')
            .insert(newProduct)
            .then(() => { console.log("Produto criado") })
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