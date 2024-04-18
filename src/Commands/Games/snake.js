const Discord = require("discord.js")
const { Snake } = require('discord-gamecord');


module.exports = {
  name: "snake", // Coloque o nome do comando
  description: "[🎮Games] jogo da cobrinha", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    const Game = new Snake({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: 'Snake Game',
          overTitle: 'Game Over',
          color: '#5865F2'
        },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️', 
          down: '⬇️',
          left: '⬅️',
          right: '➡️',
        },
        stopButton: 'Stop',
        timeoutTime: 60000,
        snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
        foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
        playerOnlyMessage: 'Only {player} can use these buttons.'
      });
      
      Game.startGame();
      Game.on('gameOver', result => {
        console.log(result);  // =>  { result... }
      });

  }
}