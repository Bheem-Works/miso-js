let startTime;
let elapsedTime = 0;
let timerInterval;

function displayTime() {
  const milliseconds = Math.floor(elapsedTime % 1000);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  document.getElementById("display").textContent = `${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}.${String(milliseconds).padStart(3, "0")}`;
}

function startStop() {
  if (document.getElementById("startStop").textContent === "Start") {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
      elapsedTime = Date.now() - startTime;
      displayTime();
    }, 10);
    document.getElementById("startStop").textContent = "Stop";
  } else {
    clearInterval(timerInterval);
    document.getElementById("startStop").textContent = "Start";
  }
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayTime();
  document.getElementById("startStop").textContent = "Start";
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);
