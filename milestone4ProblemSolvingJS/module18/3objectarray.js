const numbers = [1, 2, 43, 54, 4];
const players = [{}, {}, {}];
const employee = [
    {name: 'ashik', designation: 'content writer', salary: 25000},
    {name: 'atik', designation: 'developer', salary: 29000},
    {name: 'abdul rahim', designation: 'digital markete', salary: 21000}
]
employee[0].name = 'Ashraf';
console.log(employee[1].salary)
for(const employ of employee){
    console.log(employ);
}
for(const employ of employee){
    console.log(employ.salary);
}
for(const employ of employee){
    const person = emp;
    const personInfo = person.name +': ' + person.salary;
    console.log(personInfo);
}