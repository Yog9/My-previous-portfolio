// Initialize and add the map
function initMap() {
  // The location
  var location = {lat: 18.515806, lng: 73.927162};
  // The map, centered at location
  var map = new google.maps.Map(
      document.querySelector('.map'), {zoom: 4, center: location});
  // The marker, positioned at location
  var marker = new google.maps.Marker({position: location, map: map});
}


//API Key AIzaSyBYiomCnxz2HgotHsL8v-M50Q13g9qtkn0
