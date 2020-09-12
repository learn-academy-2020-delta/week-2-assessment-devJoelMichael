// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

// create a function that takes a number 
const threeMe = (num) => {
    if(num % 3 === 0) {
// see if this number is divisible by three or not (if statment)
        return `${ num } is divisible by three`
    } else {
// if it is not return something that lets them know
        return `${ num } is NOT divisible by three`
    }
}
console.log(threeMe(num1))
console.log(threeMe(num2))
console.log(threeMe(num3))


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capNouns = (arr) => {
    //create a variable to split array
    //create a new empty array for the new array to be pushed into
    var nounsNowCap = []
//iterate through that array using and capitalize the first letter in every word
    for(let i = 0; i < arr.length; i++) {
        nounsNowCap.push(randomNouns[i].charAt(0).toUpperCase()+ randomNouns[i].slice(1))
    }
    //return the newly capitalized words into a new array because you don't want to modify original data.
    return nounsNowCap
}
console.log(capNouns(randomNouns))



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

// Create a function that finds only numbers
const onlyNums = (arr) => {
// return only numbers, remember typeof will help here
    return arr.filter(value => typeof value === 'number')
}
// again do not forget to run mixedDataArray inside of your function
console.log(onlyNums(mixedDataArray))


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

// Make a function that takes a string and finds the index of the first vowel.
const findVowel = (string) => {
// figure out a way to seperate the word into just letters in the array
    let word = string.split("")
// then search through the letters till you hit your first vowel
    let getThemVowels = word.filter(vowel => vowel === "a" || vowel === "e" || vowel  === "i" || vowel  === "o" || vowel  === "u") 
    // create an array that stores the vowel 
    let firstVowelInString = getThemVowels[0]
    // make sure that it finds the index of the vowel and does not return just the vowel
    let indexOfVowel = string.indexOf(firstVowelInString)
    return indexOfVowel
}
console.log(findVowel(vowelTester1))
console.log(findVowel(vowelTester2))


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, operator, num2) => {
// create a way for it to check if its one of the 4 operators (probably if/else)
    if(operator === "/") {
        // make sure that if the second number is divided by 0 it will return "cant divide by 0!"
        if(num2 === 0) {
            return "Can't divide by 0!"
        } else {
            return num1 / num2
        }    
    } else if(operator === "+") {
        return num1 + num2
    } else if(operator === "-") {
        return num1 - num2
    } else if(operator === "*") {
        return num1 * num2
    } else {
        return "Please input a number"
    }
}
// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"



// --------------------6) Create a function that takes in the following variable and returns only the websites that end in ".io".

var websites = ["codepen.io", "codecademy.com", "coursera.org", "codepen.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Expected output: "codepen.io" "codepen.io"

// Create a function that takes in the array of websites
const newWebsite = (arr) => {
// find a way to look through the array and find the end since .io is only at the end 
    let ios = arr.filter(value => value.endsWith(".io")) 
// return only the onlys that are .io
    return ios 
    //return ios.join(" ") if you wanted to make them into a string
}

console.log(newWebsite(websites))


// --------------------7) STRETCH: Write a function that takes a number as an argument and uses a WHILE loop to count up to that number from 0.

// Create a function that takes in a users number
const countUp = (number) => {
// declare the variable and use a while loop to generate the desired number
    let a = 0;
    while (a < number) {
// make sure you have it count up from zero instead of down to zero
        a++;
        console.log(a)
    }
}

console.log(10)