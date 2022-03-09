import { Request, Response } from 'express'
import { insertUser } from '../data/insertUser'
import { generateToken } from '../services/authenticator'
import { hash } from '../services/hashManager'
import { generateId } from '../services/idGenerator'

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, nickname, email, password, role } = req.body

    if (!name || !nickname || !email || !password) {
      throw new Error(
        'Preencha os campos "name","nickname", "email" e "password"'
      )
    }

    if (email.indexOf('@') === -1) {
      throw new Error('Email inválido.')
    }

    if (password.length < 6) {
      throw new Error('Senha precisa ter no mínimo 6 dígitos.')
    }

    const id: string = generateId()

    const hashPassword = await hash(password)

    await insertUser({
      id,
      name,
      nickname,
      email,
      password: hashPassword,
      role
    })

    const token: string = generateToken({
      id,
      role: role
    })

    res.status(201).send({
      message: 'Usuário criado!',
      token
    })
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}
