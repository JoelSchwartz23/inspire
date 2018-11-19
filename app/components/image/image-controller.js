import ImageService from "./image-service.js";

let _imageService = new ImageService()

function drawImage(images) {
  console.log(images)
  let Template = `<img  height="100%" width="100%" src=${images.large_url}>`
  document.getElementById("background").innerHTML = Template
}


export default class ImageController {
  constructor() {
    _imageService.getImage(drawImage)
  }

}

