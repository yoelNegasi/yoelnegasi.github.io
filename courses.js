let datas = localStorage.getItem("courses");
let courses = JSON.parse(datas);
console.log(courses, "miki");
function sort() {
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

console.log(courses);

function createitemCard(item) {
  courses.map((item) => {
    let innerdiv = document.getElementById("courses-innerdiv");

    let card = document.createElement("div");
    card.className = "card shadow cursor-pointer";
    card.id = "con";
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let courseName = document.createElement("h2");
    courseName.innerText = item.courseName;
    courseName.className = "card-title";

    let date = document.createElement("h6");
    date.innerText = item.date.split("T")[0];
    date.className = "card-color";

    let lookInside = document.createElement("button");
    lookInside.innerText = "Look Inside";

    lookInside.onclick = function () {
      window.location.href = item.href;
    };

    let image = document.createElement("img");
    image.src = item.image;
    console.log(item.image);
    image.style.width = "35%";

    let description = document.createElement("h4");
    description.innerText = item.description;
    description.className = "card-color";
    description.id = "des";

    let takeme = document.createElement("button");
    takeme.innerHTML = "look inside";
    takeme.id = "in";
    takeme.className = "btn-primary";
    takeme.onclick = function () {
      window.location.href = item.href;
    };
    cardBody.appendChild(courseName);
    cardBody.appendChild(date);

    cardBody.appendChild(image);
    cardBody.appendChild(description);
    cardBody.appendChild(lookInside);
    card.appendChild(cardBody);
    innerdiv.appendChild(card);
  });
}
createitemCard();
