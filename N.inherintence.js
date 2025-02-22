class Animal {
  constructor(name) {
    this.name = name;
  }
  meow() {
    console.log(`${this.name} is hungry `);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); //calling the parent's constructor
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}

// objects banune kaam
const myDog = new Dog("Max", "Golden Retriever");
myDog.meow();
myDog.bark();
