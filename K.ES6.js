// Arrow functions are a shorter way to write functions that were introduced in ES6 (JavaScript 2015)

// without arrow function
// function miso() {
//     console.log("miso is sleeping right now ");
// }
// miso();

// by using the arrow functions
// let jiva = () => {
//   console.log("miso is awesome")
// }
// jiva();

// let num = num => num + num;
// console.log(num(2,2));

// let man = () => 'vim is soo good';
// console.log(man());

// .filter methods : The .filter() method is an array method in JavaScript that creates a new array with elements that pass a certain condition.

// let glass= ['name','miso','khapangi','magar'
// ];
// let filter = glass.filter(()=>{
//     return `this is a ${glass}`;
// })
// console.log(filter);

// find the arrays methods
// let findEven = [2,3,4,5,6];
// let evenNum = findEven.filter(
//     num => num%2 == 0
// )
// console.log(evenNum);

// Filtering Words with More than 5 Letters
// let long = ['banana','miso','vimroiesi','glass','giraffe'];
// let bigLetter = long.filter(word => word.length <= 4);
// console.log(bigLetter);

//The this keyword in JavaScript refers to the current execution context (the object that is calling the function). The value of this depends on where and how it's used.

// function showThis() {
//     console.log(this);
// }
// showThis();

// 2️⃣ this in an Object Method
// let umaru = {
//     name:'miso',
//     call :  () => {
//         console.log("So Sexy" + this.name);
//     }
// };
// umaru.call();

// function person(name,caste) {
//     this.name = name;
//     this.caste = caste;
// }
// let user = new person("bheem","magar");
// let userOne = new person("miso","magar");
// console.log(`${user.name} ${user.caste}`);
// console.log(userOne.caste);

//Arrays.Map =  The .map() method in JavaScript creates a new array by applying a function to each element of the original array.
// username by using the arrays
// let arrays = [2,3,4,5,5];
// let map = arrays.map(num => num + num);
// console.log(map);

// let useName = [
//     {name:'game', age:19},
//     {name:'miso',age:1}
// ];
// let mapping = useName.map(user => user.name);
// console.log(mapping);

// colors in mapping arrays
// const colors = ["red","green","blue"];
// let items = colors.map(color => `<li>${colors}</li>`)
// console.log(items);
