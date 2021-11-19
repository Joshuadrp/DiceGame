var photos = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];


var n1 = Math.floor(Math.random() * 6);
var randomImg1 = "images/" + photos[n1];
document.querySelector(".img1").setAttribute("src", randomImg1);

var n2 = Math.floor(Math.random() * 6);
var randomImg2 = "images/" + photos[n2];
document.querySelector(".img2").setAttribute("src", randomImg2);

if (n1 > n2) {
  document.querySelector("h1").textContent = "PLAYER 1 WINS! ";
} else if (n2 > n1) {
  document.querySelector("h1").textContent = "PLAYER 2 WINS! ";
} else {
  document.querySelector("h1").textContent = "DRAW! ";
}

function refreshPage() {
  window.location.reload();
}
