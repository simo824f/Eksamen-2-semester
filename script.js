//kode fra https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-ok-and-cancel-options d.25-05-2022 

function sendFunction() {
if (confirm('Er du sikker på at du vil sende denne besked?')) {
    alert('Tak for din besked, - du modtager snarest et svar!')
    console.log('Besked sendt til e-mail');
} else {
    console.log('Besked ikke afsendt');
}
  }



//forsiden
  let slideIndex = 1;
  slideshowBeholder(slideIndex);

// Next/previous controls
function plusSlides(n) {
    slideshowBeholder(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    slideshowBeholder(slideIndex = n);
}

function slideshowBeholder(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

