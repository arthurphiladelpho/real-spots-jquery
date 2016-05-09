$(document).ready(function(){
	$("body").on('click', 'button', function (){
		pictures.innerHTML =" ";
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var beach = this.value;
		var flickrOptions = {
			tags: beach,
			format: "json"
		};
		var resultsDiv = document.createElement("div");

		function displayPics(data){
			// var resultsHTML = '<div id="picsDiv">';
			var resultsHTML = "<ul>";
			$.each(data.items, function(i, pic) {
				resultsHTML += '<li>';
				resultsHTML += '<a href="' + pic.link + ' " class="image">';
				resultsHTML += '<img src="' + pic.media.m + ' "></a>';
				resultsHTML += "</li>";
			});
			resultsHTML += "</ul>";
			// resultsHTML += "</div>";
			pictures.innerHTML = resultsHTML
		}

		$.getJSON(flickrAPI, flickrOptions, displayPics);
	});
});