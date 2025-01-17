const { REST, Routes } = require('discord.js');
require("dotenv").config()
var botID=null
var token=null

const rest = new REST().setToken(process.env.token);

// for global commands
rest.put(Routes.applicationCommands("1267232655447953448"), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);