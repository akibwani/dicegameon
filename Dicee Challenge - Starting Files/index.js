var randomnumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceimage = "dice" + randomnumber1 + ".png";
var randomImageSource = "images/" + randomDiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomnumber2 = Math.floor (Math.random()* 6 )+1;
var randomImageSource2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="player1 wins ";
}
else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML= "player2 wins ";
}
else{
    document.querySelector("h1").innerHTML= "it's a draw ";
}