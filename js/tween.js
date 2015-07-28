$(document).ready(function () { 

	//used in conjunction with TweenMax script applied to html page.
	var rockTurn = function() { //function that turns the block.
		var that = this; //stores this into a variable.
		currentTween = TweenMax.to(('#' + this.id), 1, { //takes TweenMax and applies it to 'this' id,
			rotationY:'+=540', //rotates the images a couple of times.	//the speed is set to 1 second
			ease: Bounce.easeOut,
			onComplete: function () { //when finished, take 'that' and go do the glowIn function below.
				glowIn( that );
			}
		})
	}


	var glowIn = function( that ) {
		var id = $(that).attr("id"); //gets the id attribute on 'that'. stores it in variable.
		var el = $('#' + id).children("img"); //stores the image in the given #id and stores it in a variable.
											//animation will be applied to this variable.

		glowTween = TweenMax.to(el, 0.5, { //glowTween is set 0.5 secs.
			ease: Bounce.easeOut,
			opacity: 1
		})

	}


	$('div.board').on('click', "div", rockTurn) //click event to execute animation.

});