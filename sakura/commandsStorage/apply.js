const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")
module.exports = async function(interaction) {

  const modal = new ModalBuilder()
	.setCustomId('apply')
	.setTitle('Lunar Apply')

	const nameInput = new TextInputBuilder()
		.setCustomId('nameInput')
		.setLabel("input your ROBLOX user")
		.setStyle(TextInputStyle.Short)
		.setPlaceholder('example: yumekko54')

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
	const filter = (interaction) => interaction.customId === 'apply'

        interaction.awaitModalSubmit({ filter, time: 30_000 }).then((interaction) => {
		embedMaker(modalIteraction, firstActionRow, secondActionRow, tirthActionRow, fourthActionRow, fifthActionRow)
		.then({
			modalInteraction.reply({ content: 'apply submited', ephemeral: true })
		})
}      

async function embedMaker(interaction, name, whyJoin, Kills, Deaths, Level) {
	const apply = new EmbedBuilder()
		.setColor("FFA6C9")
		.setTitle(`<@${interaction.user.id}> apply`)
		.setDescription('why join in lunar?\n'+whyJoin)
		.addFields(
			{ name: "kills:", value: Kills, inline: true },
			{ name: "Deaths:", value: Deaths, inline: true },
			{ name: "Level:", valud: Level, inline: true },
			{ name: '\u200B', value: '\u200B' },
			{ name: "sakura Aval:", value: "unavailable", inline: true }
			//{ name: "KD-R", value: parseInt(Kills/Deaths), inline: true }
		)
		.setTimestamp()
		.setFooter({ text: 'SakuraSystem 3.0 - apply' })
		
		await interaction.guild.channels.cache.get("1326365936046968856").send({ embeds: [apply] })
}
