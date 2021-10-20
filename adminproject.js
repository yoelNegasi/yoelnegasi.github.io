let lists = [
  {
    id: 2,
    projectName: "Random Number",
    date: new Date(2021, 07, 25),
    description: "Random Number Game (dice)",
    image: "./images/randompro.png",
    diffucality: 8,
  },
  {
    id: 1,
    projectName: "CARE",
    date: new Date(2021, 01, 23),
    description: "helps people who need help",
    image: "./images/cares.png",
    diffucality: 10,
  },
];

localStorage.setItem("projects", JSON.stringify(lists));
let task = localStorage.getItem("projects");
lists = JSON.parse(task);
console.log(lists);
localStorage.setItem("projects", JSON.stringify(lists));

function changeFormat(a) {
  d = a.split("-");

  let result = d[0] + d[1] + d[2];
  let final = Number(result);

  return final;
}

lists.sort((a, b) => {
  console.log(a.date);
  return changeFormat(a.date) - changeFormat(b.date);
});

let container;

function create(task) {
  let card = document.createElement("div");
  card.className = "card shadow cursor-pointer";

  let body = document.createElement("div");
  body.className = "card-body";

  let projectName = document.createElement("h3");
  projectName.innerText = task.projectName;
  projectName.className = "card-title";

  let diffucality = document.createElement("h5");
  diffucality.innerText = "Diffucality" + " " + task.diffucality;
  diffucality.className = "card-title";

  let date = document.createElement("h6");
  date.innerText = task.date.split("T")[0];
  date.className = "card-color";

  let description = document.createElement("h6");
  description.innerText = task.description;
  description.className = "card-color";

  let image = document.createElement("img");
  image.src = task.image;
  image.className = "img-thumbnail";
  image.style.width = "35%";

  let edit = document.createElement("button");
  edit.innerHTML = "Edit";
  edit.className = "btn btn-secondary";

  edit.onclick = function editFunction() {
    body.appendChild(editDiv);
    editDiv.appendChild(diffucality);
    editDiv.appendChild(name);
    editDiv.appendChild(date1);
    editDiv.appendChild(description1);
    editDiv.appendChild(image);
    editDiv.appendChild(update);
  };

  let editDiv = document.createElement("div");
  editDiv.id = "diva";

  let name = document.createElement("input");
  name.type = "text";
  name.id = "name1";
  name.value = task.projectName;

  let diff = document.createElement("input");
  diff.type = "text";
  diff.id = "name1";
  diff.value = task.diffucality;

  let date1 = document.createElement("input");
  date1.type = "date";
  date1.id = "date1";
  date1.value = task.date.split("T")[0];

  let description1 = document.createElement("textarea");
  description1.type = "text";
  description1.id = "desc1";
  description1.value = task.description;

  let update = document.createElement("button");
  update.innerText = "update";
  update.onclick = function updateFomr() {
    task.projectName = document.getElementById("name1").value;
    task.date = document.getElementById("date1").value;
    task.description = document.getElementById("desc1").value;
    localStorage.setItem("projects", JSON.stringify(lists));

    document.getElementById("diva").innerHTML = "";
    document.getElementById("card-container").innerHTML = "";
    container = document.getElementById("card-container");
    lists.map((item) => {
      create(item);
    });
  };

  let remove = document.createElement("button");
  remove.onclick = function deleteFunction() {
    let b = task.id;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === b) {
        lists.splice(i, 1);
        i--;
      }
    }
    localStorage.setItem("projects", JSON.stringify(lists));
    document.getElementById("card-container").innerHTML = "";
    container = document.getElementById("card-container");
    lists.map((item) => {
      create(item);
    });
  };
  remove.innerHTML = "Delete";
  remove.className = "btn btn-secondary";

  body.appendChild(projectName);
  body.appendChild(date);
  body.appendChild(diffucality);
  body.appendChild(description);
  body.appendChild(image);
  body.appendChild(edit);
  body.appendChild(remove);
  card.appendChild(body);
  container.appendChild(card);
}

function initListOflists() {
  if (container) {
    document.getElementById("card-container").replaceWith(container);
    return;
  } else {
    container = document.getElementById("card-container");
    lists.forEach((task) => {
      create(task);
    });
  }
}

initListOflists();

function add() {
  let cInput = document.getElementById("course-name").value;
  let dInput = document.getElementById("course-date").value;
  let descInput = document.getElementById("course-detail").value;
  let linkInput = document.getElementById("course-link").value;
  let dif = document.getElementById("course-diff").value;

  if (cInput !== "" && dInput !== "" && descInput !== "") {
    let newObj = {
      projectName: cInput,
      date: dInput,
      description: descInput,
      image: linkInput,
      diffucality: dif,
    };
    lists.push(newObj);
    console.log(lists);
    localStorage.setItem("projects", JSON.stringify(lists));
    document.getElementById("card-container").innerHTML = "";
    lists.forEach((task) => {
      create(task);
    });
  }
  document.getElementById("course-name").value = "";
  document.getElementById("course-date").value = "";
  document.getElementById("course-detail").value = "";
  document.getElementById("course-link").value = "";
  document.getElementById("course-link").value = "";
}
