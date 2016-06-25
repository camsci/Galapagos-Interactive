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
    }
    
    // return our public API
    return {
        start_game : start_game
    };
    
})();