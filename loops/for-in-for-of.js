// ============================================================
//  For-in and For-of Loops Practice Worksheet
//
//  Instructions:
//  - Read each problem and predict the output
//  - Uncomment the console.log lines to check your answers
//  - Then complete the TODO exercises at the bottom
//  - Run this file with: node for-in-for-of.js
// ============================================================


// ============================================================
//  PART 1: for...in — Iterates Over KEYS (Property Names)
//
//  Best for: objects
//  Gives you: the key (as a string)
// ============================================================

// 1. What does `key` contain each iteration?
const player = {
  name: "Aria",
  health: 100,
  level: 5,
  weapon: "sword"
}

// for (let key in player) {
//   console.log(key)                    // what prints?
// }

// 2. How to get the VALUES using for...in
// for (let key in player) {
//   console.log(key + ": " + player[key])
// }

// 3. for...in on an array — what are the "keys" of an array?
const colors = ["red", "green", "blue"]

// for (let key in colors) {
//   console.log(key)                     // prints what?
//   console.log(typeof key)              // what type is it?
// }

// 4. Why for...in on arrays can be surprising
//    The keys are STRINGS, not numbers!
// for (let key in colors) {
//   console.log(key + 1)                 // "01", "11", "21" — not 1, 2, 3!
// }


// ============================================================
//  PART 2: for...of — Iterates Over VALUES
//
//  Best for: arrays, strings, and other iterables
//  Gives you: the value directly
// ============================================================

// 5. Compare with for...in — what does `color` contain?
// for (let color of colors) {
//   console.log(color)                   // the value, not the index
// }

// 6. for...of on a string — iterates character by character
const word = "Hello"

// for (let char of word) {
//   console.log(char)
// }

// 7. for...of does NOT work on plain objects — predict what happens
// try {
//   for (let value of player) {
//     console.log(value)
//   }
// } catch (e) {
//   console.log("Error:", e.message)
// }


// ============================================================
//  PART 3: for...in vs for...of — Side by Side
// ============================================================

const animals = ["cat", "dog", "fish"]

// 8. Predict the output of each
// console.log("--- for...in ---")
// for (let x in animals) {
//   console.log(x)             // keys: "0", "1", "2"
// }

// console.log("--- for...of ---")
// for (let x of animals) {
//   console.log(x)             // values: "cat", "dog", "fish"
// }

// 9. Quick rule of thumb:
//    for...IN  = keys/Indices  (think: "in" an object's property names)
//    for...OF  = OF the values (think: "of" the items in a collection)


// ============================================================
//  PART 4: Practical for...in with Objects
// ============================================================

const inventory = {
  potions: 5,
  arrows: 20,
  gold: 150,
  keys: 3
}

// 10. Count total items
// let totalItems = 0
// for (let item in inventory) {
//   totalItems += inventory[item]
// }
// console.log("Total items:", totalItems)

// 11. Find the item with the highest count
// let mostItem = ""
// let mostCount = 0
// for (let item in inventory) {
//   if (inventory[item] > mostCount) {
//     mostCount = inventory[item]
//     mostItem = item
//   }
// }
// console.log("Most:", mostItem, "(" + mostCount + ")")

// 12. Check if a property exists
// for (let item in inventory) {
//   if (item === "gold") {
//     console.log("Found gold! Amount:", inventory[item])
//   }
// }


// ============================================================
//  PART 5: Practical for...of with Arrays
// ============================================================

const scores = [85, 92, 78, 95, 88]

// 13. Calculate average
// let sum = 0
// for (let score of scores) {
//   sum += score
// }
// console.log("Average:", sum / scores.length)

// 14. Find all scores above 90
// const highScores = []
// for (let score of scores) {
//   if (score > 90) {
//     highScores.push(score)
//   }
// }
// console.log("High scores:", highScores)

// 15. for...of with strings — count vowels
const sentence = "JavaScript is awesome"
// let vowelCount = 0
// for (let char of sentence) {
//   if ("aeiouAEIOU".includes(char)) {
//     vowelCount++
//   }
// }
// console.log("Vowels:", vowelCount)


// ============================================================
//  PART 6: Bonus — Object.keys(), Object.values(), Object.entries()
//
//  These let you use for...of with objects by converting
//  object properties to arrays first
// ============================================================

const hero = {
  name: "Aria",
  class: "Warrior",
  level: 10,
  hp: 250
}

// 16. Object.keys() returns an array of key names
// for (let key of Object.keys(hero)) {
//   console.log(key)
// }

// 17. Object.values() returns an array of values
// for (let val of Object.values(hero)) {
//   console.log(val)
// }

// 18. Object.entries() returns [key, value] pairs
// for (let [key, value] of Object.entries(hero)) {
//   console.log(key + " => " + value)
// }


// ============================================================
//  PART 7: TODO Exercises — Write Your Own
// ============================================================

// 19. Use for...in to print all properties of this object
//     Format: "property: value (type)"
//     Example: "name: Link (string)"
const character = {
  name: "Link",
  hearts: 13,
  hasShield: true,
  weapon: "Master Sword",
  rupees: 500
}
// your code here


// 20. Use for...of to find the longest word in this array
const wordList = ["the", "quick", "brown", "fox", "jumps", "over", "extraordinary"]
// your code here


// 21. Use for...of to reverse an array WITHOUT using .reverse()
const original = [1, 2, 3, 4, 5]
// your code here (hint: unshift or build a new array)


// 22. Use for...in to merge two objects together
//     If both objects have the same key, use the value from obj2
const defaults = { volume: 50, brightness: 80, theme: "dark" }
const userPrefs = { volume: 75, theme: "light" }
const merged = {}
// your code here


// 23. Use for...of with Object.entries() to filter an object —
//     Create a new object containing only properties where the value
//     is a number
const mixed = {
  name: "Test",
  count: 42,
  active: true,
  score: 99.5,
  label: "hello"
}
const numbersOnly = {}
// your code here
