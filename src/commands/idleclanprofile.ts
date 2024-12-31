/*
EXAMPLE for a command avalaible in DMs
*/

import { CommandOptions, SlashCommandProps } from "commandkit";
import {
  SlashCommandSubcommandBuilder,
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
    .setName("idle-clan-profile")
    .setDescription("Get the profile from a idle clan player")
    .addStringOption((opt) =>
      opt
        .setName("name")
        .setDescription("Idle Clan player name")
        .setRequired(true)
    ),

  // --------------- command execution
  run: async ({ interaction, client, handler }: SlashCommandProps) => {
    await interaction.deferReply({ ephemeral: true });

    const playerName = interaction.options.getString("name");
    const profileJson = await fetch(
      `https://query.idleclans.com/api/Player/profile/${playerName}`
    );
    console.log(profileJson);
  },
  // Add options (defined higher)
  options,
};
