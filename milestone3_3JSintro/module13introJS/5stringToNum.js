//fundamental of js numbers
var orangePrice = 30;
var applePrice = '20';
//
//parseInt convert string to Int
//
console.log(typeof orangePrice);
console.log(parseInt(applePrice)+orangePrice);


var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total.toFixed(3));//also converts to string
let x = '10';
let num = Number(x);
console.log(num);

const a = isNaN('11');
console.log(a)
const b = isNaN(2-10);
console.log(b);