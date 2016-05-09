// Declared Funtions
// Places Constructor function -> will create an object for each location and add the object to an array.
function Places (name, latitude, longitude, array){
	this.name = name;
	this.latitude = latitude;
	this.longitude = longitude;
	this.spot = {};
	this.spot.lat = latitude;
	this.spot.lng = longitude;
	array.push(this);
}
// Button Maker function -> will create a button for every place object we please.
function buttonMaker(place){
	var button = document.createElement('button');
	button.id = place.name;
	button.value = place.name;
	var buttonText = document.createTextNode(place.name);
	button.onclick = function (){title.innerHTML = this.value;}
	button.appendChild(buttonText);
	buttonContainer.appendChild(button);
	buttons.push(button);
}
// Make Buttons function -> calls Button Maker function in every element in a give array (we use the array where we stored our places objects).
function makeButtons(array){
	for(var i = 0; i < array.length; i++){
		buttonMaker(array[i]);
	}
}
// Declared Variables
//  A Container div -> to hold all elements in our html page.
var container = document.createElement('div');
container.id = 'container';
// A Logo Div -> contains website logo and name.
var logoDiv = document.createElement('div');
logoDiv.id = "logoDiv";
container.appendChild(logoDiv);
var logoImg = document.createElement('img');
logoImg.id = "logoImg";
logoImg.src = "images/logo-small.png";
logoDiv.appendChild(logoImg);
// A topbar div -> holds our buttons, search bar and logo.
var topbar = document.createElement('div');
topbar.id = 'topbar';
container.appendChild(topbar);
// A Button Container
var buttonContainer = document.createElement('div');
buttonContainer.id = 'buttonContainer';
topbar.appendChild(buttonContainer);
// Create a title
var titleDiv = document.createElement('div');
titleDiv.id = "titleDiv";
container.appendChild(titleDiv);
var title = document.createElement('h2');
title.id = "title";
title.innerHTML = "Rio de Janeiro";
titleDiv.appendChild(title);
// Create a Map div -> will hold our Google Maps map.
var map = document.createElement('div');
map.id = 'map';
container.appendChild(map);
// A Results table -> holds results for the current moment.
var results = document.createElement("table");
results.id = "results";
container.appendChild(results);
// A Pictures table (div for now) -> hold our pictures for each place.
var pictures = document.createElement("div");
pictures.id = "pictures";
container.appendChild(pictures);
// A Footer div -> to finish out our website.
var footerDiv = document.createElement('div');
footerDiv.id = "footerDiv";
container.appendChild(footerDiv);	  
footerTitle = document.createElement('h4');
footerTitle.innerHTML = "Powered by";
footerTitle.id = "footerTitle";
footerDiv.appendChild(footerTitle);
var footerImages = document.createElement('table');
footerImages.id = "footerImages";
footerDiv.appendChild(footerImages);
footerImages.innerHTML = '<tr><td><img class="footerImages" src="images/flickr.png"></td><td><img class="footerImages" src="images/forecast.png"></td><td><img class="footerImages" src="images/maps.png"></td>';
// Create an array to hold all of our Google Maps Markers.
var markers = [];
var buttons =[];
// Create the Places array -> where we will store all of our places' objects.
var places = [];
var urca = new Places('Urca', -22.955430, -43.164800, places);
var copacabana = new Places('Copacabana', -22.9689662, -43.1844084, places);
var ipanema = new Places('Ipanema', -22.986450, -43.205995, places);
var leblon = new Places('Leblon', -22.987649, -43.221640, places);
var sanca = new Places('Sanca', -22.999373, -43.264027, places);
var joatinga = new Places('Joatinga', -23.014354, -43.290364, places);
var barra = new Places('Barra', -23.012240, -43.323770, places);
var reserva = new Places('Reserva', -23.012849, -43.388988, places);
var macumba = new Places('Macumba', -23.033037, -43.4862847, places);  
var recreio = new Places('Recreio', -23.028383, -43.464918, places);
var prainha = new Places('Prainha', -23.040962, -43.505379, places);
var grumari = new Places('Grumari', -23.048466, -43.524417, places);
var guaratiba = new Places('Guaratiba', -23.067656, -43.567932, places);
// Wiring Things Together
// Here we call the Make Buttons function giving it our Places array. 
makeButtons(places);
document.body.appendChild(container);	