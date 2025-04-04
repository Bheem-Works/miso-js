// making a duplicate arrays 

//  #1 By using the spread operator 
// let a = [1,2,3];
// let b = [...a];
// console.log(b);

// // by using the map methods 
// let c = [1,2,3];
// c.map((arr,index)=>{
//     console.log(arr);
// })

// let d = [2,3,4,5];
// for(let i = 0; i<d.length; i++) {
//     console.log(d[i]);
// }   

// es6 version
// const  first = (array,n) =>{
//     if(array==null) {
//         return null;
//     }
//      if(n==null) {
//         return array[0];
//      }
//      return array.slice(0,n);
// }

// console.log(first([7,2,3,4,-4]));


// Ascending to the descending arrays 

// let asc = [8,3,9,4,1];
// let maxNumber = asc[0];
// for(let i = 0; asc.length; i++) {
//     if(asc[i]>maxNumber) {
//          maxNumber = [i];
//     }
// }


// console.log(maxNumber);
// console.log("code nai run hudaina aaluu")

// let ascending = [9,3,4,5];
// ascending.sort((a,b)=>a-b);
// console.log(ascending);

let descending = [5,6,7,8,9];
descending.sort((a,b)=> b - a );
console.log(descending);

// recursice : it call itself it is the funciton which call it self if it is not clled then it will run infinetly 
function countDown (fromNumber) {
    console.log(fromNumber);
    let number = fromNumber -1 ;

    if(fromNumber > 0) {
        countDown(number);
    }
}

countDown(3);