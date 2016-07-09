// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var name_food_chain_levels = (function create_api() {
    
    // store the levels completed
    var levels_completed = [];
    
    // ----------
    // they have started dragging a level
    //     @drag_started_event - browser provided event
    // ----------
    function drag_started( drag_started_event ) {
        
        var drag_data = {
            level_name : drag_started_event.target.getAttribute( "data-level-name" ),
            element_id : drag_started_event.target.getAttribute(  "id"             )
        }
        
        // add the text of the food chain level we are dragging into our event
        drag_started_event.dataTransfer.setData( "text", JSON.stringify( drag_data ) );
    }
    
    // ----------
    // allow our squares to be dragged over.
    // ----------
    function dragged_over( drag_over_event ) {
        // stop the default here ( the default is to NOT allow dropping! )
        drag_over_event.preventDefault();
    }
    
    // ----------
    // what to do when our element is dropped on
    // ----------
    function dropped_on( dropped_on_event ) {

        // get the transfer text
        var transfer_text = dropped_on_event.dataTransfer.getData( "text" );
        
        // if they are dragging an image!
        if ( transfer_text.indexOf( "http:" ) === 0 ) {
            return;
        }
        
        // stop the default behaviour 
        dropped_on_event.preventDefault();
        
        // get the transfered data into an object
        var transfer_data = JSON.parse( transfer_text );
        
        // get the target data
        var target_data = dropped_on_event.target.getAttribute( "data-level-name" );

        // if they have dropped the right word on the right square, allow it
        if ( transfer_data.level_name === target_data ) {

            // display the correct answer animation!
            top.game_logic.show_correct_answer();
            
            // grab a pointer to the answer
            var answer_element = document.getElementById( transfer_data.element_id );
            
            // add the level into the correct place
            dropped_on_event.target.appendChild( answer_element );
            
            // remove the event listener from element
            answer_element.removeEventListener( "dragstart", drag_started );
            
            // remove the position style
            answer_element.style.position = "static";
            
            // remove the event listeners from the element we have dropped on
            dropped_on_event.target.removeEventListener( "dragover", dragged_over );
            dropped_on_event.target.removeEventListener( "drop",     dropped_on   );
            
            // show that we have completed this level
            levels_completed.push( transfer_data.level_name );
            
            // we have finished this game, onto the next one! 
            if ( levels_completed.length == 4 ) {
                // go onto the final part of the game
                top.game_logic.finished_name_food_chain_levels();
            }
        } else {
            // show the incorrect answer animation
            top.game_logic.show_incorrect_answer();
        }
    }
    
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
        
        if ( dragged_level == dropped_level ) {
            
            // display the correct answer animation!
            top.game_logic.show_correct_answer();
            
            // grab a pointer to the answer
            var answer_element = drag_event.srcElement;
            
            // add the level into the correct place
            dropped_target_element.appendChild( answer_element );
            
            // remove the event listener from element
            answer_element.removeEventListener( "dragstart", drag_started );
            
            // remove the position style
            answer_element.style.position = "static";
            
            // remove the event listeners from the element we have dropped on
            dropped_target_element.removeEventListener( "dragover", dragged_over );
            dropped_target_element.removeEventListener( "drop",     dropped_on   );
            
            // show that we have completed this level
            levels_completed.push( dragged_level );
            
            // we have finished this game, onto the next one! 
            if ( levels_completed.length == 4 ) {
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
        
        // add a drag start listener
        add_event_listeners.to_class_name( "draggable_answer", "dragstart", drag_started );

         // add a drag start listener
        add_event_listeners.to_class_name( "droppable_answer", "dragover", dragged_over );
        
        // add a drag start listener
        add_event_listeners.to_class_name( "droppable_answer", "drop", dropped_on );
        
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
    
})();