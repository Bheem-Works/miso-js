// Class : ES6 features provides a more structure and cleaner way to work with objects compared to traditional constructor function.

class A {
    constructor (food,price) {
        this.food = food;
        this.price = price;
    }
    likes () {
        return`Miso Likes { ${this.food} } soo much. But the price is ${this.price}`;
    }
    
}
const b = new A ("Eggs",30);
const c = new A ("Meat",300);

console.log(c.likes());
console.log(b.likes());


