
function newItem(){

	// add new element
	let li = $('<li></li>')
	let inputValue= $('#input').val();
	li.append(inputValue);

   if (inputValue === ''){
     alert('You must write something!');
   } else {
     let list = $('#list');
     list.append(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		li.toggleClass("strike");
 	}
	
 	li.on("dblclick",crossOut);

	
 //3(i). Add delete button "X"
	
   let crossOutButton = $('<crossOutbutton></crossOutbutton>');
 	crossOutButton.append(document.createTextNode("X"));
 	li.append(crossOutButton);
	
//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
	
	function deleteListItem(){
		li.addClass("delete")
	}
	
	
 //4. Reordering the items
   $('#list').sortable();
	
}
