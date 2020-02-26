const title = document.querySelector(".title");
title.style.color = "#004d4d";


// AppendChild()
function myFunction() {
    var para = document.createElement("P");
    var text = document.createTextNode("Baby porcupines are called “porcupettes.");
    para.appendChild(text);
    document.getElementById("demo").appendChild(para);
  }

// List with AppendChild and InsertBefore()
function addKitchen() {
	var newItem = document.createElement("LI");
    var textnode = document.createTextNode("Cleaning the kitchen");
    newItem.appendChild(textnode);

    var list = document.getElementById("demo2");
    list.insertBefore(newItem, list.childNodes[0]);
}

function addTrash() {
    
    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("Taking out trash");
    newItem.appendChild(textnode);

    var list = document.getElementById("demo2");
    list.insertBefore(newItem, list.childNodes[0]);
    }

// RemoveChild()    
function deleteBagels() {
    var parent = document.getElementById("demo3");
    var child = document.getElementById("bagels");
    parent.removeChild(child);
        
}
    
function deleteEggs() {
    var parent = document.getElementById("demo3");
    var child = document.getElementById("eggs");
    parent.removeChild(child);
        
}

function deleteAvocados() {
    var parent = document.getElementById("demo3");
    var child = document.getElementById("avocados");
    parent.removeChild(child);
        
}

function replaceQuote(){
    var newText = document.createElement("span");
    newText.id = "newSpan";
    var newText_content = document.createTextNode("Deadlines just aren't real to me until I'm staring one in the face.");
    newText.appendChild(newText_content);
    var oldText = document.getElementById("childSpan");
    var parentDiv = oldText.parentNode;
    parentDiv.replaceChild(newText, oldText);
}
