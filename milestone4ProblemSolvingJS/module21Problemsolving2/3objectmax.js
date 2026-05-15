const mobiles = [
    { name: "iPhone", price: 999 , camera: '12MP', color: 'Silver'},
    { name: "Samsung", price: 899 , camera: '16MP', color: 'Black'},
    { name: "Google", price: 799 , camera: '12MP', color: 'White'},
    { name: "OnePlus", price: 699 , camera: '48MP', color: 'Red'},
    { name: "Xiaomi", price: 599 , camera: '64MP', color: 'Blue'},
];

function getCheapestMobile(mobiles) {
    let cheapestMobile = mobiles[0];
    for (const mobile of mobiles) {
        if (mobile.price < cheapestMobile.price) {
            cheapestMobile = mobile;
        }
    }
    return cheapestMobile;
}
const cheap = getCheapestMobile(mobiles);
console.log("The cheapest mobile is:", cheap);