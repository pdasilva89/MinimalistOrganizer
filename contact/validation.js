function validation(){var firstName=document.getElementById("firstName").value;var lastName=document.getElementById("lastName").value;var email=document.getElementById("email").value;if(firstName===""){return window.alert("Please enter your first name")}
if(lastName===""){return window.alert("Please enter your last name ")}
if(email===""||email.includes("@")!==!0){return window.alert("Please enter your email address ")}}
document.getElementById("button").onclick=function(){validation()}
