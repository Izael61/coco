
var discord = require('discord.js')

exports.run = (client,message,args)=>{
 var embed = new discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#6A5ACD")
 .setDescription("**Estou no total** em: \n \n**Canais** 2 \n**Servidores:** HeavyMc - Oficial \n**Ip do server:** Jogar-Heavykits.tk")
 .setTitle("")
 .setTimestamp()
 
 message.channel.send(embed)
}