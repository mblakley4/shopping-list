//1. use 'this'
//2. dynamically add and remove HTML elements and apply styles
//3. enter items  by adding text and hitting 'return' or 'add item' button
//4. check and uncheck items by clicking the 'check' button
// try using .submit(), .preventDefault(), toggleClass()


//---------code for adding new items---------->
$(function addItems() {
    $('#js-shopping-list-form').focus().submit(function() {
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val(); 
        //need to clear the input field still
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
    });
});



//cod to check/uncheck items w/ event delegation
$(function toggleItems() {
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).parent().siblings().toggleClass('shopping-item__checked');
    });
});


//---------code to check/uncheck items---------->
// $(function toggleItems() {
//     $('.shopping-item-toggle').click(function(event) {
//         $(this).parent().siblings().toggleClass('shopping-item__checked');
//         //let statusCheck = $(this).parent().siblings().is('.shopping-item__checked');
//         //console.log(statusCheck);
//     });
// });


//-------code to delete items w/ event delegation---------------->
$(function deleteItems() {
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
});






