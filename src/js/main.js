import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS
import Flickity from "flickity";


var flky = new Flickity( '#graphics-one', {});
var flky = new Flickity( '#graphics-two', {});

 var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.play();