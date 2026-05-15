const products = [
{name: 'shampoo', price: 300},
{name: 'conditioner', price: 250},
{name: 'body wash', price: 400},
{name: 'face wash', price: 150},
{name: 'lotion', price: 350}
]

function getTotalPrice(products) {
    let totalPrice = 0;
    for (const product of products) {
        totalPrice += product.price;
    }
    return totalPrice;
}
const total = getTotalPrice(products);
console.log("The total price of all products is:", total);