import ImageService from "./image-service.js";

let _imageService = new ImageService()

function drawImage(images) {
  console.log(images)
  document.body.style.backgroundImage = `url(${images.url})`
}


export default class ImageController {
  constructor() {
    _imageService.getImage(drawImage)
  }
}

