function initMap() {
	 var home = {lat: 40.285495, lng: 44.363769};
	  var map = new google.maps.Map(document.getElementById('map'), {center: home, zoom: 15,});
      var marker = new google.maps.Marker({position: home, map: map});
}