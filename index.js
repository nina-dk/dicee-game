
//Dice 1

var random1 = Math.floor(Math.random()*6) + 1;

if ( random1 < 6 ) {
  document.querySelector(".img1").setAttribute("src","images/dice"+random1+".png");
}

//Dice 2

var random2 = Math.floor(Math.random()*6) + 1;

if ( random2 < 6 ) {
  document.querySelector(".img2").setAttribute("src","images/dice"+random2+".png");
}

//Outcome

if ( random1 > random2 ) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if ( random2 > random1 ) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerText = "Draw!";
}
