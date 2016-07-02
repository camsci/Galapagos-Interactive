// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var full_food_chain = (function create_api() {

    // build up the number of correct answers
    var correct_answers = 0;

    // ----------
    // they have started dragging a level
    //     @drag_started_event - browser provided event
    // ----------
    function drag_started( drag_started_event ) {
        
        var drag_data = {
            level_name : drag_started_event.target.getAttribute( "data-animal-name" ),
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
        var target_data = dropped_on_event.target.getAttribute( "data-animal-name" );

        // if they have dropped the right word on the right square, allow it
        if ( transfer_data.level_name === target_data ) {
            
            // display the correct answer animation!
            top.game_logic.show_correct_answer();
            
            // grab a pointer to the answer
            var answer_element = document.getElementById( transfer_data.element_id );
            
            // remove the parent element from the DOM
            answer_element.parentNode.remove();
            
            // add the level into the correct place ( removing the text from the element first )
            dropped_on_event.target.innerHTML = "";
            dropped_on_event.target.appendChild( answer_element );
            
            // remove the event listener from element
            answer_element.removeEventListener( "dragstart", drag_started );
            
            // remove the position style
            answer_element.style.position = "static";
            
            // remove the event listeners from the element we have dropped on
            dropped_on_event.target.removeEventListener( "dragover", dragged_over );
            dropped_on_event.target.removeEventListener( "drop",     dropped_on   );
            
            // increase the answer count
            correct_answers = correct_answers + 1;
            
            if ( correct_answers == 9 ) {
                
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

        // add a drag start listener
        add_event_listeners.to_class_name( "draggable_image_answer", "dragstart", drag_started );

         // add a drag start listener
        add_event_listeners.to_class_name( "droppable_answer", "dragover", dragged_over );
        
        // add a drag start listener
        add_event_listeners.to_class_name( "droppable_answer", "drop", dropped_on );
        
        // reset the auto timeout every time someone clicks
        add_event_listeners.to_class_name( "draggable_image_answer", "dragstart", top.auto_reset.reset_timeout );
        
        add_event_listeners.to_class_name( "draggable_image_answer", "touchmove", function( event ) { 
            event.preventDefault(); 
            
            var x = event.changedTouches[0].pageX - ( event.srcElement.parentNode.offsetWidth / 2 );
            var y = event.changedTouches[0].pageY - ( event.srcElement.parentNode.offsetHeight / 2 );
            
            // TODO: Remove bounding rect height + width from the x and y.
            
            console.log( x, y, event.srcElement.parentNode );
            event.srcElement.parentNode.style.top = y + "px";
            event.srcElement.parentNode.style.left = x + "px";
        } );
        
        add_event_listeners.to_class_name( "draggable_image_answer", "touchend", function( event ) { 
            event.preventDefault(); 

            // hide the element ( this allows us to grab the element from underneath, very important! )
            event.srcElement.style.top = "-500px";
            
            // get the level they have been moving around
            var dragged_level = event.srcElement.getAttribute( "data-animal-name" );

            // work out the element they;ve just dropped it onto 
            var dropped_target_element = document.elementFromPoint(
                event.changedTouches[0].pageX,
                event.changedTouches[0].pageY
            );
            
            // get the level of the element they have dropped it onto
            var dropped_level = dropped_target_element.getAttribute( "data-animal-name" );

            // if it isnt one of our droppable answers
            if ( dropped_level === null ) { 
                return;
            }
            
            if ( dragged_level == dropped_level ) {
                // display the correct answer animation!
                top.game_logic.show_correct_answer();
                
                // grab a pointer to the answer
                var answer_element = event.srcElement.childNodes[0];
                
                // remove the parent element from the DOM
                answer_element.parentNode.remove();
                
                // add the level into the correct place ( removing the text from the element first )
                dropped_target_element.innerHTML = "";
                dropped_target_element.appendChild( answer_element );
                
                // remove the event listener from element
                answer_element.removeEventListener( "dragstart", drag_started );
                
                // remove the position style
                answer_element.style.position = "static";
                
                // remove the event listeners from the element we have dropped on
                dropped_target_element.removeEventListener( "dragover", dragged_over );
                dropped_target_element.removeEventListener( "drop",     dropped_on   );
                
                // increase the answer count
                correct_answers = correct_answers + 1;
                
                if ( correct_answers == 9 ) {
                    
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
                
                // TODO: Put the element back
                event.srcElement.style.top = "550px";
            }
            
        } );
  
        
    }
    
    // return our public API
    return {
        start_game : start_game
    };
    
})();