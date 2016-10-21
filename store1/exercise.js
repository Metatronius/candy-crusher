var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// How would you access the value '4.63' from store1?
console.log(store1['2015-01-08'][0][1]);

// How would you access how many 'Mint Wafers' were sold on January 6th?
console.log(store1['2015-01-06'][0][1]);

// Produce an array of the date keys in store1's data.
console.log(Object.keys(store1));

// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
// for (var days in store1){
//   for (var entries = 0; entries < store1[days].length; entries ++){
//     console.log(store1[days][entries][0]);
//   }
// }
var arr = [];
for (var entries = 0; entries < store1['2015-01-08'].length; entries++) {

    arr = arr.concat(store1['2015-01-08'][entries][0]);
}
console.log(arr);
// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
var track = 0;
for (var entries = 0; entries < store1['2015-01-10'].length; entries++) {
    track += store1['2015-01-10'][entries][2];
}
console.log(track);

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
console.log(Object.keys(store1));

// Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.
var arr = Object.keys(store1);
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(store1[arr[i]]);
}

// Use a loop to calculate the total number of candies sold at store1.
var track = 0;
var arr = Object.keys(store1);
for (var i = 0; i < arr.length; i++) {
    for (var entries = 0; entries < store1[arr[i]].length; entries++) {
        track += store1[arr[i]][entries][2];
    }
}
console.log(track);
// In the previous exercise, where did you have to initialize the counter variable? Why?

/* outside of the for loops because otherwise it would re-initialize every iteration.*/

// *********** CHALLENGE *********** \\

// Create an array of the candies sold by store1 on January 10th.
