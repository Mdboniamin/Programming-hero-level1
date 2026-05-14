function oddAverage(numbers) {
  const oddNumbers = [];
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 !== 0) {
      oddNumbers.push(number);
      sum += number;
    }
  }
  if (oddNumbers.length === 0) {
    return 0;
  }
  return sum / oddNumbers.length;
}
const numbers1 = [42, 13, 58, 65, 81, 96, 7];
const numbers2 = [1, 2, 3, 4, 5];
const numbers3 = [2, 4, 6, 8, 10];
const numbers4 = [1, 3, 5, 7, 9];
const numbers5 = [0, -1, -2, -3, -4];
console.log(oddAverage(numbers1)); // 3
console.log(oddAverage(numbers2)); // 0
console.log(oddAverage(numbers3)); // 5
console.log(oddAverage(numbers4)); // -2
console.log(oddAverage(numbers5)); // -2