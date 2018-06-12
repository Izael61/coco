var discord = require('discord.js')

exports.run = (client,message,args)=>{
 var embed = new discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#00ccff")
 .setDescription("\n **Tag Youtuber com 500 Subs, Um video no Servidor e Obter 100 Views!** \n \n **Tag MiniYT com 100 Subs, Um video no Servidor e Obter 50 Views!** \n \n **Tag Discloser com 20 Subs, Um video no Servidor e Obter 30 Views!**")
 .setTitle("Requisitos!")
 .setTimestamp()
 .addBlankField();

 message.channel.send(embed)
}