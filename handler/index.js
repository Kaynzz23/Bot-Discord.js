const fs = require("fs")

module.exports = async (client) => {

const SlashsArray = []

  fs.readdir(`./src/Commands`, (error, folder) => {
  folder.forEach(subfolder => {
fs.readdir(`./src/Commands/${subfolder}/`, (error, files) => { 
  files.forEach(files => {
      
  if(!files?.endsWith('.js')) return;
  files = require(`../src/Commands/${subfolder}/${files}`);
  if(!files?.name) return;
  client.slashCommands.set(files?.name, files);
   
  SlashsArray.push(files)
  });
    });
  });
});
  client.on("ready", async () => {
  client.guilds.cache.forEach(guild => guild.commands.set(SlashsArray))
    });
};