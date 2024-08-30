import { client } from './client.js'
async function init() {
  await client.sadd('user', 1)
  await client.sadd('user', 2)
  await client.sadd('user', 1)

}
init()
