function init(){

    console.log("hola");

}



// Esta parte del código es adicional, implementa la opción de ocultar o mostrar la contraseña y está hecha mediante chatgpt (aunque entiendo lo que hace y la he modificado)

function togglePassword() {
    var passwordInput = document.getElementById("password");
    var toggleBtn = document.getElementById("toggleBtn");
    var labelShowPassword = document.getElementById("labelShowPassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        labelShowPassword.textContent = "Ocultar contraseña";
    } else {
        passwordInput.type = "password";
        labelShowPassword.textContent = "Mostrar contraseña";
    }
}