const playBtn = document.querySelector(".btn-play");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const audio = document.querySelector(".audio");
const title = document.querySelector(".title");
const img = document.querySelector(".img");
const songDuration = document.querySelector(".songDuration");
const currentSongDuration = document.querySelector(".currentTime");
const MusicController = document.querySelector(".controller-music");
const controller = document.querySelector(".controller");

let songCount = 0;
let isPlaying = false;
let audioDuration;

const songs = [
  {
    title: "Song 1",
    songSrc: "./assets/musics/song1.mp3",
    thumbnailSrc: "./assets/images/song1.png",
  },
  {
    title: "Song 2",
    songSrc: "./assets/musics/song2.mp3",
    thumbnailSrc: "./assets/images/song2.png",
  },
  {
    title: "Song 3",
    songSrc: "./assets/musics/song3.mp3",
    thumbnailSrc: "./assets/images/song3.png",
  },
  {
    title: "Song 4",
    songSrc: "./assets/musics/song4.mp3",
    thumbnailSrc: "./assets/images/song4.png",
  },
];

function loadSong(song) {
  title.innerHTML = song.title;
  audio.src = song.songSrc;
  img.src = song.thumbnailSrc;
  //   audioDuration = audio.duration;
  console.log(audio);
}

loadSong(songs[songCount]);

function playAudio() {
  if (!isPlaying) {
    console.log("playAudio");
    audio.play();
    playBtn.querySelector("i").classList.remove("fa-play");
    playBtn.querySelector("i").classList.add("fa-pause");
    isPlaying = true;
  } else {
    audio.pause();
    playBtn.querySelector("i").classList.add("fa-play");
    playBtn.querySelector("i").classList.remove("fa-pause");
    isPlaying = false;
  }
  console.log(audio.currentTime);
}

function nextAudio() {
  songCount = (songCount + 1) % songs.length;
  loadSong(songs[songCount]);
  isPlaying = false;
  playAudio();
}

function prevAudio() {
  songCount--;
  if (songCount < 0) {
    songCount = songs.length - 1;
  }
  console.log(songCount);
  loadSong(songs[songCount]);
  isPlaying = false;
  playAudio();
}

function updateProgress() {
  const currentTime = audio.currentTime;
  //   console.log("update functon", audio);
  const duration = audio.duration;
  const progressPrecent = (currentTime / duration) * 100;
  //   console.log(currentTime, duration);
  //   convertSecToMin(sec)
  currentSongDuration.innerHTML = convertSecToMin(audio.currentTime);
  songDuration.innerHTML = convertSecToMin(audio.duration);
  MusicController.style.width = `${progressPrecent}%`;
  if (audio.ended) nextAudio();
}

function convertSecToMin(sec) {
  const s = String(Math.floor(sec % 60)).padStart(2, "0");
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  return `${m}:${s}`;
}

const controlFromController = (e) => {
  //   console.log("e.currentTarget.offsetWidth", e.currentTarget.offsetWidth);
  //   console.log("e.currentTarget.offsetLeft", e.currentTarget.offsetLeft);
  //   console.log("e.pageX", e.pageX);
  controller.addEventListener("mousemove1", controllerDragStart);

  const controllerPositionFromLeft = e.currentTarget.offsetLeft;
  const controllerWidth = e.currentTarget.offsetWidth;
  let controllerMouseClick = e.pageX;
  let progressPrecent =
    ((controllerMouseClick - controllerPositionFromLeft) / controllerWidth) *
    100;
  const duration = audio.duration;
  console.log(progressPrecent);
  MusicController.style.width = `${progressPrecent}%`;
  let songCurrentTime = (progressPrecent * duration) / 100;
  console.log(songCurrentTime);
  audio.currentTime = songCurrentTime;
  convertSecToMin(songCurrentTime);
};

function controllerDragStart(e) {
  let controllerMouseClick = e.pageX;
  console.log("drag called", controllerMouseClick);
}

playBtn.addEventListener("click", playAudio);
nextBtn.addEventListener("click", nextAudio);
prevBtn.addEventListener("click", prevAudio);
audio.addEventListener("timeupdate", updateProgress);
controller.addEventListener("click", controlFromController);

// offsetWidth => div width
// offsetLeft  => left to screen
