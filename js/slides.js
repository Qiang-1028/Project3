let slideIndex = 0;

const showSlides = () => {

  const slides = document.getElementsByClassName("slides");
  const queue = document.getElementsByClassName("slides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  queue[slideIndex - 1].className += " active";
  setTimeout(showSlides, 1000);

};
showSlides();