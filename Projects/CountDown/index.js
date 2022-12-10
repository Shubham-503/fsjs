const startBtn = document.querySelector('.btn-start');
const pauseBtn = document.querySelector('.btn-pause');
const resetBtn = document.querySelector('.btn-reset');
const hourHtml = document.querySelector('.hour')
const minHtml = document.querySelector('.min')
const secHtml = document.querySelector('.sec')
const timeInput = document.querySelector('#time')

// convert time into sec
let time = 0;
let interval;

const formatTime = (time)=>{
    return time <= 9 ? "0" + time : time
}

const showTime = (time) => {
    let sec,min,hour;
    sec=time%60;
    secHtml.innerHTML=formatTime(sec)
    min=Math.floor((time/60)%60)
    minHtml.innerHTML=formatTime(min)
    hour=Math.innerHTML=Math.floor(time/3600)
    hourHtml.innerHTML=formatTime(hour)
    timeInput.value=`${formatTime(hour)}:${formatTime(min)}:${formatTime(sec)}`
}

const countDown = () => {
    showTime(time--);
    time -= 1;
    if(time<=0){
        clearInterval(interval)
    }
}


startBtn.addEventListener('click', () => {
    time=0
    console.log( timeInput.value)
    let time2=timeInput.value.split(":").reverse()
    time2.forEach((el,idx)=>{
        time+=el*Math.pow(60,idx)
    })
    console.log(time);
    clearInterval(interval);
    interval = setInterval(countDown, 1000)

})

pauseBtn.addEventListener('click',()=>{
    clearInterval(interval)
})
resetBtn.addEventListener('click',()=>{
    clearInterval(interval)
    timeInput.value="00:00:00"

})