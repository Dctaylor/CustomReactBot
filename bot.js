// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('NjI0MDQ2MTU4MzQ3NzYzNzEy.XYLSzw.429HjnPAoNHoh4hjoYAXZu6f8Z4');


//listen for message
client.on('message', message => {
    if(Math.floor(Math.random() * 10) < 4) {
        var emojis = ["youcancallme", "LUCA_SMASH_", "igotyourbackbaby", "dalepog", "stayinschool", "rip"];
        var chosenEmoji = emojis[Math.floor((Math.random() * 6) - 1)];
        console.log(chosenEmoji);
        const emoji = message.guild.emojis.find(emoji => emoji.name === chosenEmoji);
        message.react(emoji);
    }    
});