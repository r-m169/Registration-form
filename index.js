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

        if (password.length < 6 || password.includes(" ")) {
            passwordError.textContent = "Password is not valid";
            passwordError.style.color = "red";
        }

        if (isValidEmail(email) && (password.length >= 6 && !password.includes(" "))) {
            validationMessage.textContent = "All fields are valid";
            validationMessage.style.color = "green";
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
