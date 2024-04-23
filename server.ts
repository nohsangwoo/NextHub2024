import express, { Application } from 'express'
import next from 'next'

import { ApolloServer } from 'apollo-server-express'
import { schema } from './src/graphql/schema'

const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './' })
const handle = app.getRequestHandler()

const apolloServer = new ApolloServer({
  cache: 'bounded',
  schema,
  context: ({ req, res }) => ({
    // 요청과 응답 객체를 context에 추가
    req,
    res,
    // 추가적으로 다른 데이터도 context로 전달 가능
    customData: 'example data',
    // 예를 들어, 인증 정보 등을 추가할 수 있음
    // user: req.user,  // Express 미들웨어 등에서 설정된 사용자 정보
  }),
})

app.prepare().then(async () => {
  const server: Application = express()

  await apolloServer.start() // Apollo 서버 시작하기
  // @ts-ignore
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
