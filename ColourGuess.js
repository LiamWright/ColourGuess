var colors = generateRandomColors(6);var h1 = document.querySelector("h1");var squares = document.querySelectorAll(".square");var pickedColor = pickColor();var messageDisplay = document.querySelector("#message");var colorDisplay = document.getElementById("colorDisplay");colorDisplay.textContent = pickedColor;for (var i = 0; i < squares.length; i++){ //Add colours to squares squares[i].style.backgroundColor = colors[i];
 //Add listeners to squares squares[i].addEventListener("click", function() {  //Get color of clicked square  var clickedColor = this.style.backgroundColor;
  if (clickedColor === pickedColor)  {   messageDisplay.textContent = "Correct";   h1.style.background = clickedColor;   changeColors(clickedColor);  }  else  {   this.style.backgroundColor = "#232323";   messageDisplay.textContent = "Wrong";  } });
}
function changeColors(color){ for(var i = 0; i < colors.length; i++) {  squares[i].style.background = color; }}
function pickColor(){ var random =  Math.floor(Math.random() * colors.length); return colors[random];}
function generateRandomColors(num){ var arr = [];
 for (var i = 0; i < num; i++) {  arr.push(randomColor()); }
 return arr;}
function randomColor(){ var r = Math.floor (Math.random() * 256); var g = Math.floor (Math.random() * 256); var b = Math.floor (Math.random() * 256); return "rgb(" + r + ", " + g + ", " + b + ")";}
