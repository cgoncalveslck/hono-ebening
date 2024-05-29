import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('update test but now it works')
})

export default app
