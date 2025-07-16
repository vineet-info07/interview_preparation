// Function to compute the factorial of a number using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Example usage: Compute the factorial of 5
let number = 5;
console.log("Factorial of " + number + " is " + factorial(number));
