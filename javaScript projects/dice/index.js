var randomNumber1 = Math.floor(Math.random() *6) + 1;
var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource = "image/" +  randomDiceImage;
var randomImageSource2 = "image/" + randomNumber2;



var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);





var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src"), randomImageSource2;