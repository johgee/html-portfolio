// var randomNumber1 = Math.floor(Math.random() * 6 + 1);
// var randomDiceImage = "dice" + randomNumber1 + ".png";
// var randomImageSource = "images/" + randomDiceImage;
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource); // how come no varialble here?

// var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // and no variable here?

// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Play 1 Wins!";
// } else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Play 2 Wins!";
// } else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }

// Generate two separate random numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create image source paths using those numbers
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Select both <img> elements
var image1 = document.querySelectorAll("img")[0]; //declare and assign the variable
var image2 = document.querySelectorAll("img")[1];

// Set their 'src' attributes to the random images
image1.setAttribute("src", randomImageSource1); //use the variables from ^
image2.setAttribute("src", randomImageSource2);

// Select <h1> element
var title = document.querySelector("h1");

// Compare and update title
if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  title.innerHTML = "Player 2 Wins!";
} else {
  title.innerHTML = "Draw!";
}
