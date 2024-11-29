// variables 

let userScr = 0;
let botScr = 0;



//   pelilogiikka on 1>3 2>1 3>2 (ei tarvi muuttaa numeroita sanoiksi)

let gameStart = alert("Let's play woodchoppin' (the game of rock-paper-scissors, but lame!) Rules: 1. Axe chops trees, but gets rusty in the water. 2. Wood consumes water, but won't stand a change in a fight against the axe 3.Water will make axe dull in the long run, but can't escape the thirst of the woods")
 
let userMove = prompt("what would you choose? 1. Wood, 2. Axe or 3. Water (please give your answer in choice number)")
let botMove = Math.floor(Math.random() * 3) + 1 + "";

switch(userMove) {

case "1":
window.alert("olet puu!")
break;

case "2":
window.alert("very sharp!")
break;

case "3":
window.alert("don't forget to drink some water")
break; 

 
default:
window.alert("ERROR U DIE TRY AGAIN")

}


gameLogic()

// Fuctions

function gameLogic() {


if (userMove == "1" && botMove == "3") {
window.alert("You win! Your wood consumes the water. Here's a point for good luck!");
return userScr = + 1 }

if (userMove == "2" && botMove == "1") {
    window.alert("You win! Your Axe chopped the trees. Here's a point for good luck!");
return userScr = + 1 }

if (userMove == "3" && botMove == "2") {
    window.alert("You win! Your water made the axe poopy. Here's a point for good luck!");
return userScr = + 1 }

if (botMove == "1" && userMove == "3") {
    window.alert("You lose! Your water couldn't escape the thirst of the woods. Point for the computer master race!");
return botScr = + 1 }

if (botMove == "2" && userMove == "1") {
    window.alert("You lose! Your wood will make some excellent campfires for sure (thanks to axe). Point for the computer master race!");
return botScr = + 1 }

if (botMove == "3" && userMove == "2") {
    window.alert("You lose! You axe is all pooped thanks to the water! Point for the computer master race!");
return botScr = + 1 }

 else { 
 return window.alert("draw! No points to be shared");  
 }
} 


// Anything else

console.log(userMove);
console.log(botMove)

console.log(userScr)
console.log(botScr)


p