document.getElementById('name').style.visibility = "hidden";

function showInput()
{
    document.getElementById('name').style.visibility = "visible"; 
}

// Functions for flipping
$(function(){
	$(".project-card").flip({
	    axis: "x",
	    reverse: false,
	    trigger: 'hover'
	});
});

// $('.but').click(function(event) {
//     // get the Data
//     var id = $(this).data('card');
//     $('#'+id).flip(true);
// });