const { Client, GatewayIntentBits, Routes, PermissionsBitField } = require("discord.js")
require("dotenv").config()
const command_management = require("./sakura/command_management.js")
var token = process.env.TOKEN

// devmode switcher
if(process.env.devmode == "true") {token = process.env.token}
else{token = process.env.sakuratoken}

const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
})

client.on("ready", () => {
	console.log("SakuraBot started")
	console.log("by yumekko54 [roblox]")
	console.log("---------------------")
})

client.on("interactionCreate", async (interaction) => {
	if(interaction.isCommand() && interaction.user.bot == false) {
		command_management(interaction)
	}
})

client.login(token)