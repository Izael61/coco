var discord = require('discord.js')

exports.run = (client,message,args)=>{
 var embed = new discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("RANDOM")
 .setDescription("Olá eu sou um bot feito por\n**Izael61** Bom caso precise de um bot estou fazendo, Adicione meu chefe no privado, e mandem convite para ele.\n**Faço bot apenas para**\n**Servidores**\nMe adicione no pv :kiss: tchau.\nPara ir no canal do meu chefe click [**aqui**](https://www.youtube.com/channel/UCBQJ_E6_E5uBTY7uOOUyT-A?view_as=subscriber)" )
 .setTitle("**Descrição**")
 .setTimestamp()
 .addBlankField();

 message.channel.send(embed)
}