// Fuck, Marry, Kill - Command by DRYNO!
// Make sure you call the discord.js package!
const Discord = require('discord.js');

// Make sure you use exports.run when you have a command handler!
module.exports.run = async (bot, message, args) => {

    let replies = ['Selinho :kiss: ', 'Pegado :kiss_mm:  ', 'Colado :kiss_ww:'];
    let result = Math.floor(Math.random() * replies.length);

    let makifuembed = new Discord.RichEmbed()

        .setDescription(`**${args[0]} Foi beijado por: <@${message.author.id}>**`)
        .setColor('RANDOM')
        .addField('Você beijou:', replies[result])
        .setFooter('Beijão', bot.user.displayAvatarURL)
        .setTimestamp();

    if (!message.mentions.users.first()) return message.channel.send(`<@${message.author.id}>, Oi, Mecione alguém que você queira pega :kiss: Entende?`).then(msg => {
        msg.delete(5000)
    });

    message.channel.send(makifuembed);

}
// Make sure you got exports.help || otherwise the command won't work!
module.exports.help = {
    name: "beijar",

    description: "O comando beijo é pra beija seu crush :p :kiss:",

    usage: "!beija <user>"
}