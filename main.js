const SHA256 = new Hashes.SHA256
const correct_hash = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"

$( () => {
	$("#password").bind("input", () => {
		let pass = $("#password").val()
		let hash = SHA256.hex(pass)
		if (hash == correct_hash) {
			$("#password").css("background-color", "green")
		} else {
			$("#password").css("background-color", "inherit")
		}
		$("#hash").text(hash)
	})
})

