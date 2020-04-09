//save user's input into a  Local Storge:
let input = document.querySelectorAll('#zipCode');
const apiKey = "6b8ec463950118c27a221c2692a1d5f9"

function getCurrentWeather(){
   //checks if the Zip code is null.. if so, exit the function
   if (document.getElementById('city').value == "") {
      return;
   }
   var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + document.getElementById('city').value + '&appid=6b8ec463950118c27a221c2692a1d5f9&units=metric';
   // Set up our HTTP request
   let request = new XMLHttpRequest();
   request.open('GET', apiUrl);
   request.send();
   request.onload =  function () {
      if (request.status === 400) {
         alert("Zip Not Found");
         return;
      }
   let data = JSON.parse(request.responseText);

   let weatherIcon = document.getElementById('icon');
   weatherIcon.src = 'icons/' + data.weather[0].icon + '.png';
   
   document.getElementById("feelsLike").innerHTML = data.main.feels_like + "&deg;C"; 
   document.getElementById('city_temp').innerHTML= data.name;   
   document.getElementById('description').innerHTML= data.weather[0].main;   
   document.getElementById('todaytemp').innerHTML= data.main.temp + " &deg;C"; 
   document.getElementById('humidity').innerHTML= data.main.humidity; 
   document.getElementById('pressure').innerHTML= data.main.pressure; 
   document.getElementById('windspeed').innerHTML= data.wind.speed + " km/h"; 
   
   var tempC = data.main.temp;
   var speed = data.wind.speed;
   var chilly = (35.74 + (.6215 * tempC) - (35.75 * (Math.pow(speed,.16))) + ((.4275 * tempC) * (Math.pow(speed,.16))));
   var windChill = Math.round(chilly*100)/100;
   
   document.getElementById('chill_text').innerHTML = windChill + " &deg;C"; 
    
   var icon = document.getElementById("icon");
   icon.classList.remove("clear");
   icon.classList.remove("clouds");
   icon.classList.remove("snow");
   icon.classList.remove("rain");
   icon.classList.remove("thunderstorm");
   icon.classList.remove("drizzle");
   icon.classList.remove("mist");

   if (data.weather[0].main == "Clear"){
      var icon = document.getElementById("icon");
      icon.classList.add("clear")
   }
   else if (data.weather[0].main == "Clouds"){
      var icon = document.getElementById("icon");
      icon.classList.add("clouds")
      
   }
   else if (data.weather[0].main == "Snow"){
      var icon = document.getElementById("icon");
      icon.classList.add("snow");
   }
   else if (data.weather[0].main == "Rain"){
      var icon = document.getElementById("icon");
      icon.classList.add("rain");
   }
   else if (data.weather[0].main == "Thunderstorm"){
      var icon = document.getElementById("icon");
      icon.classList.add("thunderstorm");
   }
   else if (data.weather[0].main == "Drizzle"){
      var icon = document.getElementById("icon");
      icon.classList.add("rain");
   }

   else if (data.weather[0].main == "Mist"){
      var icon = document.getElementById("icon");
      icon.classList.add("mist");
   }
   //saves the ZIP in local storage
   localStorage.setItem('zipCode', document.getElementById('city').value);
   
}}

if (typeof(Storage) !== "undefined") {
   if (localStorage.getItem('zipCode') !== null) {
    document.getElementById('city').value = localStorage.getItem('zipCode');
   }
}
