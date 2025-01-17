const notfound = require("../system/errors/notFound.js")
const database = require("./ID_data.js")
var db = null
module.exports = async function(interaction) {
	//if(interaction.user.id == "874115618746552330") {return 3}
	try {
		db = await database(interaction.guildId)
		if(await database(interaction.guildId) == -1 || await database(interaction.guildId) == null) {return notfound(interaction)}
		
		if(interaction.member.roles.cache.has(db.AdminRoleID) == true) {return 2}
		else if(interaction.member.roles.cache.has(db.StaffRoleID) == true) {return 1}
		else {return 0}
	} catch(error){console.error("exception in validation: "+error)}
}

/*

3 - owner acess
2 - admin acess
1 - staff acess
0 - low acess

*/
