var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable.
var bananaDates = store2['sales dates']['Banana Bunches'];

// What built-in array property would you use to determine how many sale dates there for store2's 'Banana Bunches'?
console.log(bananaDates.length);

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Why or why not?
var mintPrice = store2['inventory prices']['Mint Wafers'];

// Set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. Use pop to remove one of the sale dates for store2's Caramel Twists.
var peanutButterDates = store2['sales dates']['Peanut Butter Buttered Peanuts'];
Array.pop(store2['sales dates']['Carmel Twists']);
/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
var obj = {}
var last = "";
for (var i = 0; i < store2['sales dates']['Carmel Twists'].length; i++){
  if (last === store2['sales dates']['Carmel Twists'][i]){
    obj[last]++;
  }
  else {
    last = store2['sales dates']['Carmel Twists'][i];
    obj += {last : 1};
  }
}

// Iterate over store2's sale dates data to find which day had the most total number of sales. How did you calculate this?
for (var i in store2['sales dates']){
  
}

/////////// CHALLENGE ///////////

// Create an object containing the amounts that store2 made by selling each type of candy.
