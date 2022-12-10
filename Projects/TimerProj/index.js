const startBtn = document.querySelector(".btn-start");
const pauseBtn = document.querySelector(".btn-pause");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const mSec = document.querySelector(".msec");

let counter = 0;
let interval;
let timerStart = false;
let timeElapsed;
let timeNow;
let pausedTime;
let resumeTimer = false;
function calcTime(timeStart) {
  if (resumeTimer === true) {
    showTime();
    // pausedTime = undefined;
    resumeTimer = false;
    return;
  }
  timeNow = Math.floor(new Date().getTime());
  timeElapsed = timeNow - timeStart;
  console.log("timeStart:  >", timeElapsed);
  showTime();
}

function showTime() {
  //   let minElapsed = Math.floor(timeElapsed / 60);
  //   let secElapsed = Math.floor(timeElapsed % 60);
  //   min.innerHTML = minElapsed;
  //   sec.innerHTML = secElapsed;

  let mSecElapsed = Math.floor(timeElapsed % 100);
  mSec.innerHTML = mSecElapsed <= 9 ? "0" + mSecElapsed : mSecElapsed;
  console.log(Math.floor(timeElapsed % 100));

  let secElapsed = Math.floor(timeElapsed / 1000);
  console.log(secElapsed);
  sec.innerHTML = secElapsed <= 9 ? "0" + secElapsed : secElapsed;

  let minElapsed = Math.floor(timeElapsed / (1000 * 60));
  console.log(minElapsed);
  min.innerHTML = minElapsed <= 9 ? "0" + minElapsed : minElapsed;
}

startBtn.addEventListener("click", () => {
  if (timerStart) return;
  let timeStart = Math.floor(new Date().getTime());
  clearInterval(interval);
  interval = setInterval(() => calcTime(timeStart), 80);
  timerStart = true;
});

// pauseBtn.addEventListener('click',()=>{
//   if (timerStart) return;
//   let timeStart = 
//   clearInterval(interval);
//   interval = setInterval(() => calcTime(timeStart), 80);
//   timerStart = true;
// })

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  if (!timerStart) {
    interval = setInterval(() => calcTime(pausedTime), 80);
    timerStart = true;
    resumeTimer = false;
    return;
  }
  clearInterval(interval);
  pausedTime = timeElapsed;
  console.log(pausedTime);
  console.log("pause clicked");
  //   interval = setInterval(() => calcTime(pausedTime), 80);
  timerStart = false;
  resumeTimer = true;
});
