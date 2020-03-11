function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById('option1').checked = false;
document.getElementById('option1Mobile').checked = false;
document.getElementById('option2').checked = false;
document.getElementById('option2Mobile').checked = false;
document.getElementById('option3').checked = false;
document.getElementById('option3Mobile').checked = false;

/* This calculator takes the # of rooms and multiplies by the condition of rooms
selected.*/
function displayResult () {
  // A variable that takes the input # of rooms
  var roomsNum = document.getElementById("roomsNum").value;
  // An if/else statement that displays
  if (document.getElementById("option1").checked == true || document.getElementById("option1Mobile").checked == true) {
      var conditionOfRooms1 = 180;
      var result1 = roomsNum * conditionOfRooms1;
      document.getElementById("price").innerHTML = "$" + result1;
      document.getElementById("priceMobile").innerHTML = "$" + result1;
  }
  else if (document.getElementById("option2").checked == true || document.getElementById("option2Mobile").checked == true) {
      var conditionOfRooms2 = 240;
      var result2 = roomsNum * conditionOfRooms2;
     document.getElementById("price").innerHTML = "$" + result2;
     document.getElementById("priceMobile").innerHTML = "$" + result2;
  }
  else if (document.getElementById("option3").checked == true || document.getElementById("option3Mobile").checked == true) {
    var conditionOfRooms3 = 300;
    var result3 = roomsNum * conditionOfRooms3;
    document.getElementById("price").innerHTML = "$" + result3;
    document.getElementById("priceMobile").innerHTML = "$" + result3;
  }
  else {
      // DO NOTHING
      }
  }

  // Get the modal
  var modal = document.getElementById("modal");

 // When the user clicks the button or image, open the modal
  function container() {
        modal.style.display = "block";
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
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
