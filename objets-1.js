let nom = "Durand";
let prenom = "Pierre";
let age = 52;
let user = {nom,prenom,age};
// revient au même que
//let user = {nom:nom,prenom:prenom,age:age};
console.log(user);



let user2 = {"first":"John","last":"Smith","gender":"M"};
let {last,gender} = user2;
console.log("last:",last);
console.log("gender:",gender);



let user3 = {
    nom:"dupont",
    prenom:"paul",
    getNomComplet(){
        return this.prenom + ' ' + this.nom.toUpperCase();
    }
};

console.log( user3.getNomComplet() );

let car1={marque:"Peugeot",modele:"3008"};
let car2={couleur:"bleu",kilometrage:58250,repeindre(couleur){this.couleur = couleur}};
let voitureFinie = Object.assign({},car1,{modele:"2008"},car2);
console.log(voitureFinie);
voitureFinie.repeindre('rouge');
console.log(voitureFinie);
