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
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	let time = hours + ":" + minutes + ":" + seconds + " ";

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
