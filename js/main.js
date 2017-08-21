$(document).ready(function(){
  // Default etchasketch dim
  matrix_dimension = 16;

  // Get #surface dimensions
  screen_width = $("#surface").width();
  screen_height = $("#surface").height();

  createMatrix(matrix_dimension);
});

$("#surface").hover(function(){
  console.log("entered surface");
  $("#surface>div").hover(function(){
    $(this).css("background", "black");
  });
},function(){
  console.log("left surface");
});

function createMatrix(size){
  // Get the pixelwidth and height and round them down to Integers
  var pix_width = /*Math.floor*/(screen_width / size);
  var pix_height = /*Math.floor*/(screen_height / size);

  // Fill the #surface id with pixels
  for(x=0;x < Math.pow(matrix_dimension,2);x++){
    var $pixel = $("<div id=pix"+x+"></div>");
    $("#surface").append($pixel);
    $("#pix"+x).css("width", pix_width);
    $("#pix"+x).css("height" ,pix_height);
  }
}

function destroyMatrix(){

}
