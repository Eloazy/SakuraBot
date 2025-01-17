const db = require("./system/ID_data.js")

const notfound = require("./system/errors/notFound.js")

const validation = require("./system/validation.js")
const ping = require("./commandsStorage/ping.js")
const setup = require("./commandsStorage/setup.js")
const punish = require("./commandsStorage/punish.js")
const new_member = require("./commandsStorage/new-member.js")
const ban = require("./commandsStorage/ban.js")
const shutdown = require("./system/shutdown.js")
const annoucement = require("./commandsStorage/annoucement.js")
const invite = require("./commandsStorage/invite.js")
const startShift = require("./commandsStorage/startShift.js")
const endShift = require("./commandsStorage/endShift.js")
const maninho = require("./commandsStorage/maninho.js")
const apply = require("./commandsStorage/apply.js")

module.exports = async function(interaction) {
	
	if(interaction.commandName === "ping" && await validation(interaction) >= 0) {ping(interaction)}
	else if(interaction.commandName === "invite" && await validation(interaction) >= 0) {invite(interaction)}
	else if(interaction.commandName === "apply" && await validation(interaction) >= 0) {apply(interaction)}
	else if(interaction.commandName === "start-shift" && await validation(interaction) >= 0) {startShift(interaction)}
	else if(interaction.commandName === "end-shift" && await validation(interaction) >= 0) {endShift(interaction)}
	else if(interaction.commandName === "annoucement" && await validation(interaction) || interaction.commandName === "annoucement" && interaction.user.id == "1028082823669751868" ) {annoucement(interaction)}
	else if(interaction.commandName === "punish" && await validation(interaction) >= 1) {punish(interaction)}
	else if(interaction.commandName === "new-member" && await validation(interaction) >= 1) {new_member(interaction)}
	else if(interaction.commandName === "setup" && await validation(interaction) >= 2) {setup(interaction)}
	else if(interaction.commandName === "ban" && await validation(interaction) >= 2) {ban(interaction)}
	else if(interaction.commandName === "shutdown" && await interaction.user.id == "874115618746552330") {shutdown(interaction)}
	else if(interaction.commandName === "maninho" && interaction.user.id == "1081671777119391745") {maninho(interaction)}
	else {return 0}
}
