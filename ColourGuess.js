var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;


easyBtn.addEventListener("click", function () 
{
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++)
	{
		if (colors[i])
		{
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	     //Add colours to squares 
		squares[i].style.backgroundColor = colors[i];
		messageDisplay.textContent = "";
	}

});

hardBtn.addEventListener("click", function () 
{
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++)
	{

		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	     //Add colours to squares 
		squares[i].style.backgroundColor = colors[i];
		messageDisplay.textContent = "";
	}
});

resetButton.addEventListener("click", function()
{
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++)
	{
	     //Add colours to squares 
		squares[i].style.backgroundColor = colors[i];
		messageDisplay.textContent = "";
	}
	h1.style.background = steelblue;


});
for (var i = 0; i < squares.length; i++)
{
	     //Add colours to squares 
	squares[i].style.backgroundColor = colors[i];
	    //Add listeners to squares 
	squares[i].addEventListener("click", function() 
	{
	  //Get color of clicked square  
	var clickedColor = this.style.backgroundColor;

  	if (clickedColor === pickedColor)
	{
		messageDisplay.textContent = "Correct";
		h1.style.background = clickedColor;
		changeColors(clickedColor);
		resetButton.textContent = "Play Again?"

	}
	else
	{
		this.style.backgroundColor = steelblue;
		messageDisplay.textContent = "Wrong";
	}
});

}
function changeColors(color)
{
	for(var i = 0; i < colors.length; i++)
		{
			squares[i].style.background = color;
		}
}

function pickColor()
{
	var random =  Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num)
{
	var arr = [];
	for (var i = 0; i < num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor (Math.random() * 256);
	var g = Math.floor (Math.random() * 256);
	var b = Math.floor (Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
