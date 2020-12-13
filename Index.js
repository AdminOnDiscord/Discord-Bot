const commando = require('discord.js-commando');
const bot = new commando.client();

bot.registry.registerGroup('random' , 'Random');
bot.registry.registerDefaults();  
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('Nzg3NDg1MTk3MzkzMzMwMTc2.X9VovQ.w7ED_e1cxNo5oAusY9f2c13hHIA');