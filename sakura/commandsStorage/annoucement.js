const { EmbedBuilder } = require('discord.js');

module.exports = async function(interaction) {
	try {
		var channel = await interaction.options.getChannel('channel')
		const AnnoucementEmbed = new EmbedBuilder()
			.setColor("FFA6C9")
			.setTitle(interaction.options.getString('title') ?? null)
			.setDescription(interaction.options.getString('description') ?? null)
			.setTimestamp()
			.setFooter({ text: 'SakuraSystem' })
		
		if(channel !== null) {
			await interaction.guild.channels.cache.get(channel.id).send({ embeds: [AnnoucementEmbed] })
			await interaction.reply({ content: 'send the message in: <#'+channel.id+'>', ephemeral: true})
		}
		else {await interaction.reply({ embeds: [AnnoucementEmbed] })}
	}catch(err){console.error("exception in Annoucements: "+err)}
}