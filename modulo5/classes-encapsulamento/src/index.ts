class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
}

// a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*

// Construtores servem basicamente como funções de inicialização de uma classe, as quais são invocadas no momento em que objetos desta classe são criadas. É chamado quando se cria uma nova instância, usando a keyword 'new'.

// b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*

const usuario = new UserAccount('123.456.789-30', 'Kahena', 28)

// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*

//Através da keyword 'this'.