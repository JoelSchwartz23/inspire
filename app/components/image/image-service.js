
const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=rocks'
const apiUrl = url + encodeURIComponent(url2);

// @ts-ignore
const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let _image = []

function logError(e) {
	console.log(e)
}

export default class ImageService {
	getImage(imagecb) {
		// ^^^^^^^ How do you call this function?
		console.log("Looking for a good pic")
		imgApi().then(res => {
			_image = res.data.images
			let randomimage = _image[Math.floor(Math.random() * _image.length)]
			imagecb(randomimage)
		})
			.catch(logError)
	}
	get image() {
		return _image
	}
}
