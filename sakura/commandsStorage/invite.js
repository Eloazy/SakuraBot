module.exports = async function(interaction) {
	console.log(interaction)
	await interaction.reply("https://discord.com/oauth2/authorize?client_id=1267232655447953448&permissions=1494648686646&integration_type=0&scope=bot+applications.commands")
}