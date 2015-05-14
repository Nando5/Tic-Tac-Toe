console.log("Tic Tac Toe");



scoreArray =[[ "_" , "_" , "_"],//This array sets the game to blank.
								//Player Moves will be pushed into here.
			[ "_" , "_" , "_"], //First player to win a row wins the game!

			[ "_" , "_" , "_"]] 



var currentMove = "X";
var gameComplete = false;

var playerMove = function() { //asks the player for (row,column) ie.co-ordinates and move ie. "O" or "X"
	var row = parseInt( $(this).data("row") ); // Access the clicked element - using this (make sure you wrap it in jQuery!)
	var column = parseInt( $(this).data("column") ); // Store the data-row attribute - use the .data() function
									              // Store the data-column attribute - use the .data() function
	
if ( gameComplete === false ) {

	if ((currentMove === "X") && ( scoreArray[row][column] === "_" ) && ( $(this).children("img").length === 0 )) {
		$(this).append('<img src="images/aztecCross.jpg">');
	    scoreArray[row][column] = currentMove;
	    winnerCondition();
	    currentMove = "O";
	}
	else if ((currentMove === "O") && ( scoreArray[row][column] === "_" ) && ( $(this).children("img").length === 0 )) {
		$(this).append('<img src="images/aztecCircle.jpg">');
	    scoreArray[row][column] = currentMove;
	    winnerCondition();
	    currentMove = "X";
	
	}						
	else {
		$("h1").text("That square is taken, choose another");
	}

}
};
	var winnerCondition = function() {

	if (( scoreArray[0][0] === currentMove && scoreArray[0][1] === currentMove && scoreArray[0][2] === currentMove ) || //wins horizontally
		( scoreArray[1][0] === currentMove && scoreArray[1][1] === currentMove && scoreArray[1][2] === currentMove ) ||
		( scoreArray[2][0] === currentMove && scoreArray[2][1] === currentMove && scoreArray[2][2] === currentMove ) ||

		( scoreArray[0][0] === currentMove && scoreArray[1][0] === currentMove && scoreArray[2][0] === currentMove ) || //wins vertically
		( scoreArray[0][1] === currentMove && scoreArray[1][1] === currentMove && scoreArray[2][1] === currentMove ) ||
		( scoreArray[0][2] === currentMove && scoreArray[1][2] === currentMove && scoreArray[2][2] === currentMove ) ||

		( scoreArray[0][2] === currentMove && scoreArray[1][1] === currentMove && scoreArray[2][0] === currentMove ) || //wins diagnolly
		( scoreArray[0][0] === currentMove && scoreArray[1][1] === currentMove && scoreArray[2][2] === currentMove )) {

		//if a row is won, then the winner is the last currentMove. Therefore....
		var gameComplete = true;
		var winner = currentMove; 
		$("h1").text( winner + " has won!" );
		$("div.board").off("click", "div", playerMove);
	}
	
	else if ( scoreArray[0].indexOf("_") === -1 && scoreArray[1].indexOf("_") === -1 && scoreArray[2].indexOf("_") === -1 )  {
		var gameComplete = true;
		$("h1").text( "Game has ended in a tie" );
		$("div.board").off("click", "div", playerMove);//Checks to see if all squares have been filled and no one has won.
	}

												//Game will end in a tie.
};


var resetGame = function() {

	$("div.board").find("img").remove();
	$("h1").text("let's play");

	scoreArray =[[ "_" , "_" , "_"],
								
				[ "_" , "_" , "_"],

				[ "_" , "_" , "_"]];


	var currentMove = "X";
	var gameComplete = false;

	$("div.board").on("click", "div", playerMove);
};


//Call the playerMove function when a box is clicked.
$(document).ready(function () {
	$("div.board").on("click", "div", playerMove);

	//Call the resetGame function when the button is clicked.
	$("button").on("click", resetGame);     
});

































// //CONTROLLING THE BACKGROUND COLOR
// //grabs the current time using Date



// var d, h, m, s, color;

// function displayTime() {
// 	d = new Date(); //new data object
// 	h = d.getHours();
// 	m = d.getMinutes();
// 	s = d.getSeconds();
	
// 	//add zero to the left of the numbers if they are single digits
// 	if ( h <= 9 ) {
// 		h = '0' + h;
// 	}

// 	if ( m <= 9 ) {
// 		m = '0' + m;
// 	}

// 	if ( s <= 9 ) {
// 		s = '0' + s;
// 	}
	
// 	color = "#" + h + m + s;


// 	//set background color
// 	document.body.style.background = color;
	
// 	//retrigger the function every second
// 	setTimeout(displayTime, 2000);
// }

// //call the function
// displayTime();













//PSUEDO

// var pickNaught = function() {
// 	if (i press on a square) {
// 		-then make an image (naught) appear on that square.
// 		-tell the program that square has been taken and can no longer be selected.
// 		-store that result somewhere like an array.
// 	}

// 	Execute pickCross function()
// };

// var pickCross = function() {
// 	if (i press on a square) {
// 		-then make an image (cross) appear on that square.
// 		-tell the program that square has been taken and can no longer be selected.
// 		-store that result somewhere like an array.
// 	}

// 	Execute pickNaught function()
// };


// var keepScore = function() {

// 	scoreArray =[[ "_" , "_" , "_"],

// 				[ "_" , "_" , "_"],

// 				[ "_" , "_" , "_"]]
// }


// if ( scoreArray[0][0] && scoreArray[0][1] && scoreArray[0][2] = naught/cross (then naught/cross wins)
// if ( scoreArray[1][0] && scoreArray[1][1] && scoreArray[1][2] = naught/cross (then naught/cross wins)
// if ( scoreArray[2][0] && scoreArray[2][1] && scoreArray[2][2] = naught/cross (then naught/cross wins)


// if ( scoreArray[0][0] && scoreArray[1][0] && scoreArray[2][0] = naught/cross (then naught/cross wins)
// if ( scoreArray[0][1] && scoreArray[1][1] && scoreArray[2][1] = naught/cross (then naught/cross wins)
// if ( scoreArray[0][2] && scoreArray[1][2] && scoreArray[2][2] = naught/cross (then naught/cross wins)


// if ( scoreArray[0][2] && scoreArray[1][1] && scoreArray[2][0] = naught/cross (then naught/cross wins)
// if ( scoreArray[0][0] && scoreArray[1][1] && scoreArray[2][2] = naught/cross (then naught/cross wins)



// if (currentMove === "X") {
//  		$(this).append("<img src='http://www.clker.com/cliparts/3/F/h/l/W/o/cyrillic-letter-o-md.png'>");
// 	    currentMove = "O";
// 	} 
// 	else {
// 	    currentMove = "X";
// 	    $(this).append("<img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJ5zJHg0a0c76RFJfsnJhauD2Ft7HKRCzauwgN3WjdmjJxkMsWA1MMTH8'>");
// 	}


// 	if ( scoreArray[row][column] === "_" ) { //checks if the co-ordinate is blank, if false, player must choose another.
// 		scoreArray[row][column] = currentMove;		//if true, co-ordinate is filled with player move	
// 	}
// 	else {
// 		console.log("That square is taken, choose another");
// 	}
	
