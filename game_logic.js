// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var game_logic = ( function create_api() {

    // store which food chains they have completed
    var food_chains_completed = {
        sea  : false,
        land : false
    }
    
    // store which food chain they are currently working on 
    var current_food_chain;
        
    // ----------
    // Go to habitat choice
    //     @click_event is the browser click event 
    // ----------
    function go_to_habitat_choice( click_event ) {
        
        // stop the default behaviour
        click_event.preventDefault();
        
        // stop the event bubbling up
        click_event.stopPropagation();
        
        // change to the habitat choice
        document.getElementById( "game_content" ).src = "habitat_choice.html";
    }

    // ----------
    // reset the game immediately
    //     @click_event is the browser click event 
    // ----------
    function reset_game_immediately( click_event ) {
        
        // just refresh everything
        top.document.location.reload();
    }

    // ----------
    // play a new habitat game
    //     @habitat_choice is either "land" or "sea"
    // ----------
    function play_new_habitat_game( habitat_choice ) {
        
        // set the right food chain page.
        document.getElementById( "game_content" ).src = "basic_food_chain.html";
        
        // store the current habitat choice
        current_food_chain = habitat_choice;
    }
    
    // ----------
    // they have chosen their habitat
    //     @click_event is the browser click event 
    // ----------
    function habitat_chosen( click_event ) {

        // stop the default behaviour
        click_event.preventDefault();
        
        // stop the event bubbling up
        click_event.stopPropagation();
        
        // get their habitat choice
        var habitat_choice = click_event.srcElement.getAttribute( "data-habitat-id" );
        
        // pplay a new habitat game
        play_new_habitat_game( habitat_choice );
    }
    
    // ----------
    // return the current food chain variable value
    // ----------
    function get_current_food_chain() {
        // return the current food chain variable
        return current_food_chain;
    }
    
    // ----------
    // get the images for the current question
    //     @current_question_index - the index of the current question
    // ----------
    function get_current_question_images( current_question_index ) {
        
        // return the images for this question
        return basic_food_chain_data[ current_food_chain ][ current_question_index ].images;
    }

    // ----------
    // get the animals for the current question
    //     @current_question_index - the index of the current question
    // ----------
    function get_current_question_animals( current_question_index ) {
        
        // return the images for this question
        return basic_food_chain_data[ current_food_chain ][ current_question_index ].animals;
    }

    // ----------
    // get the text for the current question
    //     @current_question_index - the index of the current question
    // ----------
    function get_current_question_text( current_question_index ) {
        
        // return the images for this question
        return basic_food_chain_data[ current_food_chain ][ current_question_index ].question;
    }

    // ----------
    // validate an answer to the basic food chain quiz
    //     @current_question_index - the index of the current question
    //     @answer                 - the answer provided by the user
    // ----------
    function validate_answer( current_question_index, answer ) {
        
        // if this is the right answer
        if ( basic_food_chain_data[ current_food_chain ][ current_question_index ].answer == answer ) {
                        
            // return that we got this right!
            return true;
        }
        
        // stop here
        return false;
    }
    
    // ----------
    // play the next basic food chain
    // ----------
    function play_next_basic_food_chain() {
        
        // work out the next habitat
        var next_habitat = "land";
        if ( current_food_chain == "land" ) {
            next_habitat = "sea";
        }
        
        // remove the dialogue 
        modal_dialogue.remove(); 
        
        // play a new habitat game
        play_new_habitat_game( next_habitat );
    }
    
    // ----------
    // we've finished a basic food chain
    // ----------
    function finished_basic_food_chain() {
        
        // if they have only done one of the food chains, make them do the other!
        if ( ( current_food_chain == "land" && food_chains_completed.sea === false ) || ( current_food_chain == "sea" && food_chains_completed.land === false ) ) {
            
            // store that we've run this food chain
            food_chains_completed[ current_food_chain ] = true;
            
            // declare an array to hold our markup
            var dialogue_markup = [];
            
            // add in our intro title
            dialogue_markup.push( "<div class=\"modal_title\">", "Ok, now let's build the other food chain...", "<\/div>" );
            
            // add in an explanation
            dialogue_markup.push( "<div class=\"modal_content\">We will do chains for both land and sea, then we will look at how they are connected.<\/div>" );
            
            // add in the continue button
            dialogue_markup.push( "<div class=\"modal_continue_button\" id=\"modal_continue_button\"><div class=\"modal_continue_triangle\"></div></div>")
            
            // show the modal display, and say that we want it to be medium in size
            modal_dialogue.display( dialogue_markup.join( "" ), "medium", false );

            // add a listener to the continue button, to close the dialogue
            add_event_listeners.to_element( document.getElementById( "modal_continue_button" ), "click", play_next_basic_food_chain );
            
            // stop here
            return;
        }
        
        // TODO: Move onto the next game
        alert( "Done" );
    }
    
    // return our public API
    return {
        go_to_habitat_choice         : go_to_habitat_choice,
        reset_game_immediately       : reset_game_immediately,
        habitat_chosen               : habitat_chosen,
        get_current_food_chain       : get_current_food_chain,
        get_current_question_images  : get_current_question_images,
        get_current_question_animals : get_current_question_animals,
        get_current_question_text    : get_current_question_text,
        validate_answer              : validate_answer,
        finished_basic_food_chain    : finished_basic_food_chain
    };
    
})();