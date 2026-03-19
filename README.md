# RPG Battle — JS Data Types

Learn JavaScript data types and dynamic typing by building an RPG battle system. Each function exposes a common type coercion bug — you'll implement them, watch them break, and learn how to fix them.

## Files

| File | Description |
|------|-------------|
| `starter.html` | Start here. All 10 functions are stubbed with TODO comments. Open in your browser and editor. |
| `index.html` | Completed version with implementations (don't peek until you've tried it yourself!) |
| `lesson-plan.md` | Reference notes covering each concept with examples and a cheat sheet |

## Getting Started

1. Open `starter.html` in your browser
2. Open the browser console (F12 > Console tab)
3. Read the console output — notice anything weird?
4. Open `starter.html` in your code editor
5. Work through the 10 functions in order

## Concepts Covered

| Function | Concept |
|----------|---------|
| `getStatus` | String concatenation |
| `isAlive` | Truthiness (`"true"` is not `true`) |
| `calculateDamage` | Why `-` coerces but `+` concatenates |
| `heal` | The `+` concatenation trap (`"100" + 20 = "10020"`) |
| `applyPoison` | Falsy values (`0`, `""`, `null`, `undefined`, `false`, `NaN`) |
| `compareStats` | `==` vs `===` |
| `levelUp` | Type accumulation (`"1" + 1 = "11"`) |
| `attack` | Combining earlier concepts |
| `battleRound` | String comparison (`"12" > "8"` is `false`) |
| `runBattle` | Putting it all together |
