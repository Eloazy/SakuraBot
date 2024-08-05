const { Client, GatewayIntentBits} = require("discord.js")
require("dotenv").config()
const command_management = require("./useful/command_management.js")
var token = null

// devmode switcher
if(process.env.devmode == "true") {token = process.env.token}
else{token = process.env.sakuratoken}

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

client.on("ready", () => {
	console.log("SakuraBot started")
	console.log("by yumekko54 [roblox]")
	console.log("---------------------")
})

client.on("interactionCreate", async (interaction) => {if(interaction.isCommand() && interaction.user.bot == false) {command_management(interaction, interaction.user.id, process.env.SECURITYMODE)}})

client.login(token)