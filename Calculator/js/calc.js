// var button = document.querySelector('.fun2');

var calculator = document.querySelector('#inCon');

var slash = document.querySelector('.slash');

var modalBtn = document.querySelector('.quest');

var closeModal = document.getElementsByClassName('close')[0];

var groupBtn = document.getElementsByClassName('butts');

var currentFnBtn = "fun1";


function buttonclick(e) {
	const targetElem = e.srcElement || e.target;
	const _name = targetElem.name;
	
	const buttonsToChange = Array.from(document.querySelectorAll('[btn-group="'+currentFnBtn+'"]'));
	const currentTagStore = document.querySelector('template[name="'+currentFnBtn+'"]');
	const buttonsTemplateFragment = document.querySelector('template[name="'+_name+'"]').content;
	const buttonSetUpClassMap = {
		fun1_fun2:{
			"slashbtn":"PI",
			"plusbtn":"pow",
			"starbtn":"sqrt",
			"dashbtn":"ln",
			"openParenth":"log",
			"closeParenth":"rnd"
		},
		fun1_fun3:{
			"slashbtn":"cos",
			"plusbtn":"sin",
			"starbtn":"tan",
			"dashbtn":"acos",
			"openParenth":"asin",
			"closeParenth":"atan"
		},
		fun2_fun1:{
			"PI":"slashbtn",
			"pow":"plusbtn",
			"sqrt":"starbtn",
			"ln":"dashbtn",
			"log":"openParenth",
			"rnd":"closeParenth"
		},
		fun2_fun3:{
			"PI":"cos",
			"pow":"sin",
			"sqrt":"tan",
			"ln":"acos",
			"log":"asin",
			"rnd":"atan"
		},
		fun3_fun1:{
			"cos":"slashbtn",
			"sin":"plusbtn",
			"tan":"starbtn",
			"acos":"dashbtn",
			"asin":"openParenth",
			"atan":"closeParenth"
		},
		fun3_fun2:{
			"cos":"PI",
			"sin":"pow",
			"tan":"sqrt",
			"acos":"ln",
			"asin":"log",
			"atan":"rnd"
		}	
	}

	buttonsToChange.forEach(function(button){
		if(button.name === currentFnBtn){
			return;
		}

		const targetName = buttonSetUpClassMap[currentFnBtn+"_"+_name][button.name];
		if(targetName){
			button.parentNode.replaceChild(buttonsTemplateFragment.getElementById(targetName).cloneNode(true), button)
			if(currentFnBtn === "fun1"){
				currentTagStore.content.appendChild(button)
			}
			//button.style.background = window.getComputedStyle(targetElem).background;
		}
	})
	document.getElementsByName(currentFnBtn)[0].disabled = false;
	targetElem.disabled = true;
	currentFnBtn = _name;
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


modalBtn.onclick = function(e) { //when the user clicks on the button, open the modal
	var modal = document.getElementById('myModal');
	modal.style.display = 'block';
	e.stopPropagation()
}

closeModal.onclick = function(e) { //when the user clicks on <span> (x), close the modal
	var modal = document.getElementById('myModal');
	modal.style.display = 'none';
	e.stopPropagation()
}

var coll = Array.from(document.getElementsByClassName("collapsible"));

coll.forEach(function(col){
  col.addEventListener("click", function(e) {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
	} 
	e.stopPropagation()
  });
})

document.body.onclick = function(event) { //when the user clicks anywhere outside of the modal, close it
	var modal = document.getElementById('myModal');
	if(event.target ===  modalBtn
		|| event.target.className === "collapsible"){
		return;
	}

	if (event.target !== modal 
			&& (!modal.contains(event.target))) {
		modal.style.display = 'none';
	}
}
