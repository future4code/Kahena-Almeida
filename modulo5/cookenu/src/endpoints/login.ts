import { Request, Response } from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(422).send('Insira um email e senha cadastrados.')
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.findUserByEmail(email)

    if (!user) {
      res.status(409).send('Esse usuário não está cadastrado!')
    }

    const hashManager = new HashManager()
    const passwordIsCorrect = await hashManager.compare(
      password,
      user.getPassword()
    )

    if (!passwordIsCorrect) {
      res.status(401).send('Email ou senha incorretos.')
    }

    const authenticator = new Authenticator()
    const token = authenticator.generate({
      id: user.getId(),
      role: user.getRole()
    })

    res.status(200).send({ message: 'Usuário logado com sucesso!', token })
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}
