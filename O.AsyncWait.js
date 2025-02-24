// What is the async ? :> 

// function getDataPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }


// // Same thing with async/await
// async function getDataAsync() {
//     const result = await getDataPromise();
//     console.log(result);

// }

// function kale () {
//     return new Promise ((resolve) =>{
//         setTimeout(() => {
//             resolve("Thanks for waiting");
//         }, 5000);
//     })
// };
// async function name() {
//     console.log("Wait");
//     const result = await kale();
//     console.log(result);
//     console.log("How long have you been waiting");
// }

// name();

// asyncs works as a promise which will be use in the future
// await will hold the code or statement;

// function mom(){
//     return new Promise((resolve,reject)=>{
//         let mood = prompt('What is today Mom Mood = ');
//         setTimeout(() => {
//             if(mood==="good") {
//                 console.log("You Can Eat");
//                 setTimeout(() => {
//                    resolve("Today is Thupa"); 
//                 }, 2000);   
//             } else {
//                 reject("You can't eat it");
//             }
//         }, 1000);
//     })
// };

// async function cooked() {
//     try{
//         let store = await mom();
//         console.log("Today is Thupa"+store);
//     } catch(error) {
//         console.log(error);
//     }
//     console.log("Yipe It's tasty");
// }

// cooked();


// Function to fetch data from the API
// function fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/posts/1') // Fetch data from the API
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json(); // Parse the JSON data
//       })
//       .then(data => {
//         console.log('Data fetched:', data); // Log the fetched data
//       })
//       .catch(error => {
//         console.error('Fetch error:', error); // Handle any errors
//       });
//   }
  
//   // Call the function to fetch data
//   fetchData();




function miso () {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>{
        if(!response.ok) {
            throw new Error("Wrong");
        } 
        return response.json();
    }).then(data=>{
        console.log("Your Fetch:",data);
    }).catch(error=>{
        console.error('Please you got the error',error);
    })
}
miso();