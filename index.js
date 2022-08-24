
var number1=Math.floor((Math.random()*6)+1);
var number2=Math.floor((Math.random()*6)+1);
var randDiceImage1="images/dice"+number1+".png";
var randDiceImage2="images/dice"+number2+".png";
document.querySelectorAll("img")[0].setAttribute("src", randDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randDiceImage2);

if(number1>number2)
{
    document.querySelector("h1").innerHTML="🚩player 1 wins!";
}
else if(number2>number1)
{
    document.querySelector("h1").innerHTML="player 2 wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML="🚩Draw🚩";
}
