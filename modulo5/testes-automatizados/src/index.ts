import { config } from 'dotenv'

config()

type usuario = {
  name: string
  saldo: number
}

export function compra(usuario: usuario, compra: number): usuario | undefined {
  try {
    if (usuario.saldo >= compra) {
      return {
        ...usuario,
        saldo: usuario.saldo - compra
      }
    }
    return undefined
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
