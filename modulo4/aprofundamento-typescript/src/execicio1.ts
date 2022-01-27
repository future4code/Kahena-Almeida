// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// let minhaString: string = 'Kahena Mansano'
// minhaString = 12345

// O typescript avisa que number não pode ser atribuído a uma variável de tipo string.



// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

// let meuNumero: number | string = 0
// meuNumero = "123"
// meuNumero = 123


// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

const eu = {
  nome: "Kahena",
  idade: 28,
  corFavorita: "Bordô"
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: string
}

const OutraPessoa: Pessoa = {
  nome: "Bruno",
  idade: 25,
  corFavorita: "Azul"
}

const ele: Pessoa = {
  nome: "Rodrigo",
  idade: 30,
  corFavorita: "Roxo"
}

const ela: Pessoa = {
  nome: "Bárbara",
  idade: 27,
  corFavorita: "Verde"
}

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum CORES_ARCO_IRIS {
  VIOLETA = "VIOLETA",
  ANIL = "ANIL",
  AZUL = "AZUL",
  VERDE = "VERDE",
  AMARELO = "AMARELO",
  LARANJA = "LARANJA",
  VERMELHO = "VERMELHO"
}

type PessoaArcoIris = {
  nome: string,
  idade: number,
  corFavorita: CORES_ARCO_IRIS 
}

const euArcoIris: PessoaArcoIris = {
  nome: "Kahena",
  idade: 28,
  corFavorita: CORES_ARCO_IRIS.VERMELHO
}

const OutraPessoa1: PessoaArcoIris = {
  nome: "Bruno",
  idade: 25,
  corFavorita: CORES_ARCO_IRIS.VERMELHO
}

const eleArcoIris: PessoaArcoIris = {
  nome: "Rodrigo",
  idade: 30,
  corFavorita: CORES_ARCO_IRIS.ANIL
}

const elaArcoIris: PessoaArcoIris = {
  nome: "Bárbara",
  idade: 27,
  corFavorita: CORES_ARCO_IRIS.VERDE
}
