// JavaScript for validating signup form
function validateSignupForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMsg = document.getElementById("error-msg");

    // Simple validation checks
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        errorMsg.textContent = "All fields are required!";
        return false;
    }

    if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match!";
        return false;
    }

    if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters!";
        return false;
    }

    // All validations passed
    errorMsg.textContent = "";
    alert("Signup successful!");
    return true;
}
