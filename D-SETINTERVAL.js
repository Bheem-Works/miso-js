let arrays = ["vim", "bhadhur", "magar"];
let currentIndex = 0;

let intervalId = setInterval(() => {
  // Get current name and log it
  console.log("Current name:", arrays[currentIndex]);

  // Update index for next iteration
  currentIndex = (currentIndex + 1) % arrays.length;
}, 2000); // Changed to 2000ms (2 seconds)

// Stop after 20 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("it is stopped");
}, 8000);
