const { EmbedBuilder, time, TimestampStyles } = require('discord.js');

module.exports = async function(interaction) {
	try {
		const date = new Date()
		var channel = await interaction.options.getChannel('channel')
		const startShift = new EmbedBuilder()
			.setColor("FFA6C9")
			.setTitle("Starting shift")
			.setDescription("User: <@"+interaction.user+">\nStarting at: "+time(date)+"\nwith: *"+interaction.options.getNumber('kills')+"* kills")
			.setImage(await interaction.options.getAttachment('image').url)
			.setThumbnail(interaction.guild.iconURL(true))
			.setTimestamp()
			.setFooter({ text: 'SakuraSystem | shift command' })
			
		await interaction.reply({ embeds: [startShift] })

	}catch(err){console.error("exception in Shift-Start: "+err)}
}