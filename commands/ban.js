exports.run = (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("Desculpe mais apenas **Gerentes** Pode fazer isso.")
    if(message.mentions.users.size < 1) return message.reply("Você não mecionou niguém!")
    if(!message.guild.member(usuario).bannable) return message.reply("Você não pode banir essa pessoa.")
    if(razão.length < 1) return message.reply("Coloque um motivo.")

    message.guild.member(usuario).ban()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("Usuario banido do server")
   .addField("Usuario:",usuario.username)
   .addField("Razão:", razão);

   message.channel.send(embed)
}