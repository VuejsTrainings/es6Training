import Acteur from './modules-acteur.mjs';


let metteurEnScene = {prenom:"Steven",nom:"Spielberg",civilite:"M.",
                        email:"sspielberg@e-t.com",login:"steve",password:"steve"};
let unMetteurEnScene = new Acteur(metteurEnScene);

let acteur = {prenom:'John',nom:"Wayne",civilite:"M.",
                        email:"j.wayne@mgm.com",login:"jway",password:"jway",
                        manager: unMetteurEnScene};
let unActeur = new Acteur(acteur);

console.log(`${unActeur.nomComplet} est-il loggé: ${unActeur.estLogge}`);
unActeur.logIn();
console.log(`${unActeur.nomComplet} est-il loggé: ${unActeur.estLogge}`);
unActeur.logOut();
console.log(`${unActeur.nomComplet} est-il loggé: ${unActeur.estLogge}`);
console.log(`${unActeur.nomComplet} est subordonné de ${unActeur.manager.nomComplet}`)