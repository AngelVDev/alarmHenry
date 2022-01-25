const display = document.getElementById('clock');
const audio = new Audio('https://freesound.org/data/previews/251/251461_4146089-lq.mp3');
const gold = new Audio("./golden_rule.mp3")
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function golden(){
    gold.play()
}

function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());



    display.innerText=`${hour} : ${minutes} : ${seconds}`
}

function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    console.log(value)
    alarmTime = value;
    console.log(alarmTime)
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            console.log(alarmTimeout)
            alert('Alarm set');
        }
    }
}
//2022-01-25T01:09
function HENRY(){
    setTimeout(golden, 12 * 100000)
    alert("Henry's golden rule ゴゴゴゴ")
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);
