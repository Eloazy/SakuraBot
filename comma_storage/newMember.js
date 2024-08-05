const db = require("../IdStorage/id_storage")

module.exports = async function(interaction) {
	const target = interaction.options.getUser('user')
	const newbie = interaction.options.getBoolean('newbie')
	//------------------
	const channel = interaction.guild.channels.cache.get(db(interaction.guildId, "shiftG"))
	const thread = await channel.threads.create({
		name: `${target.tag}-shift`,
		message: {content: `<@${target.id}>, this is your shift channel, if u have some problem, ping <@874115618746552330>, <@761735210189586452>, <@1203497385699840000> or <@1225850058168340675>`},
		reason: 'newShiftMember'
	});
	interaction.reply({content: `Created thread: ${thread.name}`, ephemeral: true});
}
