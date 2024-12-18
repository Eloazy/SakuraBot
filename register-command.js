require("dotenv").config()
const { REST, Routes } = require("discord.js")
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

const commands = [
	{
		name: 'ping',
		description: 'test the bot responsive',
		"contexts": [0,1,2]
	},
	{
		name: 'setup',
		description: 'Test the Sakura on this server',
		"contexts": [0]
	},
	{
		name: 'punish',
		description: 'timeout a member',
		"contexts": [0],
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
		"contexts": [0],
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
		"contexts": [0],
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
		"contexts": [0,1,2]
	},
	{
		name: 'annoucement',
		description: 'make a embed annoucement personalized to wharever server',
		"contexts": [0,1,2],
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
		name: 'maninho',
		description: ':3 uwu',
		"contexts": [0,1,2]
	},
	{
		name: 'invite',
		description: 'send the invite link',
		"contexts": [0,1,2]
	},
	{
		name: 'start-shift',
		description: 'start your shift here',
		"contexts": [0],
		"options": [
			{
				"name":"kills",
				"description": "input your kills here",
				"type":10,
				"required":true
			},
			{
				"name": "image",
				"description": "send the image here",
				"type":11,
				"required":true
			}
		]
	},
	{
		name: 'end-shift',
		description: 'end your shift here',
		"contexts": [0],
		"options": [
			{
				"name":"kills",
				"description": "input your kills here",
				"type":10,
				"required":true
			},
			{
				"name": "image",
				"description": "send the image here",
				"type":11,
				"required":true
			}
		]
	}
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationCommands(botID),
			{ body: commands }
		)
	console.log('registered')
	} catch(error){console.error(error)}
})()