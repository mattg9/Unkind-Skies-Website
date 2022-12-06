$('#slider').on('touchstart', function(event) {
  const xClick = event.originalEvent.touches[0].pageX;

  $(this).on('touchmove', function(event) {
    const xMove = event.originalEvent.touches[0].pageX;
    const sensitivityInPx = 5;

    if (Math.floor(xClick - xMove) > sensitivityInPx) {
      plusSlides(1);
      $(this).off('touchmove');
    } 
    else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
      plusSlides(-1);
      $(this).off('touchmove');
    }
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
