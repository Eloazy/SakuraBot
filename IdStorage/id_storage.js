const owner = "874115618746552330"
const LC_ID = "1250222296304455691"
const LC_Admin = "00000000000000000"
const LC_Staffs = ["1203497385699840000", "761735210189586452"]	

module.exports = function(factionID, meta) {
	if(meta == "owner") {return owner}
	if(factionID == "1267229786703659108") {
		if(meta == "admin") {return LC_Admin}
		if(meta == "staff") {return LC_Staffs}
	}
}