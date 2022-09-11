var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice 1 to 6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice 1 to 6

document.getElementById("img1").src = randomDiceImage;
document.getElementById("img2").src = randomDiceImage2;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
