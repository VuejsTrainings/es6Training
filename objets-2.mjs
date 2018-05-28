import {ecartDatesEnAnnees as nbAnnees} from './modules-fonctions';

// Moyens historiques de créer des objets en JS
//  1- objet anonyme
let quelqun = {
    nom:"Dupont",
    prenom:"Martine",
    dateNaissance: new Date('1942-05-04'),
    getAge(){
        return nbAnnees(new Date(),this.dateNaissance);
    }
};

console.log(quelqun.getAge());

// 2- via une fonction
function Personne({nom,prenom,dateNaissance} = {}){
    let options = arguments[0];
    let defaultOptions = {nom:"", prenom:""};
    Object.assign(this,defaultOptions,options);
    this.dateNaissance = new Date(this.dateNaissance);

    Personne.prototype.age = function(){
        if(this.dateNaissance instanceof Date) {
            let now = new Date();
            return Math.floor(
                    (now.getTime()-this.dateNaissance.getTime())
                        /
                    (365.25*24*3600000)
                );
        }else{
            return NaN;
        }
    };
}

let quelqunAutre = new Personne({nom:"Berger",prenom:"Alain",dateNaissance:'1943-10-13'});
console.log(quelqunAutre.age());
console.log(Personne.prototype);