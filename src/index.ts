import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('pr preview test')
})

export default app
