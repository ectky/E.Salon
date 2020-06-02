window.addEventListener('load', (event) => {
  document.getElementsByTagName('body')[0].classList.add('loaded');
});

window.onscroll = function () {
  scrollPage()
};

var navbar = document.getElementsByClassName("site-nav")[0];

var navbarPosition = navbar.offsetTop;

function scrollPage() {
  if (window.pageYOffset >= navbarPosition) {
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