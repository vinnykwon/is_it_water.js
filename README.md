# is_it_water.js
Web-API for [isitwater.com](https://isitwater.com/) a simple API that accepts a lat/lon coordinate and returns whether that coordinate is on water or not

## Example
```JavaScript
async function main() {
	const { IsItWater } = require("./is_it_water.js")
	const isItWater = new IsItWater("rapidApiKey")
	const info = await isItWater.getInfo("latitude", "longitude")
	console.log(info)
}

main()
```
