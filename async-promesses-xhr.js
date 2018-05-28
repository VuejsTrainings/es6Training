// Via des promesses et XMLHttpRequest
// obtenir des données auprès d'une API REST
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const RADICAL_URL = 'https://scc.ddo.net/ouranos2webapi/api/v1/acteur';
const SUFFIXE_URL = '?p=4&l=3';

// Appel XHR "promisifié"
const xhrPromise = (url,methode) => {
    return new Promise( (resolve,reject) => { 
        let xhr = new XMLHttpRequest();
        xhr.open(methode,url);
        xhr.addEventListener( 'readystatechange', () => {
            if(xhr.readyState === 4 && xhr.status === 200){
                // Promesse tenue, renvoyer les acteurs
                resolve( JSON.parse(xhr.responseText) );
            }else if(xhr.readyState === 4){
                // Oups... ça n'a pas marché...
                reject( 'Erreur :' + xhr.status + ': ' +  xhr.statusText );
            }
        });
        xhr.send();
    });
};

// Première requête: une liste des acteurs
const getActeurs = async () => {
    return await xhrPromise(RADICAL_URL + SUFFIXE_URL,'get');
};

// async function getActeurs(){
//     return await xhrPromise(RADICAL_URL + SUFFIXE_URL,'get');
// }

// Promesse individuelle pour obtenir les infos d'un acteur à partir de son ID
let getInfosActeur = id => {
    let url = `${RADICAL_URL}/${id}`;
    return xhrPromise(url,'get');
};

// Promesse globale pour tous les acteurs transmis
let getInfosActeurs = acteurs => {
    let acteursArray = acteurs.Acteurs; 
    let promessesActeurs = acteursArray.map( item => getInfosActeur(item.id) );
    return Promise.all(promessesActeurs);
};

// Transformation des acteurs en vue de leur affichage 
let displayActeurs = infosActeurs => {
    let acteursAbreges = infosActeurs.map( acteur => ({nom:acteur.Acteur.Prenom + ' ' + acteur.Acteur.Nom }) );
    console.log(acteursAbreges);
}

// Chaînage des opérations
getActeurs()
    .then( acteurs => getInfosActeurs(acteurs) )
    .then( infos => displayActeurs(infos) )
    .catch( reason => console.log(reason) );

