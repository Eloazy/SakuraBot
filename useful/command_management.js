const feedback = require("./feedback.js")
const validation = require("./validation.js")
// command library
const ping = require("../comma_storage/ping.js")
const ban = require("../comma_storage/ban.js")
const punish = require("../comma_storage/punish.js")
const debbug = require("../comma_storage/debbug.js")
const help = require("../comma_storage/help.js")
const shift = require("../comma_storage/newMember.js")
const shutdown = require("../comma_storage/shutdown.js")
const testresponce = require("../comma_storage/test_response.js")

var bool = false

module.exports = async function(interaction, userID, SECURITYMODE) {
	if(interaction.commandName === "ping") {await ping(interaction)}
	if(interaction.commandName === "help") {await help(interaction, SECURITYMODE)}
	
	if(interaction.commandName === "shutdown") {
		if(validation("owner", interaction, userID) == false) {return false}
		await shutdown(interaction)
	}
	if(interaction.commandName === "debbug") {
		if(validation("owner", interaction, userID) == false) {return false}
		await debbug(interaction)
	}

	//security command class
	if(interaction.commandName === "ban") {
		if(validation("staff", interaction, userID) == false && SECURITYMODE == false) {return false}
		await ban(interaction)
	}
	if(interaction.commandName === "newmember") {
		//if(validation("staff", interaction, userID) == false && SECURITYMODE == false) {return false}
		await shift(interaction)
	}
	if(interaction.commandName === "testresponce") {
		if(validation("owner", interaction, userID) == false && SECURITYMODE == false) {return false}
		await testresponce(interaction)
	}
	feedback(interaction, bool)
}