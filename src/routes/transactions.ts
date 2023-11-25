import { FastifyInstance } from 'fastify'
import { knex } from '../databse'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const tables = await knex('sqlite_schema').select('*')

    return tables
  })
}
