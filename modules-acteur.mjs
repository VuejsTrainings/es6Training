import {Personne} from './modules-personne.mjs';

export default class Acteur extends Personne{
    constructor({nom = '', prenom ='', civilite = '',
                email = '', profil = '', login = '', password ='', manager = null } = {}){
        let options = arguments[0];
        //let {nom,prenom,civilite} = options;
        super({nom,prenom,civilite});
        Object.assign(this,options);
        if(! (this.manager instanceof Acteur) ){
            this.manager = null;
        }
        this.logged = false;
    }

    logIn(){
        if(this.login !== '' && this.password !== '' && 
                this.login === this.password ){
            this.logged = true;
        }
    }

    logOut(){
        this.logged = false;
    }

    get estLogge(){
        return this.logged;
    }
}