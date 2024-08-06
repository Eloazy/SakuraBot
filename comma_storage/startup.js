const db = require("../IdStorage/id_storage")
module.exports = async function(interaction) {
	const autorole = db(interaction.guildId, "auto")
	const staffs = db(interaction.guildId, "staff")
	const default_error_code = "0000000000000000000"

	await interaction.reply('# initializing startup... Standy-By')
	await interaction.channel.send(`
		Hallo ${interaction.member.guild.name} server, my name is SakuraBOT, but you can call me Sakura
		This is a setup initializing, I will test if everything is OK
		----------------------------------------------------------
		ServerID: ${interaction.guildId}
	`)
	if(db(interaction.guildId) == 1) {
		await interaction.channel.send(`ERROR 404 - SERVER NOT FOUND`)
		return 1
	}
	await interaction.channel.send(`
		------------------ [faction Sumary] ------------------
		Using this ID we have:
		Admin_ID: ${db(interaction.guildId, "admin")}
		Staffs_ID: ${db(interaction.guildId, "staff")}
		Feedback_Channel: <#${db(interaction.guildId, "feedback_channel")}>
		------------------ [Shift Sumary] ------------------
		Shift Hub: <#${db(interaction.guildId, "shiftG")}>
		AutoRole: <@&${autorole[0]}>
		Newbie_Role: <@&${autorole[1]}>
		------------------ [expected outcome] ------------------
			No ERROR 404
			Without #unknown
		------------------ [result received] ------------------
	`)
	await interaction.channel.send('## critical ERROR')
	if(db(interaction.guildId, "shiftG") !== default_error_code) {await interaction.channel.send(`> No error found in Shift Hub`)}
	else {await interaction.channel.send(`> Shift Hub FAULT | ERROR 404`)}
	if(autorole[0] == default_error_code || autorole[1] == default_error_code ) {await interaction.channel.send(`> AutoRole FAULT | ERROR 404`)}
	else {await interaction.channel.send(`> No error found in AutoRole`)}
	
	await interaction.channel.send('## WARNING')
	if(db(interaction.guildId, "admin") !== default_error_code) {await interaction.channel.send(`> No error found in admin`)}
	else {await interaction.channel.send(`> admin FAULT | ERROR 404 | role not found`)}
	if(staffs[0] == default_error_code || staffs[1] == default_error_code ) {await interaction.channel.send(`> Staffs_ID FAULT | ERROR 404 | 1 or 2 slots do not have users attached`)}
	else {await interaction.channel.send(`> No error found in staffs`)}
	await interaction.channel.send(`----------------------------------------------------------`)
}