function init(){

    console.log(concatenarNombres("Pepito", "Perez", "Per", "a"));
    
}

function appendAnswer(problem, arr,answer){

    let problemaActual = document.getElementById("output");
    let mensaje = document.createElement("p");
    let solucion = document.createTextNode(problem + " // Array: " + arr + " // Solució: "  + answer);
    mensaje.appendChild(solucion);
    problemaActual.appendChild(mensaje);
}

function saludar(nombre, saludo="Hola"){
    return saludo + " " + nombre;
}

function calcular(num1, num2, operación="suma"){
    let resultado = 0;
    switch(operación){
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            resultado = num1 / num2;
            break;
    }
    return resultado;
}

function calcularPromedio(num1, num2, num3){
    let resultado = (num1 + num2 + num3) / 3;
    return resultado;
}

function concatenarNombres(nombre1, nombre2, nombre3){
    let resultado = nombre1 + " " + nombre2 + " " + nombre3;
    return resultado;
}