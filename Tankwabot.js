const Discord = require('discord.js');
const client = new Discord.Client();
 
241957223796834314.on('ready', () => {
  console.log('I am ready!');
});
 
241957223796834314.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});
 
241957223796834314.login('MjQxOTU3MjIzNzk2ODM0MzE0.CvZbwQ.s1LCEMDyDnAoKwkZEv0ES-YwSLY')
