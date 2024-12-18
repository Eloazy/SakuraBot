const { REST, Routes } = require('discord.js');
require("dotenv").config()
var botID=null
var token=null

// devmode switcher
if(process.env.devmode=="true"){
	botID=process.env.ID
	token = process.env.token
}
else{
	botID=process.env.SID
	token = process.env.sakuratoken
}

const rest = new REST().setToken(token);

// for guild-based commands
rest.put(Routes.applicationCommands(botID), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);

// for global commands
rest.put(Routes.applicationCommands(botID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);