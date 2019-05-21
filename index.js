
//---------code for adding new items---------->
$(function addItems() {
    $('#js-shopping-list-form').focus().submit(function() {
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val(); 
        $('ul').append(
            `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
            </li>`
        );   
        //clear the input field
        $('#shopping-list-entry').val('');
    });
});



//code to check/uncheck items w/ event delegation
$(function toggleItems() {
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).parent().siblings().toggleClass('shopping-item__checked');
    });
});



//-------code to delete items w/ event delegation---------------->
$(function deleteItems() {
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
});






