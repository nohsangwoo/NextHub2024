import express from 'express'
import next from 'next'
import {
  resolvers,
  resolvers2,
  schema,
  test,
  typeDefs,
  typeDefs2,
} from './src/graphqlSchema'

import { ApolloServer } from 'apollo-server-express'
test()

const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './' })
const handle = app.getRequestHandler()

const apolloServer = new ApolloServer({
  cache: 'bounded',
  schema: schema,
})

app.prepare().then(async () => {
  const server = express()

  await apolloServer.start() // Apollo 서버 시작하기
  apolloServer.applyMiddleware({ app: server }) // middleware 적용은 서버 시작 후

  server.get('/expresstest', (req, res) => {
    res.send('Hello Express')
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err?: any) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
    console.log(
      `> GraphQL path is http://localhost:${port}${apolloServer.graphqlPath}`,
    )
  })
})
