import { client } from "./client.js";

(async function init() {
  //   await client.set("user:3", "Kajal Halder");
  //   await client.expire("user:3", 10);  <---------autometically erase data from that time (10sec)
  const result = await client.get("name");
  console.log(result);
})();
