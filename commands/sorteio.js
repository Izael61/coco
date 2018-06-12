const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {

  var LuckNumber = Math.floor((Math.random() * 100) + 0.95);
  const numEmb = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setAuthor('SORTEIO', 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest?cb=20151206055532&path-prefix=en')
  .addField('E o numero da sorte é:', `${LuckNumber}!`);
  message.channel.send({embed: numEmb})
  
  

}