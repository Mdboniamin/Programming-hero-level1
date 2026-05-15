const disha = 56;
const salman = 95;
if (disha > salman) {
    console.log("Disha is greater than Salman");
}else if (salman > disha) {
    console.log("Salman is greater than Disha");
}else {
    console.log("Disha and Salman are equal");
}   

function getMax(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Both numbers are equal";
    }
}

const max = getMax(10, 20);
console.log("The maximum number is:", max);

const num1 = 15;
const num2 = 25;
const num3 = 10;
if (num1 > num2 && num1 > num3) {
    console.log("The maximum number is:", num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("The maximum number is:", num2);
} else{
    console.log("The maximum number is:", num3);
}