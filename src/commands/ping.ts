import { CommandOptions, SlashCommandProps } from "commandkit";
import {
  SlashCommandBuilder,
  InteractionContextType,
  PermissionsBitField,
} from "discord.js";
import checkClientPerms from "../utils/checkClientPerms";

// --------------- Necessary permission to execute the command
const options: CommandOptions = {
  userPermissions: [],
  botPermissions: ["SendMessages", "ReadMessageHistory"],
};

module.exports = {
  // --------------- Command strucure
  data: new SlashCommandBuilder()
    .setContexts(InteractionContextType.Guild)
    .setName("ping")
    .setDescription("pong"),

  // --------------- command execution
  run: async ({ interaction, client, handler }: SlashCommandProps) => {
    // TypeScript specific guard to specify the .setContexts(InteractionContextType.Guild)
    if (!interaction.inCachedGuild()) return;
    const clientInGuild = interaction.guild?.members.cache.get(client.user.id);
    if (!clientInGuild) return;
    await interaction.deferReply({ ephemeral: true });

    // Check bot's permissions in the interaction channel
    if (!interaction.inCachedGuild() || !interaction.channel) return;
    // Defines the mandatory permission for the bot in the interaction channel
    const permissionMissing = checkClientPerms(
      clientInGuild,
      new PermissionsBitField().add(/* No permissions needed for that one */),
      interaction.channel
    );
    // If missing permission, notify the user
    if (permissionMissing.length > 0) {
      await interaction.editReply(permissionMissing);
      return;
    }

    await interaction.editReply(`🏓 Pong ! ${client.ws.ping}ms`);
  },
  // Add options (defined higher)
  options,
};
