// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var index = function() {
	
	// ----------
	// handle the mouse click event
	//     @mouse_event is the event object passed in by the browser
	// ----------
	var image_clicked = function( mouse_event ) {
		
		// TODO: Remove these logs!
		console.log( mouse_event.srcElement.getAttribute( "data-json-id" ) );
		console.log( index_data[ mouse_event.srcElement.getAttribute( "data-json-id" ) ] );
		
		var relevent_data = index_data[ mouse_event.srcElement.getAttribute( "data-json-id" ) ];
		
		var dialogue_markup = [];
		
		dialogue_markup.push( "<div class=\"modal_title\">", relevent_data.nice_name, "<\/div>" );
		dialogue_markup.push( "<div class=\"modal_image_container\"><img class=\"modal_image\" src=\"", relevent_data.image_path, "\"><\/div>" );
		dialogue_markup.push( "<div class=\"modal_sub_title\">", relevent_data.latin_name, "<\/div>" );
		
		// TODO: Add in the relevent image
		
		dialogue_markup.push( "<div class=\"modal_content\"><span class=\"modal_content_title\">Habitat:<\/span>", relevent_data.habitat, "<\/div>" );
		dialogue_markup.push( "<div class=\"modal_content\"><span class=\"modal_content_title\">Food:<\/span>", relevent_data.food, "<\/div>" );
		dialogue_markup.push( "<div class=\"modal_content\"><span class=\"modal_content_title\">Predators:<\/span>", relevent_data.predators, "<\/div>" );
		
		modal_dialogue.display( dialogue_markup.join( "" ) );
	}
	
	// return our public API
	return {
		image_clicked : image_clicked
	};
	
}();