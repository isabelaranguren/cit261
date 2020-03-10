// Changes the color of the box 
var container = document.querySelector("#container");
var zeros = "0000000";
container.addEventListener("click", changeColor, false);

function changeColor(e) {
    var color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var colorLength = color.length;

    if (colorLength < 7) {
      color += zeros.substring(0, zeros.length - colorLength);
    }
    container.style.backgroundColor = color;
}

// Animation 
var element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);

element.className = "slidein";

function listener(event) {
  var l = document.createElement("li");
  switch(event.type) {
    case "animationstart":
      l.innerHTML = "They force the ants to climb trees, then convulse and fall into the cool, moist soil below, where fungi thrive.";
      break;
    case "animationend":
      l.innerHTML = "Once there, the fungus waits until exactly solar noon to force the ant to bite a leaf and kill it. ";
      break;
  }
  document.getElementById("output").appendChild(l);
}

// Transform

function getcss3prop(cssprop) {
  var css3vendors = ['', '-moz-', '-webkit-', '-o-', '-ms-', '-khtml-']
  var root = document.documentElement

  function camelCase(str) {
    return str.replace(/\-([a-z])/gi, function(match, p1) { // p1 references submatch in parentheses
      return p1.toUpperCase() // convert first letter after "-" to uppercase
    })
  }
  for (var i = 0; i < css3vendors.length; i++) {
    var css3propcamel = camelCase(css3vendors[i] + cssprop)
    if (css3propcamel.substr(0, 2) == 'Ms') // if property starts with 'Ms'
      css3propcamel = 'm' + css3propcamel.substr(1) // Convert 'M' to lowercase
    if (css3propcamel in root.style)
      return css3propcamel
  }
  return undefined
}

var transitionDelay = getcss3prop('transition-delay')

var boxes = document.querySelectorAll('.boxes')
if (transitionDelay) {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style[transitionDelay] = 0.5 * i + 's'
  }
}