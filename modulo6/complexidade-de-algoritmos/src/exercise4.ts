function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true
    }
  }
  return false
}

//Sendo n o tamanho do array listOfNumbers, a complexidade é O(n²)

//Por mais que não saibamos o que a função indexOf faz, dá para imaginar que ela percorre a o array tentando achar um index. Dessa forma, há um loop dentro do outro, caracterizando uma complexidade quadrática.
