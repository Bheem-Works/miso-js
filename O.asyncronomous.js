    // Asynchronous is a a function that use to run the code without blocking  the code while the execution of others code and we can also give execute the  
    // remaining the left code 


    // promise : what is the promise ?
        // An objects that will produce the single value at the future 
// .then  we use the .then to handle the promise when the code id resolved it will save as the  and later we can call it 
    
// const toshiba = new Promise((resolve, reject) => {
//     let x = 0;
//     if(x===0) {
//         resolve("okay it is working");
//     } else {
//         reject("Brother it is not working");
//     }
// });

// toshiba.then(
//     (result) =>{
//         console.log(result);
//     }
// ).catch((error)=>{
//     console.log(error);
// })


// now creating a new  promises: promises are use for fetching the data and reading the file and the data base operations

// const dell = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const data = 'vim';
//         if(data) {
//             resolve(data);
//         } else {
//             reject("file error reading")
//         }
//     }, 3000);
// })
// dell.then(
//     (result) =>{
//         console.log(result);
//     }
// ).catch((error)=>{
//     console.log(error);
// })

// Tasks by the ChatGpt

    // function placeOrder(){
    //     return  new Promise((resolve,reject)=>{
    //         let x = 10;
    //         setTimeout(() => {
    //             if(x>9) {
    //                 resolve("Your delivery is on time");
    //             } else {
    //                 reject("OPPS, sorry We are late");
    //             };

                
    //         }, 300);
    //     })
    // }
    // placeOrder().then(result=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // placeOrder().then(result =>{
    //     console.log("Second Order:",result);
    // }).catch((error=>{
    //     console.log("Second Order",error)
    // }));


    // original one by the time 
    function hkHotel(){
    return new Promise((resolve,reject) =>{
        let orderTime = Date.now();
        let deliveryTime = Math.floor(Math.random()*500) + 1000;
        console.log(deliveryTime);
        let timeLimit = 2000;

        console.log(`Order placed. Estimated delivery time ${deliveryTime/100} Seconds`);
        setTimeout(() => {
            let currentTime = Date.now();
            let timeTaken = currentTime - orderTime;
            

            if(timeTaken <= timeLimit) {
                resolve(`Order arrived on time in ${timeTaken/1000} seconds!`);
            } else {
                reject(`Order delayed! It took ${timeTaken/1000} Seconds.`)
            }
        }, 3000);
    });
}

hkHotel().then(result=>{
    console.log("👍" + result)
}).catch((error)=>{
    console.log("👎"+"You are wrong buddy:"+error);
})