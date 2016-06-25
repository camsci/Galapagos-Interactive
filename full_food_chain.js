// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var full_food_chain = (function create_api() {
        
    // ----------
    // Start the game off, sets up the page based on their previous choice
    //     @body_load_event - browser load event
    // ----------
    function start_game( body_load_event ) {
        
        // declare an array to hold our markup
        var dialogue_markup = [];
        
        // add in our intro title
        dialogue_markup.push( "<div class=\"modal_title\">", "OK, now lets build a bigger food chain...", "<\/div>" );
        
        // add in an explanation
        dialogue_markup.push( "<div class=\"modal_content\">Drop the photos onto the correct places in the diagram to create a food chain combining both land and sea species.<\/div>" );
        
        // add in the continue button
        dialogue_markup.push( "<div class=\"modal_continue_button\" id=\"modal_continue_button\"><div class=\"modal_continue_triangle\"></div></div>");
        
        // show the modal display, and say that we want it to be medium in size
        modal_dialogue.display( dialogue_markup.join( "" ), "medium", false );

        // add a listener to the continue button, to close the dialogue
        add_event_listeners.to_element( document.getElementById( "modal_continue_button" ), "click", modal_dialogue.remove );
    }
    
    // return our public API
    return {
        start_game : start_game
    };
    
})();