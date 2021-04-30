// Here we are just importing modules and info from the config that we need
const Discord = require('discord.js');
const { token, userID } = require('./config.json');
const bot = new Discord.Client();

// This is listening for when a message is sent
bot.on('message', message => {
// Set userID in the config.json file
if (message.author.id === userID ) { // This ensures that only you are able to use the command
    console.log('blocking user from using self-bot')
}
// This is when you type the command it chat it listens for it
if (message.content === '!auto-bump') {
        var interval = setInterval (function () {
        message.channel.send('!d bump')
        .catch(console.error);
        }, 7200000); // This number is how often it will send (milliseconds)
    };
});

// This logs in and "turns on" the self-bot and tells you that it is online
console.log('disboard-auto-bumper is now active!')
bot.login(token)
