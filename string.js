import { client } from "./client.js";

(async function init() {
  //   await client.set("user:3", "Kajal Halder");
  //   await client.expire("user:3", 10);  <---------autometically erase data from that time (10sec)
  const result = await client.get("name");
  await client.lpush("message", ["hi bro"]);
  const response = await client.get('message);
  conlose.log(response);
  console.log(result);
})();
