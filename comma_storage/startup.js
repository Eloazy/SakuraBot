const db = require("../IdStorage/id_storage")
module.exports = async function(interaction) {

	await interaction.reply('initializing startup... Standy-By')
	await interaction.channel.send(`Hallo ${interaction.member.guild.name} server, my name is SakuraBOT, but you can call me Sakura`)
	await interaction.channel.send(`This is a setup initializing, I will test if everything is OK`)
	await interaction.channel.send(`----------------------------------------------------------`)
	await interaction.channel.send(`ServerID: ${interaction.guildId}`)
	if(db(interaction.guildId) == 1) {
		await interaction.channel.send(`ERROR 404 - SERVER NOT FOUND`)
		return 1
	}
	await interaction.channel.send(`
		------------------ [faction Sumary] ------------------
		Using this ID we have:\n
		Admin_ID: ${db(interaction.guildId, "admin")}\n
		Staffs_ID: ${db(interaction.guildId, "staff")}\n
		Feedback_Channel: <#${db(interaction.guildId, "feedback_channel")}>\n
		------------------ [Shift Sumary] ------------------
		Shift Hub: NULL
		AutoRole: NULL
		Newbie_Role: NULL
	`)
	await interaction.channel.send(`----------------------------------------------------------`)
}