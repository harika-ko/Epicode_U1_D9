// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/


function giveMeRandom(n) {
    let newArray = []
    for (i = 0; i < n; i++)
        newArray.push(Math.floor(Math.random() * 10))
    return newArray
}

function checkArray(newArray) {
    let sum = 0
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] > 5) {
            console.log("The number", newArray[i], "is greater than 5")
            sum = sum + newArray[i]
        } else if (newArray[i] === 5) {
            console.log("The number", newArray[i], "is equal to 5")
        } else {
            console.log("The number", newArray[i], "is less than 5")
        }
    }
    console.log("The sum of all the numbers bigger than 5 are", sum)
}

checkArray(giveMeRandom(9))

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

let shoppingCart = [
    { price: 55, name: "Soap", id: 010, quantity: 5 },
    { price: 240, name: "Television", id: 213, quantity: 2 },
    { price: 90, name: "Headphones", id: 549, quantity: 4 }
]

function shoppingCartTotal() {
    let total = 0
    for (i = 0; i < shoppingCart.length; i++) {
        total = total + (shoppingCart[i].price * shoppingCart[i].quantity)
    }
    console.log("The total due to the shop is", total)
}

shoppingCartTotal()

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

let Array1 = [{ price: 10, name: "Toothbrush", id: 708, quantity: 8 }]

function addToShoppingCart() {
    shoppingCart.push(Array1)
    console.log("The total items in the shopping cart are", shoppingCart.length)
}

addToShoppingCart()

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

function maxShoppingCart(shoppingCart) {
    let max = shoppingCart[0].price
    for (i = 1; i < shoppingCart.length; i++) {
        if (shoppingCart[i].price > max) {
            max = shoppingCart[i].price
        }
    }
    return max
}

console.log("The most expensive item costs", maxShoppingCart(shoppingCart))

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart(shoppingCart) {
    for (i = 0; i < shoppingCart.length; i++) {
        let lastItem = shoppingCart[shoppingCart.length - 1]
        return lastItem
    }

}

console.log("The last item in the array is", latestShoppingCart(shoppingCart))

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

let arr = [32, 44, 13, "Hello", 76, "Epicode", 74]
function average(arr) {
    let sum = 0
    let avg = 0
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum = sum + arr[i]
            avg = sum / 2
        }
    }
    return avg
}

console.log(average(arr))

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

let strarr = ["Hello", "Epicode", "Students", "Welcome", "to", "Javascript"]

function longest(strarr) {
    let max = strarr[0].length
    let word
    for (let i = 1; i < strarr.length; i++) {
        if (strarr[i].length > max) {
            max = strarr[i].length
            word = strarr[i]
        }
    }
    console.log("The maximum string length in the array is", max, "and the word is", word)
}

longest(strarr)

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

function emailContent(email) {
    if (email.includes("SPAM") || email.includes("SCAM")) {
        return false
    } else {
        return true
    }
}

console.log(emailContent("this is SCAM "))

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

function numberOfDays(date) {
    let today = new Date();
    let difference = today - date;
    return Math.floor(difference / (1000 * 60 * 60 * 24));
};

console.log(numberOfDays(new Date("2022-01-18")));


/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
