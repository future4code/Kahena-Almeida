import {
  validateCharacter,
  Character,
  performAttack,
  validatorMock
} from '../src'

describe('Teste da função validateCharacter', () => {
  // Teste A
  test('Should return false for empty name', () => {
    const result = validateCharacter({
      name: '',
      life: 1500,
      strength: 300,
      defense: 500
    })

    expect(result).toBe(false)
  })

  // Teste B
  test('Should return false for life 0', () => {
    const result = validateCharacter({
      name: 'Scorpion',
      life: 0,
      strength: 300,
      defense: 500
    })

    expect(result).toBe(false)
  })

  // Teste C
  test('Should return false for strength 0', () => {
    const result = validateCharacter({
      name: 'Scorpion',
      life: 10,
      strength: 0,
      defense: 500
    })

    expect(result).toBe(false)
  })

  // Teste D
  test('Should return false for defense 0', () => {
    const result = validateCharacter({
      name: 'Scorpion',
      life: 10,
      strength: 110,
      defense: 0
    })

    expect(result).toBe(false)
  })

  // Teste E
  test('Should return false for life negative', () => {
    const result = validateCharacter({
      name: 'Scorpion',
      life: -10,
      strength: 110,
      defense: 500
    })

    expect(result).toBe(false)
  })

  // Teste F
  test('Should return true for all valid inputs', () => {
    const result = validateCharacter({
      name: 'Scorpion',
      life: 1500,
      strength: 300,
      defense: 500
    })

    expect(result).toBe(true)
  })
})

describe('Teste da função validateCharacter', () => {
  // Exercício 04
  test('Creating Mocks', () => {
    const validatorMock = jest.fn(() => {
      return true
    })
  })

  test('Creating Mocks', () => {
    const validatorMock = jest.fn(() => {
      return false
    })
  })
})

describe('Dois personagens com valores válidos', () => {
  test('Should perform attack', () => {
    const validatorMock = jest.fn(() => {
      return true
    })

    const attacker: Character = {
      name: 'Scorpion',
      life: 1500,
      defense: 200,
      strength: 600
    }

    const defender: Character = {
      name: 'Kitana',
      life: 1500,
      defense: 400,
      strength: 800
    }

    performAttack(attacker, defender, validatorMock as any)

    expect(defender.life).toEqual(1300)
    expect(validatorMock).toHaveBeenCalled()
    expect(validatorMock).toHaveBeenCalledTimes(2)
    expect(validatorMock).toHaveReturnedTimes(2)
  })
})

describe('Dois personagens com valores inválidos', () => {
  test('Should return invalid character error', () => {
    expect.assertions(4)
    const validatorMock = jest.fn(() => {
      return false
    })

    const attacker: Character = {
      name: '',
      life: 1500,
      defense: 200,
      strength: 600
    }

    const defender: Character = {
      name: 'Kitana',
      life: 1500,
      defense: 400,
      strength: 800
    }

    try {
      performAttack(attacker, defender, validatorMock as any)
    } catch (err) {
      expect(err.message).toBe('Invalid character')
      expect(validatorMock).toHaveBeenCalled()
      expect(validatorMock).toHaveBeenCalledTimes(1)
      expect(validatorMock).toHaveReturnedTimes(1)
    }
  })
})
