// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var modal_dialogue = (function create_api() {

    // ----------
    // remove our modal dialogue
    // ----------
    function remove() {
        
        // remove the element from screen
        document.getElementById( "modal_dialogue" ).remove();

        // remove the element from screen
        document.getElementById( "modal_div" ).remove();
        
        // get a pointer to the close button
        var close_button = document.getElementById( "close_button" );
        
        // if there was a close button, we should remove it also
        if ( close_button !== null ) {
            close_button.remove();
        }
    }
    
    // ----------
    // display our modal dialogue
    //     @dialogue_content: What to put inside the HTML of the dialogue!
    //     @size:             medium or large are our current options 
    // ----------
    function display( dialogue_content, size, show_remove_button ) {
        
        // if they haven't specified the remove button, assume they want one.
        if ( show_remove_button === undefined ) {
            show_remove_button = true;
        }
        
        // create the element
        var modal_dialogue = document.createElement( "div" );
        modal_dialogue.id  = "modal_dialogue";
        
        // give it the right class name
        modal_dialogue.className = "modal_dialogue " + size;
        
        // add in the content
        modal_dialogue.innerHTML = dialogue_content;
        
        // add the element into the body
        document.body.appendChild( modal_dialogue );
        
        // create a div to sit behind the modal_dialogue
        var modal_div = document.createElement( "div" );
        modal_div.id  = "modal_div";
        
        // set the right class name
        modal_div.className = "modal_div";

        // add the element into the body
        document.body.appendChild( modal_div );
        
        // if they want a remove button
        if ( show_remove_button ) {
            
            // Add in a close button
            var close_button = document.createElement( "div" );
            close_button.id  = "close_button";
            
            // give it the right class name
            close_button.className = "close_button " + size;
            
            // add in a big X!
            close_button.innerHTML = "X";
            
            // add the element into the screen 
            document.body.appendChild( close_button );
            
            add_event_listeners.to_element( close_button, "click", remove );
        }
    }
    
    // return our function references
    // this allows only our public functions to be called
    return {
        display : display,
        remove  : remove
    };
    
})();