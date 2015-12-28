$(document).ready(function() {

    $('.listItemInput').focus(); //focus tell us what selector the code is reference

    $(document)



    // Add to list
    .on('click', '.addToList', function() {
        var itemToAdd = $('input[name="listItemInput"]').val().trim(); //.val gets current value, trim maybe deletes white s
        if ( itemToAdd ) { // as long as the variable is not null----- then itll workout (an assertion)
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item"/> '+ itemToAdd +'</div>'); //value defines initial value before anything is entered
        }
        $('.listItemInput').val('').focus(); //focuses on listItemInput and clears the value
    })
    
    // Remove from list
    .on('change', '.item', function() { //change of state for check box (line means 'on the change of the state of the class .item, do this')
        if( $(this).is(':checked') ){
            var parentElem = $(this).parent(); //refers to specific list item
            parentElem.effect('puff', 100, function() {
                parentElem.remove();
            });
        }
    });
    
    $('.addToListForm').submit( function(e) {
        e.preventDefault();
        
        return false; //dont do normal submit... but now we have an event handler e.. 
    });
    
    // Make the list sortable
    $('.listItems').sortable();

    $('.listItemInput').keydown(function() {
    var key = e.which;
    if (key == 13) {
    $('.listItemInput').submit(); 
    }
    });
    
    
});
