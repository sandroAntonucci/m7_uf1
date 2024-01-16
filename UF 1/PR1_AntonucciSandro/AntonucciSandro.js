// La función init detecta cuando se ha apretado el botón para comprobar que la contraseña sea correcta

function init(){
    let button = document.getElementById("send");
    button.addEventListener("click", checkPasswordErrors)
}

// Se encarga de detectar si la contraseña tiene algún error

function checkPasswordErrors(){

    // Esta variable se usa para detectar si ha habido algún error, si no, se muestra el mensaje de que la contraseña es correcta
    let passwordHasErrors = false;

    // Recoge la contraseña introducida por el usuario
    let password = document.getElementById("password").value;

    // Borra errores mostrados anteriormente
    let showErrors = document.getElementById("showErrors");
    showErrors.innerHTML = '';

    

    if(!(checkLength(password.length))){

        // Muestra que la contraseña no tiene entre 8 y 20 car.
        let passwordMessage = document.createElement('p');
        let errorText = document.createTextNode('La contraseña tiene que tener entre 8 y 20 carácteres.');
        
        passwordMessage.style.color = '#fff';
        passwordMessage.style.backgroundColor = '#dc3545';
        passwordMessage.style.padding = '10px';
        passwordMessage.style.borderRadius = '5px';
        passwordMessage.style.marginBottom = '10px';

        passwordMessage.appendChild(errorText);
        showErrors.appendChild(passwordMessage);

        passwordHasErrors = true;
    }

    if(quantUpperLetters(password) < 1){


        // Muestra que la contraseña no tiene mayúsculas
        let passwordMessage = document.createElement('p');
        let errorText = document.createTextNode('La contraseña tiene que tener al menos una mayúscula.');
        
        passwordMessage.style.color = '#fff';
        passwordMessage.style.backgroundColor = '#dc3545';
        passwordMessage.style.padding = '10px';
        passwordMessage.style.borderRadius = '5px';
        passwordMessage.style.marginBottom = '10px';

        passwordMessage.appendChild(errorText);
        showErrors.appendChild(passwordMessage);

        passwordHasErrors = true;

    }

    if(quantLowerLetters(password) < 2){

        let passwordMessage = document.createElement('p');
        let errorText = document.createTextNode('La contraseña tiene que tener al menos dos minúsculas.');

        passwordMessage.style.color = '#fff';
        passwordMessage.style.backgroundColor = '#dc3545';
        passwordMessage.style.padding = '10px';
        passwordMessage.style.borderRadius = '5px';
        passwordMessage.style.marginBottom = '10px';

        passwordMessage.appendChild(errorText);
        showErrors.appendChild(passwordMessage);

        passwordHasErrors = true;
    }

    if(quantDigits(password) < 1){

        let passwordMessage = document.createElement('p');
        let errorText = document.createTextNode('La contraseña tiene que tener al menos un dígito.');

        passwordMessage.style.color = '#fff';
        passwordMessage.style.backgroundColor = '#dc3545';
        passwordMessage.style.padding = '10px';
        passwordMessage.style.borderRadius = '5px';
        passwordMessage.style.marginBottom = '10px';

        passwordMessage.appendChild(errorText);
        showErrors.appendChild(passwordMessage);

        passwordHasErrors = true;

    }

    if(threeConsecutiveLetters(password)){

        let passwordMessage = document.createElement('p');
        let errorText = document.createTextNode('La contraseña no puede tener tres o más carácteres iguales seguidos');

        passwordMessage.style.color = '#fff';
        passwordMessage.style.backgroundColor = '#dc3545';
        passwordMessage.style.padding = '10px';
        passwordMessage.style.borderRadius = '5px';
        passwordMessage.style.marginBottom = '10px';

        passwordMessage.appendChild(errorText);
        showErrors.appendChild(passwordMessage);

        passwordHasErrors = true;

    }

    if(containsSpaces(password)){

        let passwordMessage = document.createElement('p');
        let errorText = document.createTextNode('La contraseña no puede tener espacios en blanco');

        passwordMessage.style.color = '#fff';
        passwordMessage.style.backgroundColor = '#dc3545';
        passwordMessage.style.padding = '10px';
        passwordMessage.style.borderRadius = '5px';
        passwordMessage.style.marginBottom = '10px';

        passwordMessage.appendChild(errorText);
        showErrors.appendChild(passwordMessage);

        passwordHasErrors = true;

    }

    if(quantSpecialCharacters(password) < 1){

        let passwordMessage = document.createElement('p');
        let errorText = document.createTextNode('La contraseña tiene que tener al menos un carácter especial');

        passwordMessage.style.color = '#fff';
        passwordMessage.style.backgroundColor = '#dc3545';
        passwordMessage.style.padding = '10px';
        passwordMessage.style.borderRadius = '5px';
        passwordMessage.style.marginBottom = '10px';

        passwordMessage.appendChild(errorText);
        showErrors.appendChild(passwordMessage);

        passwordHasErrors = true;

    }

    if(!passwordHasErrors){

        // Muestra que la contraseña es válida
        let passwordMessage = document.createElement('p');
        let passwordOK = document.createTextNode('La contraseña es válida.');
        
        passwordMessage.style.color = '#28a745';
        passwordMessage.style.backgroundColor = '#d4edda';
        passwordMessage.style.padding = '10px';
        passwordMessage.style.borderRadius = '5px';
        passwordMessage.style.marginBottom = '10px';
        
        passwordMessage.appendChild(passwordOK);
        showErrors.appendChild(passwordMessage);

    }

}


// Comprueba que una cadena tenga entre 8 y 20 carácteres

function checkLength(stringLength){
    return (stringLength >= 8 && stringLength <= 20);
}

// Comprueba el número de mayúsculas que tiene una cadena

function quantUpperLetters(password){

    let upperLetters = 0;

    for(let i = 0; i < password.length; i++){

        if(password[i] == password[i].toUpperCase()){
            upperLetters++;
        }

    }

    return upperLetters;

}

// Comprueba el número de minúsculas que tiene una cadena

function quantLowerLetters(password){
    
        let lowerLetters = 0;
    
        for(let i = 0; i < password.length; i++){
    
            if(password[i] == password[i].toLowerCase()){
                lowerLetters++;
            }
    
        }
    
        return lowerLetters;
    
}

// Comprueba el número de dígitos que tiene una cadena

function quantDigits(password){

    let digits = 0;
    let numbers = "0123456789";

    for(let i = 0; i < password.length; i++){

        if(numbers.includes(password[i])){
            digits++;
        }

    }

    return digits;

}

// Comprueba si hay tres carácteres iguales seguidos

function threeConsecutiveLetters(password){

    for(let i = 0; i < password.length-2; i++){

        if(password[i] == password[i + 1] && password[i] == password[i + 2]){
            return true;
        }

    }

    return false;
}

// Comprueba si la cadena contiene espacios

function containsSpaces(password){

    return password.includes(" ");

}

// Comprueba cuantos carácteres especiales tiene la cadena

function quantSpecialCharacters(password){

    let specialCharactersCount = 0;
    let specialCharacters = "!@#$%^&*()-+";

    for(let i = 0; i < password.length; i++){

        if(specialCharacters.includes(password[i])){
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