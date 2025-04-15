//Dog Age Converter

function dogToHumanYears(dogAge) {
    let humanYears;
    
    if (dogAge <= 0) {
      humanYears = 0;
    } else if (dogAge === 1) {
      humanYears === 15;
    } else if (dogAge === 2) {
      humanYears === 24;
    } else {
      humanYears = 24 + (dogAge - 2) * 5;
    }
  
    return humanYears;
  }
  console.log(dogToHumanYears(1));
  console.log(dogToHumanYears(2));
  console.log(dogToHumanYears(5));



//Tip Calculator

function calculateTip(total, percentage) {
    let tip= total * (percentage / 100); 
        return tip;
    
}
//Examples
console.log(calculateTip(100, 15))
console.log(calculateTip(75, 20))
console.log(calculateTip(80, 10))
console.log(calculateTip(95, 10))


//Even or Odd

function checkEvenOdd(num) {
    if (num % 2 == 0) {
      console.log(num + " is even");
    } else {
      console.log(num + " is odd");
    }
  }
  //Examples
  checkEvenOdd(347);
  checkEvenOdd(218);
  checkEvenOdd(410);
  checkEvenOdd(743);


