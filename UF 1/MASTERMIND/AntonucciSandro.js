const BASE_COLORS = ["azul", "rojo", "verde", "amarillo", "naranja", "rosa", "negro", "blanco"];
//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";

//Declaración de variables globales.
const master = [];
const userCombi = [];
var intento = 0;
var aciertos = 0;

function init() {
    //1. Genera el código random del master

    //2. Crea todas las filas según el número de intentos.
}



function Comprobar() {
}

function añadeColor(color) {
   
}

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
    </div>alis/Mastermind_CODIGO
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
</div>`;

function init(){

    let colorsToGuess = randomColors();
    let guessedColors = ["none"];

    console.log(colorsToGuess);

    while(!checkGameWon(guessedColors,colorsToGuess)){

        do{

            guessedColors = prompt("Introduce 4 colores (azul, rojo, verde, amarillo, naranja, rosa, negro o blanco) separados por una coma y un espacio: ");
            guessedColors = splitColors(guessedColors);
    
        }while(guessedColors.length != 4 || !checkValidColors(guessedColors));
    
        let result = checkColorsAreRight(guessedColors, colorsToGuess);

        console.log(result);
    }   
}

// Comprueba si los colores introducidos se encuentran en la posición correcta o se encuentran en los colores a adivinar
function checkColorsAreRight(guessedColors, colorsToGuess){

    let result = [];
    let copyColorsToGuess = copyArray(colorsToGuess);

    for(let i = 0; i < guessedColors.length; i++){

        if(guessedColors[i] == colorsToGuess[i]){
            result.push("black");
        }else if(copyColorsToGuess.includes(guessedColors[i])){
            copyColorsToGuess[copyColorsToGuess.indexOf(guessedColors[i])] = "";
            result.push("white");
        }else{
            result.push("grey");
        }

    }

    return result;
}

// Copia la array dada y la devuelve
function copyArray(arr){

    let newArray = [];

    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i]);
    }

    return newArray;
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

// Comprueba que los colores de la lista sean válidos
function checkValidColors(colors){
    for(let i of colors){
        if(!BASE_COLORS.includes(i)){
            return false;
        }
    }
    return true;
}

// Separa los colores dados por el usuario en una lista
function splitColors(colors){
    let splittedColors = colors.split(',')
    return splittedColors;
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