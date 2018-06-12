exports.run = (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("KICK_MEMBERS")) return message.reply("Apenas **Gerentes** pode fazer isso.")
    if(message.mentions.users.size < 1) return message.reply("Você não mencinou ninguém")
    if(!message.guild.member(usuario).kickable) return message.reply("Você não pode kika essa pessoa.")
    if(razão.length < 1) return message.reply("Coloque um motivo.")

    message.guild.member(usuario).kick()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("Usario kickado do server")
   .addField("Usuario:",usuario.username)
   .addField("Razão:", razão);

   message.channel.send(embed)
}