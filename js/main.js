$(document).ready(function(){
  // Default etchasketch dim
  matrix_dimension = 16;
  last_size = 16;

  // Get #surface dimensions
  screen_width = $("#surface").innerWidth();
  screen_height = $("#surface").innerHeight();

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
  for(x=0;x < Math.pow(size,2);x++){
    var $pixel = $("<div id=pix"+x+"></div>");
    $("#surface").append($pixel);
    $("#pix"+x).css("width", pix_width);
    $("#pix"+x).css("height" ,pix_height);
  }
}

// Destroys the matrix by removing all the elements
function destroyMatrix(size){
  for(x=0;x < Math.pow(size,2);x++){
    $("#pix"+x).remove();
  }
}

// Resets the pixels
function reset(){
  var dim = prompt("How many pixels would you like per side? (1-100)");
  if(dim !=null){
    if(dim<1){dim=1;}
    else if(dim>100){dim=100;}
    else if(isNaN(dim)){
      alert("not a number, creating a default 16x16 matrix for you.");
      dim = 16;
    }
  }
  else{
    alert("You gave no input creating a 16x16 array per default.");
    dim = 16;
  }
  destroyMatrix(last_size);
  last_size = dim;
  createMatrix(dim);
}
