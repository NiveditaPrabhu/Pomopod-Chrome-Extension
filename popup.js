const startingMinutes = 1;
let time = startingMinutes * 60; 

const countdownEl = document.getElementById('countdown');

let countDownInterval = setInterval(updateCountDown, 1000);

let volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("mousemove", setVolume);
brownNoise.play();

function setVolume() {
    brownNoise.volume = volumeSlider.value/100;
}

let btn1 = document.createElement("button");
btn1.innerHTML = "Pause";
document.body.appendChild(btn1);
btn1.onclick = function () {
    stopTimer();
};

let btn2 = document.createElement("button");
btn2.innerHTML = "Resume"
document.body.appendChild(btn2)
btn2.onclick = function () {
    countDownInterval = setInterval (updateCountDown, 1000);
}

function stopTimer() {
    clearInterval(countDownInterval);
}

function  updateCountDown() {
    const minutes =  Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds<10 ? '0'+seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;    
    time--;
    if (minutes==0 && seconds==0){
        document.getElementById("timerAudio").play();
        stopTimer();
    }
}

