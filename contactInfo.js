let contact1 = localStorage.getItem("data");
let contact = JSON.parse(contact1);

let cardContainer;

let createTaskCard = (task) => {
  let card = document.createElement("div");
  card.className = "card shadow cursor-pointer";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let name = document.createElement("h5");
  name.innerText = task.name;
  name.className = "card-title";

  let phone = document.createElement("h4");
  phone.innerText = task.phone;
  phone.className = "card-color";

  let email = document.createElement("span");
  email.innerText = task.email;
  email.className = "card-color";

  cardBody.appendChild(name);
  cardBody.appendChild(email);
  cardBody.appendChild(phone);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);
};

function initListOfTasks() {
  if (cardContainer) {
    document.getElementById("card-container").replaceWith(cardContainer);
    return;
  } else {
    cardContainer = document.getElementById("card-container");
    contact.map((task) => {
      createTaskCard(task);
    });
  }
}

initListOfTasks();
