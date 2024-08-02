let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;
let lap=false;
let l=0;
let lapnow=null;
let laps=null;

startButton.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopButton.addEventListener('click', function () {
    timer = false;
});

resetButton.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    document.getElementById('lapRecord').innerHTML = "";
});

lapButton.addEventListener('click', function () {
        lap=true; 
        l++;
        stopWatch(); 
});

function stopWatch() {
    let hourString = hour;
    let minuteString = minute;
    let secondString = second;
    let countString = count;
    if (hour < 10) {
        hourString = "0" + hourString;
    }
    if (minute < 10) {
        minuteString = "0" + minuteString;
    }
    if (second < 10) {
        secondString = "0" + secondString;
    }
    
    if (count < 10) { 
        countString = "0" + countString; 
    } 
    if(lap){
        lapnow="Lap "+l+": "+hourString+":"+minuteString+":"+secondString;
        laps = document.getElementById('lapRecord').innerHTML + lapnow;
        document.getElementById('lapRecord').innerHTML = laps+"<br>";
        lap=false;
    }
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        hourString = hour;
        minuteString = minute;
        secondString = second;
        countString = count;
        if (hour < 10) {
            hourString = "0" + hourString;
        }
        if (minute < 10) {
            minuteString = "0" + minuteString;
        }
        if (second < 10) {
            secondString = "0" + secondString;
        }
        document.getElementById('hour').innerHTML = hourString;
        document.getElementById('minute').innerHTML = minuteString;
        document.getElementById('second').innerHTML = secondString;
        setTimeout(stopWatch, 10);
    }
}
