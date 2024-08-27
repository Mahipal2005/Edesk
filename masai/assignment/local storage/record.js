let nameInput = document.getElementById("name");
let employeeIDInput = document.getElementById("employeeID");
let departmentInput = document.getElementById("department");
let expInput = document.getElementById("exp");
let emailInput = document.getElementById("email");
let mblInput = document.getElementById("mbl");
let submitButton = document.getElementById("submit");
let table = document.querySelector("tbody");
let data = [];

function loadData(data) {
  localStorage.setItem("data", JSON.stringify(data));
}
function displaydata() {
  let storedData = JSON.parse(localStorage.getItem("data"));
  if (storedData) {
    data = storedData;

    showdata(data);
  }
}

function deleteData(ind) {
  data.splice(ind, 1);
  loadData(data);
  showdata(data);
}

function showdata(arr) {
  table.innerHTML = "";
  arr.forEach((ele, i) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = ele.name;
    let td2 = document.createElement("td");
    td2.textContent = ele.employeeID;
    let td3 = document.createElement("td");
    td3.textContent = ele.department;
    let td4 = document.createElement("td");
    td4.textContent = ele.exp;
    let td5 = document.createElement("td");
    td5.textContent = ele.email;
    let td6 = document.createElement("td");
    td6.textContent = ele.mbl;
    let td8 = document.createElement("td");
    // console.log(typeof eexpectedexp);
    if (Number(ele.exp) > 5) {
      td8.textContent = "Senior";
      td8.style.color = "green";
    } else if (Number(ele.exp) <= 5 & Number(ele.exp) >= 2) {
      td8.textContent = "Junior";
      td8.style.color = "blue";
    } else if (Number(ele.exp) <= 1) {
      td8.textContent = "Fresher";
      td8.style.color = "red";
    }
    let td7 = document.createElement("td");
    td7.innerHTML = "<button>Delete</button>";
    td7.addEventListener("click", () => {
      deleteData(i);
    });

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td8);
    tr.appendChild(td7);
    table.appendChild(tr);
  });
}

submitButton.addEventListener("click", function (e) {
  // e.preventDefault();
  let obj = {
    name: nameInput.value,
    employeeID: employeeIDInput.value,
    department: departmentInput.value,
    exp: expInput.value,
    email: emailInput.value,
    mbl: mblInput.value,
  };

  data.push(obj);
  loadData(data);
});
displaydata();
