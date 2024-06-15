import { Hono } from 'hono'
import { prisma } from './lib/db'
import { dataShoes } from '../data/shoes'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Sepatu Compass')
})

app.get("/shoes", async (c)=>{
  const shoes = await prisma.shoes.findMany();
  return c.json(shoes)
})

export default app
