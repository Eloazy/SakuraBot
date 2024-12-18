const { EmbedBuilder } = require("discord.js")
module.exports = async function(interaction) {
	const maninhu = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Não tenha medo maninha, eu acredito em você!')
	interaction.reply({ embeds: [maninhu] });
}