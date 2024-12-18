const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");

playBtn.addEventListener("click", () => {
  audio.play();
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
  playBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
});
