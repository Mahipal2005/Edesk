let auth = document.querySelector("#auth");

let login = document.querySelector("#login");

let signup = document.querySelector("#signup");

let logstatus=JSON.parse(localStorage.getItem("logstatus"));
console.log(logstatus)
if(logstatus){
  login.innerHTML=`hi, ${logstatus.username
  
  
  }`
}

login.addEventListener("click", function () {
  window.location.href = "login.html";
});
signup.addEventListener("click", function () {
  window.location.href = "signup.html";
});
