let kioskPurchase = {
    fruit: 'Orange',
    price: 30,
    total_cost: function (fruitName, quantity) {
        return `${quantity} ${fruitName} for KES ${this.price * quantity}.00`;
    }
}
console.log(kioskPurchase.total_cost('mango', 5));