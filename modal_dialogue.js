// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var modal_dialogue = function() {

	// ----------
	// remove our modal dialogue
	// ----------
	var remove = function() {
		// remove the element from screen
		document.getElementById( "modal_dialogue" ).remove();
		document.getElementById( "close_button"   ).remove();
	}
	
	// ----------
	// display our modal dialogue
	//     @dialogue_content: What to put inside the HTML of the dialogue!
	// ----------
	var display = function( dialogue_content ) {
		
		// create the element
		var dialogue = document.createElement( "div" );
		dialogue.id  = "modal_dialogue";
		
		// give it the right class name
		dialogue.className = "modal_dialogue";
		
		// add in the content
		dialogue.innerHTML = dialogue_content;
		
		// add the element into the body
		document.body.appendChild( dialogue );
		
		// TODO: Add in a close button
		var close_button = document.createElement( "div" );
		close_button.id  = "close_button";
		
		// give it the right class name
		close_button.className = "close_button";
		
		// add in a big X!
		close_button.innerHTML = "X";
		
		// add the element into the screen 
		document.body.appendChild( close_button );
		
		add_event_listeners.to_element( close_button, "click", remove );
	}
	
	// return our function references
	// this allows only our public functions to be called
	return {
		display : display
	};
	
}();