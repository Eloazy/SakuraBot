const TestFaction = {
	Admins: [],
	Staffs: [],
	ShiftID: "1316044710380437605",
	StaffRoleID: "1316053060186804358"
}
const LunarFaction = {
	Admins: ["874115618746552330", "761735210189586452"],
	Staffs: ["1203497385699840000", "991963500903665695"],
	ShiftID: "1269469503507664958",
	StaffRoleID: "1263278405496078462"
}
const BlackCircle = {
	Admins: ["1096248118141526158"],
	Staffs: [],
	ShiftID: "1315026963374669874",
	StaffRoleID: "1315021341614932038"
}

module.exports = function(factionID) {
	switch(factionID) {
		case "1315502142676533360":
			return -1;
		case "1250222296304455691":
			return LunarFaction;
		case "1315019764191596646":
			return BlackCircle;
		default:
			return -1;
	}
}