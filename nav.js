function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* This calculator takes the # of rooms and multiplies by the condition of rooms
selected.*/
function displayResult () {
  // A variable that takes the input # of rooms
  var roomsNum = document.getElementById("roomsNum").value;
  // An if/else statement that displays
  if (document.getElementById("option1").checked == true) {
      var conditionOfRooms1 = 140;
      var result1 = roomsNum * conditionOfRooms1;
      document.getElementById("price").innerHTML = "$" + result1;
  }
  else if (document.getElementById("option2").checked == true) {
      var conditionOfRooms2 = 280;
      var result2 = roomsNum * conditionOfRooms2;
     document.getElementById("price").innerHTML = "$" + result2;
  }
  else if (document.getElementById("option3").checked == true) {
    var conditionOfRooms3 = 420;
    var result3 = roomsNum * conditionOfRooms3;
    document.getElementById("price").innerHTML = "$" + result3;
  }
  else {
      // DO NOTHING
      }
  }


  var slideIndex = 1;
  showSlides(slideIndex);

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
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
