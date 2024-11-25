// variables 

let wood = "1" || "1.";
let axe = "2" || "2.";
let water = "3" || "3.";
//   pelilogiikka on 1>3 2>1 3>2 (ei tarvi muuttaa numeroita sanoiksi)

// Fuctions
let answer; 
let userMove = prompt("what would you choose? 1. Wood, 2. Axe or 3. Water (please give your answer in choise number)") 
let botMove = Math.floor(Math.random() * 3) + 1;
switch(userMove, botMove) {

case "1" || "1.":
window.alert("olet puu!")
break;

case "2" || "2.":
window.alert("very sharp!")
break;

case "3" || "3.":
window.alert("don't forget to drink some water")
break; 

 
default:
window.alert("error you die")

}

console.log(userMove)
console.log(botMove)

// Anything else