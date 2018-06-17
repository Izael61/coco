const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Você não pode fazer isso.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Coloque o usuario");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Coloque o cargo");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Não foi possivel encontra o cargo.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Ele(a) não tem esse cargo..");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`R.I.P, Você não possui mais o cargo: ${gRole.name}`)
  }catch(e){
    message.channel.send(`R.I.P <@${rMember.id}>, Removeu o cargo ${gRole.name}.`)
  }
}

module.exports.help = {
  name: "removerole"
}