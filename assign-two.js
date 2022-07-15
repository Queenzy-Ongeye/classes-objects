class KioskCalc {
    constructor(fruit, quantity) {
        this.fruit = fruit;
        this.quantity = quantity;
        this.fruitlist = {
            "orange": 30,
            "mango": 15,
            "avocado": 40
        };
        this.getTotalCost = function () {

            return `${this.quantity} ${this.fruit} for ${this.fruitlist[this.fruit] * this.quantity}.00`

        }
    }
}

var fruitName = new KioskCalc('pear', 6);
fruitName.fruitlist ['pear'] = 50
console.log(fruitName.getTotalCost());