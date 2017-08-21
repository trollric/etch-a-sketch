$(document).ready(function(){
  matrix_dimension = 16;

  screen_width = $("#surface").width();
  screen_height = $("#surface").height();

  // Get the pixelwidth and height and round them down to Integers
  pix_width = /*Math.floor*/(screen_width / matrix_dimension);
  pix_height = /*Math.floor*/(screen_height / matrix_dimension);

  console.log(pix_width);
  console.log(pix_height);

  // make a foorloop that fills upp with a set of .pix classes
  // inside of the screen div.

  for(x=0;x < Math.pow(matrix_dimension,2);x++){
    var $pixel = $("<div id=pix"+x+"></div>");
    $("#surface").append($pixel);
    $("#pix"+x).css("width", pix_width);
    $("#pix"+x).css("height" ,pix_height);
  }


});

$("#surface>div").hover(function(){
  $(this).css("background", "black");
});

//Instead of class use ID
// move .css width and height inside of the loop
// then maybe hover works.
// "<div id=pix"+x+"></div">
