var button = document.querySelector('.fun2');

var calculator = document.querySelector('#inCon');

var slash = document.querySelector('.slash');

var PI = document.querySelector('.PI');

var modalBtn = document.querySelector('.quest');




function buttonclick() {
	
}


function removeOne() { // delete function
	var screen = document.getElementById('inScr').value; // gets value for screen
	var arrayFromScreen = Array.from(screen); // creates an array from screen value
	arrayFromScreen.pop(); // removes the last inputed value
	var newContent=""; // contains an empty string which holds the remaining value after the last value has been popped
	for(var i=0; i<arrayFromScreen.length;i++){
		newContent += arrayFromScreen[i];	// for loop collects the remaining value and sends it back to 'var newContent'
	}document.getElementById("inScr").value = newContent; // displays the new value on the screen
}


var modal = document.getElementById('myModal');

var closeModal = document.getElementsByClassName('close')[0];


modalBtn.onclick = function() { //when the user clicks on the button, open the modal
	modal.style.display = 'block';
}

closeModal.onclick = function() { //when the user clicks on <span> (x), close the modal
	modal.style.display = 'none';
}

window.onclick = function(event) { //when the user clicks anywhere outside of the modal, close it
	if (event.target == modal) {
		modal.style.display = 'none';
	}
}