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

    $( function() {
      $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
      });
    });
  } else if(document.title === "E • SALON - Резервирай сега"){
    $( function() {
      $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
      });
    });
  }

}

function getPrice(){
  $("#price")[0].value = "80 лв";
}

function book(){
  var name = $("#name")[0].value;
  var surname = $("#surname")[0].value;
  var email = $("#email")[0].value;
  var password = $("#password")[0].value;
  var date = $("#date")[0].value;
  var hour = $("#hour")[0].value;
  var minutes = $("#minutes")[0].value;
  var procedure = $("#procedure")[0].value;
  var re = new RegExp("^[A-ZА-Я][a-zа-я]{2,}$");
  if (!re.test(name)) {
    $("#error-message")[0].innerText = "Моля въведете валидно име.";
    $( "#dialog" ).dialog( "open" );
  } else {
    if (!re.test(surname)) {
      $("#error-message")[0].innerText = "Моля въведете валидна фамилия.";
      $( "#dialog" ).dialog( "open" );
    } else {
      re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        $("#error-message")[0].innerText = "Моля въведете валиден имейл.";
        $( "#dialog" ).dialog( "open" );
      } else {
        re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        if (!re.test(password)) {
          $("#error-message")[0].innerText = "Паролата трябва да съдържа големи или малки букви, поне една цифра и символ.";
          $( "#dialog" ).dialog( "open" );
        } else {
          re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
          if (!re.test(date)) {
            $("#error-message")[0].innerText = "Моля въведете валидна дата.";
            $( "#dialog" ).dialog( "open" );
          } else {
            re = /^(0?9|1[0-8])$/;
            re2 = /^([0-5]?\d)$/;
            if (!re.test(hour) || !re2.test(minutes)) {
              $("#error-message")[0].innerText = "Моля въведете валиден час.";
              $( "#dialog" ).dialog( "open" );
            } else {
              re = /^([1-9]|1[0-6])$/;
              if (!re.test(procedure)) {
                $("#error-message")[0].innerText = "Моля изберете една от посочените процедури.";
                $( "#dialog" ).dialog( "open" );
              } else {
                window.location.href = window.location.href;
              }
            }
          }
        }
      }
    }
  } 
}

function subscribe(){
  var name = $("#name")[0].value;
  var email = $("#email")[0].value;
  var re = new RegExp("^[A-ZА-Я][a-zа-я]{2,}$");
  if (!re.test(name)) {
    $("#error-message")[0].innerText = "Моля въведете валидно име.";
    $( "#dialog" ).dialog( "open" );
  } else {
    const re2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re2.test(email)) {
      $("#error-message")[0].innerText = "Моля въведете валиден имейл.";
      $( "#dialog" ).dialog( "open" );
    } else {
      window.location.href = window.location.href;
    }
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