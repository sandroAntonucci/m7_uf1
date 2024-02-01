//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const BASE_COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";


//Declaración de variables globales.
const master = [];
const userCombi = [];
var intento = 0;
var aciertos = 0;

/** Template con el código HTML que corresponde a cada fila de juego/intento. */
const ROW_RESULT = `<div class="rowResult${0} w100 flex wrap" id="{0}">
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
</div>`;

function init() {

    //1. Genera el código random del master
    
    generateResult();

    let colorsToGuess = randomColors();

    
    


    //2. Crea todas las filas según el número de intentos.
}


// Pinta los colores de la combinación del master una vez se ha comprobado 

function paintMasterColors(){

    let masterColors = document.querySelectorAll(".celUserCombi");

    for(let i = 0; i < masterColors.length; i++){

        masterColors[i].style.backgroundColor = userCombi[i];

    }

}

// Función que añade las filas de juego al HTML
function generateResult(){
    for(let i = 0; i < MAX_INTENTOS; i++){
        let result = document.getElementById("Result");
        result.innerHTML += ROW_RESULT, i;
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

    paintMasterColors();

}

/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function addColor(color) {
   
    if(userCombi.length < MAX_COMBI_COLORES){
        userCombi.push(color);
    }

    let combiText = document.getElementById("combiText");
    combiText.value = userCombi.join(" - ");
    
}

