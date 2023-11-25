import fastify from 'fastify'
import { knex } from './databse'
import { env } from './env'

const app = fastify()

app.get('/', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server running...')
  })
