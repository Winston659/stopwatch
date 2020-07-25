let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let displayedMilliseconds = 0;
let displayedSeconds = 0;
let displayedMinutes = 0;
let displayedHours = 0;
let timer = null;

function stopwatch() {
  ++milliseconds;
  increaseMilliseconds();
  increaseSeconds();
  increaseHours();
  if (milliseconds < 10) {
    displayedMilliseconds = "0" + milliseconds.toString();
  } else {
    displayedMilliseconds = milliseconds;
  }
  if (seconds < 10) {
    displayedSeconds = "0" + seconds.toString();
  } else {
    displayedSeconds = seconds;
  }
  if (minutes < 10) {
    displayedMinutes = "0" + minutes.toString();
  } else {
    displayedMinutes = minutes;
  }
  if (hours < 10) {
    displayedHours = "0" + hours.toString();
  } else {
    displayedHours = hours;
  }

  document.getElementById("display").innerHTML =
    displayedHours +
    ":" +
    displayedMinutes +
    ":" +
    displayedSeconds +
    ":" +
    displayedMilliseconds;
}

function increaseMilliseconds() {
  if (milliseconds / 100 == 1) {
    milliseconds -= 100;
    ++seconds;
  }
}

function increaseSeconds() {
  if (seconds / 60 == 1) {
    seconds -= 60;
    minutes += 1;
  }
}

function increaseHours() {
  if (minutes / 60 == 1) {
    minutes -= 60;
    hours += 1;
  }
}

function start() {
  timer = window.setInterval(stopwatch, 10);
}

function stop() {
  window.clearInterval(timer);
}

function reset() {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00:00";
  window.clearInterval(timer);
}
