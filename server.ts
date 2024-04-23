import express from 'express'
import next from 'next'

import { ApolloServer } from 'apollo-server-express'
import { resolvers, test, typeDefs } from './src/graphql/schema'
test()

const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './' })
const handle = app.getRequestHandler()

const apolloServer = new ApolloServer({
  cache: 'bounded',
  resolvers: resolvers,
  typeDefs: typeDefs,
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
