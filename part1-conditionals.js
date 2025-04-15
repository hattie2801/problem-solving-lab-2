

//Grade Checker
//let score = 82
//Print A, B, C, D, or F based on score

let score = 82
if (score >= 90) {
    console.log("A");
}else if (score >= 80 & score <=89){
    console.log("B")
}else if (score >= 70 & score <=79){
    console.log("C")
}else if (score >= 60 & score <=69){
    console.log("D")
}else if (score >= 0 & score <=59){
    console.log("F")
}


//Pizza Quantity Warning
//let quantity = 12
//Print warning if quantity > 10

let quantity = 12
if(quantity > 10){
    console.warn("Warning: There is a maximum of ten pizzas per order. Please adjust your quantity and proceed to checkout.")
}

//Login Simulator
//let password = "letmein"; // or use prompt
//Print "Access granted" or "Access denied"

let correctPassword = "letmein";
let userPassword = "letmein"; prompt ("Enter password here")

if (userPassword = correctPassword) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
