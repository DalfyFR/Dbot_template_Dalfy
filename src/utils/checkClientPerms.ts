import {
  GuildMember,
  GuildTextBasedChannel,
  PermissionsBitField,
} from "discord.js";

export default (
  client: GuildMember,
  perms: PermissionsBitField,
  channel: GuildTextBasedChannel
) => {
  const missingPerms: string[] = [];
  for (const perm of perms.toArray()) {
    if (!channel.permissionsFor(client).has(perm)) missingPerms.push(perm);
  }
  return missingPerms.length > 0
    ? `I'm missing the following permissions in ${channel} :
    \n ${missingPerms.map((e) => `> - \`${e}\``).join("\n")}`
    : "";
};
