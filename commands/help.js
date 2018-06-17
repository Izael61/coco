var discord = require('discord.js')

exports.run = (client,message,args)=>{
 var embed = new discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#80ffff")
 .setDescription("**Comandos** \n \n !aplicar \n \n !ban **(Apenas para staff)** \n \n !help \n \n !kick **(Apenas para staff)** \n \n !sugestao \n \n !youtuber \n \n !botinfo \n \n !say \n \n !clear \n \n !serverinfo")
 .setTitle("Help - Comandos")
 .setTimestamp()
 .addBlankField();
 message.author.send(embed)
 message.channel.send("Mandei meus comando no seu pv.")
}