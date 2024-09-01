import express from 'express'
import { client } from './client.js'
const server = express()
server.get('/', async (req, res) => {
  const chche = await client.get('products')
  if (chche) {
    console.log("hit cache")
    res.status(200).json(JSON.parse(chche))
    return
  }
  console.log('normal hit')
  const data = await fetch('https://dummyjson.com/products')

  const result = await data.json()
  await client.set('products', JSON.stringify(result))
  client.expire('products', 30)
  res.status(200).json(result)

})
server.listen(8080, () => {
  console.log("server is running on port 8080")
})
