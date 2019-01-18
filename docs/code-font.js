/**
 * Triggered every minute, this looks for the target 
 * string (`` in this case) and any text wrapped in 
 * these characters: ``code stuffs`` and then 
 * changes the font and removes those characters.
 */
function myFunction() {
    
    // Target string
    const target = "``";
    var done = false;
    
    while(!done) {
    
        // Update text from body
        var body = DocumentApp.getActiveDocument().getBody();
        var text = body.editAsText();
        
        // Search for target string
        var search_result = text.findText(target);
        var search_result_next = text.findText(target, search_result);
        
        if(search_result !== null && search_result_next !== null) {
        
        // Get positions of the two target beginning characters.
        var offset_start_start = search_result.getStartOffset();
        var offset_start_end = search_result.getEndOffsetInclusive();
        
        // Get positions of the two target end characters.
        var offset_end_start = search_result_next.getStartOffset();
        var offset_end_end = search_result_next.getEndOffsetInclusive();
        
        // Set the code font
        search_result.getElement().asText().setFontFamily(offset_start_start, offset_end_end, "Courier New");
        
        // Delete the target strings (delete end first, then start)
        search_result.getElement().asText().deleteText(offset_end_start, offset_end_end);
        search_result.getElement().asText().deleteText(offset_start_start, offset_start_end);
        
        } else {
            done = true;
        }
    }
}