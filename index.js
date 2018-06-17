const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
 
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
 
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
 
});
 
client.login(config.token)


client.on('guildMemberAdd', member => {
  if(member.guild.id !== "457636885100232706") return;
  let avatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
  .setColor('RED')
  .setThumbnail(avatar)
  .addField(':tada: | Bem vindo(a)!', `Bem vindo(a) ${member} Ao servidor :)`)
  .addField(`:family_mwgb: | Você foi o escolhido por nós.`)
  .setFooter(`Mensagem de Boas-Vindas.`)
  .setTimestamp()
  client.channels.get('457636885100232708').send({embed});
  member.user.send('Eae ta curtindo o server? ')

  
});

client.on('guildMemberAdd', member => {
  if(member.guild.id != '457636885100232706') return;
  let cargo = member.guild.roles.find('name', 'Membros');
  member.addRole(cargo);
})

client.on('message', message => {
  if(!message.content.includes('porra') && !message.content.includes('caralho')) return;
  message.delete();
  message.channel.send('Sem palavras de baixo calão!')
})

client.on('message', message => {
  if(!message.content.includes('discord.gg') && !message.content.includes('discord.me')) return;
  message.delete();
  message.channel.send('Não divulgue conquiste!')
})
