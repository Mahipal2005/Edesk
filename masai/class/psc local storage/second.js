let login=document.querySelector('button');

login.addEventListener('click',function(e){
    window.location.href="login.html"
});
localStorage.setItem('login','Hello World');