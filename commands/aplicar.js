var discord = require('discord.js')

exports.run = (client,message,args)=>{
 var embed = new discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#6A5ACD")
 .setDescription("Para fazer form de **Helper** [Click Aqui](https://docs.google.com/forms/d/e/1FAIpQLSdnuUhucun79xV1Ky8ZmL5LjeJPNgQWX-bQu2DkTLSElIdvVQ/viewform) Para ir ao formulario!")
 .setTitle("Helper")
 .setTimestamp()
 .setFooter("Aplicação para Staff!")
 .addField("Trial","Para fazer o form de **Trial** [Click Aqui](https://docs.google.com/forms/d/e/1FAIpQLSf1RopimHhw0pW38inrrA-ZyqFYqFJw9Evr0X6Kwcit4S2Q7A/viewform?usp=send_form) Para ir ao formulario!")
 .addBlankField();

 message.channel.send(embed)
}