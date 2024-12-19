let timeInSec = 0;
let status = "stop";
let intervalId = null; // To store the interval ID

let sec = 0;
let min = 0;
let hr = 0;

// Get references to DOM elements for better performance
const secContainer = document.querySelector(".sec-container");
const minContainer = document.querySelector(".min-container");
const hrContainer = document.querySelector(".hr-container");
const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-pause");

// Update the UI
function updateDisplay() {
  secContainer.textContent = sec < 10 ? `0${sec}` : sec;
  minContainer.textContent = min < 10 ? `0${min}` : min;
  hrContainer.textContent = hr < 10 ? `0${hr}` : hr;
}

// Start the stopwatch
function start() {
  if (status === "start") return; // Prevent multiple intervals
  status = "start";

  intervalId = setInterval(() => {
    timeInSec++;
    sec = timeInSec % 60;
    min = Math.floor((timeInSec / 60) % 60);
    hr = Math.floor(timeInSec / 3600);

    updateDisplay();
  }, 1000);
}

// Pause the stopwatch
function pause() {
  status = "stop";
  clearInterval(intervalId);
}

// Reset the stopwatch
function reset() {
  pause(); // Stop any ongoing interval
  timeInSec = 0;
  sec = 0;
  min = 0;
  hr = 0;
  updateDisplay();
}

// Event listeners
playBtn.addEventListener("click", () => {
  start();
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
});

pauseBtn.addEventListener("click", () => {
  pause();
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");
});

document.querySelector(".fa-stop").addEventListener("click", () => {
  reset();
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");
});
