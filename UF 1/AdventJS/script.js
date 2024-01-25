function init(){

    console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]));
    console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'));

}

function findFirstRepeated(gifts) {  
    let firstRepeatedIndex = gifts.length;
    let currentRepeated = -1;
  
    for(let i = 0; i < gifts.length; i++){
        if (gifts.indexOf(gifts[i], i + 1) !== -1 && firstRepeatedIndex > gifts.indexOf(gifts[i], i + 1)){
            firstRepeatedIndex = gifts.indexOf(gifts[i], i + 1);
            currentRepeated = gifts[i];
        }
    }
  
    return currentRepeated;
}

function manufacture(gifts, materials) {
    
    let canBuild = true;
    let builtGifts = [];

    for(let gift of gifts){

        for(let material of gift){
            if(!materials.includes(material)){
                canBuild = false;
            }
        }

        if(canBuild){
            builtGifts.push(gift);
        }

        canBuild = true;
    }

    return builtGifts;
}

function findNaughtyStep(original, modified) {
  
    for(let i in modified){

        if(original[i] !== modified[i]){
            return modified[i];
        }

    }

    return '';
    
}

function findNaughtyStep(original, modified) {
    
    if(original.length > modified.length){
      for(let i in original){
        if(original[i] !== modified[i]){
            return original[i];
        }
    }
    }

    else{
      for(let i in modified){

        if(original[i] !== modified[i]){
            return modified[i];
        }

    }
    }
    
    return '';    
}