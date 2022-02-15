class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;
// todas as propriedades são privadas
  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
}

const user1: User = new User("123","matilda@gmail.com","Matilda","12345")
console.log("Exercício 01")
console.log("ID: ", user1.getId())
console.log("Nome: ", user1.getName())
console.log("Email: ", user1.getEmail())

// a) Seria possível imprimir a senha (password) atrelada a essa instância?
// Não.
//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// Uma única vez.


// EXERCÍCIO 02
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customer1: Customer = new Customer("124","mafalda@gmail.com","Mafalda","67890","12343454565453")

//2.a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? Uma vez.

//2.b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê? Duas vezes. Pq a classe customer é filha da User, então ela é chamada essa segunda vez para ser utilizada pela Customer.

// EXERCÍCIO 03
console.log("Exercício 01")
console.log("ID: ", customer1.getId())
console.log("Email: ", customer1.getEmail())
console.log("Nome: ", customer1.getName())
console.log("Senha: não é possível.")
console.log("Cartão: ", customer1.getCreditCard())
console.log("Valor compras realizadas: ", customer1.purchaseTotal)

//a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê? Não, pq a propriedade na classe User precisaria ser protected, ou então ser implementado um método para sua leitura como private.