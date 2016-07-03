// declare our global variable which will contain the public API methods for this file
// ensure that it matches our file name for ease!
var modal_dialogue = (function create_api() {

    // ----------
    // remove our modal dialogue
    // ----------
    function remove() {

        // remove the element from screen
        document.getElementById( "modal_dialogue_container" ).remove();
        
        // remove the element from screen
        document.getElementById( "modal_div" ).remove();
    }
    
    // ----------
    // display our modal dialogue
    //     @dialogue_content: What to put inside the HTML of the dialogue!
    //     @size:             medium or large are our current options 
    // ----------
    function display( dialogue_content, size, show_remove_button ) {
        
        // if they haven't specified the remove button, assume they want one.
        if ( show_remove_button !== undefined ) {
            alert( "FIX ME" );
            return;
        }
        
        var modal_dialogue_container = document.createElement( "div" );
        modal_dialogue_container.id  = "modal_dialogue_container";
        
        // give it the right class name
        modal_dialogue_container.className = "modal_dialogue_container " + size;

        // add in the content
        modal_dialogue_container.innerHTML = dialogue_content;
        
        // add the element into the body
        document.body.appendChild( modal_dialogue_container );
                
        // create a div to sit behind the modal_dialogue
        var modal_div = document.createElement( "div" );
        modal_div.id  = "modal_div";
        
        // set the right class name
        modal_div.className = "modal_div";

        // add the element into the body
        document.body.appendChild( modal_div );

    }
    
    // return our function references
    // this allows only our public functions to be called
    return {
        display : display,
        remove  : remove
    };
    
})();