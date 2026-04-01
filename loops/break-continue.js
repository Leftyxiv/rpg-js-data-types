// ============================================================
//  Break and Continue Keywords Practice Worksheet
//
//  Instructions:
//  - Read each problem and predict the output
//  - Uncomment the console.log lines to check your answers
//  - Then complete the TODO exercises at the bottom
//  - Run this file with: node break-continue.js
// ============================================================


// ============================================================
//  PART 1: break — Exits the Loop Immediately
// ============================================================

// 1. What numbers print? The loop goes to 10, but does it get there?
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break
//   }
//   console.log(i)
// }
// console.log("Loop ended")

// 2. break in a while loop — searching for a value
// const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"]
// let found = false
// let index = 0
//
// while (index < names.length) {
//   if (names[index] === "Charlie") {
//     found = true
//     break
//   }
//   index++
// }
// console.log("Found Charlie:", found, "at index:", index)

// 3. break stops the INNERMOST loop only
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (j === 1) {
//       break              // which loop does this break?
//     }
//     console.log(i, j)
//   }
// }
// How many lines print?


// ============================================================
//  PART 2: continue — Skips to the Next Iteration
// ============================================================

// 4. What numbers print? Which one gets skipped?
// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue
//   }
//   console.log(i)
// }

// 5. Skip even numbers — print only odds
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue
//   }
//   console.log(i)
// }

// 6. continue in a while loop — BE CAREFUL with the counter!
// let k = 0
// while (k < 5) {
//   k++
//   if (k === 3) {
//     continue       // does k still get incremented?
//   }
//   console.log(k)
// }

// 7. DANGER: This creates an infinite loop! (DO NOT UNCOMMENT)
//    The continue skips the increment, so the condition never changes
// let m = 0
// while (m < 5) {
//   if (m === 3) {
//     continue       // skips m++ below, m stays at 3 forever!
//   }
//   console.log(m)
//   m++
// }


// ============================================================
//  PART 3: break vs continue — Side by Side
// ============================================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 8. With break — predict which numbers print
// console.log("--- break ---")
// for (let num of numbers) {
//   if (num === 6) break
//   console.log(num)
// }

// 9. With continue — predict which numbers print
// console.log("--- continue ---")
// for (let num of numbers) {
//   if (num === 6) continue
//   console.log(num)
// }

// Key difference:
// break    = "I'm done with this loop entirely"
// continue = "Skip this one, keep going"


// ============================================================
//  PART 4: Practical Patterns
// ============================================================

// 10. Find the first negative number in an array
const data = [5, 12, 3, -7, 8, -2, 15]

// let firstNegative = null
// for (let val of data) {
//   if (val < 0) {
//     firstNegative = val
//     break
//   }
// }
// console.log("First negative:", firstNegative)

// 11. Skip invalid entries, process the rest
const inputs = ["hello", "", "world", null, "foo", undefined, "bar"]

// for (let input of inputs) {
//   if (!input) {
//     continue    // skip falsy values (empty string, null, undefined)
//   }
//   console.log("Processing:", input)
// }

// 12. Process items until budget runs out
const prices = [15, 30, 10, 25, 5, 20, 40, 8]
let budget = 50
// let spent = 0
// let itemsBought = 0
//
// for (let price of prices) {
//   if (spent + price > budget) {
//     break
//   }
//   spent += price
//   itemsBought++
//   console.log("Bought item for $" + price + " (spent: $" + spent + ")")
// }
// console.log("Total items:", itemsBought, "Total spent: $" + spent)

// 13. Skip expensive items but keep shopping
// let spent2 = 0
// let itemsBought2 = 0
//
// for (let price of prices) {
//   if (price > 20) {
//     console.log("Skipping $" + price + " (too expensive)")
//     continue
//   }
//   spent2 += price
//   itemsBought2++
//   console.log("Bought item for $" + price)
// }
// console.log("Total items:", itemsBought2, "Total spent: $" + spent2)


// ============================================================
//  PART 5: break and continue with Nested Loops
// ============================================================

// 14. break only affects the inner loop — predict the output
// for (let i = 0; i < 3; i++) {
//   console.log("Outer:", i)
//   for (let j = 0; j < 5; j++) {
//     if (j === 2) break
//     console.log("  Inner:", j)
//   }
// }

// 15. continue only affects the inner loop
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 4; j++) {
//     if (j === 1) continue
//     console.log(i, j)
//   }
// }

// 16. Labeled break — breaks the OUTER loop (advanced)
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (i === 1 && j === 1) {
//       break outer        // breaks the outer loop!
//     }
//     console.log(i, j)
//   }
// }
// How is this different from problem 14?


// ============================================================
//  PART 6: TODO Exercises — Write Your Own
// ============================================================

// 17. Write a loop that prints numbers 1-20 but stops (break)
//     if it encounters a number divisible by both 3 and 7
// your code here


// 18. Write a loop that prints numbers 1-20 but skips (continue)
//     any number that's a multiple of 4
// your code here


// 19. Given this array of test scores, calculate the average
//     but skip any score that is -1 (representing an absent student)
const testScores = [85, 92, -1, 78, -1, 95, 88, -1, 76, 90]
// your code here


// 20. Write a loop that searches through a 2D array (array of arrays)
//     to find a specific value. Break out of BOTH loops when found.
//     Print the row and column where you found it.
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
const target = 5
// your code here


// 21. Process a "queue" of tasks. Each task has a priority (1-5).
//     - Skip tasks with priority below 3 (continue)
//     - Stop processing if you encounter a priority 5 "urgent" task (break)
//     - Log each task you process
const tasks = [
  { name: "Email", priority: 2 },
  { name: "Bug fix", priority: 4 },
  { name: "Meeting", priority: 1 },
  { name: "Deploy", priority: 3 },
  { name: "Outage!", priority: 5 },
  { name: "Lunch", priority: 2 },
  { name: "Code review", priority: 4 }
]
// your code here


// 22. Write a loop that finds all pairs of numbers in this array
//     that add up to 10. Use break to stop after finding the FIRST pair.
//     (hint: nested loops)
const nums = [2, 7, 4, 6, 3, 8, 1]
// your code here
