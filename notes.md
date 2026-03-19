# JavaScript Data Types — RPG Battle Demo

Learn JavaScript data types by building an RPG battle system. Each function in `index.html` is designed to expose a common type-related bug — you'll implement them, see them break, and learn how to fix them.

## Getting Started

1. Open `index.html` in your browser
2. Open the browser console (F12 or right-click > Inspect > Console)
3. Open `index.html` in your code editor
4. Read the console output — it already shows you some surprises

## What You'll Learn

- JavaScript's primitive data types and the `typeof` operator
- Why `+` behaves differently from `-` with strings
- The 6 falsy values in JavaScript
- The difference between `==` and `===`
- How to convert types explicitly with `Number()`, `String()`, and `Boolean()`

---

## The Functions

Work through these in order. Each one teaches a new concept.

### 1. `getStatus(fighter)` — String Concatenation

**Goal:** Return a string like `"Aria: 100/100 HP"`

**Concept:** When you concatenate values with `+`, JavaScript converts everything to strings automatically. This means the output can *look* correct even when the underlying data types are wrong.

**Try in the console:**
```js
typeof hero.health   // what type is this?
typeof enemy.health  // what about this one?
```

**Key insight:** Just because the output looks right doesn't mean your data is right.

---

### 2. `isAlive(fighter)` — Truthiness

**Goal:** Return `true` if the fighter is alive, `false` otherwise.

**Concept:** In JavaScript, any value can be used in an `if` statement. Non-empty strings are always "truthy" — even the string `"false"`!

**Try in the console:**
```js
"true" === true     // false!
"true" == true      // also false!
if ("true") { console.log("truthy!") }    // runs!
if ("false") { console.log("also truthy!") }  // also runs!!
```

**Key insight:** A string that *says* `"true"` is not the same as the boolean `true`. Type matters.

---

### 3. `calculateDamage(attacker, defender)` — Arithmetic Coercion

**Goal:** Return `attacker.attack - defender.defense` (minimum 1 damage).

**Concept:** The `-`, `*`, `/` operators always do math — they'll convert strings to numbers automatically. But `+` does double duty: it's both addition AND string concatenation. If *either* side is a string, `+` concatenates.

**Try in the console:**
```js
"15" - 8     // 7 (works!)
"15" - "3"   // 12 (also works!)
"15" + 8     // "158" (concatenation!)
"15" * 2     // 30 (works!)
```

**Key insight:** `-` always does math. `+` concatenates if either side is a string.

---

### 4. `heal(fighter, amount)` — The `+` Trap

**Goal:** Add `amount` to `fighter.health`. Don't exceed `maxHealth`.

**Concept:** This is where `+` concatenation really bites. If `health` is the string `"100"` and `amount` is `20`, you get `"10020"` instead of `120`.

**Try in the console:**
```js
"100" + 20          // "10020" — not 120!
Number("100") + 20  // 120 — that's better
```

**The fix:** Use `Number()` to convert before doing math:
```js
Number(fighter.health) + amount
```

**Other ways to convert strings to numbers:**
- `parseInt("100")` — parses an integer
- `parseFloat("3.14")` — parses a decimal
- `+"100"` — the unary `+` trick (shorthand for `Number()`)

**Key insight:** Always convert BEFORE doing math with `+`. Don't rely on JavaScript to guess what you meant.

---

### 5. `applyPoison(fighter)` — Falsy Values

**Goal:** If the fighter isn't poisoned, poison them. If they are, deal 5 damage.

**Concept:** JavaScript has exactly 6 "falsy" values — values that act like `false` in an `if` statement:

| Value | Type | Falsy? |
|-------|------|--------|
| `0` | number | Yes |
| `""` | string | Yes |
| `null` | null | Yes |
| `undefined` | undefined | Yes |
| `false` | boolean | Yes |
| `NaN` | number | Yes |

**Everything else is truthy** — including some surprises:

| Value | Truthy? |
|-------|---------|
| `"0"` | Yes! (non-empty string) |
| `"false"` | Yes! (non-empty string) |
| `[]` | Yes! (empty array) |
| `{}` | Yes! (empty object) |

**The trap:** `hero.poisoned` is `0`. Zero is falsy — so `if (hero.poisoned)` won't run, even though `0` is a number, not a boolean.

**Key insight:** Be intentional about using actual booleans (`true`/`false`) for yes/no values. Don't use `0` to mean `false`.

---

### 6. `compareStats(fighter1, fighter2)` — `==` vs `===`

**Goal:** Compare the levels of two fighters. Log whether they match.

