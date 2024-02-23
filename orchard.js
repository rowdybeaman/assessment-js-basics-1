///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0
// fuju 15 acres picked
// gala 26 acres picked
// pink 22 acres picked
// total should log as 63

for (let i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
console.log(totalAcres);

// NOTES: set the totalAcres to 0 so so i could use it to count 
// when doing the for loop set i=0 as well, then i picked fujiAcers for the .length command but either of the other orchards would have worked as well. 
// since totalAcres is just a sum, i added each index together as it was looping, by delcaring fujiacres[i] + the others in the same manner 
// console log was just what totalAcres would be after the loop ran

///////////////////// PROBLEM 2 ////////////////////////

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

totalAcres 
// NOTES: totalAchres/7 would get average = 9
// created new variable set it equal to total acres above and divided by how many days in the week (7)

let averageDailyAcres = totalAcres/7
console.log(averageDailyAcres)


/////////////// PROBLEM 3//////////////////

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// NOTES: acresLeft/averageDailyAcres (174/9) = 19.33. I dont know how to express .33 days so im going to count that as a whole day so 19.33 rounded up to 20
//  while loop needs to loop as long as there are acres left, so acresleft needs to be greater than 0
// since the answer we are looking for is how many days itll take we will need to add 1 to days each time it loops, so days += 1
// then we need to actually subtract daily average from how many acres are left so it doesnt just count days forever, but we need to do it every time it loops. so i used the -= so it would subtract each time the loop is run
// then console log the answer we are looking for which we already noted would be how many days (rounded up to the nearest whole number) 

while ( acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}
console.log(days)

/////////// PROBLEM 4 ///////////////////

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// NOTES: Each day needs to be multiplied by 6.5 then pushed to the new arrays provided
// const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
// const galaAcres = [5, 2, 4, 3, 6, 2, 4]
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4]
// i will then need to loop each index * 6.5 

// i first started by just focusing on fujiacres rather than all at once. 


let fujiTons = []
let galaTons = []
let pinkTons = []

// set up the for loop to run for the length of the array, then wanted to add the numbers to the new array fujiTons, so i used a push command, from there i multiplied fujiacres[i] by 6.5


for ( let i = 0; i < fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i] * 6.5)
    galaTons.push(galaAcres[i] * 6.5)
    pinkTons.push(pinkAcres[i] * 6.5)
}
console.log(fujiTons, galaTons, pinkTons)

// the hints actually confused me, i spent more time on this problem than any other trying to use the slice command but couldnt get it to work so i restarted and tried my own method

// answer for future use:
// fujiTons = [13, 19.5, 19.5, 13, 13, 13, 6.5]
// galaTons = [32.5, 13, 26, 19.5, 39, 13, 26]
// pinkTons = [6.5, 32.5,   26, 13,  6.5, 32.5, 26]

////////////// PROBLEM 5 ///////////////

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// from a previous problem we know 63 total acres were picked, so i just created a new variable for each called totalsomethingAcres
// fuju 15 acres picked
// gala 26 acres picked
// pink 22 acres picked

const totalFujiAcres = 15
const totalGalaAcres = 26
const totalPinkAcres = 22

let fujiPounds = totalFujiAcres * 2000
let galaPounds = totalGalaAcres * 2000
let pinkPounds = totalPinkAcres * 2000

console.log(fujiPounds, galaPounds, pinkPounds)

//// the way i did this is probably not the way you are looking for but since the info was already available to me i figured id use it, id be happy to redo it if nessessary. 

//////////////// PROBLEM 6////////////////

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// NOTES: 
// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55

let fujiProfit = fujiPrice * fujiPounds
let galaProfit = galaPrice * galaPounds
let pinkProfit = pinkPrice * pinkPounds

console.log(fujiProfit, galaProfit, pinkProfit)

////////////// PROBLEM 7 ////////////////

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)
