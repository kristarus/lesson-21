// const buttonWrapper = document.querySelector(".button__wrapper");
// buttonWrapper.addEventListener("click", (event) => {
//   if (event.target.closest(".btn")) {console.log("YES")}

//   console.log(event.target.textContent);
// if (event.tar)

// });

// for (let elem of document.querySelectorAll("*")) {
//   elem.addEventListener(
//     "click",
//     () => alert(`Погружение: ${elem.tagName}`),
//     true
//   );
//   elem.addEventListener("click", () => alert(`Всплытие: ${elem.tagName}`));
// }

let array = [];

const desk = document.querySelector("#desk");
const infoDesk = document.querySelector("#infoDesk");
let description;
let title;
let numElem = 0;

desk.addEventListener("click", (event) => {
  if (event.target.closest("#btnSubmit")) {
    array[numElem] = getFormValues();
    drawInfo(array[numElem]);
    numElem++;
  }

  if (event.target.closest(".btnDelete")) {
    const info = event.target.closest(".info");
    title = info.querySelector(".title").textContent;
    description = info.querySelector(".description").textContent;
    array.forEach((item, index) => {
      if (item["title"] === title && item["description"] === description) {
        array.splice(index, 1);
      }
      deleteAll();
      array.forEach((item) => {
        drawInfo(item);
      });
    });
  }
});

function getFormValues() {
  const title = document.querySelector("#inputTitle");
  const description = document.querySelector("#inputDescription");
  return { title: title.value, description: description.value };
}

function drawInfo(obj) {
  infoDesk.innerHTML += `<div class = 'info margin_t_b padding_all'>
  <p><b>Title:</b></p> 
    <p class = "title margin_t_b">${obj["title"]}</p>
  <p><b>Description:</b></p> 
    <p class = "description margin_t_b">${obj["description"]}</p>
    <button class = "btnDelete margin_t_b btn">Delete</button>
    <button class = "btnEdit margin_t_b btn">Edit</button>
  </div>`;
}

function deleteAll() {
  infoDesk.innerHTML = "";
}
