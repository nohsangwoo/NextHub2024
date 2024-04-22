import express from 'express'
import next from 'next'
import test from './src/test'

import { ApolloServer } from 'apollo-server-express'

// 스키마와 리졸버 병합

// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
// })

const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // apolloServer.applyMiddleware({ app: server })

  server.get('/expresstest', (req, res) => {
    res.send('Hello Express')
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err?: any) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
    // console.log(
    //   `> GraphQL path is http://localhost:${port}${apolloServer.graphqlPath}`,
    // )
  })
})
