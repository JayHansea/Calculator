// var button = document.querySelector('.fun2');

var calculator = document.querySelector('#inCon');

var slash = document.querySelector('.slash');

var modalBtn = document.querySelector('.quest');

var groupBtn = document.getElementsByClassName('butts');


function buttonclick() {
	var input = document.createElement('input');
	var PI = Math.PI;
	input.className = 'but PI';
	input.value = PI;
	console.log(input);
	slash.value = 'pi';
	slash.style.background = 'linear-gradient(#2255ff, #99c2ff, #2255ff)';
	// if (groupBtn[1].children[3].value == '/') {
			// groupBtn[1].children[3].value = input;
	// };

	var input1 = document.createElement('input');
	var POW = Math.pow;
	input1.className = 'but pow';
	input1.value = POW;
	console.log(input1);
	plus.value = "POW";
	plus.style.background = 'linear-gradient(#2255ff, #99c2ff, #2255ff)';
	// if (groupBtn[1].children[3].value == '/') {
			// groupBtn[1].children[3].value = input;
	// };
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


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}