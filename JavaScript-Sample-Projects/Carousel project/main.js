let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let x of slides) {
    x.style.display = "none";
  }
  for (let i of dots) {
    i.className = i.className.replace('active', '')
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}