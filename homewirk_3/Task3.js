const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const container = document.querySelector(".slides");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let current = 0;
let startX = 0;
let endX = 0;

let autoSlide = setInterval(slideFoward, 3000);
let position = 0;
let animating = false;

function slideWidth() {
  slides.forEach(slide => {
    slide.style.width = slider.offsetWidth + "px";
  });
}

function animate() {
  container.style.transform = `translateX(-${slider.offsetWidth * current}px)`;
  position = slider.offsetWidth * current;
  requestAnimationFrame(animate);
}

function slideFoward() {
  if (current < slides.length - 1) {
    current++;
    requestAnimationFrame(animate);
  }
}

function slideBack() {
  if (current > 0) {
    current = current - 1;
    requestAnimationFrame(animate);
  }
}

// LOAD EVENT
window.addEventListener("load", slideWidth);

// RESIZE EVENT
window.addEventListener("resize", slideWidth);

// BUTTON EVENTS
nextButton.addEventListener("click", event => {
  clearInterval(autoSlide);
  slideFoward();
});

prevButton.addEventListener("click", event => {
  clearInterval(autoSlide);
  slideBack();
});

// TOUCH EVENTS
container.addEventListener("touchstart", event => {
  clearInterval(autoSlide);
  startX = event.touches[0].screenX;
});

container.addEventListener("touchmove", event => {
  endX = event.touches[0].screenX;
});

container.addEventListener("touchend", event => {
  if (startX - endX > 40) {
    slideFoward();
  }
  if (startX - endX < -40) {
    slideBack();
  }
});

// MOUSE EVENTS
container.addEventListener("mousedown", event => {
  event.preventDefault();
  clearInterval(autoSlide);
  animating = true;
  startX = event.clientX;
});

container.addEventListener("mousemove", event => {
  event.preventDefault();
  if (animating) {
    console.log(`${position} - ${position - (startX - event.clientX)}`);
    container.style.transition = "none";
    if (event.clientX > 0) {
      container.style.transform = `translateX(${position - (
      startX - event.clientX)}px)`;
    } else {
      container.style.transform = `translateX(-${position - (
      startX - event.clientX)}px)`;
    }
  }
});

container.addEventListener("mouseup", event => {
  container.style.transition = "all linear .2s";
  animating = false;
  endX = event.clientX;

  if (startX - endX > 150) {
    slideFoward();
  }
  if (startX - endX < -150) {
    slideBack();
  } else {
    container.style.transform = `translateX(${position}px)`;
  }
});
