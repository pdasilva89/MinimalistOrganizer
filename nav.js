function openNav(){document.getElementById("mySidenav").style.width="50%"}
function closeNav(){document.getElementById("mySidenav").style.width="0"}
function displayResult(){var roomsNum=document.getElementById("roomsNum").value;if(document.getElementById("option1").checked==!0){var conditionOfRooms1=280;var result1=roomsNum*conditionOfRooms1;swal("$"+result1,"Estimated Price","success")}
else if(document.getElementById("option2").checked==!0){var conditionOfRooms2=350;var result2=roomsNum*conditionOfRooms2;swal("$"+result2,"Estimated Price","success")}
else if(document.getElementById("option3").checked==!0){var conditionOfRooms3=420;var result3=roomsNum*conditionOfRooms3;swal("$"+result3,"Estimated Price","success")}
else{}}
