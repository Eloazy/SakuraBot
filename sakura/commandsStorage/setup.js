const db = require("../system/ID_data.js")
const { EmbedBuilder } = require('discord.js');

module.exports = async function(interaction) {
	try {	
		const data = await db(interaction.guildId)
		const setup = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Setup')
			.setDescription(`Hello ${interaction.user}, I am sakura, if you have any doubts about how to use it, I recommend you join our development server.`)
			.addFields(
				{ name: "Developer Informs", value: "Dev: <@874115618746552330> | V:3.0.0 : Gold" },
			)
			.setThumbnail('https://media.tenor.com/iGKBLd0oaIgAAAAM/tomoyo-daidouji.gif')
			.setColor("FFA6C9")
		
		const informs = new EmbedBuilder()
			.setTitle('Server-Informs')
			.setDescription(`testing data from:\n${interaction.guild.name} / ${interaction.guild.id}`)
			.addFields(
				{ name: "AdminRole:", value: "<@&"+data.AdminRoleID">", inline: true },
				{ name: "StaffRole", value: "<@&"+data.StaffRoleID+">", inline: true },
				{ name: '\u200B', value: '\u200B' },
				{ name: "ShiftThread", value: "<#"+data.ShiftID+">", inline: true }
			)
			.setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0qm0qoeBZYeOxmGtSrD-Xv_m9Fm6gwOO-g&s')
			.setColor("FFA6C9")
			.setTimestamp()
			.setFooter({ text: 'SakuraSystem' })
		interaction.reply({ embeds: [setup, informs] });
	}catch(err){console.error('exception in setup.js'+err)}
}
