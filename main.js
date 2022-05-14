const skSection = document.querySelector(".skills");
const prograssSpans = document.querySelectorAll(".prograss span");

const featuresS = document.querySelector(".features");
const scrollS = document.querySelector(".up");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skSection.offsetTop) {
    prograssSpans.forEach((span) => {
      span.style.width = span.getAttribute("data");
    });
  }

  scrollY >= featuresS.offsetTop
    ? scrollS.classList.add("active")
    : scrollS.classList.remove("active");
});

scrollS.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const numbers = document.querySelectorAll(".statistics .number");
const staSection = document.querySelector(".statistics");

window.addEventListener("scroll", () => {
  if (scrollY >= staSection.offsetTop) {
    numbers.forEach((number) => {
      const target = number.getAttribute("value");
      const increaseNum = setInterval(() => {
        if (number.textContent !== target) {
          number.textContent++;
        } else {
          clearInterval(increaseNum);
        }
      }, 5000 / target);
    });
  }
});

const countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

const counter = setInterval(() => {
  const dateNow = new Date().getTime();
  const dateDiff = countDownDate - dateNow;

  const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);
