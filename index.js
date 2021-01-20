let array = [];

const desk = document.querySelector("#desk");
const infoDesk = document.querySelector("#infoDesk");

let titleEdit;
let descriptionEdit;
let dateEdit;

let titleForEdit;
let descriptionForEdit;
let dateForEdit;

desk.addEventListener("click", (event) => {
  findEvent(event);
});

desk.addEventListener("mouseover", (event) => {
  addShadow();
});

desk.addEventListener("mouseout", (event) => {
  deleteShadow();
});

// ================functions=====================

function drawInfo(obj) {
  infoDesk.innerHTML += `<div class = 'info margin_t_b padding_all'>
  <p>
    <b>Title:</b>
    <span class = "title margin_t_b">${obj.title}</span>
    </p> 
  <p>
    <b>Description:</b>
    <span class = "description margin_t_b">${obj.description}</span>
  </p>
  <p>
    <b>Date:</b>
    <span class = "date margin_t_b">${obj.date}</span>
  </p>
    <button class = "btnDelete margin_t_b btn">Delete</button>
    <button class = "btnEdit margin_t_b btn">Edit</button>
  </div>`;
}

function drawAllInfo(array) {
  infoDesk.innerHTML = "";
  array.forEach((item) => {
    drawInfo(item);
  });
  drawBorder(array);
}

function drawBorder(array) {
  if (array.length === 0) {
    infoDesk.style.border = "0px solid purple";
  } else {
    infoDesk.style.border = "2px solid purple";
  }
}

function submitInfo() {
  const inputTitle = document.querySelector("#inputTitle");
  const inputDescription = document.querySelector("#inputDescription");
  const date = Date();

  array.push({
    title: inputTitle.value,
    description: inputDescription.value,
    date: date,
  });
  drawAllInfo(array);
}

function deleteInfo() {
  const info = event.target.closest(".info");
  const title = info.querySelector(".title").textContent;
  const description = info.querySelector(".description").textContent;
  const date = info.querySelector(".date").textContent;
  array.forEach((item, index) => {
    if (
      item.title === title &&
      item.description === description &&
      item.date === date
    ) {
      array.splice(index, 1);
    }
    drawAllInfo(array);
  });
}

function findEditInfo() {
  const editModal = document.querySelector(".editModal");
  const info = event.target.closest(".info");
  titleForEdit = info.querySelector(".title").textContent;
  descriptionForEdit = info.querySelector(".description").textContent;
  dateForEdit = info.querySelector(".date").textContent;

  editModal.style.display = "block";
}

function closeModal() {
  const editModal = document.querySelector(".editModal");
  editModal.style.display = "none";
}

function confirmEdit() {
  const editModal = document.querySelector(".editModal");
  titleEdit = editModal.querySelector("#titleEdit").value;
  descriptionEdit = editModal.querySelector("#titleDescription").value;
  dateEdit = Date();
  array.forEach((item, index) => {
    if (
      item.title === titleForEdit &&
      item.description === descriptionForEdit &&
      item.date === dateForEdit
    ) {
      console.log("Yes!");
      array.splice(index, 1, {
        title: titleEdit,
        description: descriptionEdit,
        date: dateEdit,
      });
    }
    console.log(array);
    drawAllInfo(array);
    editModal.style.display = "none";
  });
}

function findEvent(event) {
  if (event.target.closest("#btnSubmit")) {
    submitInfo();
  } else if (event.target.closest(".btnDelete")) {
    deleteInfo();
  } else if (event.target.closest(".btnEdit")) {
    findEditInfo();
  } else if (event.target.closest("#btnClose")) {
    closeModal();
  } else if (event.target.closest("#btnConfirm")) {
    confirmEdit();
  }
}

function addShadow() {
  const info = event.target.closest(".info");

  if (info != null) {
    info.style.boxShadow = "0 0 5px";
  }
}

function deleteShadow() {
  const info = event.target.closest(".info");

  if (info != null) {
    info.style.boxShadow = "0 0 0px";
  }
}
