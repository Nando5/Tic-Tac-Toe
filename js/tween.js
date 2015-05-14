
var rockTurn = function() {
	console.log("WHAT")
	var that = this;
	currentTween = TweenMax.to(('#' +this.id), 1, {
		rotationY:'+=180',
		ease: Bounce.easeOut,
		onComplete: function () {
			glowIn( that );
		}
	})
}


var glowIn = function( that ) {
	var id = $(that).attr("id");
	var el = $('#' + id).children("img");


	// .children("img")
	glowTween = TweenMax.to(el, 0.5, {
		ease: Bounce.easeOut,
		opacity: 1
	})

}








$('body').on('click', ".box", rockTurn)

