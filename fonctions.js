'use strict';

// Valeurs par défaut pour les arguments
function checkNames(names, strict = false){
    console.log('names:',names);
    console.log('strict:',strict);
}

let users = ['Toto','Titi','Tutu'];
checkNames(users);
checkNames(users,true);
checkNames(["a","b","c"],"foo");
checkNames(["a","b","c"],undefined);


// Méthodologie de "nommage des arguments"
function argumentsNommes({nom = "",prenom = "",age = 0} = {}){
    console.log("nom:",nom);
    console.log("prenom:",prenom);
    console.log("age:",age);
    console.log(arguments);
}

argumentsNommes({prenom:"Eric",age:32,nom:"Guyader"});
argumentsNommes({age:32,nom:"Guyader"});
argumentsNommes({prenom:"Eric",age:32,nom:undefined});
argumentsNommes({profession:"formateur"});


// A l'appel, passage d'arguments par décomposition d'un tableau
let phrase = "Je vois quatre voitures noires par la fenêtre";
let parametresExtrait = [5,6];
console.log(phrase.substr(...parametresExtrait));

// A la définition de la fonction, composition d'un tableau à partir des 
// valeurs supplémentaires reçues.
function extraParams(par1,...extra){
    console.log("par1:",par1);
    console.log("extra:",extra);
}

extraParams(1);
extraParams(1,2);
extraParams(1,2,3,4);

