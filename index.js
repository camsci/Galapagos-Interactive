// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var index = function() {
	
	// ----------
	// display the intro message ( called from the body onload event )
	//     @onload_event is the browser load event 
	// ----------
	var display_intro_message = function( body_onload_event ) {
		
		// declare an array to hold our markup
		var dialogue_markup = [];
		
		// add in our intro title
		dialogue_markup.push( "<div class=\"modal_title\">", "Before we start to build food chains, we need to know a bit about our species...", "<\/div>" );
		
		// add in an explanation
		dialogue_markup.push( "<div class=\"modal_content\">Click on the photos for more information about each species.<\/div>" );
		dialogue_markup.push( "<div class=\"modal_content\">Click the \"enlarge\" buttons to enlarge the species photos.<\/div>" );
		
		// TODO: add in the continue button
		
		// show the modal display, and say that we want it to be medium in size
		modal_dialogue.display( dialogue_markup.join( "" ), "medium", false );
	}
	
	// return our public API
	return {
		display_intro_message : display_intro_message
	};
	
}();