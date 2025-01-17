const TestFaction = {
	Admins: [],
	Staffs: [],
	ShiftID: "1316044710380437605",
	StaffRoleID: "1316053060186804358"
}
const LunarFaction = {
	AdminRoleID: "1250462649926549537",
	StaffRoleID: "1263278405496078462",
	ShiftID: "1269469503507664958",

}
const BlackCircle = {
	AdminRoleID: "1316040473030426624",
	StaffRoleID: "1315021341614932038",
	ShiftID: "1315026963374669874",
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