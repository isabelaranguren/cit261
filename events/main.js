document.getElementById('button1').addEventListener('click', displayMessage);  

function displayMessage(){
  alert('Hello World!');
}

function getKeyCode(event){
  var pressedKeyCode = event.which || event.keyCode;
  var message = String.fromCharCode(pressedKeyCode) + " => " + pressedKeyCode;
  document.getElementById("keycodeResult").innerText = message;
}

function cleanUpText(input){
  input.value="";
}


// Transition event
const el = document.querySelector('.transition');

el.addEventListener('transitionrun', function() {
});

el.addEventListener('transitionstart', function() {
});

el.addEventListener('transitioncancel', function() {
}); 

el.addEventListener('transitionend', function() {
});

var x = document.getElementById("myDIV");

// Start the animation with JavaScript
function myFunction() {
  x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
  x.style.animation = "mymove 4s 2";     // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "<br>" + "The animation" +"<br>" + " has started";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "<br>" + "The animation" +"<br>" + "was played again";
  this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
  this.innerHTML = "<br>" + "The animation" +"<br>" + " has finihed";
  this.style.backgroundColor = "lightgray";
}

//On touchsstart
function mobile() {
    document.getElementById("demo").innerHTML = "Hello World";
  }


//  Onload 

function load() {
    alert("Page is loaded");
  }

  // MouseDown and mouseUp
  function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "green";
  }