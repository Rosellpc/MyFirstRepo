/**
 * Example usage of the calculator module.
 * 
 * This demonstrates how to use the calculator functions.
 */

// Load calculator functions
const { add, subtract, multiply, divide } = require('../src/calculator');

console.log("=== Calculator Examples ===");
console.log();

// Example 1: Addition
console.log("Example 1: Addition");
console.log("5 + 3 =", add(5, 3));
console.log();

// Example 2: Subtraction
console.log("Example 2: Subtraction");
console.log("10 - 4 =", subtract(10, 4));
console.log();

// Example 3: Multiplication
console.log("Example 3: Multiplication");
console.log("6 * 7 =", multiply(6, 7));
console.log();

// Example 4: Division
console.log("Example 4: Division");
console.log("20 / 5 =", divide(20, 5));
console.log();

// Example 5: Error handling
console.log("Example 5: Error handling");
try {
    console.log("10 / 0 =", divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}
