

const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 2, 3, 4, 5, 1, 2, 6, 7];

function removeDuplicate(arr) {
  const unique = [];
  for (const item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}
console.log(removeDuplicate(biryaniKhor)); 
console.log(removeDuplicate(numbers)); 