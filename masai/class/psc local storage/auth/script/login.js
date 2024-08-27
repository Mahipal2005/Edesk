let form=document.querySelector('form');


let data;
function loadData(){
    nrr=JSON.parse(localStorage.getItem('data'));
    if(nrr){
        data=nrr
    }
    // console.log(data);
}
function handleFormSubmit(event){
    event.preventDefault();
    
    let target=event.target
    let email=target[0].value
    let password=target[1].value

    let array=data.filter((ele,i)=>{
        return ele.email == email &  ele.passward==password 
    })
    if(array.length >0){
        localStorage.setItem('logstatus',JSON.stringify({status:true,username:nrr[0].user }))
        alert("Login Successfull")
        window.location.href="home.html"
    }
    else{
        alert("Invalid Email or Password")
    }
}
form.addEventListener("submit", function(e) {
    handleFormSubmit(e);
});
loadData()