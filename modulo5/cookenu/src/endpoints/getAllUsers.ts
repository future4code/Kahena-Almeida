import { Request, Response } from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'

export async function getAllUsers(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as any

    if (!token) {
      res
        .status(422)
        .send('Esse endpoint exige uma authorização á ser passada.')
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    if (tokenData.role !== 'ADMIN') {
      res
        .status(401)
        .send('Somente administradores podem acessar essa funcionalidade.')
    }

    const userDatabase = new UserDatabase()
    const users = await userDatabase.getAllUsers()

    res.status(200).send(users)
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message)
  }
}
