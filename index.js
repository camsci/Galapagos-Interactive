// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var index = (function create_api() {
    
    // ----------
    // display the intro message ( called from the body onload event )
    //     @onload_event is the browser load event 
    // ----------
    function display_intro_message( body_onload_event ) {
        
        // declare an array to hold our markup
        var dialogue_markup = [];
        
        // add in our intro title
        dialogue_markup.push( "<div class=\"modal_title\">", "Before we start to build food chains, we need to know a bit about our species...", "<\/div>" );
        
        // add in an explanation
        dialogue_markup.push( "<div class=\"modal_content\">Click on the photos for more information about each species.<\/div>" );
        dialogue_markup.push( "<div class=\"modal_content\">Click the \"enlarge\" buttons to enlarge the species photos.<\/div>" );
        
        // add in the continue button
        dialogue_markup.push( "<div class=\"modal_continue_button\" id=\"modal_continue_button\"><div class=\"modal_continue_triangle\"></div></div>")
        
        // show the modal display, and say that we want it to be medium in size
        modal_dialogue.display( dialogue_markup.join( "" ), "medium", false );
        
        // add a listener to the continue button, to close the dialogue
        add_event_listeners.to_element( document.getElementById( "modal_continue_button" ), "click", modal_dialogue.remove );
    }
    
    // ----------
    // Attach an event handler for when we click on the reset button
    // this will take us right back to the species profile
    //     @onload_event is the browser load event 
    // ----------
    function attach_click_events( body_onload_event ) {
        // attach the reset button click handler
        add_event_listeners.to_element( document.getElementById( "reset_button" ), "click", game_logic.reset_game_immediately  );
    }
    
    // return our public API
    return {
        display_intro_message  : display_intro_message,
        attach_click_events    : attach_click_events
    };
    
})();