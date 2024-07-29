const feedback_channel_ID = "1267270494143381637"

module.exports = function(interaction, bool) {
	if(bool===false) {interaction.guild.channels.cache.get(feedback_channel_ID).send(`the user: <@${interaction.user.id}> | Run: \`${interaction.commandName}\` in <#${interaction.channelId}>`)}
	else if(bool===true) {console.log("the bot is unable to handle a bool true")}
	else {console.log(`SakuraBOT report: ERROR IN FEEDBACK.JS | the command ${interaction.commandName} returned a ${bool} value`)}
}