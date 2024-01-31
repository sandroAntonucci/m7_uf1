function init(){

    appendAnswer("Exercici 1", ["a", "b", "c"], CheckEveryItemIsString(["a", "b", "c"]));
    appendAnswer("Exercici 1", ["a", 1, "c"], CheckEveryItemIsString(["a", 1, "c"]));
    appendAnswer("Exercici 2", [2, 4, 6], CheckEveryItemIsEven([2, 4, 6]));
    appendAnswer("Exercici 2", [2, 4, 5], CheckEveryItemIsEven([2, 4, 5]));
    appendAnswer("Exercici 3", ["a", "b", "c"], CheckElementLengthGreaterThanTwo(["a", "b", "c"]));
    appendAnswer("Exercici 3", ["a", "bca", "c"], CheckElementLengthGreaterThanTwo(["a", "bca", "c"]));
    appendAnswer("Exercici 4", [1, 3, 5], CheckOneItemIsEven([1, 3, 5]));
    appendAnswer("Exercici 4", [1, 3, 6], CheckOneItemIsEven([1, 3, 6]));
    appendAnswer("Exercici 5", ["a", "b", "c"], ItemsLength(["a", "b", "c"]));
    appendAnswer("Exercici 5", ["a", "bc", "c"], ItemsLength(["a", "bc", "c"]));
    appendAnswer("Exercici 6", [1, 2, 3], MultiplicateItems([1, 2, 3], 2));
    appendAnswer("Exercici 6", [1, 2, 3], MultiplicateItems([1, 2, 3], 3));
    appendAnswer("Exercici 7", ["a", "b", "c"], ElementsStartingWithZ(["a", "b", "c"]));
    appendAnswer("Exercici 7", ["a", "z", "c"], ElementsStartingWithZ(["a", "z", "c"]));
    appendAnswer("Exercici 8", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ElementsMultipleOfFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    appendAnswer("Exercici 8", [1, 2, 3, 4, 6, 7, 8, 9, 10], ElementsMultipleOfFive([1, 2, 3, 4, 6, 7, 8, 9, 10]));
    appendAnswer("Exercici 9", ["a", "abcdef", "b", "c"], FirstItemGreaterThanFive(["a", "abcdef", "b", "c"]));
    appendAnswer("Exercici 10", ["pan", "b", "c", "patata"], LastItemStartingWithP(["pan", "b", "c", "patata"]));
    appendAnswer("Exercici 11", ["t", "b", "c", "patata"], FirstItemStartingWithT(["t", "b", "c", "patata"]));
    appendAnswer("Exercici 11", ["a", "b", "c", "patata"], FirstItemStartingWithT(["a", "b", "c", "patata"]));
    appendAnswer("Exercici 12", [1, 3, 5, 7, 9], LastEvenItem([1, 3, 5, 7, 9]));
    appendAnswer("Exercici 12", [1, 3, 5, 7, 8], LastEvenItem([1, 3, 5, 7, 8]));
    appendAnswer("Exercici 13", [1, 2, 3, 4, 5], ItemSum([1, 2, 3, 4, 5]));
    appendAnswer("Exercici 13", [1, 2, 3, 4, 6], ItemSum([1, 2, 3, 4, 6]));
    appendAnswer("Exercici 14", [1, 2, 3, 4, 5], ItemSubstraction([1, 2, 3, 4, 5]));
    appendAnswer("Exercici 15", [1, 2, 3, 4, 5], ItemSubstractionReverse([1, 2, 3, 4, 5]));
    appendAnswer("Exercici 15", [1, 2, 3, 4, 6], ItemSubstractionReverse([1, 2, 3, 4, 6]));
    
}

function appendAnswer(problem, arr,answer){

    let problemaActual = document.getElementById("output");
    let mensaje = document.createElement("p");
    let solucion = document.createTextNode(problem + " // Array: " + arr + " // Solució: "  + answer);
    mensaje.appendChild(solucion);
    problemaActual.appendChild(mensaje);
}

function CheckEveryItemIsString(arr){
    for(let element of arr){
        if(typeof element != "string"){ return false };
    }

    return true;
}

function CheckEveryItemIsEven(arr){
    for(let element of arr){
        if(element % 2 != 0){ return false };
    }

    return true;
}

function CheckElementLengthGreaterThanTwo(arr){

    for(let element of arr){
        if(element.length > 2){ return true };
    }

    return false;
}

function CheckOneItemIsEven(arr){
    for(let element of arr){
        if(element % 2 == 0){ return true };
    }

    return false;
}

function ItemsLength(arr){

    let result = [];

    for(let element of arr){
        result.push(element.length);
    }

    return result;
}

function MultiplicateItems(arr, times){

    let result = [];

    for(let element of arr){
        result.push(element * times);
    }

    return result;
}

function ElementsStartingWithZ(arr){

    let result = [];

    for(let element of arr){
        if(element[0].toLowerCase() == "z"){ result.push(element) };
    }

    return result;
}

function ElementsMultipleOfFive(arr){

    let result = [];

    for(let element of arr){
        if(element % 5 == 0){ result.push(element) };
    }

    return result;
}

function FirstItemGreaterThanFive(arr){
    
    for(let element of arr){
        if(element.length >= 5){ return element };
    }

    return false;
}

function LastItemStartingWithP(arr){

    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i][0].toLowerCase() == "p"){ return arr[i] };
    }

    return false;
}

function FirstItemStartingWithT(arr){
    
    for(let element of arr){
        if(element[0].toLowerCase() == "t"){ return element };
    }

    return false;
}

function LastEvenItem(arr){
    
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] % 2 == 0){ return arr[i] };
    }

    return false;
}

function ItemSum(arr){
    
    let result = 0;

    for(let element of arr){
        result += element;
    }

    return result;
}

function ItemSubstraction(arr){
        
    let result = arr[0];

    for(let element of arr){
        result -= element;
    }

    return result;
}

function ItemSubstractionReverse(arr){

    let result = arr[arr.length - 1];

    for(let i = arr.length - 2; i >= 0; i--){
        result -= arr[i];
    }

    return result;

}
