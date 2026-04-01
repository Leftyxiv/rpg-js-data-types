const add = function (a, b) {
 return a + b;
}

function multiply (a, b) {
    return a * b;
}

const divide = (a, b) => {
    return a / b
}

console.log(divide(15, 3));

() => 1 + 2;
(1 + 2)()

const factorial = (n) => {
      // TODO: If n <= 1, return 1 (base case)
      if (n <= 1) {
        return 1
      }
      return n * factorial(n - 1)
      // Otherwise, return n * factorial(n - 1) (recursive step)
}
console.log(factorial(7))
  