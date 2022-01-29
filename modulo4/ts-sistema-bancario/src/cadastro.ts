export type User = {
  userId: number,
  userName: string,
  userCpf: number,
  userBirth: number,
  userBalance: number,
  userExtract: Extract[]
}
export type Extract = {
  spentValue: number,
  spentDate: number,
  spentInfo: string,
}

export const users: User[] = [
  {
    userId: 1,
    userName: "João Antônio Ferreira",
    userCpf: 34234234450,
    userBirth: 20061990,
    userBalance: 5000,
    userExtract:[{
      spentValue: 30,
      spentDate: 20012022,
      spentInfo: "Lanche no Mac Donald's"
    },{
      spentValue: 15,
      spentDate: 20012022,
      spentInfo: "MilkShake no Mac Donald's" 
  }]}
]