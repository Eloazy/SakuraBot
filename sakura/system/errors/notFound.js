const { EmbedBuilder } = require('discord.js');

module.exports = async function(interaction) {
	const notfound = new EmbedBuilder()
		.setColor("FF0000")
		.setTitle('[NOT-FOUND] | DiscordServer not Logged on database')
	interaction.reply({ embeds: [notfound] });
}