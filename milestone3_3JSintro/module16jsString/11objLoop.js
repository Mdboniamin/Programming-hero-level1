const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp'
}
//for of : array
//for in: object
for(const prop in mobile){
    console.log(prop)//will show the property name
    console.log(mobile[prop])//shows the values of the property
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, mobile[key])

}