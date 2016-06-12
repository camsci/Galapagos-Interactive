// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var add_event_listeners = function() {
	
	// ----------
	// a function to add event listeners to all elements with a given class name
	//     @class_name_string:  The class name to find all elements with, and attach the events to
	//     @event_type:         The type of DOM event that we are going to listen for
	//     @function_reference: The function reference we should call when the event happens
	// ----------
	var to_class_name = function( class_name_string, event_type, function_reference ) {
		
		// grab all of the elements that match this class name
		var all_elements = document.getElementsByClassName( class_name_string );

		// go through all of the elements
		for ( var i = 0; i < all_elements.length; i = i + 1 ) { 
			
			// add an event listener to this element
			all_elements[i].addEventListener( event_type, function_reference, false );
		}
	}

	// ----------
	// a function to add an event listener to a element
	//     @element:            The DOM element we want to attach the event to
	//     @event_type:         The type of DOM event that we are going to listen for
	//     @function_reference: The function reference we should call when the event happens
	// ----------
	var to_element = function( element, event_type, function_reference ) {
		// add the event listener
		element.addEventListener( event_type, function_reference, false );
	}
	
	// return our function references
	// this allows only our public functions to be called
	return {
		to_class_name : to_class_name,
		to_element    : to_element
	}
}();