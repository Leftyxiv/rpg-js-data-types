// ============================================================
//  While, Do-While, and Infinite Loops Practice Worksheet
//
//  Instructions:
//  - Read each problem and predict the output
//  - Uncomment the console.log lines to check your answers
//  - Then complete the TODO exercises at the bottom
//  - Run this file with: node while-loops.js
//
//  WARNING: Some examples show infinite loops on purpose.
//  Those are commented out for safety. Read them and understand
//  WHY they're infinite — don't uncomment them unless you want
//  to Ctrl+C your terminal!
// ============================================================


// ============================================================
//  PART 1: Basic while Loop
//
//  while (condition) {
//    // runs as long as condition is true
//  }
// ============================================================

// 1. How many times does this run? What prints?
// let count = 0
// while (count < 5) {
//   console.log(count)
//   count++
// }

// 2. What if the condition is false from the start?
// let x = 10
// while (x < 5) {
//   console.log("This runs!")
//   x++
// }
// console.log("Done. x is:", x)   // did the loop body run at all?

// 3. Countdown
// let rocket = 5
// while (rocket > 0) {
//   console.log(rocket + "...")
//   rocket--
// }
// console.log("Liftoff!")


// ============================================================
//  PART 2: do...while Loop
//
//  do {
//    // body runs AT LEAST ONCE
//  } while (condition)
// ============================================================

// 4. The key difference — this runs even though condition is false
// let y = 10
// do {
//   console.log("y is:", y)
//   y++
// } while (y < 5)
// console.log("Final y:", y)    // how many times did the body run?

// 5. Compare: while vs do-while with the same condition
// let a = 100

// while (a < 10) {
//   console.log("while:", a)    // does this print?
//   a++
// }

// let b = 100
// do {
//   console.log("do-while:", b) // does this print?
//   b++
// } while (b < 10)

// 6. do-while is great for "ask at least once" patterns
//    (simulated — in real code this would use actual user input)
// let attempts = 0
// let password
// do {
//   password = attempts === 0 ? "wrong" : attempts === 1 ? "nope" : "secret123"
//   attempts++
//   console.log("Attempt", attempts + ":", password)
// } while (password !== "secret123")
// console.log("Access granted after", attempts, "attempts")


// ============================================================
//  PART 3: Infinite Loops — Understanding the Danger
// ============================================================

// 7. WHY is this infinite? (DO NOT UNCOMMENT)
// let i = 0
// while (i < 10) {
//   console.log(i)
//   // oops — forgot i++, so i is always 0, always < 10
// }

// 8. WHY is this infinite? (DO NOT UNCOMMENT)
// let j = 10
// while (j > 0) {
//   console.log(j)
//   j++    // going the wrong direction! j gets bigger, always > 0
// }

// 9. WHY is this infinite? (DO NOT UNCOMMENT)
// let k = 1
// while (k !== 10) {
//   console.log(k)
//   k += 3   // k goes 1, 4, 7, 10... wait, does it hit 10?
// }            // 1, 4, 7, 10 — actually this one DOES terminate!

// 10. But THIS one is infinite (DO NOT UNCOMMENT)
// let m = 1
// while (m !== 10) {
//   console.log(m)
//   m += 4   // m goes 1, 5, 9, 13... skips right over 10!
// }


// ============================================================
//  PART 4: while vs for — When to Use Which
// ============================================================

// Use FOR when you know how many iterations upfront:
//   - looping through arrays
//   - counting from A to B

// Use WHILE when you DON'T know how many iterations:
//   - waiting for a condition to change
//   - processing until done
//   - user input loops

// 11. This is better as a for loop (we know the count)
const names = ["Alice", "Bob", "Charlie"]
// let idx = 0
// while (idx < names.length) {
//   console.log(names[idx])
//   idx++
// }

// 12. This is better as a while loop (we don't know when it ends)
//     Simulate rolling a die until we get a 6
// let roll = 0
// let rolls = 0
// while (roll !== 6) {
//   roll = Math.floor(Math.random() * 6) + 1
//   rolls++
//   console.log("Roll " + rolls + ":", roll)
// }
// console.log("Got a 6 after", rolls, "rolls!")


// ============================================================
//  PART 5: Accumulating with while
// ============================================================

// 13. Double a number until it exceeds 1000
// let num = 1
// let steps = 0
// while (num <= 1000) {
//   num *= 2
//   steps++
// }
// console.log("Reached", num, "after", steps, "doublings")

// 14. Remove items from an array one at a time
// const stack = ["a", "b", "c", "d", "e"]
// while (stack.length > 0) {
//   console.log("Popped:", stack.pop())
// }
// console.log("Stack is empty:", stack)

// 15. Sum digits of a number
//     Example: 1234 → 1 + 2 + 3 + 4 = 10
// let number = 1234
// let digitSum = 0
// while (number > 0) {
//   digitSum += number % 10    // get last digit
//   number = Math.floor(number / 10)   // chop off last digit
// }
// console.log("Sum of digits:", digitSum)


// ============================================================
//  PART 6: Preventing Infinite Loops — Safety Patterns
// ============================================================

// 16. Use a max iterations counter as a safety net
// let val = 1
// let maxIter = 1000
// let iter = 0
// while (val !== 100 && iter < maxIter) {
//   val += 3
//   iter++
// }
// if (iter >= maxIter) {
//   console.log("Safety limit reached!")
// } else {
//   console.log("Reached 100 after", iter, "iterations")
// }
// Did val actually reach exactly 100? Why or why not?


// ============================================================
//  PART 7: TODO Exercises — Write Your Own
// ============================================================

// 17. Write a while loop that prints numbers from 1 to 10
// your code here


// 18. Write a do-while loop that counts DOWN from 10 to 1
//     then prints "Blastoff!"
// your code here


// 19. Write a while loop that finds the first number divisible
//     by both 7 and 13 (starting from 1)
// your code here


// 20. Write a while loop that simulates a coin flip.
//     Keep flipping until you get 3 heads in a row.
//     Print each flip result and the total number of flips.
//     (use Math.random() < 0.5 for heads/tails)
// your code here


// 21. Write a while loop that takes a positive integer and
//     calculates how many times you can divide it by 2
//     before it drops below 1
//     Example: 64 → 6 times (64, 32, 16, 8, 4, 2, 1)
let startNum = 64
// your code here


// 22. Write a while loop that builds a string by repeating
//     a pattern. Start with "" and keep adding "*" until the
//     string is 20 characters long. Print the string at each step.
//     (like a loading bar)
// your code here


// 23. Collatz Conjecture: Pick any positive integer.
//     - If it's even, divide by 2
//     - If it's odd, multiply by 3 and add 1
//     - Repeat until you reach 1
//     Print each step. How many steps does it take for n = 27?
let n = 27
// your code here
