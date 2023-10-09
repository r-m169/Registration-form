const logoutBtn = document.getElementById('logout');

const getEmail = localStorage.getItem('email');
document.getElementById('email-message').textContent = 'Hello,'+getEmail +'!';


logoutBtn.addEventListener("click" , ()=>{
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "index.html"
})


