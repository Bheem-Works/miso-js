// callBack function : callback function le auta function lai arko function bhitra argument ko rup ma pass garerw pachi kunai bishes 
// aswasta ma execute garaune concept ho 
// A function that is passed to an argument to the another functions

// function a (name,miso) {
//     console.log("Hello"+name);
//     miso();
// }
// function b() {
//     console.log("Evening");
// }
// a("Vim",b);


// Now let's pass the number argument through the callBack functions

// function num(m,n) {
//     let f = m +n;
//     return f;
// }
// let f = num(4,5);
// console.log(f);
// console.log(num(3,5));

// function game (g,m,show){
//     let save = g+m;
//     show(save);
// }
// function display(sum) {
//     console.log("Your total sum is : ",sum);
// }
// game(2,3,display);


// Exercises: create multiple three function or multiple and call at once function by using the call back functions();

// function vim(name,place,sexy) {
//     console.log("Hello" + name);
//     place();
//     sexy();
// }
// function f() {
//     console.log("vim is so handsome");
// } 
// function g () {
//     console.log("vim is so sexy");
// }
// vim("sol",f,g);

// by using the set time out
// function pokemon (one,two) {
//         setTimeout(() => {
//         console.log(`Vim has a super ${one}`);
//     }, 4000);
//     two();
// }
// function row () {
//     console.log("Wait")
// }
// pokemon("Rick",row);


