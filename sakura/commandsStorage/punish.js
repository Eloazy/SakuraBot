module.exports = async function(interaction) {
	try{interaction.options.getMember('user').timeout(60*1000*await interaction.options.getNumber('minutes')).then(interaction.reply(`${interaction.options.getUser('user').tag} has been punished in ${interaction.options.getNumber('minutes')} minutes`))}catch(error){console.error("exception in punish.js"+error)}
}