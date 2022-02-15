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

const user1 = new User("123","matilda@gmail.com","Matilda","12345")
console.log("Exercício 01")
console.log("ID: ", user1.getId())
console.log("Nome: ", user1.getName())
console.log("Email: ", user1.getEmail())