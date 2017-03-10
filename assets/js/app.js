// message in the console
console.log("Hi there, welcome to the JavaScript console!");

// initialize the application
var app = new Object();

app.shakePokeball = function shakePokeball() {
  // code BELOW this line for challenge #1 -->
  var shake = document.getElementById("pokeball");
  shake.className = "shake";
} // <-- code ABOVE this line for challenge #1

app.setName = function setName() {
  // code BELOW this line for challenge #2 -->
  var userName = prompt("Please enter your name");
  var firstName = document.getElementById("first-name");
  firstName.innerHTML = userName;

} // <-- code ABOVE this line for challenge #2

app.setWebsite = function setWebsite() {
  // code BELOW this line for challenge #3 & bonus -->
  /*var userWebsite = prompt("Which is your favorite website");
  var favWebsite = document.getElementById("favorite-website");
  favWebsite.innerHTML = userWebsite;*/

  var userWebsite = prompt('Which is your favorite website');
  var favWebsite = document.getElementById('favorite-website');
  favWebsite.innerHTML = userWebsite+' <a href="http://'+userWebsite+'.com" target="_blank">'+'Find out here!'+'</a>';

} // <-- code ABOVE this line for challenge #3 & bonus
