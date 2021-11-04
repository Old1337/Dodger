let skSection = document.querySelector(".skills");
let prograssSpans = document.querySelectorAll(".prograss span");

let featuresS = document.querySelector(".features");
let scrollS = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= skSection.offsetTop) {
    prograssSpans.forEach((span) => {
      span.style.width = span.getAttribute("data");
    });
  }
  scrollY >= featuresS.offsetTop
    ? scrollS.classList.add("active")
    : scrollS.classList.remove("active");
};

scrollS.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let numbers = document.querySelectorAll(".statistics .number");
let staSection = document.querySelector(".statistics");
setInterval(function () {
  if (scrollY >= staSection.offsetTop - 230) {
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
