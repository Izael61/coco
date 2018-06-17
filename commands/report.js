exports.run = (client,message,args)=>{
  var sugest = args.slice(0).join(" ")
  if(!sugest) return message.reply("**Use:** \n\nSeu nick: \nNick do reportado:\nMotivo:\nProva:")
      client.guilds.get("307503384707989504").channels.get("456847792204283935").send("**[ Report ]**\n\n"+ sugest + "\n \n**Report** enviado por @" + message.author.tag + "\n")
  message.channel.embed.send("Report enviado com sucesso @" + message.author.tag +  " Aguarde um staff ver!")
  
  
}

