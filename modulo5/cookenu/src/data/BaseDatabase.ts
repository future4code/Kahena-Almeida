import knex, { Knex } from 'knex'

export class BaseDatabase {
  static destroy: any
  static raw(arg0: string) {
    throw new Error('Method not implemented.')
  }
  protected static connection: Knex = knex({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      multipleStatements: true
    }
  })
}