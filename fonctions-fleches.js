// Ancienne syntaxe
function nomFonction(param1,param2){
    console.log(this);
    return param1 + param2;
}

const nomFonction2 = function(param1,param2){
    // ...
    return param1 + param2;
};

// ES6 : Syntaxe Flèche
const nomFonction3 = (param1,param2) => {
    console.log(this);
    return param1 + param2;
}

// ES6 : Syntaxe Flèche racourcie
const nomFonction4 = (param1,param2) => param1 + param2;

// ES6 : Syntaxe Flèche, un seul paramètre
const nomFonction5 = param1 => param1 * param1;

// ES6 : Syntaxe Flèche, retournant un objet anonyme
const nomFonction6 = param1 => ({nom: param1});

console.log(nomFonction(1,2));
console.log(nomFonction3(1,2));

