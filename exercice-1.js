// Créer une variable tabulaire contenant 8 prénoms masculins
let boys = ["Alain","Jacques","Robert","Paul","Eric","Elias","Stéphane","Arthur"];
// Créer une variable tabulaire contenant 8 prénoms féminins.
let girls = ["Estelle","Mariane","Evelyne","Charlotte","Sandra","Jennifer","Emma","Clémence"];
// Créer une variable tabulaire combinant les éléments ces deux tableaux
let folks = [...girls,...boys];
let lcaseFolks = folks.map( item => item.toLowerCase() );
console.log(lcaseFolks);
console.log("Nombre commençant par e:", 
                folks.reduce( (acc,curr) => acc + (/^e/i.test(curr)?1:0) ,0) 
            );

// Grâce à la méthode filter et à une fonction de rappel, stocker dans 
// une 4e variable tabulaire tous les prénoms commençant par 'e' 
// (de façon insensible à la casse)
let eFolks = folks.filter( item => /^e/i.test(item) );
console.log(eFolks);

// Vérifier si Eric fait partie de ces valeurs.
console.log(eFolks.find( item => item.toLowerCase() === 'eric'));


