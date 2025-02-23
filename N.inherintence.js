// writing inheritance in the js 

class Kim {
    constructor(name,food) {
      this.name = name;
      this.food = food;
    }
    eat () {
      return `${this.name} Likes ${this.food} So much `;
    }
}
 class Time extends Kim {
    constructor(name,food,time){
      super(name,food);
      this.time = time;
    }
    
    like () {
      return `${this.name} Eat at ${this.time} and ${this.food}He likes it so much`;
    }
 }

 const a = new Kim ("Kim Miso ", "Eggs");
 const b = new Time ("Kim Miso", 10, "Eggs");

 console.log(b.like());