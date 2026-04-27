const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandarban', 'saintmartin', 'kuakata']
}

console.log(person)
console.log(person.name)
//dot notation
const income = person.salary;
console.log(income)
//bracket notation
console.log(person['age'])
const boyos = person['age']
//will give error
// console.log(person.'fav places')
console.log(person['fav places'])//right way

//keyName
const keyName = 'profession';
console.log(person[keyName]); 