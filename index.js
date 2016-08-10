// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var index = (function create_api() {
    
    "use strict";
    
    /*global add_event_listeners,index_data,modal_dialogue,top,game_logic*/
    
    // ----------
    // Attach an event handler for when we click on the reset button
    // this will take us right back to the species profile
    //     @onload_event is the browser load event 
    // ----------
    function attach_click_events( body_onload_event ) {
        
        // attach the reset button click handler
        add_event_listeners.to_element( document.getElementById( "reset_button" ), "click", game_logic.reset_game_immediately  );
        
        // attach the reset button click handler
        add_event_listeners.to_element( document.getElementById( "species_profile_button" ), "click", game_logic.show_species_profile  );
    }
    
    // return our public API
    return {
        attach_click_events : attach_click_events
    };
    
}());