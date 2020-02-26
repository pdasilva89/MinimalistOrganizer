const navSlide=()=>{const menu=document.querySelector('.menu');const nav=document.querySelector('.nav-links');const navLinks=document.querySelectorAll('.nav-links li');menu.addEventListener('click',()=>{nav.classList.toggle('nav-active');menu.classList.toggle('toggle')})}
navSlide();function displayResult(){var roomsNum=document.getElementById("roomsNum").value;if(document.getElementById("option1").checked==!0){var conditionOfRooms1=280;var result1=roomsNum*conditionOfRooms1;document.getElementById("price").innerHTML="$"+result1}
else if(document.getElementById("option2").checked==!0){var conditionOfRooms2=350;var result2=roomsNum*conditionOfRooms2;document.getElementById("price").innerHTML="$"+result2}
else if(document.getElementById("option3").checked==!0){var conditionOfRooms3=420;var result3=roomsNum*conditionOfRooms3;document.getElementById("price").innerHTML="$"+result3}
else{}}
var slideIndex=1;showSlides(slideIndex);function plusSlides(n){showSlides(slideIndex+=n)}
function currentSlide(n){showSlides(slideIndex=n)}
function showSlides(n){var i;var slides=document.getElementsByClassName("mySlides");var dots=document.getElementsByClassName("dot");if(n>slides.length){slideIndex=1}
if(n<1){slideIndex=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none"}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","")}
slides[slideIndex-1].style.display="block";dots[slideIndex-1].className+=" active"}
