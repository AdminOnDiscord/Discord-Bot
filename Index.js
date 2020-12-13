const commando = require('discord.js-commando');
const bot = new commando.client();

bot.registry.registerGroup('random' , 'Random');
bot.registry.registerDefaults();  
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(Bot Token);
