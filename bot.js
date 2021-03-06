// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

//
const { Server } = require('./minecraft-request.js')



// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    //console.log(Server)
	console.log('Ready!');
});

//react to commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'mcp') {
        let motd = await Server();
        await interaction.reply(motd);
    }
    else if (commandName === 'brainfuck') {
        await interaction.reply('\>\+\+\+\+\+\+\+\+\[\<\+\+\+\+\+\+\+\+\+\>\-\]\<\.\>\+\+\+\+\[\<\+\+\+\+\+\+\+\>\-\]\<\+\.\+\+\+\+\+\+\+\.\.\+\+\+\.\>\>\+\+\+\+\+\+\[\<\+\+\+\+\+\+\+\>\-\]\<\+\+\.\-\-\-\-\-\-\-\-\-\-\-\-\.\>\+\+\+\+\+\+\[\<\+\+\+\+\+\+\+\+\+\>\-\]\<\+\.\<\.\+\+\+\.\-\-\-\-\-\-\.\-\-\-\-\-\-\-\-\.\>\>\>\+\+\+\+\[\<\+\+\+\+\+\+\+\+\>\-\]\<\+\.')
    }
    else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
})


// Login to Discord with your client's token
client.login(token);
