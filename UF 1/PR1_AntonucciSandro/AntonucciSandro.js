// MENSAJES AL USUARIO
const MSG_LENGTH_ERROR = 'La contraseña tiene que tener entre 8 y 20 carácteres.';
const MSG_UPPER_LETTERS_ERROR = 'La contraseña tiene que tener al menos una mayúscula.';
const MSG_LOWER_LETTERS_ERROR = 'La contraseña tiene que tener al menos dos minúsculas.';
const MSG_DIGITS_ERROR = 'La contraseña tiene que tener al menos un dígito.';
const MSG_THREE_CONSECUTIVE_CHARS_ERROR = 'La contraseña no puede tener tres o más carácteres iguales seguidos';
const MSG_BLANK_SPACES_ERROR = 'La contraseña no puede tener espacios en blanco';
const MSG_SPECIAL_CHARS_ERROR = 'La contraseña tiene que tener al menos un carácter especial';
const MSG_SUCCESS = 'La contraseña es válida';

const UPPER_LETTERS = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const LOWER_LETTERS = 'abcdefghijklmnñopqrstuvwxyz';
const STRING_DIGITS = '0123456789'
const SPECIAL_CHARS = '!@#$%^&*()-+';

const MIN_CHARS = 8, MAX_CHARS = 20, MIN_UPPER_LETTERS = 1, MIN_LOWER_LETTERS = 2, MIN_DIGITS = 1, MIN_SPECIAL_CHARS = 1, ZERO = 0, ONE = 1, TWO = 2;

// La función init detecta cuando se ha apretado el botón para comprobar que la contraseña sea correcta
function init(){
    let button = document.getElementById("send");
    button.addEventListener("click", checkPasswordErrors);
}

// Detecta si la contraseña tiene algún error e informa al usuario
function checkPasswordErrors(){

    let passwordHasErrors = false;
    let password = document.getElementById("password").value;
    let showMessages = document.getElementById("showMessages");
    showMessages.innerHTML = '';


    // -- COMPROBACIÓN DE ERRORES --

    // Comprueba que tenga entre 8 y 20 charácteres
    if(!checkLength(password.length)){
        passwordHasErrors = true;
        showTextMessage(MSG_LENGTH_ERROR, passwordHasErrors);
    }

    // Comprueba que tenga una mayúscula
    if(!checkUpperLetters(password)){
        passwordHasErrors = true;
        showTextMessage(MSG_UPPER_LETTERS_ERROR, passwordHasErrors);
    }

    // Comprueba que tenga dos minúsculas
    if(!checkLowerLetters(password)){
        passwordHasErrors = true;
        showTextMessage(MSG_LOWER_LETTERS_ERROR, passwordHasErrors);
    }

    // Comprueba que tenga un dígito
    if(!checkDigits(password)){
        passwordHasErrors = true;
        showTextMessage(MSG_DIGITS_ERROR, passwordHasErrors);
    }

    // Comprueba que tenga tres carácteres iguales seguidos
    if(threeConsecutiveLetters(password)){
        passwordHasErrors = true;
        showTextMessage(MSG_THREE_CONSECUTIVE_CHARS_ERROR, passwordHasErrors);
    }

    // Comprueba que no contenga espacios
    if(containsSpaces(password)){
        passwordHasErrors = true;
        showTextMessage(MSG_BLANK_SPACES_ERROR, passwordHasErrors);
    }

    // Comprueba que tenga un carácter especial 
    if(!checkSpecialChars(password)){
        passwordHasErrors = true;
        showTextMessage(MSG_SPECIAL_CHARS_ERROR, passwordHasErrors);
    }


    // -- MENSAJE DE OK --
    if(!passwordHasErrors){
        showTextMessage(MSG_SUCCESS, passwordHasErrors);
    }

}


// Muestra el texto que se introduce en textMessage y cambia el estilo dependiendo de si es un mensaje de error o no

function showTextMessage(textMessage, passwordHasErrors){

    let showMessages = document.getElementById("showMessages");
    let passwordMessage = document.createElement('p');
    let errorText = document.createTextNode(textMessage);

    if(passwordHasErrors) passwordMessage.className = 'errorMessage';
    else passwordMessage.className = 'successMessage';
    

    passwordMessage.appendChild(errorText);
    showMessages.appendChild(passwordMessage);

}

// Comprueba que una cadena tenga entre 8 y 20 carácteres
function checkLength(stringLength){
    return (stringLength >= MIN_CHARS && stringLength <= MAX_CHARS);
}

// Comprueba que la cadena tenga al menos una mayúsculas
function checkUpperLetters(password){
    return quantUpperLetters(password) >= MIN_UPPER_LETTERS;
}

// Comprueba que la cadena tenga al menos dos minúsculas
function checkLowerLetters(password){
    return quantLowerLetters(password) >= MIN_LOWER_LETTERS;
}

// Comprueba que la cadena tenga al menos un dígito
function checkDigits(password){
    return quantDigits(password) >= MIN_DIGITS;
}

// Comprueba que la cadena tenga al menos un carácter especial
function checkSpecialChars(password){
    return quantSpecialCharacters(password) >= MIN_SPECIAL_CHARS;
}

// Comprueba si la cadena contiene espacios

function containsSpaces(password){
    return password.includes(" ");
}

// Comprueba el número de mayúsculas que tiene una cadena

function quantUpperLetters(password){

    let upperLettersCount = ZERO;

    for(let i = ZERO; i < password.length; i++){
        if(UPPER_LETTERS.includes(password[i])){
            upperLettersCount++;
        }
    }

    return upperLettersCount;
}


// Comprueba el número de minúsculas que tiene una cadena

function quantLowerLetters(password){
    
        let lowerLettersCount = ZERO;
        
        for(let i = ZERO; i < password.length; i++){
    
            if(LOWER_LETTERS.includes(password[i])){
                lowerLettersCount++;
            }
        }
        return lowerLettersCount;
}

// Comprueba el número de dígitos que tiene una cadena

function quantDigits(password){

    let digits = ZERO;

    for(let i = ZERO; i < password.length; i++){

        if(STRING_DIGITS.includes(password[i])){
            digits++;
        }

    }

    return digits;

}

// Comprueba si hay tres carácteres iguales seguidos

function threeConsecutiveLetters(password){

    for(let i = ZERO; i < password.length-TWO; i++){

        if(password[i] == password[i + ONE] && password[i] == password[i + TWO]){
            return true;
        }

    }

    return false;
}

// Comprueba cuantos carácteres especiales tiene la cadena

function quantSpecialCharacters(password){

    let specialCharactersCount = ZERO;

    for(let i = 0; i < password.length; i++){
        if(SPECIAL_CHARS.includes(password[i])){
            specialCharactersCount++;
        }
    }

    return specialCharactersCount;
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