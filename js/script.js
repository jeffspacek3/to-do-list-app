
function newItem(){

	// add new element
	let li = $('<li></li>')
	let inputValue= $('#input').val();
	li.append(inputValue);

   if (inputValue === ''){
     alert('You must write something!');
   } else {
     let list = $('#list');
     list.appendChild(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		li.classList.toggle("strike");
 	}
 	li.on("dblclick",crossOut);

 // Add delete button "X"
	
   let crossOutButton = $('<button></button>');
 	crossOutButton.append(document.createTextNode("X"));
 	li.append(crossOutButton);

 	crossOutButton.on("click", deleteListItem);
	
 // Adding CLASS DELETE (DISPLAY: NONE) from the css:
	
   function deleteListItem(){
 		li.classList.add('delete')
 	}
	
 // Reordering the items
	
   $('#list').sortable();
	
}
