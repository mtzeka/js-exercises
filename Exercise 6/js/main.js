// The following function needs to be defined in order to receive data
// from the Flickr API request we are making in line 12 in index.html
// This is called a "JSONP" request --> https://en.wikipedia.org/wiki/JSONP

// If you look at the console of your browser when you load the index
// you will notice an object with properties of "photos" and "stat".

// Inside of the function below you need to loop through data.photos.photo
// since that is the array. You will have access to indivial photo objects
// which you can then append via jQuery (or just plain JS) the properties
// listed below to the ".gallery" div.

// If you need to review loops and objects:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

function jsonFlickrApi (data) {
	console.log(data);

	// properties
	// append title
	// append image that links to bigger image
	// append description
	// append date taken
	// append the user name along with a link to their flickr account
}