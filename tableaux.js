'use strict';

let unTableau = [48,98,NaN];
let unAutreTableau = [1,2,3,15,22,38,[75,28]];

// Parcourir les valeurs d'un tableau
for(let i=0; i < unTableau.length; i++){
    console.log(`${i} vaut ${unTableau[i]}`);
}

unAutreTableau.forEach( (v,i) => console.log(`${i} vaut ${v}`) );

// ES6 : for...of
for(let v of unAutreTableau){
    console.log(v);
}

// ES6 : Méthode find
console.log('Méthode find:');
console.log('-------------');
// let premierPair = unAutreTableau.find(function (item){
//     return item % 2 === 0;
// });
let premierPair = unAutreTableau.find( item => item % 2 === 0 )
console.log(premierPair);

// ES6 : décomposition
// Ajouter les valeurs d'un tableau à fin d'un autre tableau
unTableau.push(...unAutreTableau);
console.log("Après décomposition et ajout");
console.log("----------------------------");
console.log(unTableau);

let unTroisiemeTableau = ["Toto",'Tata',...unTableau];
console.log(unTroisiemeTableau);

// ES2016 : Array.includes
//  Méthode includes
console.log("Array.includes");
console.log("--------------");
console.log("97:",unTableau.includes(97));
console.log("98:",unTableau.includes(98));
console.log("NaN:",unTableau.includes(NaN));


// Autres méthodes de tableau utiles (non ES6)
//      .forEach( action )
//      .filter( predicat )
//      .map( transformation ) 
//      .reduce( transformation )  où transformation attend 2 arguments (acc,current) et retourne la prochaine valeur de acc.

