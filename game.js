let gameIntro = alert("Let's play Woodchoppin' (the game of rock-paper-scissors on testosterones!)")
let gameRules = alert("Rules: 1. Axe chops trees, but gets rusty in the water. 2. Wood consumes water, but won't stand a change in a fight against the axe 3.Water will make axe dull in the long run, but can't escape the thirst of the woods")
let userScr = 0 
let botScr = 0

while (userScr < 3 && botScr < 3) { 

userMove = prompt("which will you choose? Wood (then press 1)? Axe (then press 2)? or Water (press 3) (please give your answer in choice number without period)");
botMove = Math.floor(Math.random() * 3) + 1 + "";


switch(userMove) {

case "1":
window.alert("Logs am I right!?!")
break

case "2":
window.alert("Very sharp!")
break

case "3":
window.alert("Never forget to drink some water!")
break 

default:
window.alert("ERROR WRONG INPUT YOUR NOT A GOOD SPORT NOW U DIE")
window.location.reload(true)

}

if (userMove == "1" && botMove == "3") {
window.alert("You win! Your wood consumes all the water. Here's a point for a little thirsty baby sapling like yourself!");
userScr = userScr  + 1 }

else if (userMove == "2" && botMove == "1") {
    window.alert("You win! Your Axe chopped all the trees. Here's a point for being so brutal & edgy!");
userScr = userScr + 1 }

else if (userMove == "3" && botMove == "2") {
    window.alert("You win! Your water made the axe poopy. Here's a point for picking the boring choice!");
userScr= userScr + 1 }

else if (botMove == "1" && userMove == "3") {
    window.alert("You lose! Your pathetic water couldn't even escape the thirst of the woods. Point for the computer master race (computers are scared of your water, but also think you're very boring)!");
botScr = botScr + 1 }

else if (botMove == "2" && userMove == "1") {
    window.alert("You lose! Your wood will make some excellent campfires for sure. Point for the computer master race (they think computers might be more accepted if they were made out of wood too)!");
botScr = botScr + 1 }

else if (botMove == "3" && userMove == "2") {
    window.alert("You lose! Your axe is all pooped thanks to the water! Point for the computer master race (don't hit me says the computer)!");
botScr = botScr + 1 }

 else if (botMove == "2" && userMove == "2") { 
 window.alert("Draw! These axes banging together will make any woodchopper sad.");
 }
 else if (botMove == "1" && userMove == "1") { 
    window.alert("Draw! The Tree is now branching like some bootleg version of Github (yuck no points, because that's plagiarism).");
    }
    else if (botMove == "3" && userMove == "3") { 
        window.alert("Draw! Contestants drowned & that's boring!");
        }        
        window.alert(`Scores: You - ${userScr}/3 | Bot - ${botScr}/3`)  
    }
    

if(userScr === 3) {
    window.alert("Congrats! You win & are ready for the Woodchoppin' job market!");
    window.location.reload(true)
    }
   
    if(botScr === 3) {
    window.alert("What a Loser! Try harder next time you stick-snapping bozo!");
     window.location.reload(true)
    }


