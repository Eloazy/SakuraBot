const db = require("../IdStorage/id_storage.js")
module.exports = function(meta, interaction, userID) {
	var StaffMemberID = db(interaction.member.guild.id, meta)
	for(var i = 0; i < Object.keys(StaffMemberID).length; i++) {
		if(StaffMemberID == interaction.user.id) {return true}
		else if(StaffMemberID == 1) {
			interaction.reply(`SakuraBOT report: ERROR 404 - Faction NOT FOUND`)
			return false
		}
		else {
			interaction.reply(`you need a interaction Level ${meta} to run this command`)
			return false
		}
	}
}