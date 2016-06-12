// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var species_profiles = function() {
	
	// ----------
	// handle the mouse click event on the detail image
	//     @mouse_event is the event object passed in by the browser
	// ----------
	var detail_image_clicked = function( mouse_event ) {
		
		// flip the class names 
		if ( mouse_event.srcElement.className == "modal_image" ) {
			mouse_event.srcElement.parentNode.className = "modal_full_screen_image_container";
			mouse_event.srcElement.className = "modal_full_screen_image";
		} else {
			mouse_event.srcElement.parentNode.className = "modal_image_container";
			mouse_event.srcElement.className = "modal_image";
		}
	}
	
	// ----------
	// handle the mouse click event on the grid image
	//     @mouse_event is the event object passed in by the browser
	// ----------
	var grid_image_clicked = function( mouse_event ) {
		
		// get the data from the mouse click
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
	
	// return our public API
	return {
		grid_image_clicked : grid_image_clicked,
	};
	
}();