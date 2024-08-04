const { EmbedBuilder } = require('discord.js');

module.exports = function(interaction, SECURITYMODE) {
	const helpEmbed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Help')
		.setDescription(`hello, my name is sakura, i am a Lunar Covenant bot if u have some problem u can talk with my owner: <@874115618746552330>\nMy goal is to make LC functions easier and less manual.\nSource output: version 1.0.0 BETA TEST\nSecurity MODE: ${SECURITYMODE}\n`)
		.setImage('https://pbs.twimg.com/media/FSgDH9AXMAQoNLj.jpg')
		.addFields(
			{ name: 'Everyone', value: 'help\nping', inline: true},
			{ name: 'staff only', value: 'announce\npunish', inline: true },
			{ name: 'admin only', value: 'ban', inline: true },
			{ name: 'Elish only', value: 'test_response\nshutdown', inline: true },
		)
	interaction.reply({ embeds: [helpEmbed] });
}
