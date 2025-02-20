// Destructuring is a feature in JavaScript that allows you to unpack values from arrays or objects into separate variables easily.

// let a = [1,2,4,5];
// let [one,two,three,four,five] = a;
// console.log(one);

// example one
// swapping the value of the two variables
// let a = 1;
// let b = 2;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// example two
// using arrays But the method is the same
// let colors = ['red','blue','green'];
// [a,b,c] = colors;
// console.log(a);
// console.log(b);
// console.log(c);

// example three
// assign arrays elements to variables
// const ranga = ['rato','nilo','haraiyo','gulabi','kalo'];
// [pahelo,dosro,tesro,...miso] = ranga;
// console.log(pahelo);
// console.log(dosro);
// console.log(tesro);
// console.log(miso);

// example four
// extract the value from the objects
// let cat = {
//     firstName:'miso',
//     color:'white',
//     eye:'mermaid-green',
//     age:1,
//     job:'hunter',
// }

// let catHo = {
//     firstName:'vim',
//     color:'white/Black',
//     eye:'mermaid-Blue',
//     age:19,
// }

// const {firstName,color,eye,age,job = "no-Job"}= catHo;

// console.log(firstName);
// console.log(color);
// console.log(eye);
// console.log(age);
// console.log(job);

// example Five
//     function showDestruction ({firstName,color,eye,age,job = "miso Boss"}) {
//         console.log(`Name:${firstName}`);
//         console.log(`color:${color}`);
//         console.log(`eye:${eye}`);
//         console.log(`age:${age}`);
//         console.log(`job:${job}`);
//     }
//     let cat = {
//         firstName:'miso',
//         color:'white',
//         eye:'mermaid-green',
//         age:1,
//         job:'hunter',
//     }

//     let catHo = {
//         firstName:'vim',
//         color:'white/Black',
//         eye:'mermaid-Blue',
//         age:19,
//     }

// showDestruction(catHo);

// Spread operator : The spread operator (...) in JavaScript is a powerful and versatile feature that allows you to expand elements of an array, object, or other iterable into individual elements. It's widely used for various tasks such as merging arrays, copying arrays, and passing array elements as individual arguments to functions.

// numbers separate
// let num = [1, 2, 3, 4, 5];
// let maximum = Math.max(num); // it will give the nan because it is not separate and it's pack we have to unpack it.
// let maximum = Math.max(...num);
// let min = Math.min(...num);
// console.log(maximum);
// console.log(min);

// letters separate
// let name = "Vim";
// let letters = [...name].join('-');
// console.log(letters);

// fruits 
// let fruits = ['apple','litchi','orange'];
// let vegetable = ['sakh','banda','kobi'];
// let food = [...fruits,...vegetable,"macha","alu"];
// console.log(food);

