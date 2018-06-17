const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Você não pode fazer isso.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Coloque o usuario.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Coloque o cargo.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Cargo não encontrado.");

  if(rMember.roles.has(gRole.id)) return message.reply("Ele(a) ja possui esse cargo.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Parabéns você recebeu o cargo ${gRole.name} No server HeavyMc`)
  }catch(e){
    message.channel.send(`Parabéns <@${rMember.id}>, Cargo: ${gRole.name}`)
  }
}

module.exports.help = {
  name: "addrole"
}