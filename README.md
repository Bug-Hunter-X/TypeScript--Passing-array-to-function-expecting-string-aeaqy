# TypeScript Bug: Passing Array to String Function

This repository demonstrates a common TypeScript error: passing an array to a function that expects a string as an argument.  The code attempts to use an array of strings with the `greeter` function which is designed to take only a single string.

The solution shows how to correctly handle this by either modifying the function signature to accept an array or iterating through the array to call the function for each element.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Compile and run the `bug.ts` file using the TypeScript compiler (tsc) and Node.js (node):
   ```bash
tsc bug.ts
node bug.js
```
You'll observe a runtime error in the console because the greeter function receives an array instead of a string.

## Solution

The `bugSolution.ts` file shows two possible solutions: modifying the function to accept an array or iterating through the array to handle each string individually.