// ============================================================
//  Switch-Case Statements Practice Worksheet
//
//  Instructions:
//  - Read each problem and predict the output
//  - Uncomment the console.log lines to check your answers
//  - Then complete the TODO exercises at the bottom
//  - Run this file with: node switch-case.js
// ============================================================


// ============================================================
//  PART 1: Basic Switch Syntax
// ============================================================

// 1. Which case runs?
let day = "Monday"

switch (day) {
  case "Monday":
    // console.log("Start of the work week")
    break
  case "Friday":
    // console.log("TGIF!")
    break
  case "Saturday":
    // console.log("Weekend!")
    break
  default:
    // console.log("Just another day")
}

// 2. What happens with no match?
let color = "purple"

switch (color) {
  case "red":
    // console.log("Stop")
    break
  case "yellow":
    // console.log("Caution")
    break
  case "green":
    // console.log("Go")
    break
  default:
    // console.log("Unknown color")
}


// ============================================================
//  PART 2: The Break Trap (Fall-Through)
// ============================================================

// 3. What happens WITHOUT break statements? Predict ALL output.
let fruit = "banana"

switch (fruit) {
  case "apple":
    // console.log("It's an apple")
  case "banana":
    // console.log("It's a banana")
  case "cherry":
    // console.log("It's a cherry")
  default:
    // console.log("It's some fruit")
}
// How many lines print? Why?

// 4. Missing just ONE break — predict the output
let animal = "cat"

switch (animal) {
  case "cat":
    // console.log("Meow")
    // notice: no break here!
  case "dog":
    // console.log("Woof")
    break
  case "fish":
    // console.log("Blub")
    break
}


// ============================================================
//  PART 3: Intentional Fall-Through (Grouping Cases)
// ============================================================

// 5. Sometimes fall-through is useful — grouping cases together
let dayOfWeek = "Saturday"

switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    // console.log("Weekday")
    break
  case "Saturday":
  case "Sunday":
    // console.log("Weekend!")
    break
}

// 6. Grouping with some unique logic
let month = "February"

switch (month) {
  case "December":
  case "January":
  case "February":
    // console.log("Winter")
    break
  case "March":
  case "April":
  case "May":
    // console.log("Spring")
    break
  case "June":
  case "July":
  case "August":
    // console.log("Summer")
    break
  case "September":
  case "October":
  case "November":
    // console.log("Fall")
    break
}


// ============================================================
//  PART 4: Switch Uses Strict Comparison (===)
// ============================================================

// 7. Does this match? Why or why not?
let input = "3"

switch (input) {
  case 3:
    // console.log("It's the number 3")
    break
  case "3":
    // console.log("It's the string '3'")
    break
}

// 8. What about booleans?
let value = 1

switch (value) {
  case true:
    // console.log("It's true")
    break
  case 1:
    // console.log("It's 1")
    break
}


// ============================================================
//  PART 5: Switch vs If-Else — When to Use Which
// ============================================================

// 9. This works fine as a switch — one variable, exact matches
let status = "loading"

switch (status) {
  case "idle":
    // console.log("Waiting for input...")
    break
  case "loading":
    // console.log("Loading data...")
    break
  case "success":
    // console.log("Data loaded!")
    break
  case "error":
    // console.log("Something went wrong")
    break
}

// 10. This does NOT work well as a switch — ranges need if-else
//     (uncomment to see why)
let testScore = 85

// You CAN do this, but it's ugly:
switch (true) {
  case testScore >= 90:
    // console.log("A")
    break
  case testScore >= 80:
    // console.log("B")
    break
  case testScore >= 70:
    // console.log("C")
    break
  default:
    // console.log("Below C")
}
// This works but an if-else chain is cleaner for ranges


// ============================================================
//  PART 6: TODO Exercises — Write Your Own
// ============================================================

// 11. Write a switch that takes a day number (1-7) and prints
//     the day name (1 = Monday, 7 = Sunday)
let dayNum = 3
// your code here


// 12. Write a switch that takes a grade letter ("A", "B", "C", "D", "F")
//     and prints a message. Use fall-through to group A and B as "Great job!"
//     and D and F as "Need improvement"
let letterGrade = "B"
// your code here


// 13. Write a switch for a simple calculator:
//     Given two numbers and an operator (+, -, *, /),
//     print the result. Handle division by zero in the "/" case.
let num1 = 10
let num2 = 3
let operator = "+"
// your code here


// 14. Write a switch that handles user commands for a game:
//     "attack" -> "You swing your sword!"
//     "defend" -> "You raise your shield!"
//     "heal"   -> "You drink a potion!"
//     "run"    -> "You flee the battle!"
//     anything else -> "Unknown command"
let command = "heal"
// your code here


// 15. Convert this if-else chain into a switch statement:
/*
let httpStatus = 404
if (httpStatus === 200) {
  console.log("OK")
} else if (httpStatus === 301) {
  console.log("Moved Permanently")
} else if (httpStatus === 404) {
  console.log("Not Found")
} else if (httpStatus === 500) {
  console.log("Internal Server Error")
} else {
  console.log("Unknown status")
}
*/
let httpStatus = 404
// your switch version here