**Concept:** JavaScript has two equality operators:
- `==` (loose) — converts types before comparing
- `===` (strict) — requires the same type AND value

**Try in the console:**
```js
"1" == 1       // true (converts string to number)
"1" === 1      // false (string !== number)
0 == false     // true (both are "falsy")
0 === false    // false (number !== boolean)
"" == false    // true (both coerce to 0)
"" === false   // false (string !== boolean)
null == undefined   // true (special case)
null === undefined  // false
```

**Rule of thumb:** Always use `===` unless you have a specific reason to use `==`. With `===`, what you see is what you get.

---

### 7. `levelUp(fighter)` — Type Accumulation

**Goal:** Increase level by 1 and boost attack by 3.

**Concept:** Type bugs compound over time. If `level` is the string `"1"`:

```js
"1" + 1    // "11"
"11" + 1   // "111"
"111" + 1  // "1111"  — it gets worse every time!
```

**The fix:** Convert BEFORE operating:
```js
Number("1") + 1   // 2
```

**Key insight:** Once a type bug gets into your data, it spreads. Convert early, convert explicitly.

---

### 8. `attack(attacker, defender)` — Combining Concepts

**Goal:** Calculate damage, check for a critical hit (`Math.random() < critChance` for 2x damage), subtract from defender's health, check if defender is defeated.

**Concept:** This function combines everything you've learned. You'll need to:
- Call `calculateDamage()` (which you already wrote)
- Convert `critChance` before comparing
- Convert `health` before subtracting
- Use `isAlive()` to check the result

**Note:** `Math.random() < "0.2"` actually works due to coercion — but relying on that is fragile and unclear. Convert explicitly.

---

### 9. `battleRound(hero, enemy)` — String Comparison

**Goal:** The faster fighter attacks first. Both attack if still alive.

**Concept:** When you compare two strings with `>` or `<`, JavaScript compares them *character by character* (like alphabetical sorting), NOT as numbers.

**Try in the console:**
```js
"12" > 8      // true (coerced to number — works!)
"12" > "8"    // false! (string comparison: "1" < "8")
"9" > "10"    // true! ("9" > "1" — first character)
```

**Key insight:** Always convert to numbers before doing numeric comparisons. `Number(hero.speed) > Number(enemy.speed)`.

---

### 10. `runBattle(hero, enemy)` — Putting It All Together

**Goal:** Loop `battleRound()` until one fighter is defeated. Log the winner. Cap at 20 rounds to prevent infinite loops.

**Concept:** This is the integration test. If you've fixed all the type bugs in the previous functions, this should just work. If you haven't... this is where they all show up at once.

---

## Quick Reference: Type Conversion

| From | To | Method | Example |
|------|----|--------|---------|
| String | Number | `Number(x)` | `Number("42")` → `42` |
| String | Number | `parseInt(x)` | `parseInt("42px")` → `42` |
| String | Number | `+x` | `+"42"` → `42` |
| Any | String | `String(x)` | `String(42)` → `"42"` |
| Any | String | `x + ""` | `42 + ""` → `"42"` |
| Any | Boolean | `Boolean(x)` | `Boolean(0)` → `false` |
| Any | Boolean | `!!x` | `!!0` → `false` |

## Key Takeaways

1. **JavaScript has types** — it just doesn't enforce them. Always know what type your data is.
2. **`typeof` is your friend** — use it to inspect values when something seems wrong.
3. **`+` is special** — it concatenates if either side is a string. All other math operators convert to numbers.
4. **Use `===` not `==`** — strict equality prevents surprises.
5. **Convert explicitly** — `Number()`, `String()`, `Boolean()` make your intent clear.
6. **The 6 falsy values** — `0`, `""`, `null`, `undefined`, `false`, `NaN`. Everything else is truthy.
7. **Type bugs are silent** — the code runs, it just gives wrong answers. That's what makes them dangerous.

## Concept Map

| Function | Concept | The Trap |
|----------|---------|----------|
| `getStatus` | String concatenation | Looks correct but hides string types |
| `isAlive` | Truthiness | `"true" !== true` |
| `calculateDamage` | `-` coercion | `-` converts to number, `+` doesn't |
| `heal` | `+` concatenation | `"100" + 20 = "10020"` |
| `applyPoison` | Falsy values | `0` is falsy |
| `compareStats` | `==` vs `===` | `"1" == 1` but `"1" !== 1` |
| `levelUp` | Type accumulation | `"1" + 1 = "11"` → `"111"` → ... |
| `attack` | Combined concepts | `critChance` coercion |
| `battleRound` | String comparison | `"12" > "8"` is `false` |
| `runBattle` | Integration | All bugs surface here |
