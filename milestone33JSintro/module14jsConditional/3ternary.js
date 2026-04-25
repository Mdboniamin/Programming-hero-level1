/**
 * ? :
 * condition? do something when true: do something when false
 */
age = 12;
age >= 18? console.log('ghumai thako'): console.log('vote dio');

let price = 2000;
const isLeader = true;

// price = isLeader === true ? 0: price + 100;
price = isLeader === true? price > 1000? price/2 : price = 0: price + 100;

console.log(price);