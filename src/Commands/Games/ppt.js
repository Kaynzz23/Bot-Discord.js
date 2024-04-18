const Discord = require("discord.js")
const { RockPaperScissors } = require('discord-gamecord');


module.exports = {
  name: "ppt", // Coloque o nome do comando
  description: "[🎮Games] pedra papel ou tesoura", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: "user",
      description: "Mencione um usuário.",
      type: Discord.ApplicationCommandOptionType.User,
      required: true,
    }

  ],

  run: async (client, interaction) => {

    const Game = new RockPaperScissors({
        message: interaction,
        isSlashGame: true,
        opponent: interaction.options.getUser('user'),
        embed: {
          title: 'Rock Paper Scissors',
          color: '#5865F2',
          description: 'Press a button below to make a choice.'
        },
        buttons: {
          rock: 'Rock',
          paper: 'Paper',
          scissors: 'Scissors'
        },
        emojis: {
          rock: '🌑',
          paper: '📰',
          scissors: '✂️'
        },
        mentionUser: true,
        timeoutTime: 60000,
        buttonStyle: 'PRIMARY',
        pickMessage: 'You choose {emoji}.',
        winMessage: '**{player}** won the Game! Congratulations!',
        tieMessage: 'The Game tied! No one won the Game!',
        timeoutMessage: 'The Game went unfinished! No one won the Game!',
        playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
      });
      
      Game.startGame();
      Game.on('gameOver', result => {
        console.log(result);  // =>  { result... }
      });

  }
}
