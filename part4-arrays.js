// Problem 1: Favorite Foods

let food = ["Pizza", "Banana Pudding", "Sushi", "Ice Cream", "Pasta"];
food.push("Po-Boys");

console.log(food[0]);
console.log(food[food.length - 1]);
console.log(food);


// Problem 2: Guest List

let guest = ["Alice", "Bill", "Carmen", "Daniel", "Mark", "Shane", "Margo"];
guest.shift();
guest.push("Larry");

console.log(guest);
console.log(guest.length);


//Problem 3: Weekend Tasks

let tasks = ["Laundry", "Groceries", "Coding", "Naps"];

for (let task of tasks) {
   console.log(tasks)
}

for(let i = 0; i < tasks.length; i++){
    console.log(tasks[i]);
}

    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i + 1}. ${tasks[i]}`);
    }
  

    //Problem 4: Reverse It (Manual Reverse)

    let numbers = ["1", "2", "3", "4", "5"];

    console.log(numbers);

    for(let i = numbers.length - 1; i>= 0; i--){
        console.log(numbers[i]);
    }


    //Bonus: Random Picker - I am missing making random a function. I am lost on this one! 
     
    //let lunches =["Chicken", "Burger", "Sushi", "Salad"];

    //let random = Math.floor(Math.random() * lunches.length);

    //console.log(random(lunches))

  
    



