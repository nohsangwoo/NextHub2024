import express from 'express'
import next from 'next'
import { ApolloServer } from 'apollo-server-express'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 스키마와 리졸버 파일 경로 수정
const typesArray = loadFilesSync(
  `${__dirname}/src/graphql/**/*.{graphql,graphqls}`,
  { extensions: ['graphql', 'graphqls'] },
)
const resolversArray = loadFilesSync(
  `${__dirname}/src/graphql/**/*.resolvers.{js,ts}`,
  { extensions: ['js', 'ts'] },
)

// 스키마와 리졸버 병합
const typeDefs = mergeTypeDefs(typesArray)
const resolvers = mergeResolvers(resolversArray)

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  apolloServer.applyMiddleware({ app: server })

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
