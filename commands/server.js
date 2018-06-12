const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NDUyNTEwMzYxOTk2NzU0OTY0.Df1pMA.Hvj6f0JKTGXIUbfsR9Ow-wq1GcA');

var request = require('request');
var mcCommand = '!server'; // Command for triggering
var mcIP = 'Jogar-heavykits.tk'; // Your MC server IP
var mcPort = 25565; // Your MC server port

client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error');
            }
            body = JSON.parse(body);
            var status = '*O server está offline*';
            if(body.online) {
                status = '**Server minecraft** Server está **online**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** Players online!';
                } else {
                    status += '*Niguém online!*';
                }
            }
            message.reply(status);
        });
    }
});