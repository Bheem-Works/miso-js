let array = ["miso", "bhadhur", "magar"];
let currentIndex = 0;
// create interval id

let intervalId = setInterval(() => {
  currentIndex = (currentIndex + 1) % array.length;
  console.log("Current Index:", array[currentIndex]);
}, 2000);

// lets stop it
setTimeout(() => {
  clearInterval(intervalId);
  console.log("it is stopped man");
}, 8000);
