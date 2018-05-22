// ===============================================================
// Exercice de chauffe
// Pour exécuter ces fonction il faut les appellés
// ===============================================================

// Retourne le nombre maximale d'un tableau
function my_max(tab){
    return Math.max.apply(Math, tab)
}

// Compte le nombre de voyelle dans une chaine
function vowel_count(mots){
    let voyelle = new Array("a","à","â","e","ï","î","i","o","u","ù","û","é","ë","ê","y");
    let compteur=0;
    let caractere;
    mots = mots.toLowerCase();
    for(let i=0; i<mots.length; i++){
        for(let j=0; j<voyelle.length; j++){
            //recuperer le caractère
            caractere = mots.charAt(i);
            if (voyelle[j]==caractere) { 
                compteur ++;
            }
        }
    }
    return compteur;
}

// Fonction permettant de renverser une chaine
function reverse(str) {
    return str.split('').reverse().join(''); // La fonction reverse ici est une fonction native de js pour un array
}