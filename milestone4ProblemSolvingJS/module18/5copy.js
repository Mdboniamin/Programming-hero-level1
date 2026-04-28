let price = 25;
let com_price = price;

price = 12;
com_price= 15;
console.log(price);//changing copy variable does not effect the main variable

//when in array
const product = [25,25,25]
const com_product = product;

com_product[0] = 15;//also changes the main array

console.log(product)
console.log(com_product)
//solution for array copy
const alt_copy= [];
for(const pro of product){
    alt_copy.push(product);
}

//another way using built in function
const new_product = Array.from(product);//does not use the same memory as the original array
console.log(product)
console.log(new_product)

//another way using concat on empty array
const alt_concatProduct = [] .concat(product);
console.log(product)
console.log(alt_concatProduct)

//another easiest way using spread
const spread_copy = [...product]
console.log(product)
console.log(spread_copy)
//shallow copy & deep copy