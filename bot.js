import dotenv from "dotenv";
dotenv.config();

import { Client } from "discord.js";
const client = new Client({ intents: 37377 }); // https://ziad87.net/intents/

client.on("ready", async function () {
  console.log("Bot ready!");
});
let a;
/*Answer when someone sends ping(a ping message) */
client.on("messageCreate", async function (message) {
  if (message.content.includes("ping")) {
    a = message.reply("pong");
    a = (await a).edit("mierda");
  }
  if (message.content === "mierda") {
    a.edit("tapa");
  }
});

client.login(process.env.TOKEN);
