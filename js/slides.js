let slideIndex = 0;

const showSlides = () => {

  const slides = document.getElementsByClassName("slides");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }


showSlides();