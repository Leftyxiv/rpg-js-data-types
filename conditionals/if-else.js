// ============================================================
//  If-Else Statements Practice Worksheet
//
//  Instructions:
//  - Read each problem and predict the output
//  - Uncomment the console.log lines to check your answers
//  - Then complete the TODO exercises at the bottom
//  - Run this file with: node if-else.js
// ============================================================


// ============================================================
//  PART 1: Basic if Statements
// ============================================================

// 1. Does the code inside the if block run?
let temperature = 85

if (temperature > 80) {
  // console.log("It's hot outside!")
}

// 2. What about this one?
let age = 16

if (age >= 18) {
  // console.log("You can vote!")
}
// console.log("Program continues...")   // does this always run?

// 3. Truthy and falsy values in conditions
if (1) {
  // console.log("1 is truthy")
}

if (0) {
  // console.log("0 is truthy")
}

if ("hello") {
  // console.log("non-empty string is truthy")
}

if ("") {
  // console.log("empty string is truthy")
}

if (null) {
  // console.log("null is truthy")
}


// ============================================================
//  PART 2: if-else
// ============================================================

// 4. Which branch runs?
let score = 72

if (score >= 70) {
  // console.log("You passed!")
} else {
  // console.log("You failed.")
}

// 5. What if the value is exactly on the boundary?
let balance = 0

if (balance > 0) {
  // console.log("You have money")
} else {
  // console.log("You're broke")
}

// 6. Tricky — what does this print?
let username = ""

if (username) {
  // console.log("Welcome, " + username)
} else {
  // console.log("Please log in")
}


// ============================================================
//  PART 3: if - else if - else (chaining)
// ============================================================

// 7. Which message prints? Only ONE branch runs.
let grade = 85

if (grade >= 90) {
  // console.log("A")
} else if (grade >= 80) {
  // console.log("B")
} else if (grade >= 70) {
  // console.log("C")
} else if (grade >= 60) {
  // console.log("D")
} else {
  // console.log("F")
}

// 8. Order matters! What's different here?
let points = 95

if (points >= 70) {
  // console.log("C or above")        // does this catch 95?
} else if (points >= 80) {
  // console.log("B or above")
} else if (points >= 90) {
  // console.log("A or above")
}
// Why is this a problem?

// 9. Multiple conditions can match, but only the FIRST one runs
let num = 15

if (num > 10) {
  // console.log("Greater than 10")
} else if (num > 5) {
  // console.log("Greater than 5")
} else if (num > 0) {
  // console.log("Positive")
}
// num is greater than all three, but which prints?


// ============================================================
//  PART 4: Nested if Statements
// ============================================================

// 10. Trace through this — what prints?
let isLoggedIn = true
let isAdmin = false

if (isLoggedIn) {
  if (isAdmin) {
    // console.log("Welcome, admin!")
  } else {
    // console.log("Welcome, user!")
  }
} else {
  // console.log("Please log in")
}

// 11. Same logic, flattened with && — predict the output
if (isLoggedIn && isAdmin) {
  // console.log("Welcome, admin!")
} else if (isLoggedIn && !isAdmin) {
  // console.log("Welcome, user!")
} else {
  // console.log("Please log in")
}


// ============================================================
//  PART 5: Common Gotchas
// ============================================================

// 12. Assignment vs comparison — spot the bug
let x = 10
if (x = 5) {     // = instead of ===
  // console.log("x is 5")
} else {
  // console.log("x is not 5")
}
// console.log("x is now:", x)    // what happened to x?

// 13. Forgetting braces — which lines are inside the if?
let loggedIn = false

if (loggedIn)
  // console.log("You are logged in")
  // console.log("Here is your dashboard")    // is this inside the if?

// 14. Comparing with the wrong type
let userInput = "5"

if (userInput == 5) {
  // console.log("Loose: it's 5")
}

if (userInput === 5) {
  // console.log("Strict: it's 5")
}


// ============================================================
//  PART 6: TODO Exercises — Write Your Own
// ============================================================

// 15. Write an if-else that checks if a number is even or odd
//     Print "even" or "odd"
let mystery = 7
// your code here


// 16. Write an if-else-if chain that converts a numeric score
//     to a letter grade (A: 90+, B: 80+, C: 70+, D: 60+, F: below 60)
let studentScore = 88
// your code here


// 17. Write a nested if that checks:
//     - Is the store open? (isOpen)
//     - If open, do they have the item in stock? (inStock)
//     - Print an appropriate message for each case
let isOpen = true
let inStock = false
// your code here


// 18. FizzBuzz! For the number below:
//     - If divisible by both 3 AND 5, print "FizzBuzz"
//     - If divisible by 3 only, print "Fizz"
//     - If divisible by 5 only, print "Buzz"
//     - Otherwise print the number
//     HINT: Order of your conditions matters!
let fizzNum = 15
// your code here


// 19. Write an if-else that safely handles a potentially null/undefined value
//     If `data` exists and has a `.name` property, print the name
//     Otherwise print "No data available"
let data = null
// your code here


// 20. Rewrite this nested if as a single if-else-if chain using && and ||
//     (don't change the output, just flatten the structure)
let hour = 14
let isWeekend = true
/*
if (isWeekend) {
  if (hour < 12) {
    console.log("Weekend morning")
  } else {
    console.log("Weekend afternoon")
  }
} else {
  if (hour < 12) {
    console.log("Weekday morning")
  } else {
    console.log("Weekday afternoon")
  }
}
*/
// your flattened version here
