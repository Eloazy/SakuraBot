const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")
module.exports = async function(interaction) {
  const modal = new ModalBuilder({
    customId: `apply-${interaction.user.id}`
    title: `Lunar Covenant`,
  })
  const nameInput = new TextInputBuilder({
    customId: 'nameInput',
    label: 'send your ROBLOX username and Discord User',
    style: TextInputStyle.Short
  })
  const whyJoin = new TextInputBuilder({
    customId: 'whyJoin',
    label: 'Why do you want to join Lunar Covenant?',
    style: TextInputStyle.Pharagraph
  })

  const firstActionRow = new ActionRowBuilder().addComponents(nameInput)
  const secondActionRow = new ActionRowBuilder().addComponents(whyJoin)

  modal.addComponents(nameInput, whyJoin)
  await interaction.showModal(modal)

  const filter = (interaction) => interaction.customId === `apply-${interaction.user.id}`
  interaction
  .awaitModalSubmit({ filter, time: 30_000 })
  .then((modalInteraction) => {
    const nameInputValue = modalInteraction.fields.getTextInputValue('nameInput')
    const whyInputValue = modalInteraction.fields.getTextInputValue('whyJoin')
    modalInteraction.reply('user: ', nameInputValue, '\nWhy: ',whyInputValue)
  }.catch(err){console.log(err)}
}
