const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

images.forEach((e) => {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
});

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBack = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBack();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    buttons[i].style.backgroundColor = "white";
  });
});

let slideNumber = 1;
const lenght = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(lenght - 1) * 800}px)`;
  slideNumber = lenght;
};

const changeBackGroud = () => {
  resetBack();
  buttons[slideNumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
  slideNumber < lenght ? nextSlide() : getFirstSlide();
  changeBackGroud();
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeBackGroud();
});
