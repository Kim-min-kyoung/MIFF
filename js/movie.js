var slideIndex = 0; //slide index

// HTML 로드가 끝난 후 동작
window.onload=function(){
  showSlides(slideIndex);

  // Auto Move Slide
//   var sec = 3000;
//   setInterval(function(){
//     slideIndex++;
//     showSlides(slideIndex);

//   }, sec);
}

// Next/previous controls
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}
// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}
function showSlides(n) {
  var slides = document.getElementsByClassName("film_photo_slider");
  var dots = document.getElementsByClassName("dot");
  var size = slides.length;
  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n].style.display = "block";
  dots[n].className += " active";
}
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#scollTop_btn').fadeIn();
        } else {
            $('#scollTop_btn').fadeOut();
        }
    });
    $("#scollTop_btn").click(function() {
        $('html').animate({
            scrollTop : 0
        }, 300);
        return false;
    });
});