import express from 'express'
import next from 'next'

const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/expresstest', (req, res) => {
    res.send('Hello Express')
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err?: any) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
