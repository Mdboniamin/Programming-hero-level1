const height = [65, 66, 68, 70, 72, 75, 80];
function maxArrayValue(arr) {
    let maxValue = arr[0];
    for (const number of arr) {
        if (number > maxValue) {
            maxValue = number;
        }    }
    return maxValue;
}
const max = maxArrayValue(height);
console.log("The maximum value in the array is:", max);