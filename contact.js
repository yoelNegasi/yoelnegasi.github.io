let contact = [];

function addContact() {
  let firstName = document.getElementById("fname").value;
  let emailForm = document.getElementById("email").value;
  let phoneFomr = document.getElementById("phone").value;
  if (firstName !== "" && emailForm !== "" && phoneFomr !== "") {
    let newContact = { name: firstName, email: emailForm, phone: phoneFomr };
    contact.push(newContact);
    localStorage.setItem("data", JSON.stringify(contact));
  }
  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  alert("youn have submited Successful");
  window.location.href = "index.html";
}
