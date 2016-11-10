// Remember what goes here?

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// What is the cost of 'Dark Chocolate Crunchies' from store4?
store4['Dark Chocolate Crunchies']['cost'];

// Set the total number of 'Berry Bites' sold by store4 to a variable.
var total = store4['Berry Bites']['sold on'].length

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candies that cost more than $2.00
function costMoreThan2()
{
    var returnable = [];
    for (var i in store4)
    {
        if (i['cost'] > 4)
        {
            returnable += i
        }
    }
    return returnable;
}

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loop()
{
    var key = store4.keys();
    var returnable = {};
    for (var i = 0; i < key.length; i++)
    {
        returnable[key[i]] = store4[key[i]['cost']];
    }
    return returnable;
}

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? (Each date represents 1 item sold.)


// Determine how much money did store3 make on January 9th.


// Calculate how much store4 made from selling Dark Chocolate Crunchies across all the days.
