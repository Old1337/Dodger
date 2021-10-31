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
