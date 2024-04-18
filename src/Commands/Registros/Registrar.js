const Discord = require("discord.js")
const User = require('../../../src/database/models/schemas.js');
const mongoose = require('../../../src/database/mongoose.js')


module.exports = {
  name: "registrar", // Coloque o nome do comando
  description: "[🛠Staff] registra um usuario", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [

    {
      name: "usuário",
      description: "Mencione um usuário.",
      type: Discord.ApplicationCommandOptionType.User,
      required: true,
    },

    {
      name: 'nick',
      description: 'Coloque seu nick',
      type: Discord.ApplicationCommandOptionType.String,
      required: true
    },

    {
      name: 'prestige',
      description: 'Coloque seu prestige',
      type: Discord.ApplicationCommandOptionType.Integer,
      required: true
    },

    {
      name: 'level',
      description: 'Coloque seu Level',
      type: Discord.ApplicationCommandOptionType.Integer,
      required: true
    },

    {
      name: 'kills',
      description: 'Coloque suas kills (só numero sem "."',
      type: Discord.ApplicationCommandOptionType.Integer,
      required: true
    },

    {
      name: 'dmt',
      description: 'Coloque sua DMT principal',
      type: Discord.ApplicationCommandOptionType.String,
      required: true
    },

    {
      name: 'titã',
      description: 'Coloque seu titã (caso tenha)',
      type: Discord.ApplicationCommandOptionType.String,
      required: true
    },

    {
      name: 'horário',
      description: 'Coloque seu horário de jogo',
      type: Discord.ApplicationCommandOptionType.String,
      required: true
    },

    

  ],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
      return await interaction.reply('Você não tem permissão para usar este comando.');
    } else {

      const usernm = interaction.options.getUser("usuário");
      const user = interaction.options.getUser("usuário").id;
      const nick = interaction.options.getString('nick');
      const prestige = interaction.options.getInteger('prestige');
      const level = interaction.options.getInteger('level');
      const kills = interaction.options.getInteger('kills');
      const dmt = interaction.options.getString('dmt');
      let titan = interaction.options.getString('titã');
      const hora = interaction.options.getString('horário');

     try {
      const userinfo = new User({
        user: user,
        nick: nick,
        level: level,
        prestige: prestige,
        kills: kills,
        dmt: dmt,
        titan: titan,
        hora: hora,
      });
      await userinfo.save();
      await interaction.reply(`Informações registradas com sucesso para ${usernm.displayName}!`);
      } catch (error) {
      console.error('Erro ao registrar informações:', error);
      await interaction.reply('Ocorreu um erro ao registrar as informações.');
      }

    }
  }
};