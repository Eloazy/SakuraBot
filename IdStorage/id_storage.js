const owner = ["874115618746552330"]

const Test_Server_ID = "1267229786703659108"
const Test_Useful_ID = {
	admin: "0000000000000000000",
	staff: ["874115618746552330", "0000000000000000000"],
	//chats groups
	fb: "1267270494143381637",
	shift_Group_ID: "1269708594639671438",
	Auto_Role: ["1269714287363096657", "1269714330790920356"] 
}

const LC_Server_ID = "1250222296304455691"
const LC_Useful_ID = {
	admin: ["761735210189586452"],
	staff: ["761735210189586452", "1203497385699840000"],
	//chats groups
	fb: "1258198907666567279",
	shift_Group_ID: "1269469503507664958",
	Auto_Role: ["1250462651067269190", "1267961083117699072"]
}

module.exports = function(factionID, meta) {
	if(meta == "owner") {return owner}

	if(factionID == Test_Server_ID) {
		if(meta == "admin") {return Test_Useful_ID.admin}
		if(meta == "staff") {return Test_Useful_ID.staff}
		if(meta == "feedback_channel") {return Test_Useful_ID.fb}
		if(meta == "shiftG") {return Test_Useful_ID.shift_Group_ID}
		if(meta == "auto") {return Test_Useful_ID.Auto_Role}
	}
	
	else if(factionID == LC_Server_ID) {
		if(meta == "admin") {return LC_Useful_ID.admin}
		if(meta == "staff") {return LC_Useful_ID.staff}
		if(meta == "feedback_channel") {return LC_Useful_ID.fb}
		if(meta == "shiftG") {return LC_Useful_ID.shift_Group_ID}
		if(meta == "auto") {return LC_Useful_ID.Auto_Role}
	}
	else {return 1}
}