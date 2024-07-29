const Discord = require("discord.js")
module.exports = async function(interaction) {
	await interaction.reply("SakuraBOT report: the lady requested the shutdown of all of Sakura's systems")
	process.exit()
}