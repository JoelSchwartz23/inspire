import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import ImageController from "./components/image/image-controller.js";
import QuoteController from "./components/quote/quote-controller.js";

class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      imageController: new ImageController(),
      QuoteController: new QuoteController()
    }
  }
}

// @ts-ignore
window.app = new app()  