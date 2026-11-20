
let form = document.querySelector("#loginForm");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let message = document.querySelector("#message");
let togglePassword = document.querySelector("#togglePassword");


// Show / Hide Password

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML = "Hide";
    } else {
        password.type = "password";
        togglePassword.innerHTML = "Show";
    }

});


// Login Functionality

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    // Empty field validation

    if (emailValue === "" || passwordValue === "") {
        message.style.color = "red";
        message.innerHTML = "Please fill all fields!";
        return;
    }

    // Email validation

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        message.style.color = "red";
        message.innerHTML = "Please enter a valid email!";
        return;
    }

    // Password validation

    if (passwordValue.length < 6) {
        message.style.color = "red";
        message.innerHTML = "Password must be at least 6 characters!";
        return;
    }

    // Check Login Credentials

    if (
        emailValue === "admin@gmail.com" &&
        passwordValue === "123456"
    ) {

        message.style.color = "green";
        message.innerHTML = "Login Successful! Welcome 🎉";

        form.reset();
        password.type = "password";
        togglePassword.innerHTML = "Show";

    } else {

        message.style.color = "red";
        message.innerHTML = "Invalid Email or Password!";

    }

});
