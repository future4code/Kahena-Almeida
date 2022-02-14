import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const result = await connection("aula49_recipes")
      const errorCode = 500;
      const recipes = result.map(toRecipe)
      const title = req.query.title;

      if(title === ''){
         const errorCode = 404;
         throw new Error("O valor de title não foi informado.");
      }

      if(recipes.length < 1){
         const errorCode = 422;
         throw new Error("Não foram encontrados 'recipes' com esse 'title'.");
      }

      res.status(200).send(recipes)

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}