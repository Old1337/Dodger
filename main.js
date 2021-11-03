let porgrass = document.querySelectorAll(".prograss span");

window.onscroll = function () {
  if (scrollY >= 7730) {
    porgrass.forEach((element) => {
      element.style.width = element.getAttribute("data");
    });
  }
};

let numbers = document.querySelectorAll(".statistics .number");

setInterval(function () {
  if (scrollY >= 12496) {
    numbers.forEach((element) => {
      if (+element.innerHTML >= element.getAttribute("value")) {
        clearInterval();
      } else {
        element.innerHTML++;
      }
    });
  }
}, 1);

let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
