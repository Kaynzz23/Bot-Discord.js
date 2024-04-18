const Discord = require("discord.js")
const mongoose = require('../../../src/database/mongoose.js')
const User = require('../../../src/database/models/schemas.js');
const { SlashCommandBuilder } = require('discord.js');


module.exports = {
  name: "atualizar",
  description: "[✨Utilidades] atualiza os dados do jogador", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [

    {
      name: "campo",
      description: "digite oque quer atualizar: Nick, Level, Prestige, Kills, dmt, Titan, Hora",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
      choices: [
        { 
          name: 'Nick', 
          value: 'nick' 
        },

        { 
          name: 'Prestige', 
          value: 'prestige' 
        },
        
        { 
          name: 'Level', 
          value: 'level' 
        },
        
        { 
          name: 'Kills', 
          value: 'kills' 
        },
        
        { 
          name: 'dmt', 
          value: 'dmt' 
        },

        { 
          name: 'Titan', 
          value: 'titan' 
        },

        { 
          name: 'Hora', 
          value: 'hora' 
        },

      ],
    },

    {
      name: "novo_valor",
      description: "insira os dados atualizado",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },

  ],

  run: async (client, interaction) => {

    const userId = interaction.user.id;

        const campo = interaction.options.getString('campo');
        let novoValor = interaction.options.getString('novo_valor');

        try {
            // Verificar se o campo é 'Level', 'Prestige' ou 'Kills' e converter para número, se aplicável
            if (campo === 'Level' || campo === 'Prestige' || campo === 'Kills') {
                novoValor = parseInt(novoValor);
                if (isNaN(novoValor)) {
                    throw new Error('O novo valor não é um número válido.');
                }
            }

            // Busca o documento do usuário na base de dados pelo ID
            const user = await User.findOne({ user: userId });
            if (!user) {
                return await interaction.reply('Usuário não encontrado na base de dados.');
            }

            // Atualizar o valor do campo para o novo valor
            user[campo] = novoValor;
            await User.updateOne({ user: userId },{ $set: { [campo]: novoValor }, }).catch(error => console.error('Erro ao salvar os dados:', error)),
            await interaction.reply(`O campo "${campo}" foi atualizado para "${novoValor}" para o usuário com ID ${userId}.`);
        } catch (error) {
            console.error('Erro ao atualizar campo:', error);
            await interaction.reply('Ocorreu um erro ao atualizar o campo.');
          } 

  }
}