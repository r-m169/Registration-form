document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const validationMessage = document.getElementById("validationMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        emailError.textContent = "";
        passwordError.textContent = "";
        validationMessage.textContent = "";

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!isValidEmail(email)) {
            emailError.textContent = "Email is not valid";
            emailError.style.color = "red";
        }

        if (!isValidPassword(password)) {
            passwordError.textContent = "Password is not valid";
            passwordError.style.color = "red";
        }

        if (isValidEmail(email) && isValidPassword(password)) {
            const emailValue = emailInput.value;
            const passwordValue = passwordInput.value;
            localStorage.setItem('email',emailValue);
            localStorage.setItem('password',passwordValue);
            window.location.href = "profile.html"

        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        return password.length >= 6 && !password.includes(" ");
    }
});


// if (!localStorage.getItem('email')) {
//     console.log('Email removed from localStorage'); 
// } else {
//     console.log('Email still exists in localStorage');  
// }