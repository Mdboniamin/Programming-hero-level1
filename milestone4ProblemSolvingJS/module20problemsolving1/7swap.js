let a = 5;
let b = 7;

console.log(a, b);

// // Swap the values of a and b
// let temp = a; // Store the value of a in a temporary variable
// a = b;        // Assign the value of b to a
// b = temp;     // Assign the value of temp (original a) to b 
//using destructuring assignment
[a, b] = [b, a];
console.log(a, b);