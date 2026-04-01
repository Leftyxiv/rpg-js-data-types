// ============================================================
//  For Loops Practice Worksheet
//
//  Instructions:
//  - Read each problem and predict the output
//  - Uncomment the console.log lines to check your answers
//  - Then complete the TODO exercises at the bottom
//  - Run this file with: node for-loops.js
// ============================================================


// ============================================================
//  PART 1: Basic for Loop Anatomy
//
//  for (initialization; condition; update) {
//    // body — runs each iteration
//  }
// ============================================================

// 1. How many times does this loop run? What numbers print?
// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }

// 2. What if we start at 1?
// for (let i = 1; i <= 5; i++) {
//   console.log(i)
// }

// 3. Counting by twos
// for (let i = 0; i < 10; i += 2) {
//   console.log(i)
// }

// 4. Counting backwards
// for (let i = 5; i > 0; i--) {
//   console.log(i)
// }
// console.log("Liftoff!")


// ============================================================
//  PART 2: Off-By-One Errors (The Classic Bug)
// ============================================================

// 5. How many times does each loop run? (predict the count, not the values)
// for (let i = 0; i < 5; i++) {}     // ___ times
// for (let i = 0; i <= 5; i++) {}    // ___ times
// for (let i = 1; i < 5; i++) {}     // ___ times
// for (let i = 1; i <= 5; i++) {}    // ___ times

// 6. What's the LAST value of i printed in each?
// for (let i = 0; i < 3; i++) { console.log(i) }    // last: ___
// for (let i = 0; i <= 3; i++) { console.log(i) }   // last: ___


// ============================================================
//  PART 3: Looping Through Arrays
// ============================================================

const colors = ["red", "green", "blue", "yellow"]

// 7. Print every element
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i])
// }

// 8. Print every element with its index
// for (let i = 0; i < colors.length; i++) {
//   console.log(i + ": " + colors[i])
// }

// 9. What happens if you use <= instead of < ?
// for (let i = 0; i <= colors.length; i++) {
//   console.log(colors[i])
// }
// What is colors[4]?

// 10. Loop backwards through the array
// for (let i = colors.length - 1; i >= 0; i--) {
//   console.log(colors[i])
// }


// ============================================================
//  PART 4: Accumulating Values
// ============================================================

// 11. Sum all numbers — predict the final total
const numbers = [10, 20, 30, 40, 50]
let total = 0

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i]
// }
// console.log("Total:", total)

// 12. Build a string from an array
const words = ["JavaScript", "is", "fun"]
let sentence = ""

// for (let i = 0; i < words.length; i++) {
//   sentence += words[i]
//   if (i < words.length - 1) {
//     sentence += " "
//   }
// }
// console.log(sentence)

// 13. Find the largest number
const scores = [72, 95, 88, 41, 63, 99, 70]
let highest = scores[0]

// for (let i = 1; i < scores.length; i++) {
//   if (scores[i] > highest) {
//     highest = scores[i]
//   }
// }
// console.log("Highest:", highest)


// ============================================================
//  PART 5: Nested Loops
// ============================================================

// 14. How many times does the inner console.log run?
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j)
//   }
// }

// 15. Multiplication table (partial)
// for (let i = 1; i <= 3; i++) {
//   let row = ""
//   for (let j = 1; j <= 3; j++) {
//     row += (i * j) + "\t"
//   }
//   console.log(row)
// }


// ============================================================
//  PART 6: Common Patterns
// ============================================================

// 16. Counting occurrences
const letters = ["a", "b", "a", "c", "a", "b"]
let countA = 0

// for (let i = 0; i < letters.length; i++) {
//   if (letters[i] === "a") {
//     countA++
//   }
// }
// console.log("Number of a's:", countA)

// 17. Filtering into a new array
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = []

// for (let i = 0; i < allNumbers.length; i++) {
//   if (allNumbers[i] % 2 === 0) {
//     evens.push(allNumbers[i])
//   }
// }
// console.log("Evens:", evens)


// ============================================================
//  PART 7: TODO Exercises — Write Your Own
// ============================================================

// 18. Write a for loop that prints the numbers 1 through 20
// your code here


// 19. Write a for loop that prints every THIRD number from 3 to 30
//     (3, 6, 9, 12, ... 30)
// your code here


// 20. Given this array, use a for loop to create a new array
//     containing only the strings that are longer than 4 characters
const fruits = ["apple", "fig", "banana", "kiwi", "strawberry", "pear"]
// your code here


// 21. Write a for loop that reverses a string
//     "hello" -> "olleh"
let original = "hello"
// your code here


// 22. Write nested for loops to print this pattern:
//     *
//     **
//     ***
//     ****
//     *****
// your code here


// 23. FizzBuzz with a loop! For numbers 1 to 30:
//     - Divisible by 3 and 5: print "FizzBuzz"
//     - Divisible by 3 only: print "Fizz"
//     - Divisible by 5 only: print "Buzz"
//     - Otherwise: print the number
// your code here


// 24. Write a for loop that finds the SECOND largest number in this array
//     (don't sort the array — use a loop)
const data = [34, 12, 78, 56, 91, 23, 67]
// your code here
