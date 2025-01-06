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

	      const indicationInput = new TextInputBuilder()
			.setCustomId('indicationInput')
			.setLabel("Did someone recommend you to this faction?")
			.setStyle(TextInputStyle.Short)
	                .setPlaceholder('if no, stay blank')
	
		const firstActionRow = new ActionRowBuilder().addComponents(nameInput);
		const secondActionRow = new ActionRowBuilder().addComponents(whyJoin);
                const fourthActionRow = new ActionRowBuilder().addComponents(killInputs, deathInputs, levelInputs)
	        const fifthActionRow = new ActionRowBuilder().addComponents(indicationInputs)
		modal.addComponents(firstActionRow, secondActionRow, fourthActionRow, fifthActionRow);
  
		await interaction.showModal(modal);
}
