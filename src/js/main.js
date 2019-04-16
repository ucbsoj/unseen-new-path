import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS



var imgReveal = $('#top-quote').offset().top;



$(document).scroll(function() {

  var scroll = $(document).scrollTop();


  if (scroll > 300) {

  	$(".bg-img").css({"-webkit-filter": "blur(5px)","filter": "blur(5px)" })  

  } else {

  	$(".bg-img").css({"-webkit-filter": "blur(10px)","filter": "blur(10px)" })  
  
  }

  if (scroll > imgReveal){

  	$(".bg-img").css({"-webkit-filter": "blur(0px)","filter": "blur(0px)" })  
  
  } 


});

