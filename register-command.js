require("dotenv").config()
const { REST, Routes } = require("discord.js")
var botID=null
var token=null

const commands = [
	{
		name: 'ping',
		description: 'test the bot responsive',
	},
	{
		name: 'setup',
		description: 'Test the Sakura on this server',
	},
	{
		name: 'punish',
		description: 'timeout a member',
		"options": [
			{
				"name": "user",
				"description": "timeout a user",
				"type": 6,
				"required": true
			},
			{
				"name": "minutes",
				"description": "set a minute",
				"type": 10,
				"required": true
			}
		]
	},
	{
		name: 'ban',
		description: 'ban a member',
		"options": [
			{
				"name": "user",
				"description": "timeout a user",
				"type": 6,
				"required": true
			}
		]
	},
	{
		name: 'new-member',
		description: 'Register a new member',
		"options": [{
			"name": "user",
			"description": "register the player here",
			"type": 6,
			"required": true
		}]
	},
	{
		name: 'shutdown',
		description: 'turn off bot on all servers',
	},
	{
		name: 'annoucement',
		description: 'make a embed annoucement personalized to wharever server',
		"options": [
			{
				"name":"title",
				"description":'set the title of embed',
				"type": 3,
				"required": false
			},
			{
				"name":"description",
				"description":'set the description of embed',
				"type": 3,
				"required": false
			},
			{
				"name":"channel",
				"description":'select a channel',
				"type":7,
				"required":false
			}
		]
	},
	{
		name: 'invite',
		description: 'send the invite link',
	},
	{
		name: 'apply',
		description: 'make your apply on Lunar Covenant'
	}
]

const rest = new REST({ version: '10' }).setToken(process.env.token);

(async () => {
	try {
		await rest.put(
			Routes.applicationCommands("1267232655447953448"),
			{ body: commands }
		)
	console.log('registered')
	} catch(error){console.error(error)}
})()
