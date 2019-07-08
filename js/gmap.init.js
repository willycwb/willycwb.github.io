function initMap() {

	var image = 'images/map-marker.png';
	var mapPosition = {lat: 31.408575, lng: 73.100390};
	var map = new google.maps.Map(document.getElementById('gmap'), {
		zoom: 16,
		center: mapPosition,
		scrollwheel: false,
		navigationControl: false,
		mapTypeControl: false,
		streetViewControl: false,
			styles: [
			{
				featureType: 'all',
				stylers: [
					{ hue: '#229991' },
				{ saturation: -60 }
				]
			},{
				featureType: 'road.arterial',
				elementType: 'geometry',
				stylers: [
				{ hue: '#00ffee' },
				{ saturation: 50 }
				]
			},{
				featureType: 'poi.business',
				elementType: 'labels',
				stylers: [
				{ visibility: 'off' }
				]
			}
			]
	});

	var contentString = '<div id="content">'+
		'<h2 class="h4 title">PrismCV</h2>'+
		'<p><strong>Address:</strong> Office 61, 3rd floor, Computer Arcade, Satyana Road, Faisalabad, Pakistan</p>'+
		'</div>'+
		'</div>';
		
	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 400
	});

	var marker = new google.maps.Marker({
		position: mapPosition,
		map: map,
		icon: image,
		title: 'Position (PrismCV)'
	});
	
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});

}