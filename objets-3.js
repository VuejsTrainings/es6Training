class Polygone {
    constructor(cotes = [], nom  = ''){
        this.cotes = cotes;
        this.nom = nom;
    }

    get perimetre(){
        return this.cotes.reduce( (acc,curr) => acc + curr ,0 );
    }
    
    get nombreCotes(){
         return this.cotes.length;
    }

    set nom(nom) {
        this._nom = nom.toUpperCase();
    }

    get nom() {
        return this._nom;
    }

    ajouterCote(taille){
        this.cotes.push(taille);
    }

    supprimerCote(index){
        if(isNaN(index) || index < 0 || index >= this.cotes.length){
            throw "Index du côté invalide!";
        }
        this.cotes.splice(index,1);
    }

    static methodeStatique(){
        return "OK";
    }
}

class Rectangle extends Polygone{
    constructor(longueur,largeur){
        super([longueur,largeur,longueur,largeur]);
        this.longueur = longueur;
        this.largeur = largeur;
    }

    get surface(){
        return this.longueur * this.largeur;
    }

    ajouterCote(){
        throw "Pas possible sur un rectangle!";
    }

    supprimerCote(){
        throw "Pas possible sur un rectangle!";
    }
}

let monPentagone = new Polygone([2,1.2,5,3,6.5],"pentagone");
console.log(monPentagone.nombreCotes);
console.log(monPentagone.perimetre);
monPentagone.ajouterCote(8);
console.log(monPentagone.nombreCotes);
console.log(monPentagone.perimetre);
monPentagone.supprimerCote(0);
console.log(monPentagone.nombreCotes);
console.log(monPentagone.perimetre);
console.log(monPentagone.nom);

monPentagone.aire = 15;
console.log(monPentagone);

let monRectangle = new Rectangle(15,12);
console.log(monRectangle);
console.log(monRectangle.nombreCotes);
console.log(monRectangle.perimetre);
console.log(monRectangle.surface);

console.log(Polygone.methodeStatique() );
console.log(monPentagone.methodeStatique() );