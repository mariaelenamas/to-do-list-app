function newItem(){

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    // let text = document.createTextNode(inputValue);
    li.append(inputValue);
    
    if (inputValue === '') {
        alert("Write something ;D");
    } else {
        $('#list').append(li);
    }
    
    // Crossing out an item from the list of items:
    function crossOut() {
       li.toggleClass('strike'); // li.addClass("strike");
    }

    li.on('dblclick', function crossOut() {
		li.toggleClass('.strike');
	});

    li.on('dblclick', () => li.toggleClass('strike'));

    // Adding the delete button "X": 
    let crossOutButton = $('<crossOutButton>X</crossOutButton>')
    // crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    // Adding CLASS DELETE (DISPLAY: NONE) from the css:
    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete');
    }

    // Reordering the items: 
    $('#list').sortable();
};