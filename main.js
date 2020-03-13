/******************************************************************************* 
 * Topic 7: Manipulating CSS Class Properties Using JavaScript
*******************************************************************************/

function toggleClass(className){
    document.getElementById("container").classList.toggle(className);
  }

  function upperCase() {
    var input = document.getElementById("fname");
    input.value = input.value.toUpperCase();
}

function adjustPixels(pixels) {
    document.getElementById("textSliderOutput").innerHTML = pixels + ' px';
}

function changeFontSize() {
	var fontSize = document.getElementById("fontSize").value;
    document.getElementById("text").style.fontSize = fontSize + 'px';
    
}

function changePictureWidth() {
    var picWidth = document.getElementById("picWidth").value;
    document.getElementById("myPic").style.width = picWidth + '%'; 
}







/* Accordion Element*/

var accordion = document.querySelectorAll(".accordion");

for(var i = 0; i < accordion.length; i++) {
  var accordionHeader = accordion[i].querySelector(".accordion__header"),
  accordionCurrent = accordion[i];
  
  accordionHeader.addEventListener("click", function(){
    accordionCurrent.classList.toggle("is-active");
  });
}


/* Remove a class from a <div> element: */

function removeStyle() {
    document.getElementById("myDIV").classList.remove("style", "anotherClass", "thirdClass");
}


function clearItems() {
    window.localStorage.clear();
    location.reload();
}


