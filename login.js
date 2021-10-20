window.onload = function () {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", log);
  console.log(btn);
};

function log() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("Password").value;
  console.log(email, password);
  if (email == "yoel@miu.edu" && password == "12345") {
    window.location.href = "adminonly.html";
  } else {
    window.location.href = "login.html";
  }
}
