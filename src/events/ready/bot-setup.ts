import { ActivityType, Client } from "discord.js";

export default (client: Client) => {
  console.log("info", `Logged in as ${client.user?.username}`);

  client.user?.setPresence({
    status: "dnd",
    activities: [
      {
        type: ActivityType.Custom,
        name: "customStatus",
        state: "😎 Chilling",
      },
    ],
  });
};
