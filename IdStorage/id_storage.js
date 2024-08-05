const owner = ["874115618746552330"]

const Test_Server_ID = "12672297867036591088"
const Test_Useful_ID = {
	admin: "0000000000000000000",
	staff: ["0000000000000000000"],
	fb: "1267270494143381637"
}

const LC_Server_ID = "1250222296304455691"
const LC_Useful_ID = {
	admin: ["0000000000000000000"],
	staff: ["0000000000000000000"],
	fb: "0000000000000000000"
}

module.exports = function(factionID, meta) {
	if(meta == "owner") {return owner}
	if(factionID == LC_Server_ID) {
		if(meta == "admin") {return LC_Useful_ID.admin}
		if(meta == "staff") {return LC_Useful_ID.staff}
		if(meta == "feedback_channel") {return LC_Useful_ID.fb}
	}
	else if(factionID == Test_Server_ID) {
		if(meta == "admin") {return Test_Useful_ID.admin}
		if(meta == "staff") {return Test_Useful_ID.staff}
		if(meta == "feedback_channel") {return Test_Useful_ID.fb}
	}
	else {return 1}
}