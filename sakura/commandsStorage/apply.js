const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")
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
		const name = interaction.fields.getTextInputValue('nameInput')
		const whyJoin = interaction.fields.getTextInputValue('whyJoin')
		const kill = interaction.fields.getTextInputValue('killInput')
		const death = interaction.fields.getTextInputValue('deathInput')
		const level = interaction.fields.getTextInputValue('levelInput')
		
		embedMaker(interaction, name, whyJoin, kill, death, level)
		.then(response => {
			interaction.reply({ content: 'apply submited', ephemeral: true })
		})
	})
}      

async function embedMaker(interaction, name, whyJoin, kill, death, level) {
	const apply = new EmbedBuilder()
		.setColor("FFA6C9")
		.setTitle(`<@${interaction.user.id}> | ${name} apply`)
		.setDescription('why join in lunar?\n'+whyJoin)
		.addFields(
			{ name: "kills:", value: `${kill}`, inline: true },
			{ name: "Deaths:", value: `${death}`, inline: true },
			{ name: "Level:", value: `${level}`, inline: true },
			{ name: '\u200B', value: '\u200B' },
			{ name: "sakura Aval:", value: "unavailable", inline: true },
			{ name: "KD-R", value: "unavailable", inline: true }
		)
		.setTimestamp()
		.setFooter({ text: 'SakuraSystem 3.0 - apply' })
	
	const approved = new ButtonBuilder()
			.setCustomId('Approved')
			.setLabel('approve this apply')
			.setStyle(ButtonStyle.Sucess);
	
	const denied = new ButtonBuilder()
		.setCustomId('Denied')
		.setLabel('deny this apply')
		.setStyle(ButtonStyle.Secondary);
	
	const blacklisted = new ButtonBuilder()
			.setCustomId('Blacklist')
			.setLabel('blacklist this member')
			.setStyle(ButtonStyle.Danger);
	
	const row = new ActionRowBuilder()
			.addComponents(approved, denied, blacklisted);

		await interaction.guild.channels.cache.get("1326365936046968856").send({ embeds: [apply], components: [row] })
}
