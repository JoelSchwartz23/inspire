import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(wData) {
	console.log("Weather Data:", wData)
	let kTemp = wData.main.temp;
	let fTemp = Math.ceil((kTemp * (9 / 5)) - 459.67);
	let Template = `
	<p> <b>Weather:</b> ${fTemp}°F </p>
	<p><b>${wData.weather[0].description}</b></p>
	<p> <i class="fas fa-city"></i> <b>City-</b> <b>${wData.name}</b></p>
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
