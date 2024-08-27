let input = document.querySelector("#container>input");
let select = document.querySelector("#container>select");
let submit = document.querySelector("#container>button");
let table = document.querySelector("tbody");

data = [];

function saveData() {
  localStorage.setItem("data", JSON.stringify(data));
}

function loadData() {
  let storedData = JSON.parse(localStorage.getItem("data"));
  if (storedData) {
    data = storedData;

    showdata(data);
  }
}
function deleteData(index) {
  data.splice(index, 1);
  saveData()
  showdata(data);
}
function showdata(arr) {
  table.innerHTML = "";
  arr.forEach((element, i) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = i + 1;
    let td2 = document.createElement("td");
    td2.textContent = element.input;
    let td3 = document.createElement("td");
    td3.textContent = element.select;
    let td4 = document.createElement("td");
    td4.innerHTML = "<button>Delete</button>";
    td4.addEventListener("click", () => {
      deleteData(i);
    });
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
  });
}
submit.addEventListener("click", () => {
  obj = {
    input: input.value,
    select: select.value,
  };
  data.push(obj);
  saveData()
  showdata(data)
});

loadData();
