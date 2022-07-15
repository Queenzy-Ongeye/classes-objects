let kioskPurchase = {
    fruit: 'Orange',
    price: 30,
    total_cost: function (cost) {
        return `2 ${this.fruit} for KES ${this.price * 2}.00`;
    }
}
console.log(kioskPurchase.total_cost());