function inchToFeet(inch) {
  const feet = parseInt(inch / 12);
  const remainingInch = inch % 12;
  return (`${feet} Feet ${remainingInch} Inch`);
}
const myInch = 75;
const myFeet = inchToFeet(myInch);
console.log(myFeet);
function mileToKm(mile) {
  const km = mile * 1.60934;
  return km;
}
const myMile = 5;
const myKm = mileToKm(myMile);
console.log(myKm);
function kilometerToMile(kilometer) {
  const mile = kilometer / 1.60934;
  return mile;
}
const myKilometer = 10;
const myMileFromKm = kilometerToMile(myKilometer);
console.log(myMileFromKm);