// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var auto_reset = (function create_api() {
    
    // keep a pointer to the auto reset timeout
    var auto_reset_timeout;
    
    // we want our timeout to be 35 seconds
    // timeouts are in miliseconds though, so we times by 1000
    var auto_reset_timeout_duration = 35 * 1000;
    
    // keep a pointer to the we are still here timeout
    var we_are_still_here_timeout;
    
    // we want our timeout to be 10 seconds
    // timeouts are in miliseconds though, so we times by 1000
    var we_are_still_here_timeout_duration = 10 * 1000;
    
    // ----------
    // they have said that they are still there, so reset everything
    // ----------
    function we_are_still_here() {
        
        // clear our timeout for reseting
        clearTimeout( we_are_still_here_timeout );
        
        // remove the prompt
        modal_dialogue.remove();
        
        // call our start timeout function again
        start_timeout();
    }
    
    // ----------
    // pop up a dialouge checking that they are still here
    // ----------
    function check_they_are_still_here() {
        
        // declare an array to hold our markup
        var dialogue_markup = [];
        
        // add in our intro title
        dialogue_markup.push( "<div class=\"modal_title\">", "Are you still there...", "<\/div>" );
        
        // add in an explanation
        dialogue_markup.push( "<div class=\"modal_content\">It looks like you've been inactive for a little while now, if you are still playing just click the continue button.<\/div>" );
        
        // add in the continue button
        dialogue_markup.push( "<div class=\"modal_continue_button\" id=\"modal_continue_button\"><div class=\"modal_continue_triangle\"></div></div>");
        
        // show the modal display, and say that we want it to be medium in size
        modal_dialogue.display( dialogue_markup.join( "" ), "medium" );

        // add a listener to the continue button, to close the dialogue
        add_event_listeners.to_element( document.getElementById( "modal_continue_button" ), "click", we_are_still_here );
        
        // set up a timeout if they don't click on the prompt
        we_are_still_here_timeout = setTimeout( game_logic.reset_game_immediately, we_are_still_here_timeout_duration );
    }
    
    // ----------
    // start our auto reset off ( called from the body onload event )
    //     @body_load_event - browser load event
    // ----------
    function start_timeout() {
        // start the auto reset process
        auto_reset_timeout = setTimeout( check_they_are_still_here, auto_reset_timeout_duration );
    }
    
    // ----------
    // they have performed an action in the game
    // we cound that as being here!
    // ----------
    function reset_timeout() {
        
        // if they click things other than the continue button on the splashscreen, we don't want to start the timer!
        if ( auto_reset_timeout === undefined ) {
            return;
        }
        
        // clear the previous timeout
        clearTimeout( auto_reset_timeout );
        
        // start a new timeout
        start_timeout();
    }
    
    // return our API
    return {
        start_timeout : start_timeout,
        reset_timeout : reset_timeout
    };
    
})();