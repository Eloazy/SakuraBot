const { Client, GatewayIntentBits, Routes, PermissionsBitField } = require("discord.js")
require("dotenv").config()
const command_management = require("./sakura/command_management.js")

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

client.login(process.env.token)