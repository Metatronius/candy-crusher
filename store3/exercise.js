// Hint: Don't forget to require in your data! Refer to store1 or store2 exercise.js files on how to do this.

//()()()()() ACCESSING DATA ()()()()()\\

// Set a variable equal to Berry Bites data for store3 on January 7.
for (var i = 0; i < store3.length; i++)
{
    if (store3[i]['date'] === '2015-01-07')
    {
        var berryBites = store3[i]['inventory sold']['Berry Bites'];
    }
}

// Console log how many Mint Wafers were sold on January 9th?
for (var i = 0; i < store3.length; i++)
{
    if (store3[i]['date'] === '2015-01-09')
    {
        console.log(store3[i]['inventory sold']['Mint Wafers']['quantity']);
    }
}

// Set a variable equal to how many dates are included in the dataset.
var numberOfDates = store3.length;

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to create an array of dates contained in the sale data.
var dates = []
for (var i = 0; i < store3.length; i++)
{
    dates.concat(store3[i]['date']);
}

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price.
for (var j = 0; j < store3.length; j++)
{
    if (store3[j]['date'] === '2015-01-10')
    {
        var inventoryKeys = store3[j]['inventory sold'].keys;
        var objectCreated = {};
        for (var i = 0; i < inventoryKeys.length; i++)
        {
            objectCreated[inventoryKeys[i]] = store3[j]['inventory sold'][
                inventoryKeys[i]
            ];
        }
    }

    // Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold on all dates.
    var totalSold = 0
    for (var i = 0; i < store3.length; i++)
    {
        totalSold += store3[i]['inventory sold'][
            'Peanut Butter Buttered Peanuts'
        ]['quantity'];
    }

    //()()()()() CHALLENGE ()()()()()\\

    // Determine how much money store3 made on January 9th.
