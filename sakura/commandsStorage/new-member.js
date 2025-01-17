const db = require("../system/ID_data.js")

module.exports = async function(interaction) {
	try{
		const target = interaction.options.getUser('user')
		const channel = interaction.guild.channels.cache.get(await db(interaction.guildId).ShiftID)
		const thread = await channel.threads.create({
			name: target.displayName+' | shift',
			message: {content: 'welcome <@'+target.id+'>, this is your shift channel, if you have some problem, call anyone who has this role: <@&'+await db(interaction.guildId).StaffRoleID+'> normally they will already be present in this chat'},
			reason: 'newShiftMember'
		});
		if(interaction.guildId == '1250222296304455691')
			interaction.guild.channels.cache.get("1326524997908434964").send(`<@939467310979235863> | add role to : <@${target.id}>`)
		await interaction.reply({content: `Created thread: ${thread.name}`, ephemeral: true});
	}catch(err){console.error('exception in new-member.js: '+err)}
}