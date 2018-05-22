// ====================================================================================
// J'ai utilisé ces fonctions pour m'échauffer, vous pouvez le testé si vous le voulez
// J'ai utilisé d'autre méthodes pour faire la machine à calculler
// ====================================================================================

// Fonction qui calcule la somme
function sum(tab) {
    sum = 0;
    tab.forEach(element => {
        sum += element;
    });
    return sum;
}

// Fonction qui calcule la multiplication
function multiply(tab) {
    result = 1;
    tab.forEach(element => {
        result *= element;
    });
    return result;
}

// Fonction qui calcule la division
function divide(x, y) {
    if(x && y > 0){
        return x / y;
    }else{
        return "On ne peux pas faire une division avec 0";
    }
}

// Fonction qui calcule la soustraction
function substract(x, y) {
    return x - y;
}

function clear(id){
    obj = document.getElementById(id);
    obj.value = "";
    return obj;
}