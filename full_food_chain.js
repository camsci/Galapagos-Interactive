// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var full_food_chain = (function create_api() {

    "use strict";

    /*global top,game_logic,add_event_listeners,modal_dialogue*/

    // build up the number of correct answers
    var correct_answers = 0;
    
    // ----------
    // when dragging on a touch screen, we have to actually move the image for the browser!
    //     @drag_event - event provided by the browser
    // ----------
    function position_image_on_drag( drag_event ) {
        
        // set the drag moving the screen!
        drag_event.preventDefault(); 

        // get the level they have been moving around
        var dragged_level = drag_event.srcElement.parentNode.getAttribute( "data-animal-name" );

        // if they haven't dragged something that we want them to.
        if ( dragged_level === null ) {
            return;
        }
        
        // work out the X and Y positions
        var x = drag_event.changedTouches[0].pageX - ( drag_event.srcElement.parentNode.offsetWidth / 2 ) - document.getElementById( "full_food_chain" ).getBoundingClientRect().left;
        var y = drag_event.changedTouches[0].pageY - ( drag_event.srcElement.parentNode.offsetHeight / 2 ) - document.getElementById( "full_food_chain" ).getBoundingClientRect().top;
        
        // move the element to these posituions
        drag_event.srcElement.parentNode.style.top = y + "px";
        drag_event.srcElement.parentNode.style.left = x + "px";
    }
    
    // ----------
    // the touch event has finished
    // see if this is the right element to be dropped on 
    //     @drag_event - event provided by the browser
    // ----------
    function touch_event_finished( drag_event ) {
        
        drag_event.preventDefault(); 

        // get the level they have been moving around
        var dragged_level = drag_event.srcElement.parentNode.getAttribute( "data-animal-name" );

        // if they haven't dragged something that we want them to.
        if ( dragged_level === null ) {
            return;
        }
        
        // hide the element ( this allows us to grab the element from underneath, very important! )
        drag_event.srcElement.parentNode.style.left = "-500px";
        
        // work out the element they;ve just dropped it onto 
        var dropped_target_element = document.elementFromPoint(
            drag_event.changedTouches[0].pageX,
            drag_event.changedTouches[0].pageY
        );
        
        // get the level of the element they have dropped it onto
        var dropped_level = dropped_target_element.getAttribute( "data-animal-name" );
        
        // if it isnt one of our droppable answers
        if ( dropped_level === null ) { 
            drag_event.srcElement.parentNode.style.left = "250px";
            return;
        }
        
        if ( dragged_level === dropped_level ) {
            // display the correct answer animation!
            top.game_logic.show_correct_answer();
            
            // grab a pointer to the answer
            var answer_element = drag_event.srcElement;
            
            // remove the parent element from the DOM
            answer_element.parentNode.remove();
            
            // add the level into the correct place ( removing the text from the element first )
            dropped_target_element.innerHTML = "";
            dropped_target_element.appendChild( answer_element );
                        
            // remove the position style
            answer_element.style.position = "static";

            // increase the answer count
            correct_answers = correct_answers + 1;
            
            if ( correct_answers === 9 ) {
                
                // declare an array to hold our markup
                var dialogue_markup = [];
                
                // add in our intro title
                dialogue_markup.push( "<div class=\"modal_title\">", "Everything is connected.", "<\/div>" );
                
                // add in an explanation
                dialogue_markup.push( "<div class=\"modal_content\">This is still only a small incomplete chain... a really complete chain would include every species on the planet!<\/div>" );
                
                // add in the continue button
                dialogue_markup.push( "<div class=\"modal_continue_button\" id=\"modal_continue_button\"><div class=\"modal_continue_triangle\"></div></div>");
                
                // show the modal display, and say that we want it to be medium in size
                modal_dialogue.display( dialogue_markup.join( "" ), "medium" );

                // add a listener to the continue button, to close the dialogue
                add_event_listeners.to_element( document.getElementById( "modal_continue_button" ), "click", top.game_logic.reset_game_immediately );
            }
        } else {
            // show the incorrect answer animation
            top.game_logic.show_incorrect_answer();
            
            // Put the element back
            drag_event.srcElement.parentNode.style.left = "250px";
        }
    }
    
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
        modal_dialogue.display( dialogue_markup.join( "" ), "medium" );

        // add a listener to the continue button, to close the dialogue
        add_event_listeners.to_element( document.getElementById( "modal_continue_button" ), "click", modal_dialogue.remove );
        
        // stop them from dragging the window
        add_event_listeners.to_element( window, "touchmove", function( event ) { event.preventDefault(); } );
        
        // reset the auto timeout every time someone clicks
        add_event_listeners.to_class_name( "draggable_image_answer", "dragstart",  top.auto_reset.reset_timeout );
        add_event_listeners.to_class_name( "draggable_image_answer", "touchstart", top.auto_reset.reset_timeout );
        
        // handle moving on a touch screen
        add_event_listeners.to_class_name( "draggable_image_answer", "touchmove", position_image_on_drag );
        add_event_listeners.to_class_name( "draggable_image_answer", "touchend", touch_event_finished );

    }
    
    // return our public API
    return {
        start_game : start_game
    };
    
}());