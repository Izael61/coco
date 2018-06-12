exports.run = (client,message,args)=>{
    var sugest = args.slice(0).join(" ")
    if(!sugest) return message.reply("escreva sua sugestão")
        client.guilds.get("307503384707989504").channels.get("452710273694957588").send("----------------------Sugestão------------------------\n"+ sugest + "\n \n sugestão enviada por <@" + message.author.id + "> ou " + message.author.tag + "\n \n---------------------fim--------------------")
    message.channel.send("Mensagem enviada com sucesso @" + message.author.tag +  " Aguarde a resposta!" )
    
    
}

