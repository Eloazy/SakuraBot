const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")
module.exports = async function(interaction) {

  const modal = new ModalBuilder()
			.setCustomId('apply')
			.setTitle('Lunar Apply)
  
		const nameInput = new TextInputBuilder()
			.setCustomId('nameInput')
			.setLabel("input your ROBLOX and DISCORD user")
			.setStyle(TextInputStyle.Short);

		const whyJoin = new TextInputBuilder()
			.setCustomId('whyJoin')
			.setLabel("why you want join on Lunar Covenant")
			.setStyle(TextInputStyle.Paragraph);

	        const whyChoose = new TextInputBuilder()
			.setCustomId('whyChoose')
			.setLabel("Why should we accept you instead of another candidate?")
			.setStyle(TextInputStyle.Paragraph);
  
		const firstActionRow = new ActionRowBuilder().addComponents(nameInput);
		const secondActionRow = new ActionRowBuilder().addComponents(whyJoin);
                const thirthActionRow = new ActionRowBuilder().addComponents(whyChoose);
  
		modal.addComponents(firstActionRow, secondActionRow, thirthActionRow);
  
		await interaction.showModal(modal);
}
