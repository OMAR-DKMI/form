var data = window.location.search;
var parms = new URLSearchParams(data);
console.log(parms);

var name = parms.get("name");
var email = parms.get("email");
var phone = parms.get("phone");
var city = parms.get("city");

var getData = "Name: "+name+"<br>";
     getData += "Name: "+email+"<br>";
     getData += "Name: "+phone+"<br>";
     getData += "Name: "+city+"<br>";

document.getElementById("res").innerHTML = getData;






const form = document.querySelector("form");

const name5 = document.getElementById("name");
const email5 = document.getElementById("email");
const phone5 = document.getElementById("phone");
const city5 = document.getElementById("city");
const subject5 = document.getElementById("subject")
const mess5 = document.getElementById("message");




function sendEmail() {

  const bodymessage = 'FullName: ${name5.value}<br>Email: ${email5.value}<br>Phone: ${phone5.value} <br>City: ${city5.value}';
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "omtechd@gmail.com",
  Password : "49210438587190DFBE8C7C249CA86283E033",
  To : 'omtechd@gmail.com',
  From : "omtechd@gmail.com",
  Subject : "subject.value",
  Body : "bodymessage"
}).then(
message => alert(message)
);

}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});

