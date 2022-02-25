import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../types/User'

export interface AuthenticatorData {
  id: string
  role: USER_ROLES
}

export class Authenticator {
  public generate(input: AuthenticatorData): string {
    const token = jwt.sign(
      { id: input.id, role: input.role },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.EXPIRES_IN
      }
    )
    return token
  }

  public getTokenData(token: string): AuthenticatorData {
    const data = jwt.verify(token, process.env.JWT_KEY as string)
    return data as AuthenticatorData
  }
}
