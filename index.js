const display = document.getElementById('clock');

const audio = new Audio('https://freesound.org/data/previews/251/251461_4146089-lq.mp3');
const gold = new Audio("./golden_rule.mp3");
const n = new Audio("./nani.mp3")
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
    alarmTime = value
    console.log(alarmTime)
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        console.log(current)
        const timeToAlarm = new Date(alarmTime);
        console.log(timeToAlarm)

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        } else {
            n.play()
            alert('¿¿NANI??')
        }
    }
}

function HENRY(){
    setTimeout(golden, 12 * 100000)
    alert("Dis is Henry's golden rule ゴゴゴゴ")
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);
