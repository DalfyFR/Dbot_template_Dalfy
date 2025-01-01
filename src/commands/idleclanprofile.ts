/*
EXAMPLE for a command avalaible in DMs
!!! Application must contain emojis with the skill name for each skill from interface profilIdleClan
*/

import { CommandOptions, SlashCommandProps } from "commandkit";
import { SlashCommandBuilder, EmbedBuilder, userMention } from "discord.js";
import getLevel from "../utils/getLevelFromXpIdleClan";

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
    )
    .addBooleanOption((opt) =>
      opt
        .setName("visible")
        .setDescription("Post visibility for everyone (hidden by default)")
    ),

  // --------------- command execution
  run: async ({ interaction, client, handler }: SlashCommandProps) => {
    // Interface for skills from API
    interface profilIdleClan {
      guildName: string;
      skillExperiences: {
        attack: string;
        strength: string;
        defence: string;
        archery: string;
        magic: string;
        health: string;
        crafting: string;
        woodcutting: string;
        carpentry: string;
        fishing: string;
        cooking: string;
        mining: string;
        smithing: string;
        foraging: string;
        farming: string;
        agility: string;
        plundering: string;
        enchanting: string;
        brewing: string;
        exterminating: string;
      };
      upgrades: {
        housing: boolean;
        keepItSpacious: boolean;
        theLumberjack: boolean;
        theFisherman: boolean;
        autoEating: boolean;
        autoLooting: boolean;
        offlineProgress: boolean;
        valuedClanMember: boolean;
        farmingTrickery: boolean;
        powerForager: boolean;
        smeltingMagic: boolean;
        mostEfficientFisherman: boolean;
        ammoSaver: boolean;
        ninja: boolean;
        monsterHunter: boolean;
        teamwork: boolean;
        bossSlayer: boolean;
        toolbeltUpgrade: boolean;
        lazyRaider: boolean;
        ancientWisdom: boolean;
        masterCrafter: boolean;
        extraLoadouts: boolean;
        kronosWho: boolean;
        keepItBurning: boolean;
        betterSkinner: boolean;
        betterFisherman: boolean;
        betterLumberjack: boolean;
        arrowCrafter: boolean;
        delicateManufacturing: boolean;
        responsibleDrinking: boolean;
        lastNegotiation: boolean;
        showUsTheMoney: boolean;
        pickyEater: boolean;
        prestigiousWoodworking: boolean;
        gettingInSync: boolean;
        upgrade_bounty_hunter: boolean;
      };
    }
    const visible = interaction.options.getBoolean("visible") || false;

    await interaction.deferReply({ ephemeral: !visible });

    const playerName = interaction.options.getString("name");
    const profileJson = await fetch(
      `https://query.idleclans.com/api/Player/profile/${playerName}`
    );
    if (profileJson.status !== 200) {
      await interaction.editReply(
        `Le joueur \`${playerName}\` n'existe pô. *Désolé.*`
      );
      return;
    }
    // try {
    const profil: profilIdleClan = await profileJson.json();
    const embed = new EmbedBuilder()
      .setAuthor({
        name: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setColor("DarkGreen")
      .setTitle(`**\`${playerName}\`**'s profil on Idle Clan`)
      .setThumbnail(
        "https://play-lh.googleusercontent.com/6aLEFWzre_0E0NM4rqsprd3uCmnR7jFwZyjpOHci989Qgi9OpLEh-YP_G5tf8uw3a7yU"
      )
      .setFooter({
        text: "Developped by Dalfy",
        iconURL:
          "https://cdn.discordapp.com/avatars/95434196054446080/a_576689d10d4707e8f13b1c52978e6de7.gif",
      });
    await client.application.emojis.fetch();
    // Application must contain emojis with the skill name for each skill

    const skillsNames: string[] = [];
    const skillsLevels: string[] = [];
    for (const skill in profil.skillExperiences) {
      skillsNames.push(
        `${client.application.emojis.cache.find(
          (emoji) => emoji.name?.toLowerCase() === skill.toLowerCase()
        )} ${skill} : `
      );
      skillsLevels.push(
        "▶️ " + getLevel(profil.skillExperiences[skill]).toString()
      );
    }
    embed.addFields(
      {
        name: "Skills",
        value: skillsNames.join("\n"),
        inline: true,
      },
      {
        name: "levels :",
        value: skillsLevels.join("\n"),
        inline: true,
      }
    );

    interaction.editReply({
      content: `${userMention(
        interaction.user.id
      )}\n> -# [Click to check full API return](<https://query.idleclans.com/api/Player/profile/${playerName}>)`,
      embeds: [embed],
    });
    // } catch (error) {
    //   await interaction.editReply(
    //     `Erreur lors de la construction du profil pour le joueur \`${playerName}\`. *Désolé.*`
    //   );
    //   console.error(`Error while building idleClan's profil : ${error}`);
    // }
  },
  // Add options (defined higher)
  options,
};
