message.channel.send(":apple:***SONDAGE :apple:\n "+choix1+" ou "+""+choix2+"***")
            .then(function (message) {
              message.react("https://discordapp.com/assets/a25c2bd97387b0675e9cd6ef232554cb.svg")
              message.react("👎")
              message.pin()
              message.delete()
            }).catch(function() {
              //Something
             });