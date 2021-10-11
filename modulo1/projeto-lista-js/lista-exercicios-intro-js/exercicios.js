// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  let lado1 = prompt('Qual a altura do retângulo?')
  let lado2 = prompt('Qual a largura do retângulo?')
  const area = Number(lado1) * Number(lado2)
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Qual o ano atual?')
  const anoNascimento = prompt('Qual seu ano de nascimento?')
  const idade = Number(anoAtual) - Number(anoNascimento)
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
   const calculo = peso / (altura * altura)
  return calculo
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Qual seu nome?')
  const idade = prompt('Qual sua idade?')
  const email = prompt('Qual seu e-mail?')
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Qual sua cor favorita?')
  const cor2 = prompt('E a segunda favorita?')
  const cor3 = prompt('E a terceira favorita?')
  const listaCores = [cor1, cor2, cor3]
  console.log(listaCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const maiuscula = string.toUpperCase()
  return maiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantidadeMinimaDeIngressos = custo / valorIngresso
  return quantidadeMinimaDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho = string1.length === string2.length
  return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiro = array[0]
  return primeiro
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimo = array[array.length -1]
  return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiro = array.shift()
  let ultimo = array.pop()
  array.push(primeiro)
  array.unshift(ultimo)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const bool = (string1.toUpperCase()) === (string2.toUpperCase())
  return bool
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAgora = prompt('Em que ano estamos?')
  const nascimentoAno = prompt('Em que ano você nasceu?')
  const idadeUsuario = Number(anoAgora) - Number(nascimentoAno)
  const anoRg = prompt('Qual o ano do seu RG?')
  const quantosAnosRg = Number(anoAgora) - Number(anoRg)

  const validacao1 = idadeUsuario <= 20 && quantosAnosRg >= 5
  const validacao2 = idadeUsuario > 20 && idadeUsuario <= 50 && quantosAnosRg >= 10
  const validacao3 = idadeUsuario > 50 && quantosAnosRg >= 15

  console.log(validacao1 || validacao2 || validacao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const condicao1 = (Number(ano) % 400) == 0
  const condicao2 = (Number(ano) % 4) == 0
  const condicao3 = (Number(ano) % 100) == 0
  const anoBisexto = condicao1 === condicao2 === condicao3
  return anoBisexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDeIdade = prompt('Você tem mais de 18 anos?') === 'sim'
  const grauDeEnsino = prompt('Você possui ensino médio completo?') === 'sim'
  const disponibilidade = prompt('Possui disponibilidade nos horários do curso?') === 'sim'
  const validarInscrição = maiorDeIdade === grauDeEnsino === disponibilidade
  console.log(validarInscrição)
}