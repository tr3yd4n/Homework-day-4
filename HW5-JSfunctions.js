/*JS Functions*/

/* Ex.1
Write a function called "dice"; it should randomize an integer number between 1 and 6.*/

function dice(){
    let diceRoll = Math.random() * 5 + 1
    let diceRollRound = Math.round(diceRoll)
    return diceRollRound
}

/* Ex.2 
Write a function called "whoIsBigger" which receives 2 numbers as parameters 
and returns the biggest one.*/

function whoIsBigger(num1, num2){
    if (num1 > num2) {
        return num1
        } return (num2)
}

/* Ex.3
Write a function called "splitMe" which receives a string as a parameter 
and returns an array with every word in that string.
Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]*/

function splitMe(string){
    let arrayify = string.split(" ")
    return arrayify
}

/* Ex.4
Write a function called "deleteOne" which receives a string and a boolean as parameters. 
If the boolean value is true it should return the string without the first letter, 
otherwise it should remove the last one from it.*/

function deleteOne(inputString, test){
    if (test){
        return inputString.substring(1)
    }   else {
        return inputString.substring(0, inputString.length -1)
    }
}

/* Ex.5
Write a function called "onlyLetters" which receives a string as a parameter 
and returns it removing all the digits.
Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

let str = "I have 4 dogs"
function onlyLetters(str){
    let listOnlyLetters = onlyLetters.split
    return listOnlyLetters
}

// //INCOMPLETE 
//  const onlyLetters = function(string){
//   return console.log(string.replace(/\d+/g, `))
// }
// onlyLetters(123howdy123`)

console.log(onlyLetters())

/* Ex.6 
Write a function called "isThisAnEmail" which receives a string as a parameter 
and returns true if the string is a valid email address.*/

function isThisAnEmail(isEmail){
    if (isEmail.includes("@")) {
    return true
    }else{
    return false
    }
}
//console.log(isThisAnEmail("Iamanemailaddress"))
//console.log(isThisAnEmail("emailaddress@email.com"))

/* Ex.7
Write a function called "whatDayIsIt" that should return the current day of the week.*/

function whatDayIsIt(){
    return (new Date()).getDay()
}
const today = whatDayIsIt()
console.log(today)

/* Ex.8
Write a function called "rollTheDices" which receives a number as a parameter.
It should invoke the dice() function defined in Ex1 the specified amount of times,
and return an object containing a "sum" property holding the sum of all values extracted
and a "values" array containing the single values of the dicerolls themselves.
Example: RollTheDices(3) => returns {
    sum: 10
    values: [3, 3, 4]
}*/

function dice(){
    let diceRoll = Math.random() * 5 + 1
    let diceRollRound = Math.round(diceRoll)
    return diceRollRound
}

let rollResults = []

function rollTheDie(num){
    let dieResult = dice()
    return rollResults.push(dieResult)
}

console.log(rollTheDie(100))

//INCOMPLETE error with array? always get the answer 1???

/* Ex.9
Write a function called "howManyDays" which receives a date as a parameter 
and should return the number of days passed since that date.*/

function howManyDays(date){
    let currentDate = daysBetween
    return (currentDate.getDay() - date)
}

console.log(howManyDays(10))

// INCOMPLETE DOES NOT WORK date time class????????

/* Ex.10
Write a function called "isTodayMyBirthday" which should return true if today's your birthday, 
false otherwise.*/

const myBirthday = 30

function isTodayMyBirthday(todaysDate){
    return (todaysDate === myBirthday)
}