import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(weathers) {
	console.log(weathers)
	let Template = `
	<p> <b>Weather:</b> ${Math.round((weathers.main.temp - 273.15) * 1.8) + 32}°F </p>
	<p><b>${weathers.weather[0].description}</b></p>
	<p> <i class="fas fa-city"></i> <b>City-</b> <b>${weathers.name}</b></p>
	`
	document.getElementById("weather").innerHTML = Template
}
export default class WeatherController {
	constructor() {
		//this will fire off get weather right away
		weatherService.getWeather(drawWeather)
	}
	// getWeather() {
	// 	weatherService.getWeather(weather => {
	// 		console.log(drawWeather);
	// 		//What can you do with this weather object?
	// 	})
	// }
}
