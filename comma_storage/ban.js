module.exports = function(interaction, target) {
	try {interaction.options.getUser(target).ban().then(interaction.reply(`${target} banned`))}
	catch {interaction.reply("something is wrong")}
}