const feedback = require("./feedback.js")
const validation = require("./validation.js")
// command library
const ping = require("../comma_storage/ping.js")
const help = require("../comma_storage/help.js")
const shutdown = require("../comma_storage/shutdown.js")
var bool = false

module.exports = async function(interaction, userID, SECURITYMODE) {
	if(interaction.commandName === "ping") {
		await ping(interaction)
	}
	if(interaction.commandName === "help") {
		await help(interaction)
	}
	//security command class
	if(SECURITYMODE == false) {
		if(interaction.commandName === "shutdown") {
			if(validation("owner", interaction, userID) == false ) {return false}
			await shutdown(interaction)
		}
	}
	feedback(interaction, bool)
}