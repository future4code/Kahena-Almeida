import { Request, Response } from "express";
import connection from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";
import mailTransporter from "../services/mailTransporter";
import { AddressInfo, UserAddress } from "../types";

export default async function createUserAddress(
   req: Request,
   res: Response
): Promise<void> {
   let errorCode: number = 400;

   try {
      const { zipcode, addressNumber, complement } = req.body;

      if (!zipcode || !addressNumber) {
         errorCode = 422;
         throw new Error("'zipcode' e 'addressNumber' são obrigatórios!");
      };

      if (typeof Number(addressNumber) !== "number") {
         errorCode = 422;
         throw new Error("'addressNumber' deve ser um número no formato string!")
      };

      const result: AddressInfo | null = await getAddressInfo(zipcode);

      if (result) {
         const { street, neighbourhood, city, state } = result;
         
         const newUser: UserAddress = { zipcode, street, addressNumber, complement, neighbourhood, city, state };

         await connection('UsersAddress')
            .insert(newUser);
   
         process.env.NODEMAILER_USER ? await mailTransporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: `<g6e8k2i3m1o7e5d9@labenualunos.slack.com>`,
            subject: "Desafio-Aula-Serviços-Backend",
            text:`
               O objeto utilizado foi:

               await mailTransporter.sendMail({;
                  from: email_do_usuario,
                  to: email_labenu,
                  subject: "Desafio-Aula-Serviços-Backend",
                  text: texto digitado
               })
            `
         }) : null; 

         res.status(201).send("Endereço de usuário criado com sucesso!");
      } else {
         errorCode = 422
         throw new Error("Verifique o `zipcode` fornecido, por favor!")  
      }    
   } catch (error) {
      if (error instanceof Error ) {
         res.status(errorCode).send({ message: error.message });
      } else {
         res.status(400).send({ message: "Erro inesperado!"})
      };  
   };
};