porgrass = document.querySelectorAll(".prograss span");

window.onscroll = function () {
  if (scrollY >= 7930) {
    porgrass.forEach((element) => {
      element.style.width = element.getAttribute("data");
      console.log(scrollY);
    });
  }
};
