class Personne{
    constructor({nom,prenom,civilite} = {}){
        let options = arguments[0];
        let defaultValues = {nom:'',prenom:'',civilite:''};
        Object.assign(this,defaultValues,options)
    }

    get nomComplet(){
        let nomMaj = this.nom.toUpperCase();
        return `${this.prenom} ${nomMaj}`;
    }
}

export {Personne};