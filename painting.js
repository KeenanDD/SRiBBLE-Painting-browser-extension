charset="utf-8"
var drawing = false;
// var context;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

window.addEventListener('load', function() {
  //Clear screen
  document.getElementById('btnClear').addEventListener('click', function() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  }, false);

  //Back btn
  document.getElementById('btnBack').addEventListener('click', function() {
    document.getElementById('myCanvas').style.display = "block";
    document.getElementById('saveArea').style.display = "none";
    document.getElementById('tools').style.display = "block";
  }, false);

  //Width Scale
  document.getElementById('lineWidth').addEventListener('change', function() {
    context.lineWidth = document.getElementById('lineWidth').value;
  }, false);

  //Colour
  document.getElementById('colourChange').addEventListener('change', function() {
    context.strokeStyle = document.getElementById('colourChange').value;
  }, false);

  //Save
  document.getElementById('btnSave').addEventListener('click', function() {
    document.getElementById('myCanvas').style.display = "none";
    document.getElementById('saveArea').style.display = "block";
    document.getElementById('tools').style.display = "none";

    var dataURL = document.getElementById('myCanvas').toDataURL();
    document.getElementById('canvasImg').src = dataURL;
  }, false);

  //Size Canvas
  // context = document.getElementById('myCanvas').getContext("2d");
  //   context.canvas.width = self.innerWidth;
  //   context.canvas.height = self.innerHeight;

  //Mouse move
  document.onmousemove = handleMouseMove;
  document.onmousedown = handleDown;
  document.onmouseup = handleUp;

  //Style line
  context.strokeStyle = "#000";
  context.lineJoin = "round";
  context.lineWidth = 5;

  //Hide Save Area
  document.getElementById('saveArea').style.display = "none";
});
//Drawing / Mouse
function handleMouseMove(e) {
  console.log(e.clientX);
  console.log(e.clientY);
  if (drawing) {

    context.lineTo(e.clientX, e.clientY);
    context.closePath();
    context.stroke();
    context.moveTo(e.clientX, e.clientY);
  } else {
    context.moveTo(e.clientX, e.clientY);
  }
}
function handleDown(e) {
  drawing = true;
  console.log(drawing);
  context.moveTo(e.clientX, e.clientY);
  context.beginPath();
}

function handleUp() {
  drawing = false;
  console.log(drawing);


}
