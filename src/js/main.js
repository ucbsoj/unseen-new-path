import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS
import Flickity from "flickity";
import L from 'leaflet';


$( document ).ready(function() {

  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

  $( ".menu ul" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

});


var flky1 = new Flickity( '#graphics-one', {});
var flky2 = new Flickity( '#graphics-two', {});
var flky3 = new Flickity( '#graphics-three', {});


// flky1.on( 'change', function(index ) {
//   console.log( 'Slide changed to ' + index )

//   if(index == 1){
//     d3.select("#likelihood")
//         .selectAll("rect")
//         .each(function(){
//             d3.select(this)
//             .transition()
//             .duration(animationDuration)//
//             .attr("width", d3.select(this).attr("data-width"));
//         });
        
//   }
// });


var iframe = document.querySelector('#top-looper iframe');
var player = new Vimeo.Player(iframe);



$('.top-gif').click(function(){
    $('#top-looper').css('opacity','1');
    $('.top-gif').hide();
    player.on('loaded', function(data) {
        player.play();
    });
})

   




        
        /*
         *  Step 1) Create a VARIABLE called "data"
         * 
         *  Step 2) Assign an ARRAY to the variable
         *
         *  Step 3) Each item in the array should be an OBJECT
         * 
         *  Step 4) The PROPERTIES of the object should be: "title" "description" "lat" and "lon" exactly.
         *
         *  Step 5) Set the appropriate VALUES to each of these to create markers on a map.
         */
         
        var data = [
            {title: "Tenderloin", description:"Eddy St. and Jones St.", lat: 37.7841238, lon: -122.4122697},
            {title: "Mid-Market", description:"Hallidie Plaza: Market St and 5th St", lat: 37.7844142, lon: -122.4077797},
            {title: "SoMa", description:"McCoppin Hub:  McCoppin St and Valencia", lat: 37.7714123, lon: -122.4225748},
            {title: "Mission", description:"Mission and Sycamore streets", lat: 37.7627254, lon: -122.419517},
            {title: "Mission", description:"16th and Mission streets", lat: 37.7649465, lon: -122.4200173},
            {title: "Haight", description:"Stanyan and Waller streets", lat: 37.7682426, lon: -122.4534175},
            {title: "Mission", description:"16th and Capp streets", lat: 37.7651596, lon: -122.4187982},
            {title: "The Embarcadero", description:"Embarcadero Plaza", lat: 37.794809, lon: -122.394661},
            {title: "SoMa", description:"Natoma and Ninth streets", lat: 37.77544, lon: -122.413651},
            {title: "North Beach", description:"Washington Square at Union St", lat: 37.800472, lon: -122.409704},
            {title: "Haight", description:"Haight and Buena Vista Ave West", lat: 37.7708165, lon: -122.4404302},
            {title: "Castro", description:"Market and Church Streets", lat: 37.768541, lon: -122.42792},
            {title: "Mid-Market", description:"U.N. Plaza:  Market St and 7th St", lat: 37.7801432, lon: -122.4130822},
            {title: "SoMa", description:"Victoria Manalo Draves Park: Sherman St between Folsom and Harrison streets", lat: 37.7767602, lon: -122.4060242},
            {title: "Civic Center", description:"Grove and Larkin streets", lat: 37.7787168, lon: -122.4167517},
            {title: "Castro", description:"Market and Castro streets", lat: 37.7627732, lon: -122.43480537},
            {title: "SoMa", description:"6th and Jessie streets", lat: 37.781509, lon: -122.4093246},
            {title: "Bayview", description:"Mendell Plaza: 3rd St and Mendell St/Palou Ave", lat: 37.7340389, lon: -122.3908134},
            {title: "Outer Sunset", description:"Judah Street and La Playa", lat: 37.760274, lon: -122.5096},
            {title: "Tenderloin", description:"101 Hyde St", lat: 37.781775, lon: -122.415627},
            {title: "Tenderloin", description:"133 Golden Gate Ave", lat: 37.781952, lon: -122.412797},
            {title: "Lower Polk", description:"Myrtle and Larkin Streets", lat: 37.785563, lon: -122.418094},
            {title: "Tenderloin", description:"388 Ellis St", lat: 37.784951, lon: -122.411812},
            {title: "Mission", description:"24th and Mission Streets", lat: 37.752152, lon: -122.418807}
        ];
        
        
        
        
        
        /******* DO NOT EDIT BELOW THIS LINE *******/  
        if(typeof data != "undefined"){
        
            var marker,
                mymap = L.map('mapid')
                    .fitBounds(data.map(function(d){ return [d.lat, d.lon]}))

                    //.zoomOut(); //zoom out one level so markers are not at the edge
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
                }).addTo(mymap);

            var customMarker = L.icon({
                iconUrl: 'assets/marker.svg',
                shadowUrl: 'assets/marker-shadow.png',
                iconSize: [32,32],
                iconAnchor: [16,32],
                shadowSize: [33,35],
                shadowAnchor: [10, 35],
            });

            var markerArray = [];

            data.forEach(function(d){
                marker = new L.marker([d.lat,d.lon], {icon: customMarker})
                    .bindPopup(L.popup().setContent("<h4>" + d.title + "</h4><p>" + d.description + "</p>"))
                    .addTo(mymap);
                markerArray.push(marker);
            });
    
        }
        
        mymap.scrollWheelZoom.disable();
        