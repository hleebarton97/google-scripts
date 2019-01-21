/**
 * Triggered when a cell is edited, this checks the 
 * value of the active cell if it's in column A and
 * then removes any characters that are not numeric.
 * 
 * @param {Object} e // Event object
 */
function onEdit(e) {
  
    // Get active cell from current sheet and column
    const SHEET = SpreadsheetApp.getActiveSpreadsheet();
    const ACTIVE_COL = SHEET.getActiveRange().getColumn();
    const ACTIVE_CELL = SHEET.getActiveCell();
    const EDIT_COL = 1;
    
    // Check if column A
    if(ACTIVE_COL === EDIT_COL) {
      var val = ACTIVE_CELL.getValue(); // Get value of active cell
      val = val.replace(/\D+/g, ''); // Remove all non-numeric characters
      ACTIVE_CELL.setValue(val); // Set the new value of the active cell
    }
  }
  