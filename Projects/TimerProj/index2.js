const startBtn = document.querySelector(".btn-start");
const pauseBtn = document.querySelector(".btn-pause");
const flagBtn = document.querySelector(".btn-flag");
const resetBtn = document.querySelector(".btn-reset");
const flags = document.querySelector(".flags");
const minHTML = document.querySelector(".min");
const secHTML = document.querySelector(".sec");
const mSecHTML = document.querySelector(".msec");

let interval;
let timerStart=false
let mSec=0,sec=0,min=0;
let lastFlagTime=0;
let flagCount=0;

const formatTime = (time)=>{
    return time <= 9 ? "0" + time : time
}
const timer = ()=> {
    mSec+=10;
    if(mSec>=1000){
        mSec=0;
        sec++;
    }
    if (sec >=60){
        sec=0;
        min++
    }
    mSecHTML.innerHTML=formatTime(mSec);
    secHTML.innerHTML=formatTime(sec);
    minHTML.innerHTML=formatTime(min);
    
}
const startTimer = () => {
    if(timerStart === true) return;
    clearInterval(interval);
    interval = setInterval(timer,10);
    
}

startBtn.addEventListener('click', () => {
    startTimer();
})
pauseBtn.addEventListener('click',()=>{
    clearInterval(interval);
})
flagBtn.addEventListener('click',()=>{
    flagCount++;
    let lastFlagTime = `${flagCount}. ${formatTime(min)}:${formatTime(sec)}:${formatTime(mSec)}`
    let f= document.createElement('p')
    f.innerHTML=lastFlagTime
    flags.appendChild(f)
    const style=getComputedStyle(flags)
    if(Number(style.height.split('px')[0])>=100){
        flags.style.overflowY="scroll"
        console.log("in flasg");
    }
    console.log(lastFlagTime,typeof style.height.split('px')[0])
})

resetBtn.addEventListener('click',()=>{
    clearInterval(interval);
    mSec=0,sec=0,min=0;
    flags.innerHTML=""
    mSecHTML.innerHTML="00"
    secHTML.innerHTML="00"
    minHTML.innerHTML="00"
})