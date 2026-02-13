# API Reference

This document provides detailed information about the functions and modules available in MyFirstRepo.

## Python Modules

### hello.py

The `hello` module provides simple greeting functionality.

#### Functions

##### `greet(name="World")`

Greet someone by name.

**Parameters:**
- `name` (str, optional): The name to greet. Defaults to "World".

**Returns:**
- str: A greeting message in the format "Hello, {name}!"

**Example:**
```python
from src.hello import greet

print(greet())  # Output: Hello, World!
print(greet("GitHub"))  # Output: Hello, GitHub!
```

## JavaScript Modules

### calculator.js

The `calculator` module provides basic arithmetic operations.

#### Functions

##### `add(a, b)`

Add two numbers.

**Parameters:**
- `a` (number): First number
- `b` (number): Second number

**Returns:**
- number: The sum of a and b

**Example:**
```javascript
const result = add(5, 3);  // Returns 8
```

##### `subtract(a, b)`

Subtract two numbers.

**Parameters:**
- `a` (number): First number
- `b` (number): Second number

**Returns:**
- number: The difference of a and b

**Example:**
```javascript
const result = subtract(10, 4);  // Returns 6
```

##### `multiply(a, b)`

Multiply two numbers.

**Parameters:**
- `a` (number): First number
- `b` (number): Second number

**Returns:**
- number: The product of a and b

**Example:**
```javascript
const result = multiply(6, 7);  // Returns 42
```

##### `divide(a, b)`

Divide two numbers.

**Parameters:**
- `a` (number): First number (dividend)
- `b` (number): Second number (divisor)

**Returns:**
- number: The quotient of a and b

**Throws:**
- Error: If b is zero (division by zero)

**Example:**
```javascript
const result = divide(20, 5);  // Returns 4

// Error handling
try {
    divide(10, 0);
} catch (error) {
    console.log(error.message);  // "Cannot divide by zero"
}
```

## Usage Examples

For complete usage examples, please see the [examples](../examples/) directory:

- [hello_example.py](../examples/hello_example.py) - Python greeting examples
- [calculator_example.js](../examples/calculator_example.js) - JavaScript calculator examples
