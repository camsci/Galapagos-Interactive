// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var name_food_chain_levels = (function create_api() {
    
    "use strict";
    
    /*global add_event_listeners,index_data,modal_dialogue,top,game_logic*/
    
    // store the levels completed
    var levels_completed = [];
        
    // ----------
    // when dragging on a touch screen, we have to actually move the image for the browser!
    //     @drag_event - event provided by the browser
    // ----------
    function position_image_on_drag( drag_event ) {
        
        // set the drag moving the screen!
        drag_event.preventDefault(); 
        
        // work out the X and Y positions
        var x = drag_event.changedTouches[0].pageX - ( drag_event.srcElement.offsetWidth / 2 );
        var y = drag_event.changedTouches[0].pageY - ( drag_event.srcElement.offsetHeight / 2 );
        
        // move the element to these posituions
        drag_event.srcElement.style.top = y + "px";
        drag_event.srcElement.style.left = x + "px";
    }

    // ----------
    // the touch event has finished
    // see if this is the right element to be dropped on 
    //     @drag_event - event provided by the browser
    // ----------
    function touch_event_finished( drag_event ) {
        
        drag_event.preventDefault(); 

        // hide the element ( this allows us to grab the element from underneath, very important! )
        drag_event.srcElement.style.top = "-500px";
        
        // get the level they have been moving around
        var dragged_level = drag_event.srcElement.getAttribute( "data-level-name" );

        // work out the element they;ve just dropped it onto 
        var dropped_target_element = document.elementFromPoint(
            drag_event.changedTouches[0].pageX,
            drag_event.changedTouches[0].pageY
        );
        
        // get the level of the element they have dropped it onto
        var dropped_level = dropped_target_element.getAttribute( "data-level-name" );
        
        // if it isnt one of our droppable answers
        if ( dropped_level === null ) {
            drag_event.srcElement.style.top = "550px";
            return;
        }
        
        if ( dragged_level === dropped_level ) {
            
            // display the correct answer animation!
            top.game_logic.show_correct_answer();
            
            // grab a pointer to the answer
            var answer_element = drag_event.srcElement;
            
            // add in our dropped answer class list
            answer_element.classList.add( "dropped_answer" );
            
            // add the level into the correct place
            dropped_target_element.appendChild( answer_element );
            
            // remove the position style
            answer_element.style.position = "static";
                        
            // show that we have completed this level
            levels_completed.push( dragged_level );
            
            // we have finished this game, onto the next one! 
            if ( levels_completed.length === 4 ) {
                // go onto the final part of the game
                top.game_logic.finished_name_food_chain_levels();
            }
        } else {
            // show the incorrect answer animation
            top.game_logic.show_incorrect_answer();
            
            // Put the element back
            drag_event.srcElement.style.top = "550px";
        }
    }

    // ----------
    // Start the game off, sets up the page based on their previous choice
    //     @body_load_event - browser load event
    // ----------
    function start_game( body_load_event ) {
                        
        // stop them from dragging the window
        add_event_listeners.to_element( window, "touchmove", function( event ) { event.preventDefault(); } );
        
        // add in listeners for touch screen drags
        add_event_listeners.to_class_name( "draggable_answer", "touchmove", position_image_on_drag );
        add_event_listeners.to_class_name( "draggable_answer", "touchend", touch_event_finished );
        
        // reset the auto timeout every time someone starts to drag an image
        add_event_listeners.to_class_name( "draggable_answer", "dragstart",  top.auto_reset.reset_timeout );
        add_event_listeners.to_class_name( "draggable_answer", "touchstart", top.auto_reset.reset_timeout );
    }
    
    // return our public API
    return {
        start_game : start_game
    };
    
}());