import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('update test')
})

export default app
