// variables 

let userScr = 0;
let botScr = 0;



//   pelilogiikka on 1>3 2>1 3>2 (ei tarvi muuttaa numeroita sanoiksi)


 
let userMove = prompt("what would you choose? 1. Wood, 2. Axe or 3. Water (please give your answer in choise number)")
userMove.toLowerCase() 
let botMove = Math.floor(Math.random() * 3) + 1 + "";
switch(userMove) {

case "wood" || "1":
window.alert("olet puu!")
break;

case "axe" || "2":
window.alert("very sharp!")
break;

case "water" || "3":
window.alert("don't forget to drink some water")
break; 

 
default:
window.alert("error you die")

}

gameLogic(userMove, botMove)

// Fuctions

function gameLogic(userMove, botMove) {

"wood" || "1" > "water" || "3";
"axe" || "2" > "wood" || "1";
"water" || "3" > "axe" || "2";
// "1" = "1";
// "2" = "2";
// "3" = "3";

if (userMove > botMove) {
    return userScr = + 1 }
if (botMove > userMove) {
return botScr = + 1
 } else { 
 return (botMove = userMove);  
 }
} 


// Anything else

console.log(userMove);
console.log(botMove)

console.log(userScr)
console.log(botScr)


