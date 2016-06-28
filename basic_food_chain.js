// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var basic_food_chain = (function create_api() {
    
    // ----------
    // show the next question
    // ----------
    function show_next_question() {
        
        // show the actual text of the question
        document.getElementById( "question" ).innerHTML = top.game_logic.get_current_question_text();
        
        // get the details for the current question
        var images  = top.game_logic.get_current_question_images();
        var animals = top.game_logic.get_current_question_animals();
        
        // go through the images
        for ( var i = 0; i < images.length; i = i + 1 ) {
            
            // add the image into the page
            document.getElementById( "image_" + i ).src = images[i];
            
            // set the name of the animal
            document.getElementById( "image_" + i ).setAttribute( "data-animal-name", animals[i] );
        }
    }

    // ----------
    // They've clicked an answer, validate it!
    //     @click_event - browser click event
    // ----------
    function answer_clicked( click_event ) {

        // get the answer
        var answer = click_event.srcElement.getAttribute( "data-animal-name" );

        // validate it, seeing if it is right
        if ( top.game_logic.validate_answer( answer ) ) {
            
            // display the correct answer animation!
            top.game_logic.show_correct_answer();
            
            // take a copy of the iamge they clicked on
            var image_to_display = click_event.srcElement.cloneNode();
            
            // remove the ID so we don't break things!
            image_to_display.setAttribute( "id", null );
            
            // get the current question index
            var current_question_index = top.game_logic.get_current_question_index();
            
            // add the picture into the display
            document.getElementById( "food_chain_image_container_" + current_question_index ).appendChild( image_to_display );
            
            // increase our question index
            current_question_index = current_question_index + 1;

            // if this is the last question, we should stop
            if ( current_question_index == 4 ) {
                
                // tell our game logic API that we have finished a basic food chain
                top.game_logic.finished_basic_food_chain();
                
                // stop here
                return;
            }
            
            // set the current question index
            top.game_logic.set_current_question_index( current_question_index );
            
            // remove the disabled colouring on the NEXT image container ( we have just increased our question index );
            document.getElementById( "food_chain_image_container_" + current_question_index ).classList.remove( "disabled" );

            // show the next question
            show_next_question();
            
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

        // set the food chain type.
        document.getElementById( "food_chain_type" ).innerHTML = top.game_logic.get_current_food_chain();
        
        add_event_listeners.to_class_name( "image", "click", answer_clicked );

        // show the next question
        show_next_question();
    }
    
    // return our public API
    return {
        start_game : start_game
    };
    
})();