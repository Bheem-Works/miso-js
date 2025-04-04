console.log("let's create a filter methods right now. ");
let a = [1,2,3,4,5];
let updateArray = a.map((number,index)=>{
    return number + 1;
})

console.log(updateArray);