function display(clock) {
  return document.getElementById(clock);
}

function updateTime(display, offset) {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const localDate = new Date(utc + 3600000 * offset);
  const hour = formatTime(localDate.getHours());
  const minutes = formatTime(localDate.getMinutes());
  const seconds = formatTime(localDate.getSeconds());
  display.innerText = `${hour} : ${minutes} : ${seconds}`;
}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}

const argClock = display("clockSelf");
const chileClock = display("clockChile"); //-3
const colClock = display("clockCol"); //-5
const mexClock = display("clockMex"); //-6
const venClock = display("clockVen"); //-4.5
const perúClock = display("clockPer"); //-5
const españaClock = display("clockEsp"); //+2

setInterval(() => updateTime(argClock, -3), 500);
setInterval(() => updateTime(chileClock, -4), 500);
setInterval(() => updateTime(colClock, -5), 500);
setInterval(() => updateTime(mexClock, -6), 500);
setInterval(() => updateTime(venClock, -4), 500);
setInterval(() => updateTime(perúClock, -5), 500);
setInterval(() => updateTime(españaClock, 2), 500);
