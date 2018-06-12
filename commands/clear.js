const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sem permissão para isso.");
  if(!args[0]) return message.channel.send("Use **!clear 1 ou mais**");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Apenas ${args[0]} Mensagem foi limpar.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}