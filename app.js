const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let sliderIndex = 0;

rightArrow.addEventListener("click", function () {
  sliderIndex = sliderIndex < 3 ? sliderIndex + 1 : sliderIndex;
  slider.style.transform = `translate(` + sliderIndex * -25 + `%)`;
});

leftArrow.addEventListener("click", function () {
  sliderIndex = sliderIndex > 0 ? sliderIndex - 1 : sliderIndex;
  slider.style.transform = `translate(` + sliderIndex * -25 + `%)`;
});
