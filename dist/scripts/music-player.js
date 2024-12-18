const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const progressBar = document.querySelector(".progress-bar");

audio.onloadeddata = () => {
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
};

if (audio.play()) {
  setInterval(() => {
    progressBar.value = audio.currentTime;
  }, 500);
}

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

progressBar.addEventListener("click", () => {
  audio.play();
  audio.currentTime = progressBar.value;
});

document.querySelector(".fa-backward").addEventListener("click", () => {
  audio.currentTime -= 5;
  progressBar.value = audio.currentTime;
});

document.querySelector(".fa-forward").addEventListener("click", () => {
  audio.currentTime += 5;
  progressBar.value = audio.currentTime;
});
