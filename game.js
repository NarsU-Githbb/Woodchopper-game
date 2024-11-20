// variables 

let wood = "1" || "1.";
let axe = "2" || "2.";
let water = "3" || "3.";
//   pelilogiikka on 1>3 2>1 3>2 (ei tarvi muuttaa numeroita sanoiksi)

// Fuctions
let answer; 
let move = prompt("what would you choose? 1. Wood, 2. Axe or 3. Water (please give your answer in choise number)") 
switch(move) {

case "1." || "1":
text = "olet puu!"
break;

case "2." || "2":
text ="very sharp!"
break;

case "3." || "3":
text = "don't forget to drink some water"
break; 

 
default:
text = "error you die";

}

console.log(move)

// Anything else