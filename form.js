const form = document.getElementById("signupForm");
const firstName = document.getElementById("firstName");
const firstNameError = document.getElementById("firstNameError");
const lastName = document.getElementById("lastName");
const lastNameError = document.getElementById("lastNameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");

const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
const phonePattern = /^\d{10}$/;

form.addEventListener("submit", function (e) {
    if (firstName.value.trim() === "") {
        e.preventDefault();
        firstNameError.style.display = "block";
    } else {
        firstNameError.style.display = "none";
    }

    if (lastName.value.trim() === "") {
        e.preventDefault();
        lastNameError.style.display = "block";
    } else {
        lastNameError.style.display = "none";
    }

    if (!emailPattern.test(email.value.trim())) {
        e.preventDefault();
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }

    if (!phonePattern.test(phone.value.trim())) {
        e.preventDefault();
        phoneError.style.display = "block";
    } else {
        phoneError.style.display = "none";
    }

    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }
});
