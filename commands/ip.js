var discord = require('discord.js')

exports.run = (client,message,args)=>{
 var embed = new discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("RANDOM")
 .setDescription("**Jogar-Heavykits.tk**\n\n**Loja: loja-heavykits.tk**")
 .setTitle("**Ip do server**")
 .setTimestamp()
 .addBlankField();
 message.channel.send(embed)
}