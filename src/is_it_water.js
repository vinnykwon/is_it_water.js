class IsItWater {
	constructor(rapidApiKey) {
		this.api = "https://isitwater-com.p.rapidapi.com"
		this.rapidApiKey = rapidApiKey
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getInfo(latitude, longitude) {
		const response = await fetch(
			`${this.api}/?latitude=${latitude}&longitude=${longitude}&rapidapi-key=${this.rapidApiKey}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {IsItWater}
