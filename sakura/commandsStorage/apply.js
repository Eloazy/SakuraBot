const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")
module.exports = async function(interaction) {

  const modal = new ModalBuilder()
			.setCustomId('apply')
			.setTitle('Lunar Apply')
  
		const nameInput = new TextInputBuilder()
			.setCustomId('nameInput')
			.setLabel("input your ROBLOX and DISCORD user")
			.setStyle(TextInputStyle.Short)
	                .setPlaceholder('example: robloxUser / discordUser')

		const whyJoin = new TextInputBuilder()
			.setCustomId('whyJoin')
			.setLabel("why you want join on Lunar Covenant")
			.setStyle(TextInputStyle.Paragraph);

	       const killInput = new TextInputBuilder()
			.setCustomId('killInput')
			.setLabel("input your kills in-game")
			.setStyle(TextInputStyle.Short)
	       
	      const deathInput = new TextInputBuilder()
			.setCustomId('deathInput')
			.setLabel("input your deaths in-game")
			.setStyle(TextInputStyle.Short)

	      const levelInput = new TextInputBuilder()
			.setCustomId('levelInput')
			.setLabel("input your level in-game")
			.setStyle(TextInputStyle.Short)
	
		const firstActionRow = new ActionRowBuilder().addComponents(nameInput);
		const secondActionRow = new ActionRowBuilder().addComponents(whyJoin);
                const tirthActionRow = new ActionRowBuilder().addComponents(killInput);
                const fourthActionRow = new ActionRowBuilder().addComponents(deathInput)
	        const fifthActionRow = new ActionRowBuilder().addComponents(levelInput)
		modal.addComponents(firstActionRow, secondActionRow, tirthActionRow, fourthActionRow, fifthActionRow);
  
		await interaction.showModal(modal);
}
