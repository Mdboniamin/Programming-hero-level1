function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const year1 = 2020;
const year2 = 2021;
const year3 = 1900;
const year4 = 2100;
const year5 = 2400;
const year6 = 1900;
console.log(isLeapYear(year1)); // true
console.log(isLeapYear(year2)); // false
console.log(isLeapYear(year3)); // false
console.log(isLeapYear(year4)); // false
console.log(isLeapYear(year5)); // true
console.log(isLeapYear(year6)); // false