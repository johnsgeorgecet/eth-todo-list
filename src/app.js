App = {
	load: async () => {
		// load App...
		console.log("app loading..")
	}
}

$(() => {
	$(window).load(() => {
		App.load()
	})
})