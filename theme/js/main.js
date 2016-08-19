// Functions for flipping
$(function(){
	$(".project-card").flip({
	    axis: "x",
	    reverse: false,
	    trigger: 'hover'
	});
});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("topNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("topNav").style.width = "0%";
}

$('.overlay-content  a').click(function() {
	document.getElementById("topNav").style.width = "0%";
});

// $('.but').click(function(event) {
//     // get the Data
//     var id = $(this).data('card');
//     $('#'+id).flip(true);
// });