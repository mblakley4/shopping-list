//1. use 'this'
//2. dynamically add and remove HTML elements and apply styles
//3. enter items  by adding text and hitting 'return' or 'add item' button
//4. check and uncheck items by clicking the 'check' button
//5. permanently remove items fro the list
// try using .submit(), .preventDefault(), toggleClass(), and closest


//---------code for adding new items---------->
// $(function() {
//     $('#js-shoppping-list-form').on("submit" "keydown===13", event => {
//         event.preventDefault();
//         let newItem = $('#shopping-list-entry').val();
//         console.
//     })
    //$('ul').append(
      //  <p>test</p>
        //<div></div>
        // <li>
        // <span class="shopping-item">apples</span>
        // <div class="shopping-item-controls">
        //   <button class="shopping-item-toggle">
        //     <span class="button-label">check</span>
        //   </button>
        //   <button class="shopping-item-delete">
        //     <span class="button-label">delete</span>
        //   </button>
        // </div>
        // </li>
//     );
// })




//---------code to check/uncheck items---------->




//---------code to delete items---------->
$(function deleteItems() {
    $('.shopping-item-delete').click(function(event) {
        this.closest("li").remove();
        console.log("delete was clicked");
    });
});


