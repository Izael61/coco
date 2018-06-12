const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    console.log('i am ready');
});

bot.on('message', message => {
    if(message.author.bot) return;
    var re =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.exec(message.cleanContent);
    if(re != null){
        message.delete().then(message => {
            message.author.send('Sorry, you cannot include links in your messages');
        });
    }
});

bot.login('NDUyNTEwMzYxOTk2NzU0OTY0.Df1pMA.Hvj6f0JKTGXIUbfsR9Ow-wq1GcA');