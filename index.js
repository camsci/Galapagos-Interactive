// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var index = function() {
	
	var detail_image_clicked = function( mouse_event ) {
		console.log( mouse_event );
	}
	
	// ----------
	// handle the mouse click event
	//     @mouse_event is the event object passed in by the browser
	// ----------
	var grid_image_clicked = function( mouse_event ) {
		
		// TODO: Remove these logs!
		console.log( mouse_event.srcElement.getAttribute( "data-json-id" ) );
		console.log( index_data[ mouse_event.srcElement.getAttribute( "data-json-id" ) ] );
		
		var relevent_data = index_data[ mouse_event.srcElement.getAttribute( "data-json-id" ) ];
		
		// declare an array to hold our markup
		var dialogue_markup = [];
		
		// add in the titles and images
		dialogue_markup.push( 
			"<div class=\"modal_title\">", relevent_data.nice_name, "<\/div>", 
			"<div class=\"modal_image_container\">",
				"<img class=\"modal_image\" src=\"", relevent_data.image_path, "\">",
			"<\/div>", 
			"<div class=\"modal_sub_title\">", relevent_data.latin_name, "<\/div>", 
		
			// Add in the relevent image for what sort of consumer it is
			"<div class=\"modal_type_image_container\" data-label=\"", relevent_data.type_description, "\">",
				"<img src=\"", relevent_data.type_image_path, "\" class=\"modal_type_image\">",
			"<\/div>"
		);
		
		// add the more textual details
		dialogue_markup.push( "<div class=\"modal_content first\"><span class=\"modal_content_title\">Habitat:<\/span>", relevent_data.habitat, "<\/div>" );
		dialogue_markup.push( "<div class=\"modal_content\"><span class=\"modal_content_title\">Food:<\/span>", relevent_data.food, "<\/div>" );
		dialogue_markup.push( "<div class=\"modal_content\"><span class=\"modal_content_title\">Predators:<\/span>", relevent_data.predators, "<\/div>" );
		
		// show the modal display, and say that we want it to be large in size
		modal_dialogue.display( dialogue_markup.join( "" ), "large" );
		
		// add a listener to this element
		add_event_listeners.to_class_name( "modal_image_container", "click", detail_image_clicked );
	}
	
	// ----------
	// display the intro message ( called from the body onload event )
	//     @onload_event is the browser load event 
	// ----------
	var display_intro_message = function( body_onload_event ) {
		
		// declare an array to hold our markup
		var dialogue_markup = [];
		
		// add in our intro title
		dialogue_markup.push( "<div class=\"modal_title\">", "Before we start to build food chains, we need to know a bit about our species...", "<\/div>" );
		
		dialogue_markup.push( "<div class=\"modal_content\">Click on the photos for more information about each species.<\/div>" );
		dialogue_markup.push( "<div class=\"modal_content\">Click the \"enlarge\" buttons to enlarge the species photos.<\/div>" );
		
		// show the modal display, and say that we want it to be medium in size
		modal_dialogue.display( dialogue_markup.join( "" ), "medium" );
	}
	
	// return our public API
	return {
		grid_image_clicked    : grid_image_clicked,
		display_intro_message : display_intro_message
	};
	
}();