import QuoteService from "./quote-service.js";

let _qs = new QuoteService

function drawQuote(quotes) {
	console.log(quotes)
	let Template = `<p> <b>Author:</b> <b>${quotes.author}</b> | <b>Quote of the day:</b> "${quotes.body}"</p>`
	document.getElementById("quote").innerHTML = Template
}

function getTime() {
	let date = new Date()
	let hours = date.getHours()
	let strHours = hours % 12 > 0 ? hours % 12 : hours
	let minutes = date.getMinutes()
	let strMinutes = minutes.toString()
	if (strMinutes.length == 1) {
		strMinutes = '0' + strMinutes
	}
	let seconds = date.getSeconds()
	let strSeconds = seconds.toString()
	if (strSeconds.length == 1) {
		strSeconds = '0' + strSeconds
	}
	let tod = Math.floor(hours / 12) > 0 ? "PM" : "AM"

	let time = (hours % 12) + ":" + strMinutes + ":" + strSeconds + " " + tod;

	document.getElementById("time").innerText = time;
	document.getElementById("time").textContent = time;
	setInterval(getTime, 1000);
}
getTime();

export default class QuoteController {
	constructor() {
		_qs.getQuote(drawQuote)


	}
}
