/**
 * Calculator Module
 * 
 * This module provides basic arithmetic operations.
 */

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtract two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The difference of a and b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The quotient of a and b
 * @throws {Error} If b is zero
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add, subtract, multiply, divide };
}
