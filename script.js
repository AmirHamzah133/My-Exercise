const inputPassword = document.getElementById("input_password")
const showPassword = document.getElementById("show_password")

showPassword.addEventListener ("input", (e) => {
    if (e.target.checked) {
        inputPassword.setAttribute("type", "text");
    } else {
        inputPassword.setAttribute("type", "password");
    }
})