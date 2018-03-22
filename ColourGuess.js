var numberOfSquares = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

//Initalise Game
init();

resetButton.addEventListener("click", function()
{
	reset();
});

function changeColors(color)
{
	for(var i = 0; i < colors.length; i++)
		{
			squares[i].style.background = color;
		}
}

function pickColor()
{
	var random =  Math.floor(Math.random() * colors.length);
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

function reset()
{
		colors = generateRandomColors(numberOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		h1.style.background = "steelblue";
		resetButton.textContent = "New Colors";

		for (var i = 0; i < squares.length; i++)
		{
		     //Add colours to squares
		    if(colors[i])
		    {
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}
			else
			{
				squares[i].style.display = "none";
			}
			messageDisplay.textContent = "";
		}
}

function init()
{
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons ()
{
	for (var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function()
		{
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();

		});
	}
}

function setUpSquares()
{
	for (var i = 0; i < squares.length; i++)
	{
			 //Add colours to squares
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
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Wrong";
			}
		});
	}
}