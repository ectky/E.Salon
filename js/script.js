window.addEventListener('load', (event) => {
  document.getElementsByTagName('body')[0].classList.add('loaded');
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollPage()};

// Get the navbar
var navbar = document.getElementById("navbar");
var categoriesUl = document.getElementById("categoriesUl");

// Get the offset position of the navbar
var navbarPosition = navbar.offsetTop;
var categoriesUlPosition = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollPage() {
  if (window.pageYOffset >= navbarPosition) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  if(window.pageYOffset >= categoriesUlPosition) {
    categoriesUl.classList.add("animatedUl");
  } else {
    categoriesUl.classList.remove("animatedUl");
  }
}