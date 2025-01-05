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
  
		const firstActionRow = new ActionRowBuilder().addComponents(nameInput);
		const secondActionRow = new ActionRowBuilder().addComponents(whyJoin);
  
		modal.addComponents(firstActionRow, secondActionRow);
  
		await interaction.showModal(modal);

  const filter = (interaction) => interaction.customId === 'apply'
  interaction
  .awaitModalSubmit({ filter, time: 30_000 })
  .then((modalInteraction) => {
    const nameInputValue = modalInteraction.fields.getTextInputValue('nameInput')
    const whyInputValue = modalInteraction.fields.getTextInputValue('whyJoin')
    modalInteraction.reply('user: ', nameInputValue, '\nWhy: ',whyInputValue)
  }.catch(err){console.log(err)}
}
