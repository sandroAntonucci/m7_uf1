function init(){

    let firstLipsumV1 = document.querySelector("#lipsum p");
    console.log(firstLipsumV1);
    
    let secondLipsumV1 = document.querySelector("#lipsum p+p");
    console.log(secondLipsumV1);

    let lastElement = document.querySelectorAll("ul li");
    let lastParragraph= lastElement[lastElement.length-1];
    console.log(lastParragraph)

    let labelElement = document.querySelectorAll("label");
    let result;

    for(let i = 0; i < labelElement.length; i++){

        if(labelElement[i].textContent.includes("Escoge el sexo:")){
            result = labelElement[i];
        }
    }
    
    console.log(result);
}