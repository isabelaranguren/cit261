/** Get the button to work when user enters value */
function drawButton() {
  var getBttn = document.getElementById("submitBtn");

  getBttn.addEventListener("click", event => {
    var model = document.getElementById("model").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    event.preventDefault();
    // Checks if user filled all fields 
    if (brand === "" || color === "" || model === "") {
      alert("Please enter all the values");
    } 
    else {
      getBttn.disabled = "true";
      getBttn.innerHTML = "Results";
      Summary(model, color, brand);
    }
  });
}
drawButton();

// Declares and object and it's properties
function Summary(model, color, brand) {
  function phone(model, color, brand) {
    this.model = model;
    this.color = color;
    this.brand = brand;
  }

  /** Inherits the phones properties and declares two functions */
  function add_facts(model, color, brand) {
    phone.call(this, model, color, brand);
    this.AveragePrice = "$600-$999";
    this.android = function() {
      alert("Did you know? Android's green robot logo was inspired By Bathroom Sign");
    };
    this.apple = function() {
      alert("Did you know? The name iPod was inspired by the movie 2001: A Space Odyssey");
    };
  }

  // Creating new Object
  var smartphone = new phone(brand, model, color);
  var add_factsObj = new add_facts(brand, model, color);

  // Calls the Objects Properties
  document.getElementById("results").style.display = "block";
  document.getElementById("object").innerHTML = JSON.stringify(smartphone);
  document.getElementById("otherObject").innerHTML =
    JSON.stringify(add_factsObj);

   // Displays he two methods 
   document.getElementById("androidFact").addEventListener("click", event => {
    event.preventDefault();
    add_factsObj.android();
  });

  document.getElementById("appleFact").addEventListener("click", event => {
    event.preventDefault();
    add_factsObj.apple();
  });
}

/* Restarts the program when user clicks the button */
function restart() {
  var restart = document.getElementById("restartBtn");
  restart.addEventListener("click", () => {});
} 