import { CommandKit } from "commandkit";
import { Client } from "discord.js";

import "dotenv/config";

const client = new Client({
  intents: ["Guilds", "GuildMembers", "GuildMessages", "MessageContent"],
});

new CommandKit({
  client,
  commandsPath: `${__dirname}/commands`,
  eventsPath: `${__dirname}/events`,
  bulkRegister: true,
});

if (!process.env.TOKEN) {
  throw new Error("Mandatory .env variable missing");
}

client.login(process.env.TOKEN).catch((error: Error) => {
  console.error(`Error while connecting to the bot : Error = ${error}`);
});

export default client;
