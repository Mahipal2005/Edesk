let form = document.querySelector("form");

let data=[]

function saveData(){
    localStorage.setItem('data', JSON.stringify(data));
}
// function saveData(key,arr){
//     localStorage.setItem(key, JSON.stringify(arr));
// }

function loadData(){
    nrr=JSON.parse(localStorage.getItem('data'));
    if(nrr){
        data=nrr
        // saveData();
        // console.log(data);
    }
}

function handleFormSubmit(e) {
  e.preventDefault();

  let value = e.target;
  let usernames = value[0].value;
  let email = value[1].value;
  let passwd = value[2].value;
  let passConf = value[3].value;
  
  if(passwd==passConf){
    nrr=data.filter((ele,i)=>{
        return ele.user==usernames
    })

    if(nrr.length>0){
        alert("user already exist")
    }
    else{
    let obj={
        user:usernames,
        email:email,
        passward:passwd
    }
    data.push(obj)
    saveData()
    // console.log(data)
    alert('sucessfully registered')
    window.location.href="login.html"

  }
}
  else{
    alert("Passwords do not match")
  }
}
loadData()

form.addEventListener("submit", function (e) {
  handleFormSubmit(e);
});