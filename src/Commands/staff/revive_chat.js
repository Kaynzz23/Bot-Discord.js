const Discord = require("discord.js")


module.exports = {
  name: "revive_chat", // Coloque o nome do comando
  description: "[🛠Staff] revive o chat", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    
    const cargoID = '1216547674220925088'; // ID do cargo permitido

    // Verifique se o membro que interagiu possui o cargo permitido
    if (!interaction.member.roles.cache.has(cargoID)) {
        return interaction.reply({ content: 'Você não tem permissão para usar este comando.', ephemeral: true });
    }

    const perguntas = [
      'Levi ou Shin?',
      'Como foi seu dia?',
      'Já comeu? Se sim, oq?',
      'Com quantos anos ganhou o primeiro celular?',
      'Como descobriu o anime AOT?',
      'Como descobriu a existência do Untitled Attack on Titan?',
      'Maior objetivo de vida.',
      'Youtuber / influencer / streamer favorito.',
      'Como descobriu o discord?',
      'Já bebeu água?',
      'Pior matéria (opinião pública)',
        // Adicione mais perguntas aqui
    ];

      const pergunta = perguntas[Math.floor(Math.random() * perguntas.length)];


    const cargoMencionado = interaction.guild.roles.cache.get('1213749251721662484');


    const reviveembed = new Discord.EmbedBuilder()
        .setTitle('revivechat')
        .setColor("Green")
	      .setDescription(`O staff ${interaction.user} solicitou o renascimento do chat! `)
	      .addFields({ name: 'um bom assunto:', value: `${pergunta}`, })

    await interaction.reply({ content: `${cargoMencionado}`, embeds: [reviveembed] });




  }
}
