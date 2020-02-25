var counter = 1;
var container = document.getElementById("person-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var request = new XMLHttpRequest();
    // downloads data
    request.open('GET', 'https://isabelaranguren.github.io/AJAX/example-' + counter + '.json');
    request.onload = function() {
    var data = JSON.parse(request.responseText);
    drawHTML(data);
};
request.send();
counter++
 // hides button 
if (counter > 2) {
    btn.classList.add('hide-me');
}
});

function drawHTML(newData) {
    var htmlString = "";

    for (i = 0; i <newData.length; i++) {
        htmlString += "<p>" + newData[i].name + " is a " + newData[i].gender + " that likes to eat "; 
        
        for (ii = 0; ii < newData[i].foods.likes.length; ii++) {
            if (ii == 0) {
              htmlString += newData[i].foods.likes[ii];
            } 
            else {
              htmlString += " and " + newData[i].foods.likes[ii];
            }
          }
          htmlString += ' and dislikes ';
        for (ii = 0; ii < newData[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += newData[i].foods.dislikes[ii];
            } 
            else {
              htmlString += " and " + newData[i].foods.dislikes[ii];
            }
          }
          htmlString += '.</p>';
        }
    container.insertAdjacentHTML("beforeend", htmlString);

}



