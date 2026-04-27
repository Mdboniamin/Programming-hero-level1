const numbers =[1,2,3,4,5]
const reversed = [];
for(let i =0; i>numbers.length;i++){
    console.log(numbers[i]);
    reversed.unshift(numbers[i]);
}
console.log(reversed);

for(let i = numbers.length-1; i>=0; i--){
    reversed.push(numbers[i])
}

for(const num of numbers){
    reversed.unshift(num)
}
console.log(numbers)
numbers.reverse();
console.log(numbers)