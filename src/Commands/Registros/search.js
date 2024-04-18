const Discord = require("discord.js")
const { EmbedBuilder } = require('discord.js');
const mongoose = require('../../../src/database/mongoose.js')
const User = require('../../../src/database/models/schemas.js');


module.exports = {
  name: "pesquisar", // Coloque o nome do comando
  description: "[✨Utilidades] pesquisa um jogador e mostra  suas informações", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [

    {
      name: "usuário",
      description: "Mencione um usuário.",
      type: Discord.ApplicationCommandOptionType.User,
      required: true,
    },

  ],

  run: async (client, interaction) => {

    const userId = interaction.options.getUser('usuário').id;

        try {
            // Busca o documento do usuário na base de dados pelo ID
            const user = await User.findOne({ user: userId });

            if (!user) {
                return await interaction.reply('Usuário não encontrado');
            }

            const nick = String(user.nick);
            const level = String(user.level);
            const prestige = String(user.prestige);
            const kills = String(user.kills);
            const dmt = String(user.dmt);
            const titan = String(user.titan);
            const hora = String(user.hora);

            // Cria uma embed com as informações do usuário
            const info = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('Informações do Usuário')
                .addFields(
                    { name: 'Nickname (Roblox)', value: nick },
                    { name: 'Level', value: level },
                    { name: 'Prestige', value: prestige },
                    { name: 'Kills', value: kills },
                    { name: 'DMT Principal', value: dmt },
                    { name: 'Titã', value: titan },
                    { name: 'Hora Disponível', value: hora }
                );

            await interaction.reply({ embeds: [info] });
        } catch (error) {
            console.error('Erro ao procurar informações do usuário:', error);
            await interaction.reply('Ocorreu um erro ao procurar informações do usuário.');
        }

  }
}