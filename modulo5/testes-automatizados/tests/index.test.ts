import { compra } from '../src'

describe('Exercício 02', () => {
  // Primeiro Teste
  test('usuário com o saldo maior do que compra', () => {
    type usuario = {
      name: string
      saldo: number
    }
    const user: usuario = {
      name: 'Astrodev',
      saldo: 100
    }

    const result = compra(user, 40)

    expect(result).toEqual({
      name: 'Astrodev',
      saldo: 60
    })
  })

  // SegundoTeste
  test('usuário com o saldo igual do que compra', () => {
    type usuario = {
      name: string
      saldo: number
    }
    const user: usuario = {
      name: 'Astrodev',
      saldo: 50
    }

    const result = compra(user, 50)

    expect(result).toEqual({
      name: 'Astrodev',
      saldo: 0
    })
  })

  // TerceiroTeste
  test('usuário com o saldo igual do que compra', () => {
    type usuario = {
      name: string
      saldo: number
    }
    const user: usuario = {
      name: 'Astrodev',
      saldo: 30
    }

    const result = compra(user, 50)

    expect(result).not.toBeDefined()
  })
})
