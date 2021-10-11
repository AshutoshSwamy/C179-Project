let latitude, longitude, destination;

$(document).ready(function () {
  alert("Please allow your device to know your location!");
  initGeolocation();
});

function initGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    alert("Sorry, your browser does not support geolocation services!");
  }
}

$(function () {
  $("navigate-button").click(function () {
    window.location.href = `ar_nav.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`;
  });
});

function success(position) {
  longitude = position.coords.longitude;
  latitude = position.coords.latitude;

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA";

  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 10,
  });

  map.addControl(
    new MapboxGecoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    })
  );

  var tajmahalImage = document.querySelector("#tajmahal");
  var marker1 = new mapboxgl.Marker({
    element: tajmahalImage,
  })
    .setLngLat([78.0421, 27.1751])
    .addTo(map);

  var victoriaImage = document.querySelector("#victoria");
  var marker2 = new mapboxgl.Marker({
    element: victoriaImage,
  })
    .setLngLat([88.3426, 22.5448])
    .addTo(map);

  var gatewayImage = document.querySelector("#gateway");
  var marker3 = new mapboxgl.Marker({
    element: gatewayImage,
  })
    .setLngLat([72.835163, 18.92018])
    .addTo(map);
}
