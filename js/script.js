var slideIndex;
var navbarPosition;
var navbar;

function bodyLoaded() {
  document.getElementsByTagName('body')[0].classList.add('loaded');

  navbar = document.getElementById("navbar");
  navbarPosition = navbar.offsetTop;

  if (document.title === "E • SALON - Процедури") {
    $( "#menu" ).menu({
      items: "> :not(.ui-widget-header)"
    });

  } else if (document.title === "E • SALON"){
    slideIndex = 1;
    showSlides(slideIndex);

    while($(".index-f").find("h2").width() > $(".index-f").width()) {
      var currentFontSize = parseInt($(".index-f").find("h2").css("font-size")); 
      $(".index-f").find("h2").css("font-size",currentFontSize-1); 
    };
  }

}

function scrollPage() {
  if (Window.pageYOffset >= navbarPosition) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function initMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.120850),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function burgerMenu() {
  var x = document.getElementById("my-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}