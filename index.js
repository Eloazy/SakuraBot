const Discord = require("discord.js")
require("dotenv").config()
const command_management = require("./useful/command_management.js")

const client = new Discord.Client({ intents: ["Guilds"]})

client.on("ready", () => {
	console.log("SakuraBot started")
	console.log("by yumekko54 [roblox]")
	console.log("---------------------")
})

client.on("interactionCreate", async (interaction) => {
	if(interaction.isCommand()) {command_management(interaction, interaction.user.id)}
})

client.login(process.env.token)