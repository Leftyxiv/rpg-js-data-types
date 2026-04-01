// ============================================================
//  JS Operators Practice Worksheet
//
//  Instructions:
//  - For each problem, predict what the result will be FIRST
//  - Then uncomment the console.log to check your answer
//  - Run this file with: node starter.js
// ============================================================


// ============================================================
//  PART 1: Arithmetic Operators  (+, -, *, /, %, **)
// ============================================================

// 1. What does each of these evaluate to?
// console.log(10 + 5)
// console.log(10 - 5)
// console.log(10 * 5)
// console.log(10 / 5)
// console.log(10 % 3)       // modulo — what's the remainder?
// console.log(2 ** 4)       // exponentiation — 2 to the 4th power

// 2. Order of operations — predict first, then check
// console.log(2 + 3 * 4)
// console.log((2 + 3) * 4)
// console.log(10 - 2 * 3 + 1)
// console.log(10 % 3 + 1)

// 3. Division edge cases
// console.log(7 / 2)         // integer or decimal?
// console.log(0 / 5)
// console.log(5 / 0)         // what does JS do here?
// console.log(-5 / 0)

// 4. Modulo practice — these are great for "even or odd" checks
// console.log(10 % 2)
// console.log(11 % 2)
// console.log(15 % 5)
// console.log(17 % 5)


// ============================================================
//  PART 2: Assignment Operators  (=, +=, -=, *=, /=, %=)
// ============================================================

// 5. Predict the value of `score` after each line
let score = 10
score += 5       // score is now ___
score -= 3       // score is now ___
score *= 2       // score is now ___
score /= 4       // score is now ___
score %= 5       // score is now ___
// console.log(score)

// 6. What about this?
let count = 0
count++           // count is now ___
count++           // count is now ___
++count           // count is now ___
count--           // count is now ___
// console.log(count)

// 7. The tricky difference — predict both lines
let a = 5
// console.log(a++)    // prints ___, a is now ___
// console.log(++a)    // prints ___, a is now ___


// ============================================================
//  PART 3: Comparison Operators  (==, ===, !=, !==, >, <, >=, <=)
// ============================================================

// 8. Loose vs strict equality
// console.log(5 == "5")       // loose
// console.log(5 === "5")      // strict
// console.log(5 != "5")
// console.log(5 !== "5")

// 9. Predict true or false for each
// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 >= 10)
// console.log(10 <= 9)

// 10. The weird ones — JS equality has some surprises
// console.log(0 == false)
// console.log(0 === false)
// console.log("" == false)
// console.log("" === false)
// console.log(null == undefined)
// console.log(null === undefined)
// console.log(NaN == NaN)        // this one is famous


// ============================================================
//  PART 4: Logical Operators  (&&, ||, !)
// ============================================================

// 11. Basic logic — predict true or false
// console.log(true && true)
// console.log(true && false)
// console.log(false || true)
// console.log(false || false)
// console.log(!true)
// console.log(!false)

// 12. Short-circuit evaluation — these return VALUES, not just true/false
// console.log("hello" && "world")    // what gets returned?
// console.log("" && "world")
// console.log("hello" || "world")
// console.log("" || "world")
// console.log(0 || "default")
// console.log(42 || "default")

// 13. Combining comparisons
let age = 25
let hasID = true
// console.log(age >= 21 && hasID)
// console.log(age >= 21 || hasID)
// console.log(!(age >= 21))


// ============================================================
//  PART 5: String Operators
// ============================================================

// 14. Concatenation with +
// console.log("Hello" + " " + "World")
// console.log("Score: " + 100)
// console.log("Level " + 1 + 1)       // careful!
// console.log("Level " + (1 + 1))     // parentheses matter

// 15. What type is the result?
// console.log(typeof ("5" + 3))
// console.log(typeof ("5" - 3))
// console.log(typeof ("5" * 3))


// ============================================================
//  PART 6: Ternary Operator  (condition ? valueIfTrue : valueIfFalse)
// ============================================================

// 16. Predict the value assigned to each variable
let temp = 75
let weather = temp > 80 ? "hot" : "nice"
// console.log(weather)

let points = 0
let message = points ? "You have points!" : "No points yet"
// console.log(message)    // remember: 0 is falsy

let userInput = ""
let displayName = userInput || "Anonymous"
// console.log(displayName)


// ============================================================
//  PART 7: typeof Operator
// ============================================================

// 17. Predict the typeof for each
// console.log(typeof 42)
// console.log(typeof "hello")
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)          // this one is a famous JS bug
// console.log(typeof [1, 2, 3])
// console.log(typeof {name: "Bob"})
// console.log(typeof function(){})


// ============================================================
//  PART 8: Mixed Practice — Put It Together
// ============================================================

// 18. Evaluate each expression step by step
// console.log(2 + 3 + "4")          // left to right...
// console.log("4" + 2 + 3)          // left to right...
// console.log(true + true)
// console.log(true + "true")
// console.log(10 > 9 > 8)           // this one is sneaky

// 19. What does this code assign to `result`?
let x = 5
let y = "10"
let result = x + Number(y) > 10 ? "big" : "small"
// console.log(result)

// 20. Fix this expression so it correctly calculates total price
let price = "19.99"
let quantity = 3
let tax = 0.08
let total = price * quantity * (1 + tax)    // does this work? why or why not?
// console.log(total)
// console.log(typeof total)


// ============================================================
//  BONUS: Nullish Coalescing (??) vs Logical OR (||)
//
//  || returns the right side for ANY falsy value (0, "", false, null, undefined)
//  ?? returns the right side ONLY for null or undefined
// ============================================================

// 21. Predict the difference
let volume = 0
// console.log(volume || 50)     // what do you get?
// console.log(volume ?? 50)     // what do you get?

let username = ""
// console.log(username || "Guest")
// console.log(username ?? "Guest")
