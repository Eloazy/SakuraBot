const shift = {
	shiftGroupId:"1269469503507664958",//"1269708594639671438",
	reportChat: "[id]",
	roles:['1269714287363096657', '1269714330790920356'],
	LOARole:"1269714439054033012"
}
// provisional solution, not universal, integrate into id_storage

module.exports = async function(interaction) {
	const target = interaction.options.getUser('user')
	const newbie = interaction.options.getBoolean('newbie')
	//------------------
	const channel = interaction.guild.channels.cache.get(shift.shiftGroupId)

	// addRole(interaction, target, newbie) problems

	const thread = await channel.threads.create({
		name: `${target.tag}-shift`,
		message: {content: `<@${target.id}>, this is your shift channel, if u have some problem, ping <@874115618746552330>, <@761735210189586452>, <@1203497385699840000> or <@1225850058168340675>`},
		reason: 'newShiftMember'
	});

	interaction.reply({content: `Created thread: ${thread.name}`, ephemeral: true});
}
