function layeredDiscount(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const remainingPrice = 70;

    if (quantity <= 100) {
        return quantity * first100Price;
    }
    else if (quantity <= 200) {
        const first100Cost = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const second100Cost = remainingQuantity * second100Price;
        return first100Cost + second100Cost;
    }
    else {
        const first100Cost = 100 * first100Price;
        const second100Cost = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingCost = remainingQuantity * remainingPrice;
        return first100Cost + second100Cost + remainingCost;
    }
}
const totalCost = layeredDiscount(250);
console.log(totalCost);