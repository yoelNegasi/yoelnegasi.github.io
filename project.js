let datas = localStorage.getItem("projects");
let courses = JSON.parse(datas);

function date() {
  console.log("edede");
  let sorted = courses.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  let innerdiv = document.getElementById("courses-innerdiv");
  innerdiv.innerHTML = "";
  sorted.forEach((item) => {
    innerdiv.innerHTML = "";
    createitemCard(item);
  });
}

function diff() {
  let sorted = courses.sort((a, b) => {
    return a.diffucality - b.diffucality;
  });
  let innerdiv = document.getElementById("courses-innerdiv");
  innerdiv.innerHTML = "";
  sorted.forEach((item) => {
    innerdiv.innerHTML = "";
    createitemCard(item);
  });
}

function createitemCard(item) {
  courses.map((item) => {
    let innerdiv = document.getElementById("courses-innerdiv");

    let card = document.createElement("div");
    card.className = "card shadow cursor-pointer";
    card.id = "con";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let diffucality = document.createElement("h4");
    diffucality.innerText = "Diffucality" + " " + item.diffucality;
    diffucality.className = "card-title";

    let projectName = document.createElement("h2");
    projectName.innerText = item.projectName;
    projectName.className = "card-title";

    let date = document.createElement("h4");
    date.innerText = item.date.split("T")[0];
    date.className = "card-color";

    let description = document.createElement("h4");
    description.innerText = item.description;
    description.className = "card-color";

    let image = document.createElement("img");
    image.src = item.image;
    image.className = "img-thumbnail";
    image.style.width = "30%";

    let takeme = document.createElement("button");
    takeme.innerHTML = "look inside";
    takeme.id = "in";
    takeme.className = "btn";
    takeme.onclick = function () {
      if (item.id == 1) {
        window.location.href = "care.html";
      } else {
        window.location.href = "random.html";
      }
    };
    cardBody.appendChild(projectName);
    cardBody.appendChild(date);
    cardBody.appendChild(diffucality);
    cardBody.appendChild(image);
    cardBody.appendChild(description);
    cardBody.appendChild(takeme);
    card.appendChild(cardBody);
    innerdiv.appendChild(card);
  });
}
createitemCard();
