//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const BASE_COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];

//Declaración de variables globales.
const userCombi = [];
var master = [];
var intento = 0;
var aciertos = 0;

/** Template con el código HTML que corresponde a cada fila de juego/intento. */
const ROW_RESULT = `<div class="rowResult w100 flex wrap">
<div class="rowUserCombi w75 flex wrap">
   <div class="w25">
       <div class="celUserCombi flex"></div>
   </div>
   <div class="w25">
       <div class="celUserCombi flex"></div>
   </div>
   <div class="w25">
       <div class="celUserCombi flex"></div>
   </div>
   <div class="w25">
       <div class="celUserCombi flex"></div>
   </div>
</div>
<div class="rowCercleResult w25 flex wrap center">
   <div class="w40 h40">
        <div class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div class="cercleResult flex"></div>
   </div>
<div>
</div>`

function init() {

    //1. Genera el código random del master
    master = randomColors();
    // console.log(master);

    console.log(master);
    
    //2. Crea todas las filas según el número de intentos.
    generateResult();

}


// Pinta los colores de la combinación del usuario

function paintMasterColors(){

    let masterColors = document.querySelectorAll(".rowResult");
    let currentRow = masterColors[intento];
    let celUserCombi = currentRow.querySelectorAll(".rowUserCombi .w25 .celUserCombi");

    for(let i = 0; i < celUserCombi.length; i++){
        celUserCombi[i].style.backgroundColor = userCombi[i];     
    }
}

// Pinta la comprobación de los colores	introducidos por el usuario con el master

function paintResultColors(result){

    let masterColors = document.querySelectorAll(".rowResult");
    let currentRow = masterColors[intento];
    let cercleResult = currentRow.querySelectorAll(".rowCercleResult .w40 .cercleResult");

    for(let i = 0; i < cercleResult.length; i++){
        cercleResult[i].style.backgroundColor = result[i];     
    }

}

// Función que añade las filas de juego al HTML
function generateResult(){
    for(let i = 0; i < MAX_INTENTOS; i++){
        let result = document.getElementById("Result");
        result.innerHTML += ROW_RESULT;
    }
}

// Genera una lista de colores aleatorios
function randomColors(){
    let randomColorsList = [];
    for(let i = 0; i < 4; i++){

        randomColorsList.push(BASE_COLORS[getRandomInt(8)]);
    }
    return randomColorsList;
}

// Genera un número aleatorio del 0 al máximo
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha
introducido el usuario.
Informamos al usuario del resultado y del número de intentos que lleva*/
function Comprobar() {

    // Comprueba si la longitud de la lista es correcta
    if(!isCombiValid(userCombi)){
        changeInfoMessage("La combinación necesita al menos 4 colores");
        deleteCombiText();
        return;
    }

    // Si es correcta se muestra la combinación introducida y se comprueba si es correcta
    else{

        // Imprime la combinación del usuario
        paintMasterColors();

        // Compara los colores y indica al usuario si son correctos o no
        let result = checkColorsAreRight(userCombi, master);
        paintResultColors(result);

        // Comprueba si el usuario ha ganado
        if(checkGameWon(userCombi, master)){
            changeInfoMessage("¡Has ganado!");
            return;
        }
        // Si el usuario no ha ganado, comprueba si se ha quedado sin intentos
        else if(checkGameLost()){
            changeInfoMessage("¡Has perdido!");
            printAllColorsResolved()
            return;
        }
           

        deleteCombiText();
        intento++;
        changeInfoMessage("Intentos restantes: " + (10-intento));
    }
    
}

/*Cambia el mensaje hacia el usuario dependiendo del mensaje que se introduce*/
function changeInfoMessage(message){
    let info = document.querySelector("#info");
    info.innerHTML = message;
}

/*Devuelve si el tamaño de la lista no cumple los requisitos*/
function isCombiValid(combi){
    return combi.length === MAX_COMBI_COLORES;
}

/*Borra el texto de la combinación y la combinación actual*/
function deleteCombiText(){
    userCombi.splice(0, userCombi.length);
    let combiText = document.getElementById("combiText");
    combiText.value = "";
}

/* Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function addColor(color) {
    if(userCombi.length < MAX_COMBI_COLORES){
        userCombi.push(color);
    }
    let combiText = document.getElementById("combiText");
    combiText.value = userCombi.join(" - ");

    paintMasterColors();

}


// Comprueba si los colores introducidos se encuentran en la posición correcta o se encuentran en los colores a adivinar
function checkColorsAreRight(guessedColors, colorsToGuess){

    let result = [];
    let copyColorsToGuess = copyArray(colorsToGuess);

    for(let i = 0; i < guessedColors.length; i++){

        if(guessedColors[i] == colorsToGuess[i]){
            result.push("black");
            printColorResolved(i, guessedColors[i]);

        }else if(copyColorsToGuess.includes(guessedColors[i])){
            copyColorsToGuess[copyColorsToGuess.indexOf(guessedColors[i])] = "";
            result.push("white");
        }else{
            result.push("grey");
        }

    }

    return result;
}

// Comprueba si todos los colores se han introducido correctamente
function checkGameWon(guessedColors, colorsToGuess){
    for(let i = 0; i < guessedColors.length; i++){
        if(guessedColors[i] != colorsToGuess[i]){
            return false;
        }
    }
    return true;
}

// Comprueba si el usuario ha perdido
function checkGameLost(){
    return intento === MAX_INTENTOS-1;
}

// Imprime el color resuelto en la posición correcta
function printColorResolved(position, color){
    let masterShowColors = document.querySelector("#master");
    let cercleResult = masterShowColors.querySelectorAll(".w100 .w25 .cel");
    cercleResult[position].style.backgroundColor = color;
}

// Imprime todos los colores resueltos

function printAllColorsResolved(){
    let masterShowColors = document.querySelector("#master");
    let cercleResult = masterShowColors.querySelectorAll(".w100 .w25 .cel");

    for(let i = 0; i < master.length; i++){
        cercleResult[i].style.backgroundColor = master[i];
    }
}

// Copia la array dada y la devuelve
function copyArray(arr){

    let newArray = [];

    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i]);
    }

    return newArray;
}

