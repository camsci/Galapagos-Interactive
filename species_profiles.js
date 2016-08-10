// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var species_profiles = function() {
    
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
        dialogue_markup.push( "<div class=\"modal_content\">Click the photo again to enlarge the species image.<\/div>" );
        
        // add in the continue button
        dialogue_markup.push( "<div class=\"modal_continue_button\" id=\"modal_continue_button\"><div class=\"modal_continue_triangle\"></div></div>");
        
        // show the modal display, and say that we want it to be medium in size
        modal_dialogue.display( dialogue_markup.join( "" ), "medium" );
        
        // add a listener to the continue button, to close the dialogue
        add_event_listeners.to_element( document.getElementById( "modal_continue_button" ), "click", modal_dialogue.remove );
    }
    
    // ----------
    // handle the mouse click event on the detail image
    //     @mouse_event is the event object passed in by the browser
    // ----------
    function detail_image_clicked( mouse_event ) {
        
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
    function grid_image_clicked( mouse_event ) {
        
        // grab the JSON id from the element
        var json_id = mouse_event.srcElement.getAttribute( "data-json-id" );
        
        // just stop here if we don't get one
        // this means someone has clicked on a placeholder
        if ( json_id === null ) {
            return;
        }
        
        // get the data from the mouse click
        var relevent_data = index_data[ json_id ];
        
        // declare an array to hold our markup
        var dialogue_markup = [ "<div class=\"species_detail_container\">"];
        
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

        dialogue_markup.push( "<\/div>" );
        
        // add in the continue button
        dialogue_markup.push( "<div class=\"modal_back_button\" id=\"modal_back_button\"><div class=\"modal_back_triangle\"></div></div>");
        
        // show the modal display, and say that we want it to be large in size
        modal_dialogue.display( dialogue_markup.join( "" ), "large" );

        // add a listener to the continue button, to close the dialogue
        add_event_listeners.to_element( document.getElementById( "modal_back_button" ), "click", modal_dialogue.remove );
        
        // add a listener to this element
        add_event_listeners.to_class_name( "modal_image_container", "click", detail_image_clicked );
    }

    // ----------
    // Attach the event handles, do this after the page loads
    //     @onload_event is the browser load event 
    // ----------
    function attach_click_events( body_onload_event ) {

        // Attach event listeners to our images
        add_event_listeners.to_class_name( "image_container", "click", species_profiles.grid_image_clicked );

        // Attach an event handler for when we click on the continue button, this will take us to the next step of the game
        add_event_listeners.to_element( document.getElementById( "continue_button" ), "click", top.game_logic.go_to_habitat_choice  );
        
        // reset the auto timeout every time someone clicks
        add_event_listeners.to_element( window, "click", top.auto_reset.reset_timeout );
    }
    
    // return our public API
    return {
        grid_image_clicked    : grid_image_clicked,
        attach_click_events   : attach_click_events,
        display_intro_message : display_intro_message
    };
    
}();