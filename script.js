function newItem(){

    let li = $('<li></li>');
    let inputValue = $('input').val();
    // let text = document.createTextNode(inputValue);
    list.append(text);
    
    if (inputValue === '') {
        alert("Write something ;D");
    } else {
        $('#list').append(li);
    }
    
    // Crossing out an item from the list of items:
    function crossOut() {
    li.toggleCalss("strike"); // li.addClass("strike");
    }
    
    // Adding the delete button "X": 
    let crossOutButton = $("crossOutButton"); // To check
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    // Adding CLASS DELETE (DISPLAY: NONE) from the css:
    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
    li.addList.add("delete")
    }

    // Reordering the items: 
    $('#list').sortable();
    
}