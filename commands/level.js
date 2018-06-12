const Discord = require("discord.js");
const botconfig = require("../botconfig");
let purple = botconfig.purple;

module.exports.run = async (bot, message, args) => {

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     level: 1
  };
}
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(purple)
  .addField("Level", curlvl, true)

  message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "level"
}