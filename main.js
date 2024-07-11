const daysDiv = document.getElementById("days-div");
const hoursDiv = document.getElementById("hours-div");
const minutesDiv = document.getElementById("minutes-div");
const secondsDiv = document.getElementById("seconds-div");

let days = "08";
let hours = 23;
let minutes = 55;
let seconds = 41;

function countdown() {
  seconds--;
  if (seconds < 0) {
    seconds = 60;
    minutes--;
  }
  if (minutes < 0) {
    hours--;
    minutes = 60;
  }
  if (hours < 0) {
    days--;
  }
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    days = 8;
    hours = 23;
    minutes = 55;
    seconds = 41;
  }
  return (
    (daysDiv.innerText = `${days}`),
    (hoursDiv.innerText = `${hours}`),
    (minutesDiv.innerText = `${minutes}`),
    (secondsDiv.innerText = `${seconds}`)
  );
}

// Llamar a la función countdown() cada segundo
let interval = setInterval(countdown, 1000);
